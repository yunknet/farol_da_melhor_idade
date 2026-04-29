import './style.css';
import { renderHome } from './src/pages/home.js';
import { renderSobre } from './src/pages/sobre.js';
import { renderNecessidades } from './src/pages/necessidades.js';
import { renderVoluntarios } from './src/pages/voluntarios.js';
import { renderAgendamento } from './src/pages/agendamento.js';
import { renderContato } from './src/pages/contato.js';
import { renderPrivacidade } from './src/pages/privacidade.js';

const pages = {
  home: renderHome,
  sobre: renderSobre,
  necessidades: renderNecessidades,
  voluntarios: renderVoluntarios,
  agendamento: renderAgendamento,
  contato: renderContato,
  privacidade: renderPrivacidade,
  termos: renderPrivacidade
};

let currentPage = 'home';

window.navigateTo = function(page) {
  if (typeof event !== 'undefined' && event) event.preventDefault();
  currentPage = page;
  const app = document.getElementById('app');
  app.innerHTML = '';
  
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  const render = pages[page] || pages.home;
  app.innerHTML = `<div class="page-enter">${render()}</div>`;

  // Close mobile nav
  document.getElementById('main-nav').classList.remove('open');
  document.querySelector('.mobile-toggle').classList.remove('active');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Initialize page-specific JS
  setTimeout(() => initPage(page), 100);
};

function initPage(page) {
  if (page === 'agendamento') initCalendar();
  if (page === 'voluntarios') initVolunteerForm();
  if (page === 'contato') initContactForm();
  if (page === 'necessidades') initDonationButtons();
}

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// ===== MOBILE MENU =====
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
  document.querySelector('.mobile-toggle').classList.toggle('active');
});

// ===== BACK TO TOP =====
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== COOKIE BANNER =====
if (!localStorage.getItem('cookieConsent')) {
  document.getElementById('cookie-banner').style.display = 'block';
}
document.getElementById('cookie-accept')?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
});
document.getElementById('cookie-reject')?.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'rejected');
  document.getElementById('cookie-banner').style.display = 'none';
});

// ===== TOAST =====
window.showToast = function(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
};

// ===== CALENDAR =====
function initCalendar() {
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let selectedDate = null;
  let selectedTime = null;

  function render() {
    const calTitle = document.getElementById('cal-title');
    const calGrid = document.getElementById('cal-grid');
    if (!calTitle || !calGrid) return;
    
    const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    calTitle.textContent = `${months[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

    let html = days.map(d => `<div class="calendar-day-name">${d}</div>`).join('');
    for (let i = 0; i < firstDay; i++) html += '<div class="calendar-day empty"></div>';
    
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentYear, currentMonth, d);
      const isToday = date.toDateString() === today.toDateString();
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isWeekend = date.getDay() === 0;
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      
      let cls = 'calendar-day';
      if (isToday) cls += ' today';
      if (isPast || isWeekend) cls += ' disabled';
      if (isSelected) cls += ' selected';
      
      html += `<div class="${cls}" data-day="${d}">${d}</div>`;
    }
    calGrid.innerHTML = html;

    calGrid.querySelectorAll('.calendar-day:not(.disabled):not(.empty)').forEach(el => {
      el.addEventListener('click', () => {
        selectedDate = new Date(currentYear, currentMonth, parseInt(el.dataset.day));
        selectedTime = null;
        render();
        renderTimeSlots();
      });
    });
  }

  function renderTimeSlots() {
    const slotsEl = document.getElementById('time-slots');
    if (!slotsEl || !selectedDate) return;
    const slots = ['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
    const unavail = [Math.floor(Math.random()*8), Math.floor(Math.random()*8)];
    
    slotsEl.innerHTML = '<h4 style="grid-column:1/-1;margin-bottom:8px;">Horários disponíveis:</h4>' +
      slots.map((s, i) => {
        const isUnavail = unavail.includes(i);
        return `<div class="time-slot${isUnavail ? ' unavailable' : ''}${selectedTime === s ? ' selected' : ''}" data-time="${s}">${s}</div>`;
      }).join('');
    
    slotsEl.querySelectorAll('.time-slot:not(.unavailable)').forEach(el => {
      el.addEventListener('click', () => {
        selectedTime = el.dataset.time;
        renderTimeSlots();
      });
    });
  }

  document.getElementById('cal-prev')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    render();
  });
  document.getElementById('cal-next')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    render();
  });
  
  const schedForm = document.getElementById('schedule-form');
  schedForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      showToast('Selecione uma data e horário.', 'error');
      return;
    }
    const name = document.getElementById('visitor-name')?.value;
    const phone = document.getElementById('visitor-phone')?.value;
    if (!name || !phone) {
      showToast('Preencha todos os campos obrigatórios.', 'error');
      return;
    }
    const dateStr = selectedDate.toLocaleDateString('pt-BR');
    showToast(`Visita agendada para ${dateStr} às ${selectedTime}! Você receberá confirmação por e-mail.`);
    schedForm.reset();
    selectedDate = null;
    selectedTime = null;
    render();
    document.getElementById('time-slots').innerHTML = '';
  });

  render();
}

// ===== VOLUNTEER FORM =====
function initVolunteerForm() {
  document.getElementById('volunteer-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('vol-name')?.value;
    if (!name) { showToast('Preencha seu nome.', 'error'); return; }
    showToast(`Obrigado, ${name}! Seu cadastro como voluntário foi recebido com sucesso!`);
    e.target.reset();
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Mensagem enviada com sucesso! Retornaremos em breve.');
    e.target.reset();
  });
}

// ===== DONATION BUTTONS =====
function initDonationButtons() {
  document.querySelectorAll('.donate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item;
      const msg = encodeURIComponent(`Olá! Gostaria de doar: ${item}. Como posso fazer a entrega?`);
      window.open(`https://wa.me/553837410000?text=${msg}`, '_blank');
    });
  });
}

// ===== INIT =====
navigateTo('home');

export function renderAgendamento() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-calendar-alt"></i> Agendamento</div>
        <h2>Agende sua Visita</h2>
        <p>Familiares e amigos podem agendar visitas de forma prática. Selecione a data e horário desejados.</p>
      </div>

      <div class="calendar-wrapper">
        <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:36px;align-items:flex-start" class="schedule-layout">
          <div>
            <div class="calendar-header">
              <div class="calendar-nav"><button id="cal-prev"><i class="fas fa-chevron-left"></i></button></div>
              <h3 id="cal-title">Abril 2026</h3>
              <div class="calendar-nav"><button id="cal-next"><i class="fas fa-chevron-right"></i></button></div>
            </div>
            <div class="calendar-grid" id="cal-grid"></div>
            <div id="time-slots" class="time-slots" style="margin-top:24px"></div>

            <div style="margin-top:20px;padding:16px;background:var(--warm-light);border-radius:var(--radius);font-size:.85rem;color:var(--text-light)">
              <p><i class="fas fa-info-circle" style="color:var(--primary)"></i> <strong>Regras de Visita:</strong></p>
              <ul style="margin-top:8px;padding-left:20px;list-style:disc">
                <li>Máximo de 3 visitantes por horário</li>
                <li>Visitas de segunda a sábado</li>
                <li>Duração máxima: 1 hora por visita</li>
                <li>Apresentar documento com foto na entrada</li>
              </ul>
            </div>
          </div>

          <div class="form-container">
            <h3 style="margin-bottom:20px"><i class="fas fa-user-edit"></i> Dados do Visitante</h3>
            <form id="schedule-form">
              <div class="form-group">
                <label for="visitor-name">Nome Completo *</label>
                <input type="text" id="visitor-name" placeholder="Seu nome" required />
              </div>
              <div class="form-group">
                <label for="visitor-phone">Telefone *</label>
                <input type="tel" id="visitor-phone" placeholder="(38) 99999-9999" required />
              </div>
              <div class="form-group">
                <label for="visitor-email">E-mail</label>
                <input type="email" id="visitor-email" placeholder="seu@email.com" />
              </div>
              <div class="form-group">
                <label for="visitor-relation">Parentesco com o Residente</label>
                <select id="visitor-relation">
                  <option value="">Selecione</option>
                  <option>Filho(a)</option>
                  <option>Neto(a)</option>
                  <option>Irmão(ã)</option>
                  <option>Sobrinho(a)</option>
                  <option>Amigo(a)</option>
                  <option>Outro</option>
                </select>
              </div>
              <div class="form-group">
                <label for="visitor-resident">Nome do Residente</label>
                <input type="text" id="visitor-resident" placeholder="Nome do idoso que deseja visitar" />
              </div>
              <div class="form-group">
                <label for="visitor-qty">Quantidade de Visitantes</label>
                <select id="visitor-qty">
                  <option>1 pessoa</option>
                  <option>2 pessoas</option>
                  <option>3 pessoas</option>
                </select>
              </div>
              <div class="form-check">
                <input type="checkbox" id="sched-lgpd" required />
                <label for="sched-lgpd" style="font-weight:400;font-size:.85rem;color:var(--text-light)">Concordo com a <a href="#" onclick="navigateTo('privacidade')" style="color:var(--primary);text-decoration:underline">Política de Privacidade</a> (LGPD).</label>
              </div>
              <br/>
              <button type="submit" class="btn btn-secondary btn-lg" style="width:100%;justify-content:center"><i class="fas fa-calendar-check"></i> Confirmar Agendamento</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

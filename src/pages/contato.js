export function renderContato() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-envelope"></i> Contato</div>
        <h2>Entre em Contato</h2>
        <p>Estamos à disposição para tirar suas dúvidas, receber sugestões ou agendar uma visita.</p>
      </div>
      <div class="contact-grid">
        <div>
          <div class="contact-info-cards">
            <div class="contact-info-card">
              <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
              <div><h4>Endereço</h4><p>Rua Camilo dos Santos, Bairro Santos Dumont<br/>Pirapora/MG – CEP 39274-168</p></div>
            </div>
            <div class="contact-info-card">
              <div class="icon"><i class="fas fa-phone"></i></div>
              <div><h4>Telefone</h4><p>(38) 3741-1978</p></div>
            </div>
            <div class="contact-info-card">
              <div class="icon"><i class="fab fa-whatsapp"></i></div>
              <div><h4>WhatsApp</h4><p>(38) 3741-1978</p></div>
            </div>
            <div class="contact-info-card">
              <div class="icon"><i class="fas fa-envelope"></i></div>
              <div><h4>E-mail</h4><p>laridosos.pirapora@hotmail.com</p></div>
            </div>
            <div class="contact-info-card">
              <div class="icon"><i class="fas fa-clock"></i></div>
              <div><h4>Horário de Funcionamento</h4><p>Segunda a Sexta: 8h às 17h<br/>Sábado: 8h às 12h</p></div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <h3 style="margin-bottom:20px"><i class="fas fa-paper-plane"></i> Envie sua Mensagem</h3>
          <form id="contact-form">
            <div class="form-group">
              <label for="ct-name">Nome *</label>
              <input type="text" id="ct-name" placeholder="Seu nome" required />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="ct-email">E-mail *</label>
                <input type="email" id="ct-email" placeholder="seu@email.com" required />
              </div>
              <div class="form-group">
                <label for="ct-phone">Telefone</label>
                <input type="tel" id="ct-phone" placeholder="(38) 99999-9999" />
              </div>
            </div>
            <div class="form-group">
              <label for="ct-subject">Assunto</label>
              <select id="ct-subject">
                <option value="">Selecione</option>
                <option>Informações sobre doações</option>
                <option>Voluntariado</option>
                <option>Agendamento de visita</option>
                <option>Parcerias</option>
                <option>Outros</option>
              </select>
            </div>
            <div class="form-group">
              <label for="ct-msg">Mensagem *</label>
              <textarea id="ct-msg" placeholder="Escreva sua mensagem..." required></textarea>
            </div>
            <button type="submit" class="btn btn-secondary btn-lg" style="width:100%;justify-content:center"><i class="fas fa-paper-plane"></i> Enviar Mensagem</button>
          </form>
        </div>
      </div>

      <div style="margin-top:48px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg)">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15239.3!2d-44.94!3d-17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa452!2sPirapora%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1" width="100%" height="350" style="border:0;display:block" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  </section>`;
}

export function renderVoluntarios() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-users"></i> Voluntariado</div>
        <h2>Seja um Voluntário</h2>
        <p>Doe seu tempo e suas habilidades. Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:flex-start" class="vol-layout">
        <div>
          <img src="/images/volunteers.png" alt="Voluntários" style="border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);margin-bottom:24px" />
          <h3 style="margin-bottom:12px">Por que ser voluntário?</h3>
          <ul style="color:var(--text-light);display:flex;flex-direction:column;gap:12px">
            <li style="display:flex;align-items:center;gap:10px"><i class="fas fa-heart" style="color:var(--danger)"></i> Faça a diferença na vida de quem precisa</li>
            <li style="display:flex;align-items:center;gap:10px"><i class="fas fa-smile" style="color:var(--accent)"></i> Experiência enriquecedora e gratificante</li>
            <li style="display:flex;align-items:center;gap:10px"><i class="fas fa-certificate" style="color:var(--primary)"></i> Certificado de horas complementares</li>
            <li style="display:flex;align-items:center;gap:10px"><i class="fas fa-users" style="color:var(--success)"></i> Conexão com uma comunidade solidária</li>
          </ul>
        </div>
        <div class="form-container">
          <h3 style="margin-bottom:20px"><i class="fas fa-clipboard-list"></i> Cadastro de Voluntário</h3>
          <form id="volunteer-form">
            <div class="form-row">
              <div class="form-group">
                <label for="vol-name">Nome Completo *</label>
                <input type="text" id="vol-name" placeholder="Seu nome completo" required />
              </div>
              <div class="form-group">
                <label for="vol-age">Idade *</label>
                <input type="number" id="vol-age" placeholder="Ex: 25" min="16" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="vol-email">E-mail *</label>
                <input type="email" id="vol-email" placeholder="seu@email.com" required />
              </div>
              <div class="form-group">
                <label for="vol-phone">Telefone/WhatsApp *</label>
                <input type="tel" id="vol-phone" placeholder="(38) 99999-9999" required />
              </div>
            </div>
            <div class="form-group">
              <label for="vol-skills">Habilidades</label>
              <select id="vol-skills">
                <option value="">Selecione sua área de atuação</option>
                <option>Saúde (Enfermagem, Fisioterapia, etc.)</option>
                <option>Educação e Recreação</option>
                <option>Música e Artes</option>
                <option>Assistência Social</option>
                <option>Cozinha e Alimentação</option>
                <option>Limpeza e Organização</option>
                <option>Tecnologia</option>
                <option>Outros</option>
              </select>
            </div>
            <div class="form-group">
              <label for="vol-avail">Disponibilidade</label>
              <select id="vol-avail">
                <option value="">Quando pode ajudar?</option>
                <option>Manhãs (8h - 12h)</option>
                <option>Tardes (13h - 17h)</option>
                <option>Finais de semana</option>
                <option>Flexível</option>
              </select>
            </div>
            <div class="form-group">
              <label for="vol-msg">Mensagem (opcional)</label>
              <textarea id="vol-msg" placeholder="Conte um pouco sobre você e por que deseja ser voluntário..."></textarea>
            </div>
            <div class="form-check">
              <input type="checkbox" id="vol-lgpd" required />
              <label for="vol-lgpd" style="font-weight:400;font-size:.85rem;color:var(--text-light)">Concordo com a <a href="#" onclick="navigateTo('privacidade')" style="color:var(--primary);text-decoration:underline">Política de Privacidade</a> e autorizo o uso dos meus dados para fins de voluntariado (LGPD).</label>
            </div>
            <br/>
            <button type="submit" class="btn btn-secondary btn-lg" style="width:100%;justify-content:center"><i class="fas fa-paper-plane"></i> Enviar Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

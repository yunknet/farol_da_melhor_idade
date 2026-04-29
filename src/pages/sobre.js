export function renderSobre() {
  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-landmark"></i> Sobre Nós</div>
        <h2>Conheça o Farol da Melhor Idade</h2>
        <p>Uma instituição dedicada ao cuidado integral dos idosos em Pirapora, MG.</p>
      </div>
      <div class="about-grid">
        <div class="about-image"><img src="/images/about.png" alt="Sobre o Farol da Melhor Idade" /></div>
        <div class="about-text">
          <h2>Nossa Missão</h2>
          <p>O Lar dos Idosos de São Vicente de Paulo (Asilo São Vicente de Paulo) é uma Associação Privada (sem fins lucrativos) e Instituição de Longa Permanência para Idosos (ILPI) que acolhe, cuida e protege pessoas da melhor idade na cidade de Pirapora, Minas Gerais.</p>
          <p>Fundada em 1977 com o propósito de oferecer um ambiente seguro e acolhedor, inscrita no CNPJ 18.890.772/0001-01, nossa instituição conta com profissionais qualificados e dedicados a proporcionar qualidade de vida, dignidade e respeito a cada residente.</p>
          <p>Oferecemos assistência social, médica, nutricional, fisioterapêutica, psicológica, farmacêutica e em terapia ocupacional, contemplando todas as demandas de vida diária.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-hands-helping"></i> Nossos Serviços</div>
        <h2>Cuidado Integral</h2>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon blue"><i class="fas fa-heartbeat"></i></div>
          <h3>Assistência Médica</h3>
          <p>Acompanhamento médico contínuo com equipe de saúde dedicada ao bem-estar dos residentes.</p>
        </div>
        <div class="service-card">
          <div class="service-icon gold"><i class="fas fa-utensils"></i></div>
          <h3>Nutrição Especializada</h3>
          <p>Alimentação balanceada elaborada por nutricionistas, respeitando necessidades especiais.</p>
        </div>
        <div class="service-card">
          <div class="service-icon green"><i class="fas fa-walking"></i></div>
          <h3>Fisioterapia</h3>
          <p>Sessões diárias de fisioterapia para manutenção da mobilidade e qualidade de vida.</p>
        </div>
        <div class="service-card">
          <div class="service-icon blue"><i class="fas fa-brain"></i></div>
          <h3>Apoio Psicológico</h3>
          <p>Acompanhamento psicológico individual e em grupo para saúde mental e emocional.</p>
        </div>
        <div class="service-card">
          <div class="service-icon gold"><i class="fas fa-gamepad"></i></div>
          <h3>Atividades Recreativas</h3>
          <p>Programação cultural e de lazer para manter os idosos ativos e socialmente engajados.</p>
        </div>
        <div class="service-card">
          <div class="service-icon green"><i class="fas fa-shield-alt"></i></div>
          <h3>Segurança 24h</h3>
          <p>Ambiente seguro com monitoramento e equipe de plantão disponível a qualquer momento.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:var(--white);text-align:center">
    <div class="container">
      <h2 style="color:var(--white);margin-bottom:16px">Venha nos conhecer</h2>
      <p style="opacity:.9;max-width:600px;margin:0 auto 28px">Agende uma visita e veja de perto o trabalho que realizamos. Sua presença faz a diferença na vida dos nossos residentes.</p>
      <a href="#" class="btn btn-primary btn-lg" onclick="navigateTo('agendamento')"><i class="fas fa-calendar-alt"></i> Agendar Visita</a>
    </div>
  </section>`;
}

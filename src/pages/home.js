export function renderHome() {
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg">
      <img src="/images/hero-banner.png" alt="Idosos felizes no Farol da Melhor Idade" />
    </div>
    <div class="container hero-content">
      <div class="hero-badge"><i class="fas fa-heart"></i> Pirapora, Minas Gerais</div>
      <h1>Cuidado e <span>dignidade</span> para quem já nos deu tanto</h1>
      <p>O Farol da Melhor Idade é uma instituição de longa permanência dedicada ao bem-estar dos idosos de Pirapora. Ajude-nos a iluminar caminhos com carinho.</p>
      <div class="hero-buttons">
        <a href="#" class="btn btn-primary btn-lg" onclick="navigateTo('necessidades')"><i class="fas fa-hand-holding-heart"></i> Quero Doar</a>
        <a href="#" class="btn btn-outline btn-lg" onclick="navigateTo('voluntarios')"><i class="fas fa-users"></i> Ser Voluntário</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><span class="number">45+</span><span class="label">Idosos acolhidos</span></div>
        <div class="hero-stat"><span class="number">120+</span><span class="label">Voluntários ativos</span></div>
        <div class="hero-stat"><span class="number">15</span><span class="label">Anos de história</span></div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-star"></i> O que fazemos</div>
        <h2>Como você pode ajudar</h2>
        <p>Existem diversas formas de contribuir com o bem-estar dos nossos idosos. Conheça as principais.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" onclick="navigateTo('necessidades')" style="cursor:pointer">
          <div class="service-icon gold"><i class="fas fa-box-open"></i></div>
          <h3>Doe Itens Necessários</h3>
          <p>Veja o que estamos precisando agora e faça sua doação de forma assertiva, garantindo que chegue o que realmente falta.</p>
        </div>
        <div class="service-card" onclick="navigateTo('voluntarios')" style="cursor:pointer">
          <div class="service-icon blue"><i class="fas fa-hands-helping"></i></div>
          <h3>Seja Voluntário</h3>
          <p>Doe seu tempo e habilidades. Cadastre-se para ajudar em atividades recreativas, assistência e companhia.</p>
        </div>
        <div class="service-card" onclick="navigateTo('agendamento')" style="cursor:pointer">
          <div class="service-icon green"><i class="fas fa-calendar-check"></i></div>
          <h3>Agende uma Visita</h3>
          <p>Familiares e amigos podem agendar visitas online de forma prática, respeitando os horários da instituição.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT PREVIEW -->
  <section class="section section-alt">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <img src="/images/about.png" alt="Cuidado com os idosos" />
        </div>
        <div class="about-text">
          <div class="section-label"><i class="fas fa-home"></i> Nossa História</div>
          <h2>Um lar de acolhimento e amor em Pirapora</h2>
          <p>O Farol da Melhor Idade é uma instituição de longa permanência para idosos (ILPI) localizada em Pirapora, Minas Gerais. Nossa missão é oferecer assistência integral aos residentes, proporcionando qualidade de vida com dignidade e respeito.</p>
          <p>Contamos com equipe multidisciplinar incluindo assistência social, médica, nutricional, fisioterapêutica, psicológica e farmacêutica, contemplando todas as demandas da vida diária.</p>
          <div class="about-features">
            <div class="about-feature"><i class="fas fa-check-circle"></i><span>Assistência médica 24h</span></div>
            <div class="about-feature"><i class="fas fa-check-circle"></i><span>Alimentação balanceada</span></div>
            <div class="about-feature"><i class="fas fa-check-circle"></i><span>Atividades recreativas</span></div>
            <div class="about-feature"><i class="fas fa-check-circle"></i><span>Fisioterapia diária</span></div>
          </div>
          <br/>
          <a href="#" class="btn btn-secondary" onclick="navigateTo('sobre')">Saiba Mais <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- URGENT NEEDS PREVIEW -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-exclamation-triangle"></i> Necessidades Urgentes</div>
        <h2>O que mais precisamos agora</h2>
        <p>Estes são os itens com maior urgência no momento. Sua doação faz a diferença!</p>
      </div>
      <div class="needs-grid">
        <div class="need-card">
          <div class="need-card-img">
            <img src="/images/donations.png" alt="Fraldas geriátricas" />
            <span class="need-urgency urgency-alta">Urgente</span>
          </div>
          <div class="need-card-body">
            <h3>Fraldas Geriátricas (G e GG)</h3>
            <div class="need-qty"><i class="fas fa-cubes"></i> Necessário: 200 unidades</div>
            <button class="btn btn-whatsapp donate-btn" data-item="Fraldas Geriátricas G e GG"><i class="fab fa-whatsapp"></i> Quero Doar</button>
          </div>
        </div>
        <div class="need-card">
          <div class="need-card-img">
            <img src="/images/donations.png" alt="Alimentos não perecíveis" />
            <span class="need-urgency urgency-alta">Urgente</span>
          </div>
          <div class="need-card-body">
            <h3>Leite em Pó Integral</h3>
            <div class="need-qty"><i class="fas fa-cubes"></i> Necessário: 50 latas</div>
            <button class="btn btn-whatsapp donate-btn" data-item="Leite em Pó Integral"><i class="fab fa-whatsapp"></i> Quero Doar</button>
          </div>
        </div>
        <div class="need-card">
          <div class="need-card-img">
            <img src="/images/donations.png" alt="Produtos de higiene" />
            <span class="need-urgency urgency-media">Médio</span>
          </div>
          <div class="need-card-body">
            <h3>Sabonetes e Shampoo</h3>
            <div class="need-qty"><i class="fas fa-cubes"></i> Necessário: 80 unidades</div>
            <button class="btn btn-whatsapp donate-btn" data-item="Sabonetes e Shampoo"><i class="fab fa-whatsapp"></i> Quero Doar</button>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:36px">
        <a href="#" class="btn btn-outline-dark btn-lg" onclick="navigateTo('necessidades')">Ver Todas as Necessidades <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section" style="background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);color:var(--white);text-align:center">
    <div class="container">
      <h2 style="color:var(--white);font-size:2.4rem;margin-bottom:16px">Faça parte desta corrente do bem</h2>
      <p style="opacity:.9;max-width:600px;margin:0 auto 32px;font-size:1.1rem">Cada gesto de carinho ilumina a vida de quem já nos deu tanto. Junte-se a nós e ajude a transformar a realidade dos idosos de Pirapora.</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <a href="https://wa.me/553837410000?text=Olá! Gostaria de fazer uma doação para o Farol da Melhor Idade." target="_blank" class="btn btn-primary btn-lg"><i class="fab fa-whatsapp"></i> Fale Conosco</a>
        <a href="#" class="btn btn-outline btn-lg" onclick="navigateTo('voluntarios')"><i class="fas fa-user-plus"></i> Cadastre-se</a>
      </div>
    </div>
  </section>
  `;
}

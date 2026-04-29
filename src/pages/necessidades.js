export function renderNecessidades() {
  const items = [
    { name: 'Fraldas Geriátricas (G e GG)', qty: '200 unidades', urgency: 'alta', desc: 'Fraldas descartáveis para uso diário dos residentes.' },
    { name: 'Leite em Pó Integral', qty: '50 latas', urgency: 'alta', desc: 'Leite para complemento alimentar dos idosos.' },
    { name: 'Sabonetes e Shampoo', qty: '80 unidades', urgency: 'media', desc: 'Produtos de higiene pessoal para banho diário.' },
    { name: 'Lençóis de Solteiro', qty: '30 jogos', urgency: 'media', desc: 'Roupas de cama para os quartos dos residentes.' },
    { name: 'Arroz e Feijão', qty: '100 kg cada', urgency: 'alta', desc: 'Alimentos básicos para as refeições diárias.' },
    { name: 'Produtos de Limpeza', qty: '40 unidades', urgency: 'baixa', desc: 'Desinfetantes, água sanitária e detergente.' },
    { name: 'Toalhas de Banho', qty: '25 unidades', urgency: 'media', desc: 'Toalhas para uso pessoal dos residentes.' },
    { name: 'Medicamentos Básicos', qty: 'Diversos', urgency: 'alta', desc: 'Analgésicos, antitérmicos e vitaminas sob orientação médica.' },
    { name: 'Cadeiras de Rodas', qty: '3 unidades', urgency: 'baixa', desc: 'Cadeiras para mobilidade dos residentes com dificuldade de locomoção.' },
  ];
  
  const urgLabel = { alta: 'Urgente', media: 'Médio', baixa: 'Baixo' };
  
  return `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-label"><i class="fas fa-hand-holding-heart"></i> Vitrine de Doações</div>
        <h2>O que estamos precisando</h2>
        <p>Confira os itens que o Farol da Melhor Idade necessita e faça sua doação de forma assertiva. Clique no botão para combinar a entrega pelo WhatsApp.</p>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;margin-bottom:36px;flex-wrap:wrap">
        <button class="btn btn-sm btn-secondary filter-btn active" data-filter="all">Todos</button>
        <button class="btn btn-sm btn-outline-dark filter-btn" data-filter="alta"><i class="fas fa-exclamation-circle"></i> Urgentes</button>
        <button class="btn btn-sm btn-outline-dark filter-btn" data-filter="media">Médio</button>
        <button class="btn btn-sm btn-outline-dark filter-btn" data-filter="baixa">Baixo</button>
      </div>

      <div class="needs-grid" id="needs-grid">
        ${items.map(it => `
          <div class="need-card" data-urgency="${it.urgency}">
            <div class="need-card-img">
              <img src="/images/donations.png" alt="${it.name}" />
              <span class="need-urgency urgency-${it.urgency}">${urgLabel[it.urgency]}</span>
            </div>
            <div class="need-card-body">
              <h3>${it.name}</h3>
              <p style="color:var(--text-light);font-size:.88rem;margin-bottom:8px">${it.desc}</p>
              <div class="need-qty"><i class="fas fa-cubes"></i> Necessário: ${it.qty}</div>
              <button class="btn btn-whatsapp donate-btn" data-item="${it.name}"><i class="fab fa-whatsapp"></i> Quero Doar Este Item</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="section section-alt" style="text-align:center">
    <div class="container">
      <h2>Não encontrou o que procura?</h2>
      <p style="color:var(--text-light);max-width:500px;margin:12px auto 28px">Entre em contato conosco para saber outras formas de contribuir ou para doar valores em dinheiro.</p>
      <a href="https://wa.me/553837410000?text=Olá! Gostaria de saber como posso ajudar o Farol da Melhor Idade." target="_blank" class="btn btn-whatsapp btn-lg"><i class="fab fa-whatsapp"></i> Fale Conosco</a>
    </div>
  </section>`;
}

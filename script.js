/* Ilustrações usadas quando um item ainda não tem foto */
const ICONES = {
  sofa: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M12 30v-8a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v8"/><path d="M6 32a4 4 0 0 1 8 0v6h36v-6a4 4 0 0 1 8 0v12H6Z"/><path d="M10 44v6M54 44v6"/></svg>',
  cama: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M8 50V14M8 36h48v14"/><path d="M8 36V28a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8"/><path d="M26 30h24a6 6 0 0 1 6 6"/></svg>',
  mesa: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M14 26h36M20 26v24M44 26v24"/><path d="M6 20v30M6 38h8M58 20v30M58 38h-8"/></svg>',
  "guarda-roupa": '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="12" y="8" width="40" height="44" rx="2"/><path d="M32 8v44M28 28v6M36 28v6M16 52v4M48 52v4"/></svg>',
  cadeira: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M18 34V14a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v20"/><path d="M12 34h40v8H12zM16 42v14M48 42v14"/></svg>',
  rack: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><rect x="16" y="8" width="32" height="20" rx="2"/><path d="M32 28v6"/><rect x="6" y="34" width="52" height="14" rx="2"/><path d="M24 34v14M40 34v14M10 48v4M54 48v4"/></svg>',
};

const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const linkWhats = (msg) => `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(msg)}`;
const linkInsta = `https://www.instagram.com/${LOJA.instagram}/`;
const midia = (item) => item.imagem
  ? `<img src="${item.imagem}" alt="${item.nome || item.legenda}" loading="lazy">`
  : ICONES[item.icone] || ICONES.sofa;

/* Ofertas */
function renderOfertas(filtro = "Todos") {
  const lista = OFERTAS.filter((p) => filtro === "Todos" || p.categoria === filtro);
  document.getElementById("lista-ofertas").innerHTML = lista.map((p, i) => {
    const off = Math.round((1 - p.por / p.de) * 100);
    return `
      <article class="produto" style="animation-delay:${i * 60}ms">
        <div class="produto__foto">
          ${midia(p)}
          ${p.selo ? `<span class="selo">${p.selo}</span>` : ""}
          ${off > 0 ? `<span class="desconto">-${off}%</span>` : ""}
        </div>
        <div class="produto__info">
          <span class="produto__cat">${p.categoria}</span>
          <h3>${p.nome}</h3>
          <div class="produto__precos">
            <span class="preco-por">${brl(p.por)}</span>
            <span class="preco-de">${brl(p.de)}</span>
          </div>
          <span class="parcelas">ou <b>${p.parcelas}x de ${brl(p.por / p.parcelas)}</b> sem juros</span>
          <a class="btn" target="_blank" rel="noopener"
             href="${linkWhats(`Olá! Vi no site a oferta "${p.nome}" por ${brl(p.por)}. Ainda está disponível?`)}">Quero este</a>
        </div>
      </article>`;
  }).join("");
}

document.querySelectorAll(".filtro").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".filtro").forEach((x) => x.classList.toggle("ativo", x === b));
  renderOfertas(b.dataset.filtro);
}));
document.querySelectorAll("[data-ir]").forEach((a) => a.addEventListener("click", () => {
  document.querySelector(`.filtro[data-filtro="${a.dataset.ir}"]`).click();
}));

/* Instagram: 1 destaque + blocos de 4, para a grade sempre fechar */
function renderFeed() {
  const feed = document.getElementById("feed");
  if (EMBED_OFICIAL) {
    feed.classList.add("feed--embed");
    feed.innerHTML = POSTS.map((p) =>
      `<blockquote class="instagram-media" data-instgrm-permalink="${p.link}" data-instgrm-version="14"></blockquote>`).join("");
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js"; s.async = true;
    document.body.appendChild(s);
    return;
  }
  const qtd = POSTS.length ? 1 + 4 * Math.floor((POSTS.length - 1) / 4) : 0;
  feed.innerHTML = POSTS.slice(0, qtd).map((p) => `
    <a class="post" href="${p.link}" target="_blank" rel="noopener" aria-label="${p.legenda}">
      ${midia(p)}
      <span class="post__legenda">${p.legenda}</span>
    </a>`).join("");
}

/* Dados da loja */
if (LOJA.logo) document.querySelectorAll("[data-logo-img]").forEach((img) => { img.src = LOJA.logo; });
document.querySelectorAll("[data-whats]").forEach((a) => {
  a.href = linkWhats("Olá, Garra Móveis! Vim pelo site e gostaria de mais informações.");
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-insta]").forEach((a) => { a.href = linkInsta; });
document.querySelectorAll("[data-insta-user]").forEach((el) => { el.textContent = LOJA.instagram; });
document.querySelectorAll("[data-campo]").forEach((el) => { el.textContent = LOJA[el.dataset.campo]; });
document.getElementById("ano").textContent = new Date().getFullYear();

/* Topo: fica branco ao rolar */
const topo = document.getElementById("topo");
const atualizaTopo = () => topo.classList.toggle("rolado", scrollY > 40 || menu.classList.contains("aberto"));
addEventListener("scroll", atualizaTopo, { passive: true });

/* Menu mobile */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
  atualizaTopo();
});
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  menu.classList.remove("aberto"); menuBtn.setAttribute("aria-expanded", false); atualizaTopo();
}));

/* Animação de entrada ao rolar */
const revelar = document.querySelectorAll(".revelar");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((itens) => itens.forEach((it) => {
    if (it.isIntersecting) { it.target.classList.add("visivel"); obs.unobserve(it.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revelar.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 80}ms`; obs.observe(el); });
} else {
  revelar.forEach((el) => el.classList.add("visivel"));
}

renderOfertas();
renderFeed();
atualizaTopo();

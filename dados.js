/* ==========================================================
   CONTEÚDO DO SITE — edite aqui sem mexer no resto do código
   ========================================================== */
const LOJA = {
  nome: "Garra Móveis",
  cidade: "Carnaubal - CE",
  instagram: "garramoveisja",
  whatsapp: "5588900000000", // DDI + DDD + número, só dígitos (TROCAR)
  telefone: "(88) 9 0000-0000", // TROCAR
  endereco: "Rua Exemplo, 123 - Centro, Carnaubal - CE", // TROCAR
  horario: "Seg a Sex: 7h às 18h · Sáb: 7h às 13h", // CONFIRMAR
};

/* Ofertas — as mesmas que vão para o Instagram.
   imagem: caminho da foto (ex.: "assets/sofa.jpg"). Vazio = ilustração.
   icone: sofa | cama | mesa | guarda-roupa | cadeira | rack            */
const OFERTAS = [
  { nome: "Sofá Retrátil 3 Lugares", categoria: "Sala", de: 2499, por: 1899, parcelas: 10, selo: "Mais vendido", icone: "sofa", imagem: "" },
  { nome: "Guarda-Roupa Casal 6 Portas", categoria: "Quarto", de: 1799, por: 1399, parcelas: 10, selo: "Oferta", icone: "guarda-roupa", imagem: "" },
  { nome: "Conjunto Mesa 6 Cadeiras", categoria: "Cozinha", de: 2199, por: 1690, parcelas: 10, selo: "", icone: "mesa", imagem: "" },
  { nome: "Cama Box Casal + Colchão", categoria: "Quarto", de: 1599, por: 1199, parcelas: 10, selo: "Oferta", icone: "cama", imagem: "" },
  { nome: "Rack com Painel até 65\"", categoria: "Sala", de: 899, por: 649, parcelas: 6, selo: "", icone: "rack", imagem: "" },
  { nome: "Poltrona Decorativa", categoria: "Sala", de: 699, por: 499, parcelas: 5, selo: "Últimas unidades", icone: "cadeira", imagem: "" },
];

/* Posts do Instagram.
   Opção A (simples): coloque a foto em assets/ e o link do post.
   Opção B (oficial): preencha só "link" e deixe EMBED_OFICIAL = true
   para exibir o post do jeito do próprio Instagram.                    */
const EMBED_OFICIAL = false;
const POSTS = [
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Chegou coleção nova de sofás! Venha conferir 🛋️", icone: "sofa" },
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Quarto completo com condições especiais.", icone: "cama" },
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Mesa posta para a família reunida.", icone: "mesa" },
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Entrega e montagem em Carnaubal e região.", icone: "rack" },
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Guarda-roupas com até 10x no cartão.", icone: "guarda-roupa" },
  { link: "https://www.instagram.com/garramoveisja/", imagem: "", legenda: "Detalhes que transformam a sala.", icone: "cadeira" },
];

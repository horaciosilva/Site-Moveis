# Garra Móveis — conceito de site institucional

Site estático (HTML + CSS + JS, sem build) para a Garra Móveis de Carnaubal - CE: apresentação da loja, ofertas da semana, feed do Instagram e contato via WhatsApp.

## Como ver
Abra `index.html` no navegador. Para publicar de graça: GitHub Pages, Netlify ou Vercel (basta subir a pasta).

## Como atualizar o conteúdo
Tudo fica em **`dados.js`**:

- `LOJA` — WhatsApp, telefone, endereço, horário (hoje com valores de exemplo, **trocar**).
- `OFERTAS` — produtos em oferta. Coloque a foto em `assets/` e preencha `imagem: "assets/foto.jpg"`.
- `POSTS` — posts do Instagram. Duas opções:
  - **Simples:** foto em `assets/` + link do post (carrega rápido, visual uniforme).
  - **Oficial:** preencha só o `link` de cada post e use `EMBED_OFICIAL = true` — o post aparece com o visual do próprio Instagram.

## Próximos passos sugeridos
- Feed automático: conectar a API do Instagram (conta profissional) ou um serviço como Behold/LightWidget.
- Domínio próprio (ex.: garramoveis.com.br).
- Fotos reais da fachada e da equipe na seção "A loja".

## Identidade visual
- Cores: verde e branco (variáveis no topo de `styles.css`).
- Logo: `assets/logo.png` (recortado, sem o fundo verde). Para máxima nitidez, trocar pelo arquivo original da arte.

## Fotos
As fotos em `assets/` são ilustrativas, do banco gratuito Unsplash (licença Unsplash). Troque pelas fotos reais dos produtos antes de publicar.

# Shira — revisão e nova direção

## Avaliação

O site publicado em https://www.shiralandscaping.com/ confirma os sete serviços e os contatos usados nesta versão. A abertura tinha navegação pesada, preto/amarelo muito dominantes, um popup imediato de orçamento e widgets flutuantes competindo com a fotografia. Foi observado overflow horizontal no navegador desktop.

A versão local anterior usava screenshots de referências como fotos de serviços e portfólio. A imagem principal também era uma captura de outro site. Havia avaliações estáticas atribuídas a pessoas, 48 avaliações e nota 5.0 sem conexão Google; o widget do site publicado mostrava 5 avaliações, evidenciando a inconsistência. Não foi validada a fonte Google desse widget. Também havia datas, garantias e credenciais específicas sem fonte, e o formulário exibia sucesso sem enviar dados.

## Implementação

- Abertura fotográfica, verde profundo, oliva claro, tipografia sem serifa e espaços claros.
- Bento assimétrico com os sete serviços e fotos obtidas do site público da empresa. Não são apresentadas como obras com localização ou autoria verificada.
- Imagens conceituais identificadas como inspiração; screenshots antigos não são utilizados na página ativa.
- Rodapé com fundo fotográfico, CTA, telefone, e-mail e área atendida.
- Contato via rascunho mailto: requer aplicativo de e-mail configurado e envio pelo visitante; não existe backend de envio.
- Dados estruturados limitados a informações confirmadas. Sem notas ou depoimentos fictícios.

## Próxima etapa — Google

GoogleReviews recebe reviews, rating, count e profileUrl. O carrossel implementa anterior/próximo, pausa, rotação a cada 6,5 segundos, pausa em interação e respeito à preferência de movimento reduzido. Sem dados, aparece uma prévia explicitamente identificada. A integração com o perfil Google e as decisões de apresentação dependem do próximo prompt solicitado pelo usuário. Nenhuma API Google está conectada, nenhum comentário foi inventado e a rotação com dados reais ainda não foi validada.

## Imagens

Fotografias de serviços: public/landscapes/{planting,hardscaping,carpentry,lawn,fencing,irrigation,snow}.webp, derivadas dos arquivos públicos de shiralandscaping.com. Originais preservados na mesma pasta.

Imagem conceitual gerada com a ferramenta nativa image_gen: public/landscapes/garden-concept.png; versão WebP usada no site: public/landscapes/garden-concept.webp. A imagem preexistente public/hero-luxury-landscape.jpg é usada como inspiração, sem identificação de cliente ou obra.

Prompt final da imagem gerada:

Use case: photorealistic-natural. Create one ultra photorealistic wide landscape photograph for a premium Greater Boston landscaping website hero, aspect ratio 16:9. A beautifully landscaped New England residential garden in late afternoon natural sunlight, mature trees overhead, deep green clipped hedges, white hydrangeas, lush gently striped lawn, a curved pale bluestone path leading to a subtle cedar pergola and tasteful outdoor seating at right, layered perennial beds. Camera eye level, sophisticated architectural magazine photography, real botanical detail, imperfect natural textures, atmospheric forest greens, restrained warm sunlight, no excessive saturation. Left third is darker shaded trees and planting with calm negative space for white HTML text added separately. Garden dominates, no mansion. Absolutely no text, logos, watermarks, borders, website UI, collage or people. This is a conceptual garden inspiration photograph, not evidence of a completed project.

## Validação

Build de produção e TypeScript aprovados. ESLint aprovado. Verificação visual desktop e mobile (390 px), navegação por âncoras, abertura/fechamento do menu mobile, validação nativa de campos obrigatórios e ausência de sobreposição no bento mobile. Nenhum formulário externo foi enviado e nenhuma alteração foi publicada no site ao vivo.

# Manual de Identidade Visual (IDV) - Araxá Acqua Park

Este documento detalha as diretrizes de design, tipografia, cores e elementos interativos utilizados na construção da interface da nova Landing Page do Araxá Acqua Park.

---

## 1. Visão Geral da Marca (Conceito Visual)
A interface foi projetada para transmitir **pioneirismo, exclusividade e diversão**. O design equilibra a seriedade de um polo turístico de alto padrão (o futuro Hotel) com a alegria contagiante de um parque aquático focado na família.
Conceitos-chave: Modernidade, Águas Termais, Dinamismo e Confiabilidade.

---

## 2. Paleta de Cores (Cores Sólidas)
A paleta baseia-se num espectro oceânico e termal, indo do azul marinho profundo até tons cianos e verdes vibrantes.

### 2.1 Cores Principais
* **Azul Oceano Profundo (Primary Blue)**: `#0E5C8B` (Usado em Títulos e fundos sólidos para passar confiança e imersão).
* **Azul Marinho / Noturno (Footer)**: `#0B4568`
* **Azul Claro Térmico (Primary Light)**: `#258BBB`

### 2.2 Cores de Destaque (Ações e Calls to Action)
* **Ciano Brilhante (Accent Cyan)**: `#00A3B5` (Usado em pequenos ícones, detalhes e badges para atenção).
* **Verde Natureza (Accent Green)**: `#38A169` (Usado em ícones de checklist, botões de ação e WhatsApp, indicando sucesso/positividade).

### 2.3 Cores Neutras (Textos e Fundo)
* **Texto Escuro (Títulos Secundários)**: `#1F2937`
* **Texto Mudo (Parágrafos e Legendas)**: `#4B5563`
* **Fundo Claro (Seções)**: `#F3F4F6`
* **Branco Puro**: `#FFFFFF`

---

## 3. Gradientes Oficiais
Para um aspecto "Premium" moderno, utilizamos transições suaves de cor ao invés de apenas cores lisas.

1. **Gradiente Primário (Azul para Ciano)**
   * `linear-gradient(135deg, #0E5C8B, #00A3B5)`
   * Aplicado em: Fundos do Header de Cartões (Ex: Área Radical).

2. **Gradiente Natureza (Ciano para Verde)**
   * `linear-gradient(135deg, #00A3B5, #38A169)`
   * Aplicado em: Botões "Quero Ser Sócio", Header da Área Infantil.

3. **Gradiente Promocional (Ouro / Laranja)**
   * `linear-gradient(135deg, #F6B14B, #EAC87C)`
   * Aplicado em: Cartões empilhados especiais (foco em investimento/passaporte).

---

## 4. Tipografia
Duas famílias de fontes do **Google Fonts** foram escolhidas pela leiturabilidade contemporânea.

* **Fonte de Títulos (Headings - H1 a H6)**: `Outfit`
  * *Pesos utilizados:* 600 (SemiBold), 700 (Bold) e 800 (ExtraBold).
  * *Motivo:* Formas geométricas arredondadas, excelentes para logotipos, números grandiosos (cronômetro de Obras) e chamadas imponentes de marketing.

* **Fonte de Texto Base (Body / Textos Curtos)**: `Plus Jakarta Sans`
  * *Pesos utilizados:* 400 (Regular) e 500 (Medium).
  * *Motivo:* Modernidade neutra com excelente legibilidade (scannability) para parágrafos densos e listas de características.

---

## 5. Estilo Fotográfico
O Araxá Acqua Park adota fotografias com tratamento **fotorealista de alta qualidade**, com estética "Cinematic Lighting" e paisagens grandiosas da natureza de Minas Gerais.
* **Cor base das imagens**: Tons vibrantes de verão, verdes muito vívidos nas árvores, azul celeste brilhante nos céus.
* **Regras de Cards de Atrações**: As fotos dos cards possuem overlay (fade-to-black) sutil na parte inferior (`linear-gradient(to top, rgba(0,0,0,0.8), transparent)`) para garantir que os nomes das atrações sejam 100% legíveis em tons de branco.

---

## 6. Microinterações e Efeitos Especiais (UI/UX)
* **Glassmorphism**: Efeito de vidro desfocado (`backdrop-filter: blur(10px)`) com fundo `rgba(255,255,255, 0.7)`. Foi utilizado na barra de navegação (Header) e nos painéis explicativos ("Por que o Araxá Acqua Park?"). Passa a impressão de água cristalina/limpeza.
* **Hover (Passear o mouse)**:
  * *Botões*: Suave elevação (Y: -2px) e expansão da sombra (box-shadow cresce a opacidade de 0.3 para 0.4).
  * *Ícones*: Leve aumento de escala (`scale(1.15)`) para convidar o clique.
  * *Cartões VIP ("Seja Sócio")*: Rotação reversa de fundo demonstrando empilhamento 3D sutil ao pairar o ponteiro.
* **Bordas**: Todas as regiões do parque que contêm conteúdo segmentado possuem bordas arredondadas (Border-Radius de `12px` nos componentes menores até `24px` em painéis de destaque como em "Seja Sócio").

---

## 7. Iconografia
* **Biblioteca Padrão:** Phosphor Icons (Estilo *Fill/Sólido*).
* **Diretriz de Uso:** Ícones sólidos foram preferidos em vez dos "lineares" (linhas finas) para comunicar um peso real e passar uma sensação de ambiente consolidado, seguro e fisicamente pronto (mesmo que com obras em andamento).
* **Tamanhos Comuns:** 20px (para listas e contatos) e 48px (para benefícios em destaque).

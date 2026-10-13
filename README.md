
# Portfólio — Gustavo Paiva Laurindo

Portfólio pessoal no estilo **dashboard do Xbox 360 (Metro, 2010)**.
Site estático em HTML, Tailwind CSS (via CDN), CSS customizado e JavaScript puro.
Sem build, sem backend, sem dependências de servidor.

---

## 🎮 Sobre o projeto

Este portfólio foi construído com a identidade visual do dashboard
Metro do Xbox 360:

- Barra superior com abas horizontais (início, projetos, tecnologias...)
- Blocos Metro com reflexo de vidro e destaque verde no foco
- Avatar central com halo suave
- Rodapé com botões de controle (Ⓐ Ⓑ Ⓧ Ⓨ)
- Navegação por **setas do teclado**, **Enter** e **Esc**

É um site estático, publicado via **GitHub Pages**.

---

## 🗂️ Estrutura de arquivos

```
/
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│       ├── avatar.png          ← avatar do 360 (fundo transparente)
│       ├── favicon.svg         ← ícone da aba do navegador
│       └── projects/
│           ├── calculo-sem-barreiras.png   (opcional)
│           └── dashboard-salaries.png      (opcional)
│
└── README.md
```

---

## ⚙️ Como rodar localmente

1. Clone o repositório:
   git clone https://github.com/GusShard/SEU-REPO.git
   cd SEU-REPO

2. Abra o `index.html` direto no navegador (duplo clique).

   **Não precisa de servidor.** Não precisa instalar nada.
   Como o Tailwind é carregado via CDN, é necessário estar online
   na primeira carga.

---

## 🚀 Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `portfolio`).
2. Suba os arquivos:

   git init
   git add .
   git commit -m "Portfólio estilo Xbox 360 Metro"
   git branch -M main
   git remote add origin https://github.com/GusShard/portfolio.git
   git push -u origin main

3. No GitHub: **Settings → Pages**
4. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**.
6. Espere 1–2 minutos. O site ficará em:
   https://gusshard.github.io/portfolio/

---

## ⌨️ Atalhos de navegação

| Tecla | Ação |
|---|---|
| ← → ↑ ↓ | Navegar entre os blocos |
| Enter / Espaço | Abrir bloco selecionado (botão Ⓐ) |
| Esc | Voltar para o início (botão Ⓑ) |

Os botões do rodapé também funcionam por clique/toque:

| Botão | Ação |
|---|---|
| Ⓐ Selecionar | Abre o bloco em foco |
| Ⓑ Voltar | Volta para a tela inicial |
| Ⓧ Aparência | Alterna entre tema escuro e claro |
| Ⓨ Início | Volta para a tela inicial |

---

## 🎨 Personalização rápida

### Trocar o avatar
Substitua `assets/images/avatar.png` pelo seu avatar (PNG com fundo
transparente). Recomendado: 500×700 px ou maior.

### Trocar a gamertag
Em `index.html`, procure por:

<span class="gamertag-name">GusShard</span>

Troque pelo que quiser.

### Trocar as cores
Todas as cores estão em variáveis CSS no topo de
`assets/css/style.css`, na seção `:root`.

### Adicionar um novo bloco Metro
Em `index.html`, na seção `#tela-inicial`, copie um `<button class="metro-tile">`
e ajuste o `data-open` para o id da nova tela.

---

## ✅ Checklist de publicação

- [ ] Avatar salvo em `assets/images/avatar.png` (PNG transparente)
- [ ] Favicon salvo em `assets/images/favicon.svg`
- [ ] `index.html` abre localmente sem erro no console (F12)
- [ ] Navegação por setas funciona
- [ ] Botões do rodapé funcionam
- [ ] Tema claro funciona (botão Ⓧ)
- [ ] Testado no celular (layout responsivo)
- [ ] Repositório criado no GitHub
- [ ] GitHub Pages ativado em Settings → Pages
- [ ] Site acessível em `https://gusshard.github.io/portfolio/`

---

## 📬 Contato

- GitHub: github.com/GusShard
- LinkedIn: linkedin.com/in/gustavo-paiva-laurindo-98b12b384
- E-mail: gustavopaiva.contact@gmail.com

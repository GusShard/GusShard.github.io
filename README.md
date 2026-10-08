# Portfólio — Gustavo Paiva Laurindo

Portfólio pessoal estático, criado com HTML5, Tailwind CSS, CSS complementar e JavaScript. O visual combina uma interface escura retrofuturista com referências discretas a dashboards de consoles, usando verde como cor de destaque.

## Estrutura

```text
/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── favicon.svg
```

## Executar localmente

1. Baixe ou clone este repositório.
2. Abra `index.html` no navegador.
3. Para testar a mesma estrutura usada na hospedagem, você também pode abrir a pasta com a extensão Live Server do VS Code.

O Tailwind CSS é carregado pelo Play CDN para manter a configuração simples. Essa opção é conveniente para um portfólio estático pequeno; para um projeto de produção maior, o recomendado é configurar um processo de build e publicar o CSS compilado.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Envie os arquivos mantendo a estrutura de pastas.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch principal (geralmente `main`) e a pasta `/(root)`.
6. Salve e aguarde o GitHub Pages publicar o site.

O arquivo de entrada deve permanecer na raiz como `index.html`.

## Personalização

- **Avatar:** o painel inicial usa uma ilustração CSS temporária. Se quiser usar seu avatar real, coloque a imagem em `assets/images/` e substitua o bloco `.avatar-placeholder` em `index.html` por uma imagem com texto alternativo.
- **Favicon:** o arquivo `assets/images/favicon.svg` pode ser substituído por outro ícone próprio.
- **Projetos:** confirme os links, o estado atual e as tecnologias antes de publicar. O projeto “Cálculo sem Barreiras” aparece como em desenvolvimento e não possui link público informado.
- **Formação:** atualize os nomes dos cursos e o status quando sua situação mudar.
- **Demonstração da dashboard:** o link foi mantido conforme fornecido no material original; vale confirmar se ainda é o endereço público correto.

## Tecnologias usadas no portfólio

- HTML5 semântico
- Tailwind CSS via CDN
- CSS3
- JavaScript moderno sem framework
- SVG para favicon

## Acessibilidade e responsividade

O site inclui navegação semântica, link para pular ao conteúdo, foco visível, menu móvel, textos alternativos e suporte à preferência de movimento reduzido do sistema operacional.

## Observação

O conteúdo apresenta tecnologias como em estudo quando apropriado e não afirma experiência profissional formal. Revise todas as informações pessoais e links antes da publicação.

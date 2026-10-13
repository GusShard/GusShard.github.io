/* ============================================================
   PORTFÓLIO — ESTILO XBOX 360 METRO (2010)
   Arquivo: assets/js/main.js
   Responsável por: navegação por setas, abertura/fechamento de telas,
   botões do controle (Ⓐ Ⓑ Ⓧ Ⓨ), abas do topo, tema claro, voltar ao topo.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------
     0. REFERÊNCIAS AOS ELEMENTOS PRINCIPAIS
     -------------------------------------------------------- */
  const telaInicial = document.getElementById('tela-inicial');
  const todasTelas = document.querySelectorAll('.xbox-screen');
  const tiles = document.querySelectorAll('.metro-tile');
  const abasTopo = document.querySelectorAll('.topbar-tab');
  const botoesVoltar = document.querySelectorAll('[data-back]');
  const botoesCtrl = document.querySelectorAll('.ctrl-btn');
  const btnTopo = document.getElementById('btn-topo');
  const anoAtual = document.getElementById('ano-atual');

  /* --------------------------------------------------------
     1. ANO ATUAL NO RODAPÉ
     -------------------------------------------------------- */
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------
     2. NAVEGAÇÃO ENTRE TELAS
     -------------------------------------------------------- */
  /**
   * Mostra a tela com o id informado e esconde as outras.
   * Atualiza a aba ativa do topo se existir correspondência.
   * @param {string} telaId - id da tela a abrir (ex: "tela-sobre")
   */
  function abrirTela(telaId) {
    if (!telaId) return;

    const alvo = document.getElementById(telaId);
    if (!alvo) return;

    // Esconde todas as telas
    todasTelas.forEach((tela) => {
      tela.classList.remove('is-active');
      tela.setAttribute('hidden', '');
    });

    // Mostra a tela alvo
    alvo.classList.remove('hidden');
    alvo.removeAttribute('hidden');
    // Força reflow para reiniciar a animação
    void alvo.offsetWidth;
    alvo.classList.add('is-active');

    // Atualiza abas do topo
    abasTopo.forEach((aba) => {
      const isMatch = aba.dataset.target === telaId;
      aba.classList.toggle('is-active', isMatch);
    });

    // Rola para o topo ao abrir nova tela
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Atualiza visibilidade do botão voltar ao topo
    atualizarBtnTopo();
  }

  /**
   * Volta para a tela inicial.
   */
  function voltarInicio() {
    abrirTela('tela-inicial');
  }

  /* --------------------------------------------------------
     3. CLIQUES NOS TILES (BLOCO METRO)
     -------------------------------------------------------- */
  tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      const destino = tile.dataset.open;
      if (destino) abrirTela(destino);
    });
  });

  /* --------------------------------------------------------
     4. CLIQUES NAS ABAS DO TOPO
     -------------------------------------------------------- */
  abasTopo.forEach((aba) => {
    aba.addEventListener('click', () => {
      const destino = aba.dataset.target;
      if (destino) abrirTela(destino);
    });
  });

  /* --------------------------------------------------------
     5. BOTÕES VOLTAR DENTRO DAS TELAS
     -------------------------------------------------------- */
  botoesVoltar.forEach((btn) => {
    btn.addEventListener('click', voltarInicio);
  });

  /* --------------------------------------------------------
     6. NAVEGAÇÃO POR TECLADO (SETAS + ENTER + ESC)
     -------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    // Só intercepta setas se a tela inicial estiver ativa
    const telaInicialAtiva = telaInicial && telaInicial.classList.contains('is-active');

    if (telaInicialAtiva) {
      const tilesArr = Array.from(tiles);
      const focoAtual = document.activeElement;
      let idx = tilesArr.indexOf(focoAtual);

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        idx = idx < 0 ? 0 : (idx + 1) % tilesArr.length;
        tilesArr[idx].focus();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        idx = idx < 0 ? 0 : (idx - 1 + tilesArr.length) % tilesArr.length;
        tilesArr[idx].focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        // Enter / Espaço ativa o tile em foco (caso não seja botão nativo)
        if (focoAtual && focoAtual.classList.contains('metro-tile')) {
          e.preventDefault();
          focoAtual.click();
        }
      }
    }

    // ESC volta ao início
    if (e.key === 'Escape') {
      voltarInicio();
    }
  });

  /* --------------------------------------------------------
     7. BOTÕES DO CONTROLE (RODAPÉ)
     -------------------------------------------------------- */
  botoesCtrl.forEach((btn) => {
    btn.addEventListener('click', () => {
      const acao = btn.dataset.action;

      switch (acao) {
        case 'select':
          // Ativa o tile em foco ou o primeiro disponível
          if (document.activeElement && document.activeElement.classList.contains('metro-tile')) {
            document.activeElement.click();
          } else {
            const primeiroTile = tiles[0];
            if (primeiroTile) primeiroTile.click();
          }
          break;

        case 'back':
          voltarInicio();
          break;

        case 'theme':
          document.body.classList.toggle('tema-claro');
          break;

        case 'top':
          voltarInicio();
          break;

        default:
          break;
      }
    });
  });

  /* --------------------------------------------------------
     8. BOTÃO VOLTAR AO TOPO
     -------------------------------------------------------- */
  function atualizarBtnTopo() {
    if (!btnTopo) return;
    const precisaMostrar = window.scrollY > 240;
    btnTopo.hidden = !precisaMostrar;
  }

  window.addEventListener('scroll', atualizarBtnTopo, { passive: true });

  if (btnTopo) {
    btnTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------
     9. ESTADO INICIAL
     -------------------------------------------------------- */
  // Garante que a tela inicial esteja visível ao carregar
  abrirTela('tela-inicial');
  atualizarBtnTopo();

  /* --------------------------------------------------------
     10. DEBOUNCE LEVE NO RESIZE (opcional, para reajustes)
     -------------------------------------------------------- */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      atualizarBtnTopo();
    }, 150);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const siteDomain = document.getElementById('siteDomain');
  const btnHardReload = document.getElementById('btnHardReload');
  const btnClearGlobal = document.getElementById('btnClearGlobal');
  const toastSuccess = document.getElementById('toastSuccess');

  let currentTab = null;

  // Obtém aba ativa
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0]) {
      currentTab = tabs[0];
      try {
        const url = new URL(currentTab.url);
        siteDomain.textContent = url.hostname.replace('www.', '') || 'Navegador';
      } catch (e) {
        siteDomain.textContent = 'Página do Chrome';
      }
    }
  });

  function showSuccess() {
    toastSuccess.style.display = 'block';
    setTimeout(() => {
      window.close();
    }, 800);
  }

  // Ação 1: Limpar cache da aba atual e recarregar
  btnHardReload.addEventListener('click', () => {
    if (!currentTab) return;
    btnHardReload.disabled = true;
    btnHardReload.style.opacity = '0.7';

    chrome.runtime.sendMessage({
      action: 'hard_reload',
      tabId: currentTab.id
    }, () => {
      showSuccess();
    });
  });

  // Ação 2: Limpar todo o cache sem deslogar
  btnClearGlobal.addEventListener('click', () => {
    btnClearGlobal.disabled = true;
    btnClearGlobal.style.opacity = '0.7';

    chrome.runtime.sendMessage({
      action: 'clear_cache_global',
      tabId: currentTab ? currentTab.id : null
    }, () => {
      showSuccess();
    });
  });
});

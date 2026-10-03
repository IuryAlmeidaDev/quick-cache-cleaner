// Service Worker (Background) para Limpar Cache da Página

// Função para exibir badge temporário de sucesso no ícone da extensão
function showSuccessBadge(tabId) {
  if (!tabId) return;
  chrome.action.setBadgeText({ text: '✓', tabId: tabId });
  chrome.action.setBadgeBackgroundColor({ color: '#10B981', tabId: tabId });

  setTimeout(() => {
    chrome.action.setBadgeText({ text: '', tabId: tabId });
  }, 1800);
}

// Escuta ações solicitadas pelo popup ou atalhos
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'hard_reload') {
    const tabId = request.tabId;
    if (tabId) {
      // Recarrega ignorando o cache local da página (Ctrl + Shift + R)
      chrome.tabs.reload(tabId, { bypassCache: true }, () => {
        showSuccessBadge(tabId);
        sendResponse({ success: true });
      });
      return true;
    }
  }

  if (request.action === 'clear_cache_global') {
    const tabId = request.tabId;
    // Limpa apenas o cache de arquivos temporários, preservando cookies e senhas
    chrome.browsingData.removeCache({ since: 0 }, () => {
      if (tabId) {
        chrome.tabs.reload(tabId, { bypassCache: true }, () => {
          showSuccessBadge(tabId);
          sendResponse({ success: true });
        });
      } else {
        sendResponse({ success: true });
      }
    });
    return true;
  }
});

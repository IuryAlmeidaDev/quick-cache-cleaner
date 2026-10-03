# Política de Privacidade — Limpar Cache da Página

*Última atualização: Outubro de 2026*

### 1. Coleta e Compartilhamento de Dados
A extensão **Limpar Cache da Página** **NÃO coleta, não armazena, não rastreia e não compartilha** nenhum tipo de dado pessoal, credenciais, histórico de navegação ou informações sensíveis.

### 2. Finalidade das Permissões
- `browsingData`: Utilizada exclusivamente para invocar a função `chrome.browsingData.removeCache`, que remove arquivos estáticos em cache (imagens e scripts temporários) mediante ação direta do usuário.
- `activeTab`: Utilizada estritamente para identificar a aba visível no momento do clique e executar o recarregamento com o parâmetro `bypassCache: true`.

### 3. Execução Off-line
Todas as ações acontecem diretamente no seu navegador, sem comunicação com servidores externos.

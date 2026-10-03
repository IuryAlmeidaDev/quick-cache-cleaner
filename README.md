# 🔄 Limpar Cache da Página - 1 Clique Rápido Sem Deslogar

Uma extensão ultraleve para o Google Chrome (Manifest V3) que permite recarregar páginas ignorando o cache local e limpar arquivos temporários com 1 clique, sem nunca te deslogar de sites como Google, bancos ou redes sociais.

---

## ✨ Recursos

- ⚡ **Hard Reload em 1 Clique:** Força o navegador a buscar arquivos HTML, CSS e JavaScript atualizados diretamente do servidor, ignorando o cache quebrado da página.
- 🛡️ **Preserva seus Logins:** Ao contrário de extensões genéricas que apagam todos os seus cookies e deslogam você de tudo, esta ferramenta foca estritamente no cache de arquivos.
- 🧹 **Limpeza Global Inteligente:** Opção para limpar todo o cache de arquivos temporários do Chrome sem tocar nos cookies e dados de sessão.
- 🎯 **Feedback Visual no Ícone:** Exibe um selo verde de confirmação `✓` instantâneo no próprio ícone da barra de ferramentas do Chrome.
- 🔒 **100% Local e Privado:** Não coleta histórico, nem envia requisições a servidores externos.

---

## 🚀 Como testar no seu Google Chrome (Modo Desenvolvedor)

1. Abra o Google Chrome e acesse:  
   `chrome://extensions/`
2. Ative a opção **"Modo do desenvolvedor"** no canto superior direito.
3. Clique em **"Carregar sem compactação"** no canto superior esquerdo.
4. Selecione esta pasta (`limpar-cache-rapido`).
5. Clique no ícone verde da extensão em qualquer página e teste a limpeza instantânea!

---

## 📁 Estrutura do Projeto

```
limpar-cache-rapido/
├── manifest.json       # Configuração da extensão (Manifest V3)
├── background.js       # Service worker para gestão do cache e badges
├── popup.html          # Interface de limpeza com 1 clique
├── popup.js            # Lógica dos botões e comunicação com a API
├── icons/              # Ícones oficiais (16x16, 48x48, 128x128)
├── PRIVACY_POLICY.md   # Política de privacidade pronta para a Chrome Web Store
└── README.md           # Documentação do projeto
```

---

## 📄 Licença

Distribuído sob a licença MIT.

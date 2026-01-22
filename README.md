# TaskHub - Lista de Tarefas 🚀
O TaskHub é um CRUD desenvolvido em JavaScript, focado em consolidar fundamentos de lógica e manipulação nativa do navegador. O projeto implementa um fluxo completo de autenticação e gerenciamento de tarefas sem o uso de frameworks.

💻 Destaques Técnicos

📁 Gerenciamento de Dados e Lógica

Validação e Integridade: Utilização do método .some() para evitar a duplicidade de tarefas, comparando strings de forma padronizada com .toLowerCase().

Tratamento de Arrays: Uso do método .filter() para remoção precisa de itens do estado da aplicação e .find() para validação de credenciais de usuários.

Identificação Dinâmica: Atribuição de IDs únicos via Date.now() e armazenamento desses valores em atributos customizados (data-id) no HTML para vincular a interface aos dados.

📁 Manipulação do DOM

Interface Reativa: Criação dinâmica de elementos (createElement) e gerenciamento de hierarquia de componentes (appendChild) para renderizar tarefas com checkboxes e botões de interação.

Processamento em Lote: Uso de .querySelectorAll() e .forEach() para percorrer a lista de tarefas e remover múltiplos itens selecionados simultaneamente.

Persistência com Web Storage API
LocalStorage: Implementação de armazenamento persistente para dados de usuários, utilizando JSON.stringify para serialização e JSON.parse para recuperação dos objetos.

Gestão de Fluxo: Controle de rotas e redirecionamento de usuários via window.location.href após validações de sucesso.



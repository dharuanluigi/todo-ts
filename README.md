# Sobre o projeto

Projeto desenvolvido durante estudos de react através da trilha Ignite da Rocketseat. Neste projeto o intuito era criar um aplicativo de listagem de tarefas chamado: _TODO_.

## Funcionalidades

Com o aplicativo é possível fazer o controle de tarefas que precisamos cumprir. De forma simples é possível adicionar uma nova tarefa, marcar como concluída e excluir uma tarefa.

Como forma de desafio, adicionei mais seis funcionalidades.

1. Validação nome da tarefa.
2. Adicionar limite no nome da tarefa.
3. Adicinar descrição de detalhes ao clicar no nome da tarefa.
4. Ordenar tarefas por concluídas ou criadas ao clicar sobre a label de contadora.
5. Apagar todas as tarefas concluídas de uma vez.
6. Conseguir atualizar o nome da tarefa.

---

## Funcionamento Básico

### Criar tarefas

- Usuário consegue criar quantas tarefas desejar.

<img src="https://user-images.githubusercontent.com/50119686/193413890-1ace5e9f-8f71-42d0-ae1a-ef6abf0f718e.gif" style="border-radius: 10px; width: 80%"/>

### Marcar como concluída

- Para melhor adiminstrar suas tarefas ele também consegue marcar elas como concluídas.

<img src="https://user-images.githubusercontent.com/50119686/193413900-72d7e183-e700-41ea-ba91-4117b7ed5b2d.gif" style="border-radius: 10px; width: 80%"/>

### Excluindo uma tarefa

- Caso ele queira excluir tarefas que ele já finalizou, ele pode excluir individualmente cada uma que ele desejar excluir.

<img src="https://user-images.githubusercontent.com/50119686/193413942-0abd463c-4ba5-4471-a3d8-f1597476eac3.gif" style="border-radius: 10px; width: 80%"/>

---

## **Funcionamento adicional**

### Validação nome tarefa

- Caso o usuário tente cadastrar nome de tarefas em branco, isso não é possível ser feito.

<img src="https://user-images.githubusercontent.com/50119686/193414004-f79bd2b2-eee8-4f29-8c17-6b492be61d18.gif" style="border-radius: 10px; width: 80%"/>

### Limite nome tarefa

- Para o usuário criar nomes simples que abstraia uma ideia de uma melhor forma, eu adicionei um limite para o nome das tarefas, sendo atualmente com apenas 25 caracteres.

<img src="https://user-images.githubusercontent.com/50119686/193414016-e11b079c-b25b-452d-a1e1-00f9284de15f.gif" style="border-radius: 10px; width: 80%"/>

### Adicionar descrição tarefa

- Acima eu adicionei um limite para abstrair e ajudar a lembrar. Neste caso, quando não for possível e tiver que adicionar mais detalhes das tarefas, também é possível fazer isso.

<img src="https://user-images.githubusercontent.com/50119686/193414654-6da5b6c3-ba4e-4e13-9506-466943e211a0.gif" style="border-radius: 10px; width: 80%"/>

### Ordenando tarefas

- Para ajudar a agrupar melhor as tarefas e ficar mais simples de encontrar, o usuário pode querer ordenar elas tanto pelas já concluídas, como para as não concluídas.

<img src="https://user-images.githubusercontent.com/50119686/193414029-2deb23c9-2688-4f2f-a64b-61f50a2c004a.gif" style="border-radius: 10px; width: 80%"/>

### Apagar todas concluídas

- Quando usuário concluír muitas tarefas e não quiser apagar uma a uma, ele pode usar o botão vermelhor de **_Concluídas_**, para apagar todas as tarefas que já foram marcadas como concluídas.

<img src="https://user-images.githubusercontent.com/50119686/193413912-296cddd4-823e-4e79-8c6d-6ea5febd67da.gif" style="border-radius: 10px; width: 80%"/>

### Atualizar nome da tarefa

- Caso o usuário cadastre uma tarefa com nome errado ou queira alterar o nome por alguma razão, também é possível.

<img src="https://user-images.githubusercontent.com/50119686/193419230-906d228b-200f-4807-9ece-a31351e00923.gif" style="border-radius: 10px; width: 80%"/>

---

### Itens Trilha adicional

- Itens planejados de melhoria

  [x] Adicionar validação input.

  [x] Na validação adicionar máximo número de caractéres para o titulo da tarefa.

  [x] Ao clicar sobre o nome da task, é possível adicionar/alterar a descrição detalhada.

  [x] Ao clicar no contador de tarefas concluidas, ordenar e colocar em primeiro as taregas já concluidas.

  [x] Ao clicar em taredas criadas, ordenar e colocar em primeiro as taregas ainda não concluidas.

  [x] Ter possibilidade de apagar todas as tarefas finalizadas de uma vez.

  [x] Atualizar nome da tarefa

---

## Detalhes técnicos

Para conseguir rodar o projeto é necessário seguir os passos:

O projeto foi construído inteiramente apenas com React e Typescript usando o Vite. Ou seja, para conseguir rodar no seu equipamento:

1. Necessário ter instalado o nodeJS na versão: 16.17 e npm na versão 8.15. Para fazer o download e instalar basta baixar aqui: [NodeJS com NPM](https://nodejs.dev/en/download/)
2. Agora com eles instalados, clone o projeto para seu equipamento.
3. Abra a pasta do projeto no seu terminal(linha de comando) e dentro da raiz do projeto, seu caminho deve ser: **nomeDoProjeto/** ao listar os arquivos da pasta, você deve ver o arquivo chamado: **package.json.**
4. Dentro do terminal digite o comando: `npm install`, isso ira instalar todas as dependências necessárias do projeto.
5. Depois de instalados, basta rodar o comando: `npm run dev`. Isso ira executar localmente o projeto, basta abrir a url em seu navegador.

# API - ConectaRaros


## Introdução

Projeto final da turma de back-end da Reprograma. Esta aplicação é destinada a pessoas, famílias e amigos que são portadores de doenças raras ou que convivem com portadores a se conectarem. 
É considerado doença rara aquela que afeta até 65 pessoas em cada 100 mil indivíduos.
Por ser considerada uma doença que afeta uma pequena porcentagem da população, o "ConectaRaros" tem o intuito de conectar pessoas com as mesma doença para que possam trocar experiências, encontrarem apoio e suporte umas com as outras. 

## Função/Utilidade

Através da solicitação é possível: 

<table>
<tr>
  <td>Verbo HTTP</td>
  <td>Rota</td>
  <td>Função</td>
</tr>
<tr>
  <td>GET</td>
  <td>"/all"</td>
  <td>acessa todos os usuários</td>
</tr>
<tr>
  <td>GET</td>
  <td>"/illness"</td>
  <td>acessa os usuários de acordo com a doença </td>
</tr>
<tr>
  <td>GET</td>
  <td>"/id"</td>
  <td>acessar os usuários por ID</td>
</tr>
<tr>
  <td>POST</td>
  <td>"/new"</td>
  <td>adiciona usuário</td>
</tr>
<tr>
  <td>PATCH</td>
  <td>"/id"</td>
  <td>altera os dados por ID</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>"/id"</td>
  <td>deleta o usuário por ID</td>
</tr>
</table>

## Tecnologias e Dependências usadas
> :file_folder:	javascript :file_folder:node.js	:file_folder:express	
:file_folder:mongoose :file_folder:nodemon :file_folder:npm 
:file_folder:MongoDb :file_folder:Mongo Atlas :file_folder:Postman
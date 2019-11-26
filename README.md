## DOJO: API de catálogo filmes da Netflix   :movie_camera:

Criar uma API com Banco de Dados para escolher qual filme deve aparecer no topo da Lista de Sugestões.  
Pra isso, cria-se um mecanismo de pontuação para os filmes,  de forma que os filmes que possuírem maior pontuação, aparecem antes dos outros.

### REQUISITOS
- Cada filme deve possuir os seguintes campos: nome, ano, avaliações e quantidade de exibições.
- Não pode ter filmes com o mesmo nome.
- Avaliações é uma lista de números, em que cada número representa a avaliação da pessoa de 1 a 5 (estrelas). Exemplo: { avaliacoes: [2,3,1,4,5,5,1,2] }.
- A pontuação do filme é calculada multiplicando a média de avaliações com a quantidade de exibições.
- A rota GET /filmes/catalogo deve trazer os filmes ordenados por pontuação, exibindo a pontuação de cada filme.
- A rota POST /filmes/criar deve receber no body, um novo filme pra ser adicionado no Banco de Dados, somente com nome e ano.
- A rota PATCH /filmes/exibicao/:id deve salvar a lista completa de avaliações e a quantidade de exibições.
- A rota DELETE /filmes/remover/:id deve remover o filme do catálogo pelo ID.

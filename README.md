![typescript icon](https://github.com/Zefevr/Typscript-color-game/blob/master/dev-icons/ts.svg)
![postgress icon](https://github.com/Zefevr/Typscript-color-game/blob/master/dev-icons/postgress.svg)

## Typscript-color-game
> Assigment for codaisseur

#### These are the steps to create this basic backend project (API-only):

1. Created a `games` table with model using TypeORM. The game has an `id`, a `name`, a `color` and `board` field. Both the name and color fields are `text` fields, the board field is of type `json`.  
2. Setup a webserver using routing-controllers and create a `GET /games` endpoint that returns all the games (with envelope)
3. Added an endpoint `POST /games` for which the only input is a name. The created game receives a random color out of these colors: red, blue, green, yellow, magenta. So every new game that gets created is assigned a random color. 
4. Added an endpoint `PUT /games/:id` or `PATCH /games/:id` that allows to overwrite one or more fields of the game. E.g. calling `PUT /games` with JSON body `{ "name": "new name" }` updates the name, same for color and board (not for id). 
5. When a **game is changed** using the endpoint made in #4 and the color field is updated, I validated that the color is one of these colors: red, blue, green, yellow, magenta
6. When a **game starts**, the app sets the board to an empty board. The board is a two dimensional array that contains three arrays with three times the letter 'o'.
7. When a **game is changed** and the board field is updated I made sure that only 1 move is made. That means that only one element out of the 9 can be changed into something else. If somebody tries to make more moves, it returns a `HTTP 400 Bad Request` response. If everything is fine, I updated the board field of the game.

  
  


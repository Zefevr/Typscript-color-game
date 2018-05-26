import { JsonController, Get, Param, Post, HttpCode, Put, Body, NotFoundError } from 'routing-controllers'
import Game from './entity'


const randomcolor=['red','blue','green','yellow','magenta']

const moves = (board1, board2) => 
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length


@JsonController()
export default class GameController {

    @Get('/games/:id')
    getGame(
    @Param('id') id: number
    ) {
    return Game.findOne(id)
    }

    @Get('/games')
    async allGames() {
      const games = await Game.find()
      return { games }
    }
    

    @Post('/games')
    @HttpCode(201)
    createGame(
        @Body() game: Game
    ) {
    game.color = randomcolor[Math.floor(Math.random() * randomcolor.length)]
    return game.save()
    }

    @Put('/games/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Sorry, that game does not exist.')
    const color = update.color
    //need to look for a decorator to validate the colors
    if (color !== undefined && randomcolor.indexOf(color) < 0) 
    throw new NotFoundError('The color you are trying to use is not correct.')
    

/*     //const board = update.board
    const movesmade = moves(game.board, update.board)
    if( movesmade !== 1) throw new BadRequestError('HTTP 400 Bad Request') */

 
    return Game.merge(game, update).save()
    }
}

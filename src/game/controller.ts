import { JsonController, Get, Param, Post, HttpCode, Put, Body, NotFoundError, BadRequestError } from 'routing-controllers'
import Game from './entity'

const randomcolor=['red','blue','green','yellow','magenta']

const moves = (board1, board2) => 
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length


@JsonController()
export default class GameController {

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
    if (update.id) throw new BadRequestError(`Sorry but you cannnot change the id`)
    
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Sorry, that game does not exist.')

    //even if it works like this I need to look for a decorator to validate the colors, please see comments in the entity.ts
    const color = update.color
    if (color !== undefined && randomcolor.indexOf(color) < 0) 
    throw new NotFoundError('That color is not allowed.')

    if (update.board && moves(game.board, update.board) > 1) {
        throw new BadRequestError(`Only one move per time is allowed.`)
    }
 
    return Game.merge(game, update).save()
    }
}

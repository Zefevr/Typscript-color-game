import { JsonController, Get, Param, Post, HttpCode, BodyParam } from 'routing-controllers'
import Game from './entity'

//type GameList = { pages: Game[] }


const randomcolor=['red','blue','green','yellow','magenta']


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
    @BodyParam("name") name : string
    ){
    const game = new Game()
    game.name = name
    game.color = randomcolor[Math.floor(Math.random() * randomcolor.length)]
    return game.save()
    }

}
/* 
    @Put('/pages/:id')
    updatePage(
        @Param('id') id: number,
        @Body() body: Partial<Page>
    ): Page {
        console.log(`Incoming PUT body param:`, body)
        return pagesById[id]
    }

    @Post('/pages')
    @HttpCode(201)
    createPage(
        @Body() body: Page
    ): Page {
        console.log(`Incoming POST body param:`, body)
        return body
    } */
}
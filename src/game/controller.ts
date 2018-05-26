import { JsonController, Get, Param } from 'routing-controllers'
import Game from './entity'

//type GameList = { pages: Game[] }

@JsonController()
export default class GameController {

    @Get('/games/:id')
    getPage(
    @Param('id') id: number
    ) {
    return Game.findOne(id)
    }

    @Get('/games')
    allGames() {
    const games = Game.find()
    return { games }
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
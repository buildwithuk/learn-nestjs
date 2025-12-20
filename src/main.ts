import {Module, Controller, Get} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

@Controller()
class AppController {

    @Get()
    getRootRoute() {
        return "Hello world"
    }

}

@Module({ controllers: [AppController] })
class AppModule {

}

async function bootStrapApplication() {

    const app = await NestFactory.create(AppModule);
    await app.listen(3000)
}

bootStrapApplication()
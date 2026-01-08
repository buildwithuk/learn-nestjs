import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from 'dtos/create-message.dto';

@Controller('messages')
export class MessagesController {


    @Get()
    listMessages() {

    }

    @Post()
    createMessages(@Body() requestBody: CreateMessageDto) {
        console.log(requestBody)

    }

    @Get('/:id')
    getMessage(@Param() id: string) {
        console.log(id)
    }



}

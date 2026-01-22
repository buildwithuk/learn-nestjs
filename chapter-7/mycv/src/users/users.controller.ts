import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get()
  findUser() {}

  @Get()
  findAllUsers() {}

  @Put()
  updateUser() {}

  @Delete()
  removeUser() {}
}

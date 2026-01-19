import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessagesRepository) {}

  async findOne(id: string) {
    console.log(id);
    return await this.messageRepository.findOne(id);
  }

  async findAll() {
    return await this.messageRepository.findAll();
  }

  async createMessage(content: string) {
    return await this.messageRepository.createMessage(content);
  }
}

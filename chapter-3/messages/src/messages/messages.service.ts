import { MessagesRepository } from "./messages.repository"

export class MessagesService {


    private messageRepository : MessagesRepository

    constructor() {

        this.messageRepository = new MessagesRepository()

    }

    async findOne(id: string) {

        console.log(id)
        return await this.messageRepository.findOne(id)
    }

    async findAll() {

        
        return await this.messageRepository.findAll()
    }

    async createMessage(content: string) {

        return await this.messageRepository.createMessage(content)
    }
}
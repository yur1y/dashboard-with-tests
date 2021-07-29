import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';


  import { QuestionService } from './question.service';
  
  @Controller('questions')
  export class QuestionController {
    constructor(private readonly service: QuestionService) {}
  
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() data: any) {
      if(data && data.length) {
        return await this.service.createMany(data);        
      }
      return await this.service.create(data);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any) {
      return await this.service.update(id, data);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }
  
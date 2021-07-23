import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { BaseQuestionDto } from './base-question.dto'
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
    async create(@Body() createTodoDto: BaseQuestionDto) {
      console.log({ createTodoDto });
      return await this.service.create(createTodoDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: BaseQuestionDto) {
      return await this.service.update(id, updateTodoDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }
  
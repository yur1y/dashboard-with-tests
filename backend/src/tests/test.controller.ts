import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { QuestionService } from 'src/questions/question.service';

  import { TestService } from './test.service';
  
  @Controller('tests')
  export class TestController {
    constructor(private readonly service: TestService, private readonly questionsService: QuestionService) {}
  
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      const test = await this.service.findOne(id);
      const questions = await this.questionsService.findAll({_id: {$in: test.questions}}, {_id:1, text:1, variants:1})
      test.questions = questions;
      return test;
    }
  
    @Post()
    async create(@Body() data: any) {
      if(data.questions) {
        data.questions = await this.questionsService.createMany(data.questions)
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
  
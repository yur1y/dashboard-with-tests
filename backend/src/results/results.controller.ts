import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { ResultService } from './results.service';
  import { TestService } from '../tests/test.service';
import { QuestionService } from 'src/questions/question.service';
  
  @Controller('results')
  export class ResultsController {
    constructor(private readonly service: ResultService,
      private readonly questionsService: QuestionService,
       private readonly testService: TestService) {}
  
    @Get()
    async index() {
      return await this.service.findAll();
    }

    @Get('stats')
    async stats() {
      return await this.service.stats();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post() // result get sent 
    async create(@Body() data: any) {
      const {test_id, questions, createdAt, duration} = data;
      const test = await this.testService.findOne(test_id)
      const testQuestions = await this.questionsService.findAll({_id: {$in: test.questions}}, {_id:0, correct:1});
      let score = 0; let totalAnswers = 0; let correctAnswers = 0;
    
      await questions.forEach((q, i) => {
        q.forEach((c,j) => {
          totalAnswers ++;
          if(c === testQuestions[i].correct[j]) {
            correctAnswers++;
          }
        });
      });
      score = Number(parseFloat(((correctAnswers / totalAnswers) * 100).toString()).toFixed(2));
      return await this.service.create({test_id, score, createdAt, duration});
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
  
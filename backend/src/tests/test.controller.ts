import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';

  import { TestService } from './test.service';
  
  @Controller('tests')
  export class TestController {
    constructor(private readonly service: TestService) {}
  
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
      console.log( data );
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
  
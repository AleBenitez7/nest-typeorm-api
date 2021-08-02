import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubTaskDto } from './sub-tasks.dto';
import { SubTaskService } from './sub-tasks.service';

@ApiTags('SubTask')
@Controller('subtask')
export class SubTaskController {

    constructor(private readonly service: SubTaskService) {}

  @Get()
  async getMany() {
    const data = await this.service.getAll();
    return  data ;
  }
  @Get('/task/:taskId')
  async getByIdTask(@Param('taskId', ParseIntPipe) taskId: number){
    const data = await this.service.getByIdTask(taskId);
    return data;
  }
  
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return data ;
  }

  @Post()
  async createPost(@Body() dto: SubTaskDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: SubTaskDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}


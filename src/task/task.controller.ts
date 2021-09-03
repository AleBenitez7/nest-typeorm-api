import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskDto } from './task.dto';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {

    constructor(private readonly service: TaskService<Task>) {}

  @Get()
  async getMany() {
    const data = await this.service.getAll();
    return  {data};
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return {data};
  }

  @Post()
  async createPost(@Body() dto: TaskDto) {
    const data = await this.service.create(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: Task) {
    const data = await this.service.edit(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.delete(id);
    return data;
  }

}

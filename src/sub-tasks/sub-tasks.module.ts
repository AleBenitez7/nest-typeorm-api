import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubTaskController } from './sub-tasks.controller';
import { SubTask } from './sub-tasks.entity';
import { SubTaskService } from './sub-tasks.service';

@Module({
    imports: [TypeOrmModule.forFeature([SubTask])],
    controllers: [SubTaskController],
    providers: [SubTaskService]
})
export class SubTasksModule {}

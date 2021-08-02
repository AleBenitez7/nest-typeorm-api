import { Test, TestingModule } from '@nestjs/testing';
import { SubTaskController } from './sub-tasks.controller';

describe('SubTasksController', () => {
  let controller: SubTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubTaskController],
    }).compile();

    controller = module.get<SubTaskController>(SubTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

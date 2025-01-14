import { Test, TestingModule } from '@nestjs/testing';
import { SubTaskService } from './sub-tasks.service';

describe('SubTasksService', () => {
  let service: SubTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubTaskService],
    }).compile();

    service = module.get<SubTaskService>(SubTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

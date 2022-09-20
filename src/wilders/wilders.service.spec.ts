import { Test, TestingModule } from '@nestjs/testing';
import { WildersService } from './wilders.service';

describe('WildersService', () => {
  let service: WildersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WildersService],
    }).compile();

    service = module.get<WildersService>(WildersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

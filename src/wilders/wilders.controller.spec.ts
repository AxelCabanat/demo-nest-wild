import { Test, TestingModule } from '@nestjs/testing';
import { WildersController } from './wilders.controller';

describe('WildersController', () => {
  let controller: WildersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WildersController],
    }).compile();

    controller = module.get<WildersController>(WildersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

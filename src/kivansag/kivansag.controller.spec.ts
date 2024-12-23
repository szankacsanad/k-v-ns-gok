import { Test, TestingModule } from '@nestjs/testing';
import { KivansagController } from './kivansag.controller';
import { KivansagService } from './kivansag.service';

describe('KivansagController', () => {
  let controller: KivansagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KivansagController],
      providers: [KivansagService],
    }).compile();

    controller = module.get<KivansagController>(KivansagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

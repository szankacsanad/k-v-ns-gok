import { Test, TestingModule } from '@nestjs/testing';
import { KivansagService } from './kivansag.service';

describe('KivansagService', () => {
  let service: KivansagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KivansagService],
    }).compile();

    service = module.get<KivansagService>(KivansagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

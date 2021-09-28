import { Test, TestingModule } from '@nestjs/testing';
import { BanksService } from './banks.service';

describe('BanksService', () => {
  let provider: BanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanksService],
    }).compile();

    provider = module.get<BanksService>(BanksService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

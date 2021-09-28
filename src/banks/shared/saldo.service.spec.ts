import { Test, TestingModule } from '@nestjs/testing';
import { SaldoService } from './saldo.service';

describe('SaldoService', () => {
  let provider: SaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaldoService],
    }).compile();

    provider = module.get<SaldoService>(SaldoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

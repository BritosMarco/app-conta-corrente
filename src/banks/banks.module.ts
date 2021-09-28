import { Module } from '@nestjs/common';
import { BanksController } from './banks.controller';
import { BanksService } from './shared/banks.service';

@Module({
  controllers: [BanksController],
  providers: [BanksService],
})
export class BanksModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Bank } from './shared/bank';
import { BanksService } from './shared/banks.service';

@Controller('banks')
export class BanksController {
  constructor(private banksService: BanksService) {}

  @Get()
  async getAll(): Promise<Bank[]> {
    return this.banksService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Bank> {
    return this.banksService.getById(id);
  }

  @Post()
  async create(@Body() Bank: Bank): Promise<Bank> {
    return this.banksService.create(Bank);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bank: Bank): Promise<Bank> {
    bank.id = id;
    return this.banksService.update(bank);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.banksService.delete(id);
  }
}

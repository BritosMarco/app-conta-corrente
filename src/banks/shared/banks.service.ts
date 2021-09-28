import { Injectable } from '@nestjs/common';
import { Bank } from './bank';

@Injectable()
export class BanksService {
  banks: Bank[] = [
    {
      id: 1,
      nome: 'Marco Brito',
      cpf: '12345678910',
      conta: '123456',
      saldo: 10,
    },
  ];

  getAll() {
    return this.banks;
  }

  getById(id: number) {
    const bank = this.banks.find((value) => value.id == id);
    return bank;
  }

  create(bank: Bank) {
    let lastId = 0;
    if (this.banks.length > 0) {
      lastId = this.banks[this.banks.length - 1].id;
    }
    bank.id = lastId + 1;
    this.banks.push(bank);
    return bank;
  }

  update(bank: Bank) {
    const taskArray = this.getById(bank.id);
    if (taskArray) {
      taskArray.nome = bank.nome;
      taskArray.cpf = bank.cpf;
      taskArray.conta = bank.conta;
      taskArray.saldo = bank.saldo;
    }
    return taskArray;
  }

  delete(id: number) {
    const index = this.banks.findIndex((value) => value.id == id);
    this.banks.splice(index, 1);
  }
}

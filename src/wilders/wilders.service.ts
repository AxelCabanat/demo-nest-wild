import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWilderDto } from './dto/createWilder.dto';
import { Wilder } from './interfaces/wilder.interface';

@Injectable()
export class WildersService {
  wilders: Wilder[] = [
    {
      id: 1,
      name: 'Michel',
      bio: "L'incroyable bio de Michel",
      city: 'Carquefou',
    },
    {
      id: 2,
      name: 'Maurice',
      bio: "L'histoire de Maurice, probablement déclinable en série Netflix",
      city: 'Montceau-les-Mines',
    },
  ];

  findAll(): Wilder[] {
    return this.wilders;
  }

  findOneById(id: string) {
    return this.wilders.find((wilder) => wilder.id === Number(id));
  }
  create(wilder: CreateWilderDto) {
    const arrayLength = this.wilders.length;
    const id: number = this.wilders[this.wilders.length - 1].id + 1;
    const newWilder: Wilder = { id, ...wilder };
    this.wilders = [...this.wilders, newWilder];
  }

  update(id: string, wilder: Wilder) {
    const wilderToUpdate = this.wilders.find((w) => w.id === +id);
    if (!wilderToUpdate) {
      return new NotFoundException('wilder not find');
    }
    if (wilder.hasOwnProperty('city')) {
      wilderToUpdate.city = wilder.city;
    }
    if (wilder.hasOwnProperty('bio')) {
      wilderToUpdate.bio = wilder.bio;
    }
    if (wilder.hasOwnProperty('name')) {
      wilderToUpdate.name = wilder.name;
    }

    const updatedwilder = this.wilders.map((wilder) =>
      wilder.id !== +id ? wilder : wilderToUpdate,
    );
    this.wilders = [...updatedwilder];
    return { updatedwilder: 1, wilder: updatedwilder };
  }

  delete(id: string) {
    const nbwildersBeforeDelete = this.wilders.length;
    this.wilders = [...this.wilders.filter((t) => t.id !== +id)];
    if (this.wilders.length < nbwildersBeforeDelete) {
      return { deletedwilders: 1, nbwilders: this.wilders.length };
    }
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { WildersService } from './wilders.service';
import { Wilder } from './interfaces/wilder.interface';
import { CreateWilderDto } from './dto/createWilder.dto';

@Controller('wilders')
export class WildersController {
  constructor(private readonly wilderSerice: WildersService) {}
  @Get()
  findAll(): Wilder[] {
    return this.wilderSerice.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string): Wilder {
    return this.wilderSerice.findOneById(id);
  }

  @Post()
  createwilder(@Body() newwilder: CreateWilderDto): void {
    this.wilderSerice.create(newwilder);
  }

  @Patch(':id')
  updatewilder(@Param('id') id: string, @Body() wilder: Wilder) {
    this.wilderSerice.update(id, wilder);
  }

  @Delete(':id')
  deletewilder(@Param('id') id: string) {
    this.wilderSerice.delete(id);
  }
}

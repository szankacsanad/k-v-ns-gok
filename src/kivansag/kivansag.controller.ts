import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KivansagService } from './kivansag.service';
import { CreateKivansagDto } from './dto/create-kivansag.dto';
import { UpdateKivansagDto } from './dto/update-kivansag.dto';

@Controller('kivansag')
export class KivansagController {
  constructor(private readonly kivansagService: KivansagService) {}

  @Post()
  create(@Body() createKivansagDto: CreateKivansagDto) {
    return this.kivansagService.create(createKivansagDto);
  }

  @Get()
  findAll() {
    return this.kivansagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kivansagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKivansagDto: UpdateKivansagDto) {
    return this.kivansagService.update(+id, updateKivansagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kivansagService.remove(+id);
  }
}

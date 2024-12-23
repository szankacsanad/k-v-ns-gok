import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKivansagDto } from './dto/create-kivansag.dto';
import { UpdateKivansagDto } from './dto/update-kivansag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KivansagService {

  constructor(
    private prismaService: PrismaService
  ){}

  create(createKivansagDto: CreateKivansagDto) {
    return this.prismaService.kivansag.create({
      data: createKivansagDto,
    });
  }

  findAll() {
    return this.prismaService.kivansag.findMany();
  }

  async findOne(id: number) {
    const eredmeny = await this.prismaService.kivansag.findUnique({
      where: {
        id: id,
      },
    });

    if (!eredmeny) {
      throw new NotFoundException('No kivansag with ID ' + id);
    } else {
      return eredmeny;
    }
  }


  update(id: number, updateKivansagDto: UpdateKivansagDto) {
    return this.prismaService.kivansag.update({
      where: {
        id: id,
      },
      data: updateKivansagDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.kivansag.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

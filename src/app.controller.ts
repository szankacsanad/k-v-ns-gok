import { Controller, Get, Render } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  @Render('index')
  async getHello() {
    return {
      message: await this.prismaService.kivansag.findMany()
    };
  }
}

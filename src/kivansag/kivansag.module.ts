import { Module } from '@nestjs/common';
import { KivansagService } from './kivansag.service';
import { KivansagController } from './kivansag.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [KivansagController],
  providers: [KivansagService, PrismaService],
})
export class KivansagModule {}

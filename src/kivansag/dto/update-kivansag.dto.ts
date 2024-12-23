import { PartialType } from '@nestjs/mapped-types';
import { CreateKivansagDto } from './create-kivansag.dto';

export class UpdateKivansagDto extends PartialType(CreateKivansagDto) {}

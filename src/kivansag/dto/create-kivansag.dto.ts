import { IsDate, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateKivansagDto {
    @IsString()
    kivano: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, { message: 'A kívánságnak minimum 10 betű hosszunak kell lenie' })
    tartalom: string;
}

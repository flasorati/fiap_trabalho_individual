import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRegisterDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(12)
    password: string;

    @IsNotEmpty()
    @IsString()
    site: string;

    @IsPhoneNumber()
    @IsOptional()
    phone: number;
}
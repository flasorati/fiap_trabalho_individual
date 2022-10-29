import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
//import { CreateRegisterDTO } from './dto/createRegister.dto';

@Injectable()
export class RegisterService {
    
    async create(user): Promise<string> {
        const {name, email, password, site, phone } = user
            return `Cliente ${name} cadastrado com sucesso!`;
       
    }}

    



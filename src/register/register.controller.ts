import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDTO} from './dto/createRegister.dto'


@Controller('register')

export class RegisterController {
    constructor(private readonly registerService: RegisterService) {}

@Post()
create(@Body() req:CreateRegisterDTO){
    return this.registerService.create(req);
}
 

}

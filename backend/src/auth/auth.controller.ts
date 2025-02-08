import {Post, Controller, Body, Res} from '@nestjs/common'
import {AuthService} from "./auth.service";
import {SignUpUserDto} from "./dto/sign_up-user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";

@Controller('api')
export class AuthController{

    constructor(private readonly authService:AuthService ) {}
    @Post('register')
    register(@Body() registerUserDto:RegisterUserDto){
        return this.authService.register(registerUserDto);
    }

    @Post('signup')
    sign_up(@Body() signUpUserDto:SignUpUserDto, @Res() res: Response){
        return this.authService.sign_up(signUpUserDto, res);
    }
}
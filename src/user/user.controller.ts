import { Controller, Post , Get , Body} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';



@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
      return this.userService.createUser(createUser);
    }

    //User[] array de user, buscando no array
    @Get()
    async getAllUser(): Promise<UserEntity[]> {
      return this.userService.getAllUser();
    }



}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users endpoint')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({type:UserEntity})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('drafts')
  @ApiOkResponse({type:UserEntity,isArray:true})
  findDrafts() {
    return this.usersService.findDrafts();
  }
  @Get()
  @ApiOkResponse({type:UserEntity,isArray:true})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type:UserEntity})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type:UserEntity})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({type:UserEntity})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa la entidad para TypeORM
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Permite su uso en otros módulos si es necesario
})
export class UserModule {}
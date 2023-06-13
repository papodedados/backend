import { Module } from '@nestjs/common'; 
import { UserModule } from './user/user.module';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),

    TypeOrmModule.forRoot({
      
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'newApp', 
    type: 'postgres',
    port: 5432,
    synchronize: true,      
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    
    // database: process.env.DB_DATABASE,
    // host:  process.env.DB_HOST,
    // password:  'docker',
    //   username:  process.env.DB_USERNAME, 
    
    }), 
    UserModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

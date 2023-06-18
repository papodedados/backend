import { Module } from '@nestjs/common'; 
import { UserModule } from './user/user.module';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AddressModule } from './address/address.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),

    TypeOrmModule.forRoot({
        
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      type: 'postgres',
      port: Number(process.env.DB_PORT),     
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,

    
    //  synchronize: true, 
    //  host:  process.env.DB_HOST,
    //  username:  process.env.DB_USERNAME, 
    //  password:  process.env.DB_PASSWORD,
    //  type: process.env.DB_TYPE,
    //  database: process.env.DB_DATABASE,


    //  host: 'localhost',
    //  username: 'postgres',
    //  password: 'docker',
    //  database: 'newApp', 
    // v
    //  port: 5432,     
    
    }), 
    UserModule, AddressModule, CityModule, StateModule, CacheModule, AuthModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

//console.log('teste  ' + process.env.DB_PASSWORD)
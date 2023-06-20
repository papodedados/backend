import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule } from '@nestjs/jwt'; 
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';


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
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
    CategoryModule,
    ProductModule,
  ],

  controllers: [],
  providers: [

    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
 

  ],
})
export class AppModule {}

//console.log('teste  ' + process.env.DB_PASSWORD)


  
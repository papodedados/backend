import { Module } from '@nestjs/common'; 
import { UserModule } from './user/user.module';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { AddressModule } from './address/address.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CacheModule } from './cache/cache.module';

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
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    migrations: [`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
    
    //  synchronize: true, 
    // database: process.env.DB_DATABASE,
    // host:  process.env.DB_HOST,
    // password:  'docker',
    //   username:  process.env.DB_USERNAME, 
    
    }), 
    UserModule, AddressModule, CityModule, StateModule, CacheModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

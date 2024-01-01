import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from '../user';
import { AuthModule } from '../auth';
import { AppController } from './add.controller';
import { MikroCrudModule } from '../nestjs-crud';
import { CrudEntityFilterContext } from '../common/typing';
import { OrganizationModule } from '../organization';
import { SubscriptionModule } from '../subscription';
import { LocationModule } from '../location';
import { CardModule } from '../card';
import { ReviewModule } from '../review';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    {
      ...MikroCrudModule.configure({
        filters: (entityFilterContext: CrudEntityFilterContext) => {
          return { crudEntityFilter: entityFilterContext }; // `efk` via filter parameters
        }
      }),
      global: true
    },
    UserModule,
    AuthModule,
    OrganizationModule,
    SubscriptionModule,
    LocationModule,
    CardModule,
    ReviewModule
  ],
  controllers: [AppController]
})
export class AppModule {}

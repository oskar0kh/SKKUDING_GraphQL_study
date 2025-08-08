import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../src/prisma/prisma.module';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
  providers: [RestaurantService, RestaurantResolver], // 추가!
  imports: [PrismaModule],
})
export class RestaurantModule {}
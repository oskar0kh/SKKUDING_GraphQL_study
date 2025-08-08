import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// Request 생성용 DTO
@InputType()
export class CreateRestaurantInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsString()
  phone: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  rating?: number;
}
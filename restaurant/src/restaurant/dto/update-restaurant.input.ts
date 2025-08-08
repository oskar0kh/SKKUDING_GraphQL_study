import { InputType, Field, Float, PartialType } from '@nestjs/graphql';
import { CreateRestaurantInput } from './create-restaurant.input';
import { IsNumber, IsOptional, IsString } from 'class-validator';

// create-restaurant (생성용 DTO)를 부분적으로 가져옴 -> Request 수정용 DTO 따로 생성
@InputType()
export class UpdateRestaurantInput extends PartialType(CreateRestaurantInput) {

  // PartialType으로 모든 필드를 선택적(IsOptional)로 만들었지만,
  // 필요 시 개별 @IsOptional/@IsString 등을 다시 명시해도 됨

  @Field({ nullable: true })
  @IsOptional() // 해당 Field를 선택적으로 받을 수 있게 설정
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  rating?: number;
}
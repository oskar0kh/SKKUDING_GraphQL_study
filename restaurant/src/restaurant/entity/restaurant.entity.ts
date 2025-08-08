import { ObjectType, Field, Float } from '@nestjs/graphql';
import { GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType() // Response 보낼 때, 데이터가 가져야할 양식 정의
export class Restaurant {
  @Field() // TS 클래스의 property -> GraphQL의 Field로 등록
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field(() => Float, { nullable: true }) // rating이 없을 수도 있음
  rating?: number;

  @Field(() => GraphQLISODateTime) // GraphQL의 날짜/시간 타입
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
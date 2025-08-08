import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';

import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql'; // GraphQL 모듈 가져오기
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ // Nest.js GraphQL 모듈 초기화
      driver: ApolloDriver, // GraphQL 서버 엔진으로 Apollo 사용

      // code-first 방식 : @Resolver, @Query 등 데코레이터 보고, schema.gql 파일 자동 생성
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // process.cwd() : 현재 프로젝트의 루트 경로

      sortSchema: true, // schema 타입 정의를 알파벳 순서대로 정렬
      playground: true,
      context: ({ req, res }) => ({ req, res}), // GraphQL Resolver에서 HTTP Req, Res 객체 접근 가능하게 설정
    }),
    RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
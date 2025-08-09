import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './entity/restaurant.entity'; // @ObjectType에서 Restaurant 타입 가져오기 (Response 전송용)
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';

@Resolver(() => Restaurant) // RestaurantResolver가 다루는 타입들이 전부 @ObjectType의 'Restaurant' 타입이라는 의미
export class RestaurantResolver {

    // constructor로 Service 로직 DI 주입
    constructor(private readonly restaurantService: RestaurantService) {};

    /*
        1. 모든 restaurant 데이터 불러오기 (Resolver)
        http://localhost:3000/graphql

        기존 'Get /restaurant' -> 'Query restaurants' 변경

            [Restaurant] : Query 반환 타입 (@ObjectType의 Restaurant 객체들의 배열)
            name = Client에서 보내는 query의 이름
    */

    @Query(() => [Restaurant], { name: 'restaurants' })
    async getAllRestaurants() {
        return this.restaurantService.getAllRestaurants(); // Service 로직 사용해서 전체 restaurant 반환
    }

    /*
        2. 특정 name의 restaurant 가져오기 (Resolver)
        http://localhost:3000/restaurant/find?name=생각나는 순대

        search_name : parameter 이름
        { type: () => String } : parameter의 GraphQL상 타입 지정
        search_name : string : parameter의 TypeScript상 타입 지정
    */

    @Query(() => Restaurant, { name: 'restaurants' })
    async getRestaurantByName(@Args('search_name', { type: () => String }) search_name: string) {
        return this.restaurantService.getRestaurantByName(search_name);
    }
}   
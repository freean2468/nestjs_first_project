import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';

@Injectable()
export class CatsService {
    private readonly cats: Array<Cat> = [
        { id: 1, name: 'Cat', age: 5 },
    ];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Array<Cat> {
        return this.cats;
    }

    findOneById(id: number) {
        return {
            id:id,
            name: 'TestCat',
            age: 100
        };
        // return this.cats.find(cat => cat.id === id);
    }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';



@Injectable()
export class HeroService {

  // Angular将会在创建HeroService时把MessageService的单例注入到这个属性中
  constructor(private messageService: MessageService) { }
  // 此方法必须具有某种形式的异步函数签名
  getHeroes(): Observable<Hero[]> {
  this.messageService.add('这里调用了mesageService');
   return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`调用了获取id为${id}的英雄`);
    return of(HEROES.find(x => x.id === id));
  }
}

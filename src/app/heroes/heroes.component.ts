import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero: Hero = {
  id: 35481,
  name: '吉亿'
};

heroes: Hero[];
constructor(private heroService: HeroService) {
  // 构造函数除了使用简单的值对局部变量进行初始化之外,什么都不应该做
}



  // 在ngOnInit之前其实被调用了ngOnChanges,但是之后ngOnChanges会被调用多次,但ngOnInit只会被调用一次
  ngOnInit() {
    // 生命周期钩子,只会被调用一次
    // 在构造函数之后马上进行复杂的初始化逻辑,这里是放置初始化逻辑的好地方
    // 在Angular设置完输入属性后,对该组件进行准备
    // 避免复杂的构造函数逻辑
    this.getHeros();
  }

  getHeros(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(i => this.heroes = i);
  }


}

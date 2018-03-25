import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  goBack(): void {
this.location.back();
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot是一个路由信息的静态快照,抓取自  组建刚刚创建完毕之后
    // paramMap是一个从URL中提取的路由参数值的字典
    // 路由参数总会是字符串,+号可以把字符串转换成数字
const id = +this.route.snapshot.paramMap.get('id');
this.heroService.getHero(id)
.subscribe(i => this.hero = i);
  }
}

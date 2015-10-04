import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {Routes} from './route.config';

@Component({ selector: 'my-dashboard' })
@View({
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DashboardComponent implements OnInit{
	public heroes: Hero[];
	public villains: Hero[];

  constructor(private _heroService: HeroService, private _router: Router) { }

	onInit() {
    this.heroes = this.getHeroes();
    this.villains = this.getVillains();
  }

  gotoDetail(hero) {
    this._router.navigate([`/${Routes.detail.as}`, { id: hero.id }]);
  }

  getHeroes() {
    this.heroes = [];

    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    return this.heroes;
  }

  getVillains() {
    this.villains = [];

    this._heroService.getVillains()
      .then(villains => {
        this.villains = villains;
      });

    return this.villains;
  }
}

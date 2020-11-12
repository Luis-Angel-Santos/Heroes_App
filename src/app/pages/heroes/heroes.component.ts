import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../Models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes: HeroeModel[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( resp => this.heroes = resp);
  }

}

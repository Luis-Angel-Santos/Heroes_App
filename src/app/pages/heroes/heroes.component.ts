import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../Models/heroe.model';
import Swal from 'sweetalert2';

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

  borrarHeroe(heroe: HeroeModel, i: number){
    Swal.fire({
      title: '¿Esta Seguro?',
      text: `¿Esta seguro que desea borrar a ${heroe.nombre}?`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp=>{

      if (resp.value) {
        this.heroes.splice(i, 1);
    this.heroesService.borrarHeroe(heroe.id).subscribe();    
      }
    });
    
  }

}

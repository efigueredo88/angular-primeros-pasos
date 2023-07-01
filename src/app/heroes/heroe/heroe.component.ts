import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name: string = 'GordiMan';
  public age:  number = 34;

  get capitalizaName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name}-${this.age}`
  }

  changeHeroe():void{
     this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }
  resetAll():void{
    this.name = 'Gordiman';
    this.age = 34;
  }
}


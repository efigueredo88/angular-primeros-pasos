import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman','Hulk','Iroman','Dr.Strange','Thor']
  public deletedHeroe?:string;
  removeLastHeroe():void{
     this.deletedHeroe= this.heroNames.pop();
  }
}

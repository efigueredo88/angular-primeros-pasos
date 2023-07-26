import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewnCharacter: EventEmitter<Character>= new EventEmitter();

  public character: Character={
    name:'',
    power:0
  }

  emitCharacter():void{
    console.log(this.character);
   if( this.character.name.length === 0) return;

   this.onNewnCharacter.emit(this.character);

    this.character = {name:'', power:0};
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit{

    playerNameValue = "";


    @Output() addPlayer = new EventEmitter<{name:string}>();

      constructor() { }

      ngOnInit() {
      }

        onAddPlayer(){
            this.addPlayer.emit({name:this.playerNameValue});
        }





}

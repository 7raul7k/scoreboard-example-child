import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Player} from "../models/Player";
import {HomeComponent} from "../home.component";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {

  @Input() player: Player = {
    id: 0,
    name: "",
    score: 0
  }

  @Output() changeScore = new EventEmitter<{ id: number, score: number }>();

  @Output() deletePlayer = new EventEmitter<{id : number}>;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onChangeScore(value: number) {
    this.changeScore.emit({id: this.player.id, score: value});
  }

  onDeletePlayer(){

    this.deletePlayer.emit({id:this.player.id});
  }


}

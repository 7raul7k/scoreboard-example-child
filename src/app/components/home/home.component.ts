import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from "./models/Player";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  players:Player[]=[


    {

      id:0,
      name:"Lavinia",
      score:5
    },

    {

      id:1,
      name:"Andrei",
      score:7
    },

    {

      id:2,
      name:"Ana",
      score:-1
    },
    {

      id:3,
      name:"Ion",
      score:2
    },

    {

      id:4,
      name:"Andreea",
      score:-5
    },

    {

      id:5,
      name:"Raluca",
      score:10
    }
  ];

  playerName = "";



  constructor() { }

  ngOnInit() {

    this.totalScore();

  }

  ngOnDestroy(): void {

  }

  totalScore(){
    let points = 0;
    this.players.forEach(player =>{
     points += player.score;
    });

    return points;
  }

  totalPlayers(){

    return this.players.length;
  }
  handleChangeScore(event:{id:number,score:number}){

    this.players.forEach(player =>{
      if(player.id === event.id){
        player.score += event.score;
      }
    });

  };

  handleDeletePlayer(event:{id:number}){

    this.players.forEach(player =>{
      if(player.id === event.id){
       this.players = this.players.filter(player => player.id !== event.id);
      }
      });
  }

    handleAddPlayer(event:{name:string}){
    this.players.push({
      id:this.players.length,
      name:event.name,
      score:0
    });
    }

}

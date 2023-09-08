import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{

  @Input() points : Number = 0;

  @Input() numberPlayers : Number = 0;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}

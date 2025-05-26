import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: false,
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  @Input() logo!:string;
  // options!:string[];

  constructor(){}
  ngOnInit(){}

}

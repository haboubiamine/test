import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

@Input("img") image :String;
@Input("n") nom :String;
@Input("p") prix :number;
@Input("f") frais: boolean;

claprix:number;
pr:number;


calculer(a:number)
{
  this.claprix=a *this.prix;
}

check(){
  if (this.frais=true)
  return 1;
  else return 0;

}
  constructor() { }

  ngOnInit() {
  }

}

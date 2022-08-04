import { Component, Input, OnInit } from '@angular/core';
import { Recette } from '../Recette';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.scss']
})
export class RecetteFormComponent implements OnInit {
  @Input()recette?: Recette;
  constructor() { }

  ngOnInit(): void {
    console.log(this.recette);
    
  }

}

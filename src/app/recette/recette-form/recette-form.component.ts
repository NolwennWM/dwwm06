import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.scss']
})
export class RecetteFormComponent implements OnInit {
  @Input()recette?: Recette;
  ingredientList: string = "";
  stepsList: string = "";
  types: string[]= [];
  constructor(private recetteService: RecetteService, private router: Router) { }

  ngOnInit(): void {
    this.types = this.recetteService.getRecetteTypeList();
    this.ingredientList = this.recette?.ingredients.join("\n")??"";
    this.stepsList = this.recette?.steps.join("\n")??"";
  }
  hasType(type:string): boolean{
    if(!this.recette) return false;
    return this.recette.type == type;
  }
  selectType($event: Event, type:string): void{
    if(!this.recette) return;
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    this.recette.type = isChecked? type: "";
  }
  onSubmit():void{
    if(this.recette){
      this.recette.ingredients = this.ingredientList.split("\n");
      this.recette.steps = this.stepsList.split("\n");
      this.router.navigate(["/recette", this.recette.id])
    }
  }

}

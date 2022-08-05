import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {
  recette?: Recette;
  constructor(private route: ActivatedRoute, private router: Router, private servRec: RecetteService) { }

  ngOnInit(): void {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    this.servRec.getRecetteById(recetteId).subscribe(
      liste=> this.recette = liste
    )
    // this.recette = this.servRec.getRecetteById(recetteId);
    // console.log(this.recette);
  }
  goToRecetteList(): void{
    this.router.navigate(["/recettes"])
  }
  goToEditRecette(): void{
    this.router.navigate(["/edit/recette", this.recette?.id])
  }
  deleteRecette(): void{
    if(!this.recette) return;
    this.servRec.deleteRecetteById(this.recette.id!).subscribe(
      ()=>this.goToRecetteList()
    )
  }
  /**
   * Si on a trouvé une recette, on affiche toute ses informations.
   * Sinon on ajoute un message indiquant qu'aucune recette ne correspond
   * Bien évidemment responsive.
   */
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.component.html',
  styleUrls: ['./detail-recette.component.scss']
})
export class DetailRecetteComponent implements OnInit {
  recetteList: Recette[] = RECETTES;
  recette?: Recette;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    this.recette = this.recetteList.find(rec=> rec.id === recetteId);
    console.log(this.recette);
  }
  /**
   * Si on a trouvé une recette, on affiche toute ses informations.
   * Sinon on ajoute un message indiquant qu'aucune recette ne correspond
   * Bien évidemment responsive.
   */
}

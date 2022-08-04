import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../Recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-edit-recette',
  templateUrl: './edit-recette.component.html',
  styleUrls: ['./edit-recette.component.scss']
})
export class EditRecetteComponent implements OnInit {
  recette?: Recette;
  constructor(private serv: RecetteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    this.recette = this.serv.getRecetteById(id);
  }

}

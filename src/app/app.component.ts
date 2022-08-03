import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World </h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'mamietonne';
  // ngOnChange(){/* Appelé à chaque changement de notre composant */}
  // ngOnInit(){/* Appelé à la création du composant */}
  // ngDOCheck(){/* Permet d'étendre les détections par défaut de ngOnChange*/}
  // ngAfterViewInit(){/* Appelé juste après que le template soit initialisé */}
  // ngOnDestroy(){/* Appelé juste avant de supprimer le composant */}
}

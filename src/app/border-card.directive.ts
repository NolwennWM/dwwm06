import { Directive, ElementRef, HostListener, Input } from '@angular/core';
type shadow = {x:number, y:number, b: number, r:number};
@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  // @Input() appBorderCard: string|undefined;
  @Input("appBorderCard") borderColor: string|undefined;

  private initColor: string = "black";
  private defaultColor: string = "green";
  private initShadow: shadow = {x:5, y:5, b:10, r:2};
  private defaultShadow: shadow = {x:5, y:5, b:20, r:2};

  // private bonusShadow: [number, number, number, number] = [5,5,10, 2];

  constructor(private el: ElementRef) {
    this.setBorder(2, this.initColor);
    // this.setShadow(...this.bonusShadow, this.initColor);
    this.setShadow(
      this.initShadow.x,
      this.initShadow.y,
      this.initShadow.b,
      this.initShadow.r,
      this.initColor
      );
  }
  setBorder(size: number, color: string){
    this.el.nativeElement.style.border = `${size}px solid ${color}`;
  }
  setShadow(x:number, y:number, blur: number, radius: number, color: string){
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
  }
  @HostListener("mouseenter") onMouseEnter(){
    this.setBorder(4,this.borderColor ||  this.defaultColor);
    this.setShadow(
      this.defaultShadow.x,
      this.defaultShadow.y,
      this.defaultShadow.b,
      this.defaultShadow.r,
      this.borderColor || this.defaultColor
      );
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.setBorder(2, this.initColor);
    this.setShadow(
      this.initShadow.x,
      this.initShadow.y,
      this.initShadow.b,
      this.initShadow.r,
      this.initColor
      );
  }
  /**
   * Ajouter des propriétés "initColor", "defaultColor", "initShadow", "defaultShadow" qui 
   * contiendrons respectivement la couleur de notre bordure, la couleur au survol, 
   * les valeurs par défaut de l'ombre et les valeurs au survol de l'ombre
   * remplacer les valeurs en dur dans nos méthodes par celles des propriétés
   */
}

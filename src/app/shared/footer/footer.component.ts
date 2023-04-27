import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  // para coger el a�o del ordenador 
  constructor( public _servicio:InfoPaginaService) {}
  
}


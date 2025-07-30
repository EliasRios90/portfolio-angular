import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public _service: InfoPaginaService, private router: Router){}

  buscarProducto(termino: string){
    if(termino.length < 1) return;

    this.router.navigate(['/search', termino]);
  }
}

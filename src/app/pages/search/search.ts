import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [CommonModule, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search implements OnInit{
   constructor(private route: ActivatedRoute, public productosService: ProductosService){}

   ngOnInit(): void {
       this.route.params.subscribe(params => {
        console.log(params['termino']) // 'termino' asi como esta en app.routes.ts
        this.productosService.buscarProducto(params['termino']);
       });
   }
}

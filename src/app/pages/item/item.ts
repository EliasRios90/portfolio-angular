import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item implements OnInit{
  producto: ProductoDescripcion | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute, public productoService: ProductosService){}

  ngOnInit(): void {
      this.route.params
        .subscribe(parametros => {
          this.productoService.getProducto(parametros['id'])
          .subscribe((producto: any) => {// any es ProductoDescripcion
            this.id = parametros['id'];
            this.producto = producto;
            //console.log(producto);
          });
      });
  }
}

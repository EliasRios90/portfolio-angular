import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  cargando = true;
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient){
    this.cargarProductos();
  }

  private cargarProductos(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get<any[]>('https://angular-html-fe873-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe({
          next: (res) => {
            this.productos = res;
            this.cargando = false;
            resolve(res); // devuelve los datos
          },
          error: (err) => reject(err)
        });
    });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-fe873-default-rtdb.firebaseio.com/productos/${id}.json`);// retorno un observable
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then((productos) => {
        // productos ya cargados, aplicar filtro
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }
  
  private filtrarProductos(termino: string) {
    this.productosFiltrado = this.productos.filter(prod =>
      prod.categoria?.toLowerCase().includes(termino.toLowerCase()) ||
      prod.titulo?.toLowerCase().includes(termino.toLowerCase())
    );
  }
    
}

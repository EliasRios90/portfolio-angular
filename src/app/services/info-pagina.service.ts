import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient){
    this.cargarInfo();
    this.cargarEquipo();
  }
  
  private cargarInfo(){
    // leer el archivo json
    this.http.get('assets/data/data-pagina.json').subscribe((respuesta: any) => {
        this.cargada = true;
        this.equipo = respuesta;
        //console.log(respuesta);
      });
  }

  private cargarEquipo(){
  this.http.get<any[]>('https://angular-html-fe873-default-rtdb.firebaseio.com/equipo.json').subscribe(respuesta => {
        this.cargada = true;
        this.equipo = respuesta;
        //console.log(this.equipo);
      });
  }
}

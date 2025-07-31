import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss', '../../app.scss']
})
export class About {
  constructor(public _service: InfoPaginaService){}
}

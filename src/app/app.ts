import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Portfolio } from "./pages/portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

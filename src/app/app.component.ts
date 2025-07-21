import { Component } from '@angular/core';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, SliderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

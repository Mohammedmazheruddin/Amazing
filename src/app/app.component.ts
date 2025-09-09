import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Reusable components/footer/footer.component';
import { HeaderComponent } from './Reusable components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent,HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazingstars';
}

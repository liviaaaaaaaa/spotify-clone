import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  scrollCarousel(id: string, amount: number): void {
  const el = document.getElementById(id);
  if (el) el.scrollBy({ left: amount, behavior: 'smooth' });
}
}

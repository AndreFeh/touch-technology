import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
	@Input() presenting_img: string="assets/";
	@Input() missao: string="Nossa missao...";
	@Input() visao:string="Nossa vissao...";
	@Input() valores: string="Nossos valores...";


}

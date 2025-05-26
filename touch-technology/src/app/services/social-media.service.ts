import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
	constructor(){}
	socialLinks = [
		{
		tipoSocial: 'WhatsApp',
		icoSocial: 'assets/ico/whatsapp.ico',
		linkSocial: 'https://wa.me/5541995368320'
		},
		{
		tipoSocial: 'Instagram',
		icoSocial: 'assets/ico/instagram.ico',
		linkSocial: 'https://www.instagram.com/andrefeh.22'
		},
		{
		tipoSocial: 'Facebook',
		icoSocial: 'assets/ico/facebook.ico',
		linkSocial: 'https://www.facebook.com/andre.feh.2025/'
		}
	];

	getSocialLinks() {
		return this.socialLinks;
	}
}

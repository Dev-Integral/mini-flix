import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'

@Component ({
	selector: 'nav-bar',
	templateUrl: `./nav-bar.component.html`,
	styles: [`
		.container-fluid{
			background: #00000f;
			padding: 10px;
			margin-bottom: 10px;
			}
		span{ color: red }
		ul li{
			list-style-type: none;
			margin-right: 30px
				
		}
		h1{
			text-align: center;
		}
		nav a:hover{ border-bottom: 2px solid tomato; cursor: pointer; }
		button{
			display: inline-block;
		}
		a{ text-decoration: none }
		.active{
			border-bottom: 2px solid tomato; 
		}
		.user-name{
		font-weight: bold;
		color: red;
		opacity: 0.8;

		}
		}
	`]
})

export class NavBarComponent {
	closeDropdown: boolean = false;

	constructor( public authService:AuthService){}
	
	logout(){
		this.closeDropdown = true;
		console.log(this.closeDropdown)
		this.authService.logout();
	}
}
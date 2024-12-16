import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true, 
    selector: 'app-root',
    styleUrl:'./app.component.css', 
    templateUrl: './app.component.html',
    imports: [
        RouterLink, 
        RouterOutlet, 
        HeaderComponent 
    ]
})
export class AppComponent {
    title = 'TP05'; 
}
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public slides = [
        { src: '/assets/site-pics/COPPER/BARLEY/Barley1.jpg' },
        { src: '/assets/site-pics/COPPER/T-BIRCH/TBirch3.jpg' },
        { src: '/assets/site-pics/COPPER/BARLEY/Barley2.jpg' },
    ];

    constructor() {}
}

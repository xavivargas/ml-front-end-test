import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    searchKeyword = '';
    constructor(private router: Router) { }

    getItems(): void {
        this.router.navigateByUrl('/items?q=' + this.searchKeyword);
    }
}


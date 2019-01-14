
import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: 'bread-crumb.component.html',
    styleUrls: ['bread-crumb.component.scss']
})

export class BreadCrumbComponent implements OnInit {
    @Input() breadcrumbList: SearchResult;
    constructor() { }

    ngOnInit() {
    }
}

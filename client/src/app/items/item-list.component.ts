import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../shared/models/search-result.model';
import { Price } from '../shared/models/item.model';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../shared/services/item.service';
import { Helper } from '../shared/util/helper';

@Component({
    selector: 'app-item-list',
    templateUrl: 'item-list.component.html',
    styleUrls: ['item-list.component.scss']
})

export class ItemListComponent implements OnInit {

    productList: SearchResult = new SearchResult();
    noResult: boolean = false;
    showWelcome: boolean = true;

    constructor(private itemService: ItemService, private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            const querySearch = params.q;
            if (querySearch) {
                this.itemService.getItems(querySearch).subscribe(
                    response => {
                        this.productList = response;
                        this.noResult = !this.productList || this.productList.items.length === 0;
                        this.showWelcome = false;
                    });
            }
        });
    }

    formatAmnt(price: Price) {
        return Helper.formatPrice(price);
    }
}

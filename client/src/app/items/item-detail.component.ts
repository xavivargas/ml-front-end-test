import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, Price } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';
import { Helper } from '../shared/util/helper';
import { SearchResult } from '../shared/models/search-result.model';

@Component({
    selector: 'app-detail-list',
    templateUrl: 'item-detail.component.html',
    styleUrls: ['item-detail.component.scss']
})

export class ItemDetailComponent implements OnInit {
    item: Item = new Item();
    searchResult: SearchResult = new SearchResult();

    constructor(private route: ActivatedRoute,
        private router: Router,
        private itemService: ItemService) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.getItemById(id);
        }
    }

    formatAmnt(price: Price) {
        return Helper.formatPrice(price);
    }

    getItemById(id: string) {
        this.itemService.getItemById(id).subscribe(
            response => {
                this.item = response.item;
                this.searchResult = response;
            });
    }

    onSearchItemClicked(products: Item[]): void {
        this.onBack();
    }

    onBack(): void {
        this.router.navigate(['/items']);
    }
}

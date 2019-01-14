import { Item, Author } from './item.model';

export class SearchResult {
    author: Author;
    items: Item[];
    categories: string[];
}

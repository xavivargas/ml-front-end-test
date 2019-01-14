import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getItems(keyword: String): Observable<any> {
        return this.http.get(this.baseUrl + '/items?q=' + keyword);
    }

    getItemById(id: string): any {
        return this.http.get<any>(`${this.baseUrl}/items/${id}`);
    }
}

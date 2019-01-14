import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { ItemDetailComponent } from './items/item-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services
import { ItemService } from './shared/services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
      { path: 'items', component: ItemListComponent },
      { path: 'items/:id', component: ItemDetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

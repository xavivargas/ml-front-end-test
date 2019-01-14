import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelResultComponent } from './components/panel-result/panel-result.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule],
    exports: [
        BrowserModule,
        FormsModule,
        BreadCrumbComponent,
        HeaderComponent,
        PanelResultComponent],
    declarations: [
        BreadCrumbComponent,
        HeaderComponent,
        PanelResultComponent],
    providers: []
})
export class SharedModule { }

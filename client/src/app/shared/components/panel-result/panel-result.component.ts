import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-panel-result',
    templateUrl: 'panel-result.component.html',
    styleUrls: ['panel-result.component.scss']
})

export class PanelResultComponent {

    @Input() noResult: boolean = false;
    @Input() showWelcome: boolean = true;

    constructor() { }
}

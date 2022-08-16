import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-collapsible-well',
    template: `
    <div class="row"> 
            <div class="col-6 col-lg-3 white">
                <img src="/assets/icons/chevron-down.svg" [ngClass]="{'start': !visible, 'end': visible}" (click)="toggleContent()" width="30" height="30"> 
                {{ date | date:'medium' }} 
            </div>
            <div class="col-6 col-lg-3 white">
                {{title}} 
            </div>
            <div class="col-3 white">
                {{ date | date:'medium'}}
            </div>
            <div class="col-3 white">
            </div>
        <div>
            <div id="{{idx}}" class="measuringDiv">
                <div class="measuringWrapper">
               <ng-content></ng-content>
            </div>
            </div>
        </div>    
    `,
    styleUrls: ['./collapsible-well.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CollapsibleWellComponent implements OnInit {
    @Input() title: string;
    @Input() date: Date;
    @Input() idx: number;

    @Input() open: boolean = false;

    visible: boolean = true;

    ngOnInit() {
        if (this.open) {
            setTimeout(() => { this.toggleContent(); }, 500);
        }
    }

    toggleContent() {
        this.visible = !this.visible;
        var growDiv = document.getElementById(this.idx.toString()); 
        if(!growDiv) {
            return;
        }
        if (growDiv.clientHeight) { 
            growDiv.style.height = "0"; 
        } else { 
            growDiv.style.height = growDiv.scrollHeight + 'px'; 
        } 
    }

}
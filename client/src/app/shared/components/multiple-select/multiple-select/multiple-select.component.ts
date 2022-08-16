import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Dictionary } from 'src/app/shared/interfaces/dictionary';


@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MultipleSelectComponent implements OnInit {

  @Input() itemsList: Dictionary[];
  @Output() selectedItems = new EventEmitter();

  items = new FormControl();

  selection = [''];

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.selectedItems.emit(this.selection);
  }

}

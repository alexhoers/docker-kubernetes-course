import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services';
import { WineService } from 'src/app/core/services/wine.service';
import { Dictionary } from 'src/app/shared/interfaces/dictionary';


import { Wine } from 'src/app/shared/models/wine';

@Component({
  selector: 'app-wine-add-modal',
  templateUrl: 'wine-add-modal.component.html',
  styleUrls: ['./wine-add-modal.component.scss']
})
export class WineAddModalComponent implements OnInit {

  submitForm: FormGroup;

  wine = new Wine();

  notes: Dictionary[];

  constructor(private wineService: WineService
    ) {
      this.wineService.getNotes().subscribe(notes => {
        this.notes = notes;
      })
    }

  ngOnInit(): void {
    let name = new FormControl(this.wine.name, Validators.required);
    let producer = new FormControl(this.wine.producer, Validators.required);
    let type = new FormControl(this.wine.type, Validators.required);
    let rating = new FormControl(this.wine.rating, [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)]);
    let notes = new FormControl(this.wine.notes, Validators.required);
    let description = new FormControl(this.wine.description, [Validators.required, Validators.maxLength(10)]);

    this.submitForm = new FormGroup({
      name: name,
      producer: producer,
      type: type,
      rating: rating,
      notes: notes,
      description: description
    })
  }

  validateRating() {
    return this.submitForm.controls.rating?.invalid && this.submitForm.controls.rating?.touched;
  }

  submit(formValues: any) {
    console.log(this.submitForm.valid)
    if (this.submitForm.valid) {
      this.wine = formValues.value;
      this.wineService.addWine(this.wine);
    }
  }

}
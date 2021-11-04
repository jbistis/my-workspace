import { Component, OnInit, Input, Host } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormContainerComponent } from './form-container.component';
import { InputBaseComponent } from './input-base.component';

@Component({
  selector: 'pol-input-number',
  template: `
  <mat-form-field [style.width]="'100%'">
    <input matInput type="number" [formControl]="control">
  </mat-form-field>
  `
})

export class InputNumberComponent extends InputBaseComponent implements OnInit {
  @Input() public controlPath: string;

  constructor(@Host() public parent: FormContainerComponent) {
    super(parent);
  }

  ngOnInit() {

  }
}

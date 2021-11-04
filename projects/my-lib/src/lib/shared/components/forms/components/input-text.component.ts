import { Component, OnInit, Input, Host, ViewChild, ElementRef, Inject } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormContainerComponent } from './form-container.component';
import { InputBaseComponent } from './input-base.component';

@Component({
  selector: 'pdl-input-text',
  template: `
  <mat-form-field [style.width]="'100%'">
    <input #input matInput [type]="type" [formControl]="control">
  </mat-form-field>
  `,
})
export class InputTextComponent extends InputBaseComponent {
  @Input() public required = true;
  @Input() public type: string;
  @ViewChild('input', {static: false}) input: ElementRef;

  constructor(@Inject(FormContainerComponent) p: FormContainerComponent) {
    super(p);
  }
}

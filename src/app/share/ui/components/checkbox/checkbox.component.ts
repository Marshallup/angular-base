import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() value = new FormControl(false)

  @Output() onChange = new EventEmitter<boolean>()
 
  // private checkboxValue = new FormControl(this.value)

  toggleValue() {
    const val = !this.value.getRawValue()


    this.value.setValue(val)
    this.onChange.emit(val)
  }
}

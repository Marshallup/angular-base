import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SimpleUniqIdService } from 'src/app/share/service/simple-uniq-id.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() value = new FormControl(false);

  @Input() label = '';

  @Output() onChange = new EventEmitter<boolean>();

  controllId: string;

  constructor(private simpleUniqIdService: SimpleUniqIdService) {
    this.controllId = this.simpleUniqIdService.getUniqId('checkbox');
  }

  // private checkboxValue = new FormControl(this.value)

  toggleValue() {
    const val = !this.value.getRawValue();

    this.value.setValue(val);
    this.onChange.emit(val);
  }
}

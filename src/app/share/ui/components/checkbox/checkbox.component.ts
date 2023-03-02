import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getUniqId } from 'src/app/share/utils';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  controllId: string;

  @Input() label = '';

  @Input() ngModel = false;

  @Output() ngModelChange = new EventEmitter();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {
    this.controllId = getUniqId('checkbox');
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: boolean) {
    this.ngModel = value;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  toggleValue() {
    const newValue = !this.ngModel;

    this.ngModel = newValue;

    this.ngModelChange.emit(newValue);

    this.onChange(newValue);
  }
}

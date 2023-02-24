import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnChanges {
  form: FormGroup;
  testValue = false;
  // checked = new FormControl(true);

  // constructor() {
  //   this.onChange()
  // }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      test: true,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes');
  }

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     test: false,
  //   });
  // }

  // onChange() {
  //   this.checked.valueChanges.subscribe(item => {
  //     console.log(item, 'subscribe change')
  //   })
  // }

  // @Input() clone = false
  // @Input() text = 'Content for duplication'

  // toggleClone() {
  //   console.log('this clone')
  //   this.clone = !this.clone

  //   if (!this.clone) {
  //     this.text = 'Content for duplication'
  //   } else {
  //     this.text = 'Content duplicated'
  //   }
  // }
}

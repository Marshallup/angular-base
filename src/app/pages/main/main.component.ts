import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnChanges  {

  checked = new FormControl(true)

  constructor() {
    this.onChange()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes')
  }

  onChange() {
    this.checked.valueChanges.subscribe(item => {
      console.log(item, 'subscribe change')
    })
  }

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

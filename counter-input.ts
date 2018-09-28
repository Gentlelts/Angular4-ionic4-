import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
/**
 * Generated class for the CounterInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'counter-input',
  templateUrl: 'counter-input.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }]
})

export class CounterInputComponent implements ControlValueAccessor {
  text: string;

  // constructor() {
  //   console.log('Hello CounterInputComponent Component');
  //   this.text = 'Hello World';
  // }
  @Input() counterValue: number;

  // counterValue: number;
  private propagateChange: any = {};
  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);//值传递
  }
  decrement() {
    console.log(this.counterValue);
    console.log(typeof(this.counterValue));
    if(this.counterValue > 0){
      this.counterValue--;
      this.propagateChange(this.counterValue);//值传递
    }else{
      return
    }
  }

  /*实现ControlValueAccessor接口部分*/
  writeValue(val: number): void {
    if (val) {
      this.counterValue = val;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public input1:number
  public input2:number
  public input3:number

  AdditionButton(){
    this.input3=this.input1+this.input2;
  }
  MinusButton(){
    this.input3=this.input1-this.input2;
  }
  MultiplicationButton(){
    this.input3=this.input1*this.input2;
  }
  DivisionButton(){
    this.input3=this.input1/this.input2;
  }
}

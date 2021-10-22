import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Input() firstNum: any;
  @Input() secondNum: any;

  ans: any;
  solve = 0;

    AdditionButton(){
      this.ans = this.firstNum + this.secondNum;
      this.solve = this.ans;
      console.log(this.ans);
    }

    MinusButton(){
      this.ans = this.firstNum - this.secondNum;
      this.solve = this.ans;
      console.log(this.ans);
    }

    MultiplicationButton(){
      this.ans = this.firstNum * this.secondNum;
      this.solve = this.ans;
      console.log(this.ans);
    }

    DivisionButton(){
      this.ans = this.firstNum / this.secondNum;
      this.solve = this.ans;
      console.log(this.ans);
    }

    ngOnInit(): void {
    }
}

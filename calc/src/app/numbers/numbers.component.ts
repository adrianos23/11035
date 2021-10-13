import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  n_firstNum = 0;
  n_secondNum = 0;

  firstNum = 0;
  secondNum = 0;

  getfirst(value: string){
    this.n_firstNum = parseInt(value);
    if (!isNaN(this.n_firstNum)){
      this.firstNum = this.n_firstNum;
      console.log(this.n_firstNum);
    }
  }

  getsecond(value: string){
    this.n_secondNum = parseInt(value);
    if(!isNaN(this.n_secondNum)){
      this.secondNum = this.n_secondNum;
      console.log(this.n_secondNum);
    }
  }

  ngOnInit(): void {
  }

}

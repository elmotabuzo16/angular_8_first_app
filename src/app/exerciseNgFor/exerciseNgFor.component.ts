import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerciseNgFor',
  templateUrl: './exerciseNgFor.component.html',
  styleUrls: ['./exerciseNgFor.component.css']
})
export class ExerciseNgForComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  username = '';
  usernameAdd = false;
  usernameStatus = '';
  usernames = ['EVTABUZ', 'ETABUZO'];

  constructor() { 
    this.usernameStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  onAddUsername() {
    this.usernameAdd = true;
    this.usernames.push(this.username);
    return this.usernameStatus;
  }

  getColor() {
    return this.usernameStatus === 'online' ? 'green' : 'red';
  }

}

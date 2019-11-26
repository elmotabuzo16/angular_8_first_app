import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Tester';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  getStatus() {
    return this.serverStatus;
  }

  onClickServer() {
    this.serverCreationStatus = 'Server was created' + '. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

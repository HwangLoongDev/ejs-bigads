import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  date!: string;

  constructor() {
    setInterval(() => {
      this.date = moment().format('DD/MM/y H:mm:ss');
    }, 1000);
  }

  ngOnInit(): void {}
}

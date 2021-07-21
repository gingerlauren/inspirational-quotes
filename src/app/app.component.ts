import { Quotes, } from './quotes'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes = [
    new Quotes(1, 'If you do not find the way you must create one.', `Diamond Trust`, 0,0, `Ginger Lauren`, new Date(2021, 2, 15)),
  ]

}

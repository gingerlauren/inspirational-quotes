import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, 'If you can not find a way you need you need to create one', 'Diamond Trust',0, 0,`Ginger Lauren`, new Date(2021, 2, 15)),

  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlighter(index){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes = [];
     this.quotes.forEach(quote => votes.push(quote.upvote));
     if (check === Math.max(...votes)) {
      return true;
    }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] = [
    new Quote(1, "Opportunity", "Don't Wait for opportunity. Create it.", "Mburia", new Date(2019, 11, 1), 0, 0),
    new Quote(2, "Perseverance", "If you want to see the rainbow you have to put up with the rain", "Skimankings", new Date(2019, 11, 1), 0, 0),
    new Quote(3, "Technology", "Technology is a useful servant but a dangerous master.", "Hammerton", new Date(2019, 11, 1), 0, 0),
    new Quote(4, "Determination", " “The grass is always greener when you water it”.", "Angelo", new Date(2019, 11, 1), 0, 0),
  ]
  
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`You are about to delete ${this.quotes[index].name}, Would you like to continue?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  numberOfLikes : number=0;
  numberOfDislikes =0;

  likeButtonClick(i) {
    this.quotes[i].numberOfLikes++;
  }

  

  dislikeButtonClick(i) {
    this.quotes[i].numberOfDislikes++;
  }

  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].numberOfLikes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }


  constructor() { }

  ngOnInit() {
  }

}

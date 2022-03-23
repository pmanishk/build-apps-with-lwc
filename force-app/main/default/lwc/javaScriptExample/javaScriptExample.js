import { LightningElement,track } from 'lwc';

export default class ObjectCmp extends LightningElement {
    greetings = "Good Evening"
   // creating an Object
   @track 
   book = {bookName:"Stunning Success", authorName:"Bhargavi", cost:500, edition:2};

    inputBookName(event){
        this.book.bookName = event.target.value
    }
    inputAuthorName(event){
        this.book.authorName = event.target.value
    }
    inputCost(event){
        this.book.cost = event.target.value
    }
    inputEdition(event){
        this.book.edition = "Latest"
    }
}
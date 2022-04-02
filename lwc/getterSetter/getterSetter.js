import { LightningElement, track } from 'lwc';

export default class EvenOddButton extends LightningElement {

    messageVisible = false;
    visible = false;
    number1 = 0;
    
    checkNum(event){
        this.number1 = event.target.value;
    }
   toggle(event){
       this.messageVisible = true;
       this.visible = !(this.number1 % 2);
       
   }

}
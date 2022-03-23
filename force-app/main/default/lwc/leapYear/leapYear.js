import { LightningElement } from 'lwc';

export default class LeapYear extends LightningElement { 
    
    messageVisible = false;
    visible;
    year1;
    checkNum(event){
        this.year1 = event.target.value;
    }
   toggle(event){
       this.messageVisible = this.year1 != NULL;
       this.visible = (0 == this.year1 % 4) && (0 != this.year1 % 100) || (0 == this.year1 % 400); 
       
   }

}
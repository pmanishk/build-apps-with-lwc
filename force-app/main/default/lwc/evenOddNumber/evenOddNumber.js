import { LightningElement, track } from 'lwc';

export default class EvenOdd extends LightningElement {
    @track
    messageVisible = false;
    @track
    visible;
 
    toggle(event) {
        this.messageVisible = true;
        this.visible = event.target.value %2 ==0;
    }
}
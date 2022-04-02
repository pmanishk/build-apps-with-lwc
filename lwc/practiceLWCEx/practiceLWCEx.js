import { LightningElement } from 'lwc';

 export default class cardEx1 extends LightningElement {
        clickedButtonLabel;
    
        handleClick(event) {
            this.clickedButtonLabel = event.target.label;
        }
    }
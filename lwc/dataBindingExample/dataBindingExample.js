import { LightningElement } from 'lwc';

export default class DataBindingEx1 extends LightningElement {
    courseName = "LWC";
    courseFees = 450;
    hours = new Date();
    hr = this.hours.getHours();
    greetings = "Hi";
 
    inputCourse(event){//       UI
        this.courseName = event.target.value;
        if(this.hr <= 12){
            this.greetings = "Good Morning";
        }else if(this.hr <= 16){
            this.greetings = "Good Afternoon";
        }
        else {
            this.greetings = "Good Evening";
        }
        
    }

    inputFees(event){
        this.courseFees = event.target.value
    }
}
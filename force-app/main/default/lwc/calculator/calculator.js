import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    num = "";
    temp;
    operator="";
    temp2;
    flag= true;

    allclr(){
        this.num ="";
        this.temp = "";
        this.operator ="";
    }
    clr(){
        this.num = "";
    }
    numClick(event) {
        console.log(this.num)
        if(this.num == "undefined"){
            this.num = "";
        }
            this.num += event.target.label;
    }

    oprClick(event) {
        if (this.operator && this.temp) {
            this.temp2 = this.num;
            this.calc();
            this.temp= this.temp2;
        } else{

        }
            this.temp = this.num;
            this.num = "";
            this.operator = event.target.label;
    }

    calc(event) {
        if (this.num && this.temp){
            
            if (this.operator === '+') {
                this.num = parseFloat(this.num) + parseFloat(this.temp);
            } else if (this.operator === '-') {
                this.num = parseFloat(this.temp) - parseFloat(this.num);
            } else if (this.operator === '*') {
                this.num = parseFloat(this.num) * parseFloat(this.temp);
            } else{
                this.num = parseFloat(this.temp) / parseFloat(this.num);
            }
        }else{
            console.log('Please enter a number')
        }
        
    }
}
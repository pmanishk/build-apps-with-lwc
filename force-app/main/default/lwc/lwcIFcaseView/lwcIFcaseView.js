import { LightningElement } from 'lwc';

export default class DBEx2 extends LightningElement {
    num1 = 20
    num2 = 15
    visible = false

    toggel(event){
            this.visible = !this.visible;
    }

    get product(){
      return  this.num1 * this.num2
    }

    get addition(){
        return this.num1 + this.num2
    }

    get difference(){
        return this.num1 - this.num2
    }

    get division(){
        return this.num1 / this.num2
    }

    get greaterThan(){
        return  this.num1 > this.num2
    }

    get greaterThanEq(){
        return  this.num1 > this.num2
    }

    get equalTo(){
        return  this.num1 == this.num2
    }

    get notequalto(){
        return  this.num1 != this.num2
    }
}
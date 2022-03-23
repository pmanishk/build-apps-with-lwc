import { LightningElement, track } from 'lwc';

export default class InputText extends LightningElement {
   @track patient = {
      //properties
      pt_no : 101,
      pt_name : 'Suresh',
      pt_age : 24
   }
   hospital_name = "Parlok Yatra"

  acceptNo(event){
   // this.patient = {...this.patient,"pt_no" : event.target.value}
     this.patient.pt_no = event.target.value
  }
  acceptName(event){
      this.patient.pt_name = event.target.value
  }
  acceptAge(event){
    this.patient.pt_age = event.target.value
  }
  accepthname(event){
    this.hospital_name = event.target.value
  }
}
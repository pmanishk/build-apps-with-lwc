import { LightningElement, api } from 'lwc';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';

export default class BaseCmp_REF1 extends LightningElement {
    cn = CONTACT_NAME
    @api recordId;
    @api objectApiName;

}
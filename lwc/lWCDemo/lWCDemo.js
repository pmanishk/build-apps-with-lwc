import { LightningElement } from 'lwc';
export default class SignUpPage extends LightningElement {
get roleOptions() {
        return [
            { label: 'Developer', value: 'Developer' },
            { label: 'Administrator', value: 'Administrator' }
        ];
    }
    get countryOptions() {
        return [
            { label: 'India', value: 'India' },
            { label: 'USA', value: 'USA' }
        ];
    }
}
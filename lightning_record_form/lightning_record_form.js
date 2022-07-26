import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import name_field from '@salesforce/schema/Account.Name';
import revenue_field from '@salesforce/schema/Account.AnnualRevenue';
import industry_field from '@salesforce/schema/Account.Industry';

export default class Lightning_record_form extends LightningElement {
    @api objectname;
    fields = [name_field, revenue_field, industry_field];
    handleSuccess(event){
        const evnt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evnt);
    }
}
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountHelper.getAccountList';

export default class AccountHelper extends LightningElement {
    @wire(getAccountList) accounts;
}
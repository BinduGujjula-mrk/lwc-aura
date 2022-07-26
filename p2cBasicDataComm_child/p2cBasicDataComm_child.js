import { api, LightningElement } from 'lwc';

export default class P2cBasicDataComm_child extends LightningElement {
    @api message
    @api cardHeading
    @api number
    @api isValid
}
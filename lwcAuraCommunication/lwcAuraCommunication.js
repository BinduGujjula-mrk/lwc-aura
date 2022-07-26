import { api, LightningElement } from 'lwc';

export default class AuraLWCCommunication extends LightningElement {
    @api title
    callAura(){
        const event = new CustomEvent('sendmsg',{detail:{"msg":"Hello From LWC"}})
        this.dispatchEvent(event)
    }
}
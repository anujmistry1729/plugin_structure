import {templateTable_$PLUGIN_ID } from './view-template/templateTable';
import {OuterbasePluginConfig_$PLUGIN_ID} from './pluginConfig';


export class OuterbasePluginTable_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return privileges
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})
    items = []

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateTable_$PLUGIN_ID.content.cloneNode(true))
    }

    connectedCallback(){
        console.log('Hello')
    }

}
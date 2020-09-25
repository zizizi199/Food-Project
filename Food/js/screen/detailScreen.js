import {BaseComponent} from '../BaseComponent.js';

class DetailScreen extends BaseComponent{
    constructor(){
        super();

    }

    render(){
        this._shadowRoot.innerHTML = /*html*/ `
        <div class="main">
            <food-detail></food-detail>
        </div>
        `

    }
}

window.customElements.define('detail-screen', DetailScreen);
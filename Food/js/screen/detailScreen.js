import {BaseComponent} from '../BaseComponent.js';

class DetailScreen extends BaseComponent{
    constructor(){
        super();

    }

    render(){
        this._shadowRoot.innerHTML = /*html*/ `
        <div class="main" style='background: -webkit-linear-gradient(left, #E6D72A, #F18D93);'>
            <food-detail></food-detail>
        </div>
        `

    }
}

window.customElements.define('detail-screen', DetailScreen);
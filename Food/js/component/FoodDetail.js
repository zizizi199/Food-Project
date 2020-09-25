import {BaseComponent} from '../BaseComponent.js';

class FoodDetail extends BaseComponent {
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/ `
        ${style}
        <nav class="navbar">
            <div class="brand">
                <div class="brand-logo"></div>
                <img src="./img/logo.png" alt="" class='brand-logo'>
                <div class="brand-title">MLEM MLEM</div>
            </div>

            <form action="" class="form-search">
                <input-wrapper label='' id='keyword'></input-wrapper>
                <button>🐧🐧🐧</button>
            </form>

            <div class="profile">
                <img src="https://i2.wp.com/i.imgur.com/tNuieNy.jpg?resize=502%2C502&ssl=1" alt="" class="profile-avatar">
                <span class="profile-name">BigcityMoi</span>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('food-detail',FoodDetail);
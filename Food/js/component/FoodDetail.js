import {BaseComponent} from '../BaseComponent.js';
const style =/*html*/ `
    <style>
        .{
            margin: 0;
            padding: 0;
            font-family: tahoma, arial, sans-serif, "lucida grande";
        }
        .container{
            max-width: 1000px;
            margin: 0 auto;
        }
        .video-material{
            max-height:600px;
            display: grid;
            grid-template-columns: 60% 40%;
            grid-column-gap: 10px;
        }

        .grid {
            padding: 30px;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .th2{
            text-align: right;
        }
        
    </style>
`
class FoodDetail extends BaseComponent {
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML = /*html*/ `
        ${style}
        <div class="container">
            <div class="video-material">
                <div class="grid video">
                <iframe width= '600' height='500' src="https://www.youtube.com/embed/dSpo7o6Msw0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </iframe>
                </div>
                <div class="grid material">
                    <table>
                        <tr>
                            <th><h3>Thành phần</h3></th>
                            <th class= 'th2 quantity'>Khẩu phần : 4 người</th>
                        </tr>
                        <tr>    
                            <td>Tôm tươi</td>
                            <td class= 'th2'>200 Gr</td>
                        </tr>
                        <tr>
                            <td>Củ sen</td>
                            <td class= 'th2'>50 Gr</td>
                        </tr>
                        <tr>
                            <td>Giò sống</td>
                            <td class= 'th2'>100 Gr</td>
                        </tr>
                        <tr>
                            <td>Hành lá</td>
                            <td class= 'th2'>20 Gr</td>
                        </tr>
                        <tr>
                            <td>Bột bắp</td>
                            <td class= 'th2'>20 Gr</td>
                        </tr>
                        <tr>
                            <td>Đường trắng</td>
                            <td class= 'th2'>1/2 Muỗng cà phê</td>
                        </tr>
                        <tr>
                            <td>Hạt nêm</td>
                            <td class= 'th2'>1 Muỗng cà phê</td>
                        </tr>
                        <tr>
                            <td>Tiêu</td>
                            <td class= 'th2'>1/2 Muỗng cà phê</td>
                        </tr>
                        <tr>
                            <td>Ớt bột</td>
                            <td class= 'th2'>1/2 Muỗng cà phê</td>
                        </tr>
                        <tr>
                            <td>Dầu hào</td>
                            <td class= 'th2'>1 Muỗng cà phê</td>
                        </tr>

                    </table>

                </div>
            </div>
            <div class="recipe">
            <h3>Hướng dẫn thực hiện</h3> <br>
            1.200gr tôm bóc vỏ, rửa sạch, cắt riêng phần đuôi, băm nhuyễn phần thịt. 50gr củ sen băm nhuyễn, 20gr hành lá cắt nhỏ. Cho tất cả nguyên liệu đã băm nhuyễn vào tô cùng 100gr giò sống, thêm 1/2 muỗng cà phê đường, 1 muỗng cà phê hạt nêm, 1/2 muỗng cà phê tiêu, 1/2 muỗng cà phê ớt bột, 1 muỗng cà phê dầu hào và cuối cùng là 20gr bột bắp. Trộn đều lên và để ướp khoảng 15 phút. <br>
            2.Tiếp đến, dùng bao tay nilong, thoa một chút dầu ăn lên bao tay rồi vo và nặn viên tôm thành viên tròn. Để lên 1 cái đĩa có thoa 1 chút dầu ăn. Nhúng viên tôm qua bột chiên giòn, đến trứng gà, và cuối cùng là bột chiên xù. Phần đuôi tôm cắm vào viên tôm cho đẹp. <br>
            3.Cho dầu vào chảo, thử dầu nóng già thì cho viên tôm vào. Để lửa vừa, chiên đều tôm cho vàng đều là được. <br>
            4.Cho tôm viên ra đĩa, ăn cùng tương ớt Chin-Su rất ngon. Chỉ với chút biến tấu bạn đã có món tôm viên củ sen hấp dẫn, giòn ngon cho cả nhà rồi. <br>
            </div>
        </div>
        `;
    }
}

window.customElements.define('food-detail',FoodDetail);
import React, { Component } from 'react';
import '../assets/styles/order.css'
import emptycircle from '../assets/images/emptycircle.png'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: [],
            items: [],
            price: [],
        }
    }

    // componentWillMount() {
    //     localStorage.getItem("count") && this.setState({
    //         count: localStorage.getItem("count")
    //     })
    //     localStorage.getItem("price") && this.setState({
    //         items: localStorage.getItem("price")
    //     })
    //     localStorage.getItem("itempicked") && this.setState({
    //         items: localStorage.getItem("itempicked")
    //     })
    // }

    render() {
        const item = this.props.items
        // const  newItem = {...item}
        // console.log(newItem[0], "countt")
        const newCount = this.props.count

        return (
            <div>
                <div className="col-md-4">
                    <div className="box_style_4">
                        <p className="orders-made">Your order
                    <i class="fa fa-shopping-cart"></i>&nbsp;
                </p>
                        <table className="table table_summary">

                            {/* {newItem.map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <i class="fa fa-minus-circle"></i>&nbsp;
                                            <strong>1x</strong> {(`${item}`)}</td>
                                        <td><strong className="pull-right">€66</strong>
                                        </td>
                                    </tr>
                                </tbody>


                            ))} */}
                        </table>
                        <div className="row" id="options_2">
                            <div className="col-lg-6 ">
                                <label class>
                                    <div className="iradio_square-grey checked" >
                                        <input type="radio" value checked name="option_2" className="icheck" />
                                        &nbsp; &nbsp;
                                    <i class="fa fa-check-circle"></i>&nbsp; &nbsp; Delivery &nbsp; &nbsp;
                                    &nbsp; &nbsp;<img src={emptycircle} alt="emptycircle" className="emptycircle" />
                                        &nbsp; &nbsp;
    
                                       Take Away
    
                                </div>
                                </label>
                            </div>
                        </div>
                        <hr />
                        <table className="table table_summary">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <span className="pull-right cash">$56</span>
                                </tr>
                                <tr>
                                    <td>Delivery fee</td>
                                    <span className="pull-right cash">$10</span>
                                </tr>
                                <tr className="total">
                                    <td >TOTAL</td>
                                    <span className="pull-right cash">$66</span>
                                </tr>

                            </tbody>
                        </table>
                        <a className="btn_full">ORDER NOW</a>
                    </div>
                </div>



            </div>
        )
    }
}

export default Cart

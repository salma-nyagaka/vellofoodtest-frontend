import React, { Component } from 'react';
import '../assets/styles/order.css'
import emptycircle from '../assets/images/emptycircle.png'
import AlertBox from '../components/AlertBox';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: '',
            open: false
        }
        this.onClick = this.onClick.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onClick = () => {
        if (this.props.itemCount < 20) {
            alert("hey")
            return (<div>
                <h2>hehheh</h2>
            </div>
            );
        }
        else {
            alert("You have successfully made your order")
            window.location.reload();
        }
    }

    openDialog() {
        this.setState({ open: true });
    }

    onDelete(item) {
        const deleteditem = this.props.items.filter(el => el != item)
        this.setState(this.state)

    }

    render() {
        const newItem = this.props.items
        const totalCharged = this.props.subTotal + this.props.deliveryFee

        return (
            <div>

                <div className="col-md-4">
                    <div className="box_style_4">
                        <p className="orders-made">Your order
                         <i class="fa fa-shopping-cart"></i>&nbsp;
                        </p>
                        <table className="table table_summary">

                            {newItem.map((item, index) => (

                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            {/* <button onClick={() => this.onDelete(this.props.items)} > <i class="fa fa-minus-circle"></i>&nbsp;</button> */}
                                            <strong></strong> {item.shoppingitem.item}</td>
                                        <td><strong className="pull-right">€{item.shoppingitem.price}</strong>
                                        </td>
                                    </tr>
                                </tbody>


                            ))}
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
                                    <span className="pull-right cash">€{this.props.subTotal}</span>
                                </tr>
                                <tr>
                                    <td>Delivery fee</td>
                                    <span className="pull-right cash">€{this.props.deliveryFee}</span>
                                </tr>
                                <tr className="total">
                                    <td >TOTAL</td>
                                    <span className="pull-right cash">{totalCharged}</span>
                                </tr>

                            </tbody>
                        </table>
                        <Button onClick={this.openDialog.bind(this)}>Open dialog</Button>
                        <Dialog open={this.state.open} onEnter={console.log('Hey.')}>
                            <DialogTitle>Hello CodeSandbox</DialogTitle>
                            <DialogContent>Start editing to see some magic happen!</DialogContent>
                        </Dialog>
                        <button className="addtocart btn_full" onClick={this.onClick} >ORDER NOW</button>
                    </div>
                </div>



            </div>
        )
    }
}

export default Cart

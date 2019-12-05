import React, { Component } from 'react'
import "../assets/styles/landingpage.css";
import "../assets/styles/order.css";
import food1 from "../assets/images/food18.jpg";
import Cart from '../components/Cart';
import Order from '../components/Order';


const shoppingitems = [
    { item: "Enchiladas", price: "9.40", id: "1", count:0 },
    { item: "Fajitas", price: "8.40", id: "2", count:0},
    { item: "Royal Fajitas", price: "7.40", id: "3", count:0},
    { item: "Chicken Enchilada Wrap", price: "6.00", id: "4", count:0},
]


class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subTotal: 0,
            item: [],
            itemCount: 0,
            deliveryFee: 10,
            totalFee: 0

        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart = async (item) => {

        const price = item.shoppingitem.price
        const itemCount = item.shoppingitem.count

        const newPrice = parseInt(price, 10)
        const newItemCount = parseInt(itemCount, 10)
        const newItem = item
        await this.setState({
            item: [...this.state.item, newItem],
            subTotal: this.state.subTotal + newPrice,
            itemCount: this.state.itemCount + newItemCount,

        })
        // if (Object.values(this.state.item[0]).filter(items => items=== item.shoppingitem.id))(
        //     console.log(item.shoppingitem.count + 1, "kkkk")
        // )
        // const itemss =( Object.values(this.state.item[0]).filter(items => items.id === "1"))
        // if (itemss) {
        //     const count = itemss.map(p => p.id !== "1" ? p.count : {...p, count: p.count + 1});
        //     // const count = itemss.map(p =>  p.count + 1);
        //     console.log(count)

        //   } 


    }

    render() {

        const items = this.state.item

        return (
            <div>

                <div className="box_style_3" id="main_menu>" >
                    <h2 className="inner" > Menu </h2>
                    <h3 className="nomargin_top menu-title" id="starters" >Starters </h3>
                    <p id="starters-description" >Te ferri iisque aliquando pro,
                    posse nonumes efficiantur in cum.Sensibus
                    reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
                    <table className="table table-striped cart-lis" >
                        <thead ><tr >
                            <th > Item </th>
                            <th > Price </th>
                            <th > Order </th>
                        </tr >
                        </thead>
                        {shoppingitems.map(shoppingitem => (
                            <tbody >
                                <tr >
                                    <td >
                                        <figure class="thumb_menu_list" >
                                            <img src={food1} alt="thumb" />
                                        </figure>
                                        <h5 > {shoppingitem.id}. {shoppingitem.item} </h5>
                                        <p > Fuisset mentitum deleniti sit ea. </p>
                                    </td >
                                    <td >
                                        <strong >{shoppingitem.price}</strong>
                                    </td > <td className="options" >
                                        <div className="dropdown dropdown-options dropup" >
                                            <button className="addtocart" onClick={() => this.addToCart({ shoppingitem })}><i className="fa fa-plus" >  </i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>))}
                    </table></div>
                <Cart 
                items={items} 
                subTotal={this.state.subTotal} 
                itemCount={this.state.itemCount}
                deliveryFee={this.state.deliveryFee}
                totalFee={this.state.totalFee}/>
            </div>


        )
    }
}

export default Menu

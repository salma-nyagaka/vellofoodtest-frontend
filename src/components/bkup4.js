// import React, { Component } from 'react'
// import "../assets/styles/landingpage.css";
// import "../assets/styles/order.css";
// import food1 from "../assets/images/food18.jpg";
// import Cart  from '../components/Cart';


// const shoppingitems = [
//     { item: "Mexican Enchiladas", price: "€9, 40", id: 1 },
//     { item: "Fajitas", price: "€8, 40", id: 2 },
//     { item: "Royal Fajitas", price: "€7, 40", id: 3 },
//     { item: "Chicken Enchilada Wrap", price: "€7, 40", id: 4 },
// ]


// class Menu extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             itempicked: '',
//             price: ''
//         }

//     this.addToCart = this.addToCart.bind(this);

//     }

//     componentWillUpdate (nextProps, nextState) {
//         localStorage.setItem("count", nextState.count)
//         localStorage.setItem("itempicked", nextState.itempicked)
//         localStorage.setItem("price", nextState.price)
//     }
    

//     addToCart = async(item, price) => {
//         await this.setState({
//             count: this.state.count + 1,
//             itempicked: item,
//             price: price
//         })
//     }
    
    
//     render(){
        
//         const items = this.state.itempicked
//         const price = this.state.price  
//         const count = this.state.count      
        
//         return (
//             <div>
//             {/* <Cart items={items} price={price} count={count}/> */}

//         <div className="box_style_3" id="main_menu>" >
//             <h2 className="inner" > Menu </h2>
//             <h3 className="nomargin_top menu-title" id="starters" >Starters </h3>
//             <p id="starters-description" >Te ferri iisque aliquando pro,
//             posse nonumes efficiantur in cum.Sensibus
//                     reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//             <table className="table table-striped cart-lis" >
//                 <thead ><tr >
//                     <th > Item </th>
//                     <th > Price </th>
//                     <th > Order </th>
//                 </tr >
//                 </thead>
//                 {shoppingitems.map(shoppingitem => (
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > {shoppingitem.id}. {shoppingitem.item} </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong >{shoppingitem.price}</strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >                  
//                                         <button className="addtocart" onClick={() => this.addToCart(`${shoppingitem.item}`, `${shoppingitem.price}`)}><i className="fa fa-plus" >  </i></button>
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>))}
//             </table></div>
//             </div>


//     )
// }}

// export default Menu
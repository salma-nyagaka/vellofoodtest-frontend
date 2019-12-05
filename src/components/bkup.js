// import React from "react";
// import "../assets/styles/landingpage.css";
// import "../assets/styles/order.css";
// import food1 from "../assets/images/food18.jpg";
// import food2 from "../assets/images/food19.jpg";
// import food3 from "../assets/images/food30.jpg";
// import food4 from "../assets/images/food32.jpg";
// import food5 from "../assets/images/food33.jpg";
// import food6 from "../assets/images/food34.jpg";
// import food7 from "../assets/images/food35.jpg";
// import drink1 from "../assets/images/coke.jpg";
// import drink2 from "../assets/images/energydrink.jpg";
// import drink3 from "../assets/images/pepsi.jpeg";
// import drink4 from "../assets/images/dietcoke.jpg";





// const Menu = () => {
//     return (
//         <div>
//             <div className="box_style_3" id="main_menu>" >
//                 <h2 className="inner" > Menu </h2>
//                 <h3 className="nomargin_top menu-title" id="starters" >Starters </h3>
//                 <p id="starters-description" >Te ferri iisque aliquando pro,
//                 posse nonumes efficiantur in cum.Sensibus
//                 reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//                 <table className="table table-striped cart-lis" >
//                     <thead ><tr >
//                         <th > Item </th>
//                         <th > Price </th>
//                         <th > Order </th>
//                     </tr >
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > 1. Mexican Enchiladas </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food2} alt="thumb" />
//                                 </figure>
//                                 <h5 > 2. Fajitas </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food3} alt="thumb" />
//                                 </figure>
//                                 <h5 > 3. Royal Fajitas </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food4} alt="thumb" />
//                                 </figure>
//                                 <h5 > 4. Chicken Enchilada Wrap </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <h3 className="nomargin_top menu-title" id="main courses" >Main courses </h3>
//                 <p id="starters-description" >Te ferri iisque aliquando pro,
//                 posse nonumes efficiantur in cum.Sensibus
//                 reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//                 <table className="table table-striped cart-lis" >
//                     <thead ><tr >
//                         <th > Item </th>
//                         <th > Price </th>
//                         <th > Order </th>
//                     </tr >
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food5} alt="thumb" />
//                                 </figure>
//                                 <h5 > 5. Cheese Quesadilla </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food6} alt="thumb" />
//                                 </figure>
//                                 <h5 > 6. Chorizo & Cheese </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 7. Beef Taco </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 8. Minced Beef Double Layer </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > 9. Piri Piri Chicken </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > 10. Burrito Al Pastor </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <h3 className="nomargin_top menu-title" id="beef" >Beef </h3>
//                 <p id="starters-description" >Te ferri iisque aliquando pro,
//                 posse nonumes efficiantur in cum.Sensibus
//                 reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//                 <table className="table table-striped cart-lis" >
//                     <thead ><tr >
//                         <th > Item </th>
//                         <th > Price </th>
//                         <th > Order </th>
//                     </tr >
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 11. Beef Enchilada Wrap </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food6} alt="thumb" />
//                                 </figure>
//                                 <h5 > 12. Chicken Fillet Taco </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 13. Tiger Prawn & Chorizo</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 14. Fillet Steak & Chorizo</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > 15. Burrito's with Rice </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food1} alt="thumb" />
//                                 </figure>
//                                 <h5 > 16. Mexican Burger </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <h3 className="nomargin_top menu-title" id="desserts" >Desserts </h3>
//                 <p id="starters-description" >Te ferri iisque aliquando pro,
//                 posse nonumes efficiantur in cum.Sensibus
//                 reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//                 <table className="table table-striped cart-lis" >
//                     <thead ><tr >
//                         <th > Item </th>
//                         <th > Price </th>
//                         <th > Order </th>
//                     </tr >
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 >17. Chocolate Fudge Cake </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food6} alt="thumb" />
//                                 </figure>
//                                 <h5 >18. Cheesecake </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 19. Apple Pie & Custard</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={food7} alt="thumb" />
//                                 </figure>
//                                 <h5 > 20. Profiteroles</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <h3 className="nomargin_top menu-title" id="drinks" >Drinks </h3>
//                 <p id="starters-description" >Te ferri iisque aliquando pro,
//                 posse nonumes efficiantur in cum.Sensibus
//                 reprimique eu pro.Fuisset mentitum deleniti sit ea. </p>
//                 <table className="table table-striped cart-lis" >
//                     <thead ><tr >
//                         <th > Item </th>
//                         <th > Price </th>
//                         <th > Order </th>
//                     </tr >
//                     </thead>
//                     <tbody >
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={drink1} alt="thumb" />
//                                 </figure>
//                                 <h5 >21. Coke 0.33Le </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={drink2} alt="thumb" />
//                                 </figure>
//                                 <h5 >22. Energy drink 0.33L </h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={drink3} alt="thumb" />
//                                 </figure>
//                                 <h5 > 23. Pepsi</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                         <tr >
//                             <td >
//                                 <figure class="thumb_menu_list" >
//                                     <img src={drink4} alt="thumb" />
//                                 </figure>
//                                 <h5 > 24. Diet coke</h5>
//                                 <p > Fuisset mentitum deleniti sit ea. </p>
//                             </td >
//                             <td >
//                                 <strong > €9, 40 </strong>
//                             </td > <td className="options" >
//                                 <div className="dropdown dropdown-options dropup" >
//                                     <a href="#"
//                                         className="dropdown-toggle"
//                                         data-toggle="dropdown"
//                                         aria-expanded="true" >
//                                         <i className="fa fa-plus" >
//                                         </i>
//                                     </a >
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>


                
//             </div>
//         </div>
//     )
// }


// export default Menu;
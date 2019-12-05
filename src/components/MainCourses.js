import React from 'react';
import '../assets/styles/landingpage.css'
import '../assets/styles/order.css'
import food1 from '../assets/images/food18.jpg'
import food2 from '../assets/images/food19.jpg'


const MainCourses = () => {

    return (
        <div>
            <div className="box_style_3" id="main_menu>">
                <h2 className="inner">Menu</h2>
                <h3 className="nomargin_top" id="starters">Starters</h3>
                <p id="starters-description">
                    Te ferri iisque aliquando
                    pro, posse nonumes efficiantur in cum.
                    Sensibus reprimique eu pro.
                    Fuisset mentitum deleniti sit ea.
                </p>
                <table className="table table-striped cart-lis">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <figure class="thumb_menu_list">
                                    <img src={food1} alt="thumb" />
                                </figure>
                                <h5>1. Mexican Enchiladas</h5>
                                <p>Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td>
                                <strong>€ 9,40</strong>
                            </td>
                            <td className="options">
                                <div className="dropdown dropdown-options dropup">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <figure class="thumb_menu_list">
                                    <img src={food1} alt="thumb" />
                                </figure>
                                <h5>2. Fajitas</h5>
                                <p>Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td>
                                <strong>€ 9,40</strong>
                            </td>
                            <td className="options">
                                <div className="dropdown dropdown-options dropup">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <figure class="thumb_menu_list">
                                    <img src={food2} alt="thumb" />
                                </figure>
                                <h5>3. Royal Fajitas</h5>
                                <p>Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td>
                                <strong>€ 9,40</strong>
                            </td>
                            <td className="options">
                                <div className="dropdown dropdown-options dropup">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <figure class="thumb_menu_list">
                                    <img src={food2} alt="thumb" />
                                </figure>
                                <h5>4. Chicken Enchilada Wrap</h5>
                                <p>Fuisset mentitum deleniti sit ea.</p>
                            </td>
                            <td>
                                <strong>€ 9,40</strong>
                            </td>
                            <td className="options">
                                <div className="dropdown dropdown-options dropup">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainCourses

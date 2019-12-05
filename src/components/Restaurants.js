import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom';
import mexican from '../assets/images/mexican.jpg'
import sushi from '../assets/images/sushi.jpg'
import pizza from '../assets/images/pizza.jpg'
import japan from '../assets/images/japan.jpg'
import china from '../assets/images/china.jpg'
import dragon from '../assets/images/dragon.jpg'


const Cards = () => {
    const [spacing] = React.useState(2);
    const rating = <div className="rating">
        <i className="fa fa-star voted"></i>
        <i className="fa fa-star voted">
        </i><i class="fa fa-star voted">
        </i><i class="fa fa-star voted">
        </i><i class="fa fa-star"></i>
    </div>


    return (
        <div>
            <div class="main-title">
                <h2 class="nomargin_top restaurant-title">Choose from Most Popular</h2>
                <p>
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
            </div>
            <Grid container className="restaurant-list" >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item className="card-hover">
                            <Paper className="restaurant-paper" >
                                <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={mexican} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">Taco Mexican</h3>
                                    <div className="type">
                                        Mexican / American
                                    </div>
                                    <div className="location">
                                        135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                                    </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-check"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className="restaurant-paper">
                            <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={sushi} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">Sushi Gold</h3>
                                    <div className="type">
                                        Sushi / Japanese
                                    </div>
                                    <div className="location">
                                        135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>                                    
                                        </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-close"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className="restaurant-paper" >
                            <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={pizza} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">Naples Pizza</h3>
                                    <div className="type">
                                        Italian / Pizza

                                    </div>
                                    <div className="location">
                                        135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>                              
                                        </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-check"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className="restaurant-paper" >
                            <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={dragon} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">Dragon Tower</h3>
                                    <div className="type">
                                        Chinese / Thai
                                    </div>
                                    <div className="location">
                                        135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>                           
                                        </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-check"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className="restaurant-paper" >
                            <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={japan} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">Japan Food</h3>
                                    <div className="type">
                                        Sushi / Japanese
    
                                    </div>
                                    <div className="location">
                                        135 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>                       
                                        </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-check"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>

                        <Grid item>
                            <Paper className="restaurant-paper" >
                            <Link to="/order">
                                <div className="ribbon"></div>
                                <img src={china} className='restaurant-logo' alt='logo' />
                                <div className="restaurant-details">

                                    {rating}
                                    <h3 className="restaurant-name">China Food</h3>
                                    <div className="type">
                                    Chinese / Vietnam
                                        
                                    </div>
                                    <div className="location">
                                    35 Newtownards Road, Belfast, BT4. <span class="opening">Opens at 17:00</span>                      
                                    </div>
                                    <ul className="check-buttons">
                                        <li>Take away &nbsp;<i className="fa fa-check" ></i></li>
                                        <li>Delivery &nbsp;<i className="fa fa-check"></i></li>
                                    </ul>
                                </div>
                                </Link>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards

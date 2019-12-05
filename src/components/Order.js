import React from 'react';
import '../assets/styles/landingpage.css'
import '../assets/styles/order.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mexican from '../assets/images/mexican.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from './Menu'
import Cart from './Cart'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        float: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        marginLeft: 50,
        marginRight: 50,
        color: theme.palette.text.secondary,
        backgroundColor: '#F5F5F5',
        boxShadow: 'none'
    },
}));

const Orders = () => {
    const classes = useStyles();
    const rating = <div className="rating">
        <i className="fa fa-star voted"></i>
        <i className="fa fa-star voted">
        </i><i class="fa fa-star voted">
        </i><i class="fa fa-star voted">
        </i><i class="fa fa-star"></i>
        (<a href="#" className="reviews">Read 98 reviews</a>)
         </div>

    const rightArrow = <div><i class="fa fa-angle-right" /></div>


    return (
        <div>
            <div className="image">
                <div className="navbar">
                    <Navbar />
                </div>
                <div class="centered">
                    <img src={mexican} className='specific-restaurant-logo' alt='logo' />
                    {rating}
                    <h3 className="specific-restaurant-name">Mexican TaComex</h3>
                    <div className="specific-type">
                        Mexican / American
                                       </div>
                    <div className="specific-location">
                        <i class="fa fa-map-marker"></i> &nbsp;
                            135 Newtownards Road, Belfast, BT4 1AB -
                               <strong className="specific-opening">Delivery charge: </strong>
                        $10, free over $15.
                       </div>
                </div>
            </div>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <div className="col-md-3">
                                <p>
                                    <a aref="#" className="btn_side">Back to search</a>
                                </p>
                                <div className="box_style_1">
                                    <ul id="cat_nav">
                                        <li><a href="#starters" className="active">Starters<span>(141)</span>{rightArrow}</a></li>
                                        <li><a href="#main courses" >Main Courses<span>(20)</span>{rightArrow}</a></li>
                                        <li><a href="#beef">Beef<span>(12)</span>{rightArrow}</a></li>
                                        <li><a href="#desserts" >Desserts<span>(11)</span>{rightArrow}</a></li>
                                        <li><a href="#drinks">Drinks<span>(20)</span>{rightArrow}</a></li>
                                    </ul>
                                </div>
                                <div className="box_style_2" id="help">
                                    <i className="fa fa-life-saver"></i>
                                    <h4>Need<span>Help?</span></h4>
                                    <a href="tel://004542344599" className="phone">+45 423 445 99</a>
                                    <small>Monday to Friday 9.00am - 7.30pm</small>
                                </div>
                            </div>
                        </Paper>
                    </Grid>


                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                           <Menu />
                        </Paper>
                    </Grid>

{/* 
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Cart />
                        </Paper>
                    </Grid> */}

                </Grid>
            </div>
            <div className="footer">
                <Footer />
                <hr />
                <div id="social_footer">
                  <ul>
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-google"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                        <li><a href="#" className="fa fa-youtube"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                        <li><a href="#" className="fa fa-vimeo"></a></li>
                        </ul>                 
                    <p>
                        © Quick Food 2019
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Orders

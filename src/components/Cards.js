import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import address from '../assets/images/icon_home_1.svg'
import restaurant from '../assets/images/icon_home_2.svg'
import payment from '../assets/images/icon_home_3.svg'
import deliverycar from '../assets/images/icon_home_4.svg'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Cards = () => {
    const [spacing] = React.useState(2);
    const classes = useStyles();


    return (
        <Grid container className={classes.root} >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid item>
                        <Paper className="paper" id="one">
                            <img src={address} className='card-logo' alt='logo' />
                            <span>1</span>
                            <h3 className="card-title">Search by address</h3>
                            <p className="card-paragraph">Find all restaurants available in your zone.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper" id="two">
                            <img src={restaurant} className='card-logo' alt='logo' />
                            <span>2</span>
                            <h3 className="card-title">Choose a restaurant</h3>
                            <p className="card-paragraph">We have more than 1000s of menus online.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper" id="three">
                            <img src={payment} className='card-logo' alt='logo' />
                            <span>3</span>
                            <h3 className="card-title">Pay by card or cash</h3>
                            <p className="card-paragraph">It's quick, easy and totally secure.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper" id="four">
                            <img src={deliverycar} className='card-logo' alt='logo' />
                            <span>4</span>
                            <h3 className="card-title">Delivery or takeaway</h3>
                            <p className="card-paragraph">
                                You are lazy? Are you backing home?
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Cards

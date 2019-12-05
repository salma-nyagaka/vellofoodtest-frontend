import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import cards from '../assets/images/cards.png'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none'
    },
    menuStyle: {
        boxShadow: 'none'
    }
}));

const Footer = () => {
    const [spacing] = React.useState(2);
    const classes = useStyles();


    return (
        <Grid container className={classes.menuStyle} >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid item style={{ boxShadow: "none" }}>
                        <Paper className="paper-footer" style={{ boxShadow: "none" }}>
                            <h3 className="footer-title">Secure payments with</h3>
                            <p>
                                <img src={cards} alt="" className="payment-cards" />
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper-footer" style={{ boxShadow: "none" }}>
                            <h3 className="footer-title">About</h3>
                            <ul className="footer-list">
                                <li ><a href="#" className="about-list">About us</a></li><br />
                                <li><a href="#" className="about-list">Faq</a></li><br />
                                <li><a href="#" className="about-list">Contacts</a></li><br />
                                <li><a href="#" className="about-list">Login</a></li><br />
                                <li><a href="#" className="about-list">Register</a></li><br />
                                <li><a href="#" className="about-list">Terms and conditions</a></li><br />
                            </ul>

                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper-footer" style={{ boxShadow: "none" }}>
                            <h3 className="footer-title">Newsletter</h3>
                            <p className="footer-list">
                                Join our newsletter to keep be informed about offers and news.
                            </p>
                            <div className="form-group">
                                <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" className="form-control" />
                            </div>
                            <input type="submit" value="Subscribe" className="btn_2" id="submit-newsletter_2"></input>

                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="paper-footer" style={{ boxShadow: "none" }}>
                        <h3 className="footer-title">Settings</h3>
                <div class="styled-select">
                    <select class="form-control" name="lang" id="lang">
                        <option value="English" selected>English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                <div class="styled-select">
                    <select class="form-control" name="currency" id="currency">
                        <option value="USD" selected>USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="RUB">RUB</option>
                    </select>
                </div>

                        </Paper>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            );
        }
        
export default Footer

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import submitrestaurant from '../assets/images/submit_restaurant.jpg'
import delivery from '../assets/images/delivery.jpg'


const WorkCards = () => {
    const [spacing] = React.useState(2);

    return (
        <Grid container >
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid item>
                        <Paper className="submission-paper" >
                            <img src={submitrestaurant} className='submit-logo' alt='logo' />
                            <h3 className="submit-title">Submit your Restaurant</h3>
                            <span className="submit-subtitile">Start to earn customers</span>
                            <p className="submit-paragraph">Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
                            <div class="btn_1">Read more</div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className="submission-paper" >
                            <img src={delivery} className='submit-logo' alt='logo' />
                            <h3 className="submit-title">We are looking for a Driver</h3>
                            <span className="submit-subtitile">Start to earn money</span>
                            <p className="submit-paragraph">Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
                            <div class="btn_1">Read more</div>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default WorkCards

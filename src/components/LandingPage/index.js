import React from "react";
import './style.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function LandingPage(){
    return (
        <Grid container>
            <Grid item sm={12} className="splashImg">
                This is the splash banner
            </Grid>
            <Grid item sm>
                <Paper>
                    pane 1
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper>
                    pane 2
                </Paper>
            </Grid>
        </Grid>
    )

}

export default LandingPage;




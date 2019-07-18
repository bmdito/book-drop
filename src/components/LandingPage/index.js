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

            <Grid item sm={12}>
                <Paper className="section-a-landing">
                    <h1>Welcome to Book Drop! </h1>
                    <p>In todays colleges, students are asked to pay ever-increasing costs
                        for books for each class they take.  And bookstores are offering less and less
                        to buy those books back.  Book Drop is a way for students to connect with each other
                        to sell and purchase books without a middleman.
                    </p>
                    <p> Book Drop links you with students from university or universities near you.</p>
                    <button className="jump-button">Find Books!</button>
                    <button className="jump-button">List a Book!</button>
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




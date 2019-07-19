import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListForm from "../ListForm/index";

class PostListing extends Component {
    
    render(){
        
        
        return(
            <>
                <Grid container>
                    <grid item sm={12}>
                        <ListForm/>
                    </grid>
                </Grid>
            </>

        )
    }
}


export default PostListing;
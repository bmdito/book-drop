import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';

class ListForm extends Component{
    state = {
        subject: '',
        course: '',
        title: '',
        author: '',
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    
    render(){

        return(
            <>
            <Grid container sm={12}>
                <Grid item sm={12}>
                    <div className="form-wrap">    
                    <form className="form">
                        <h2 className="list-header">List a Book for Sale!</h2>
                        <input
                            type="text"
                            name="subject"
                            value={this.state.subject}
                            placeholder="subject"
                            onChange = {this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="course"
                            value={this.state.course}
                            placeholder="course"
                            onChange = {this.handleInputChange}
                        />
                        
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            placeholder="title"
                            onChange = {this.handleInputChange}
                        />
                        
                        <input
                            type="text"
                            name="author"
                            value={this.state.author}
                            placeholder="author"
                            onChange = {this.handleInputChange}
                        />

                        <button className="sub-butt" onClick={this.handleSubmit}>Submit</button>
                    </form>
                    </div>
                </Grid>
            </Grid>    
            </>

        )
    }
}

export default ListForm;
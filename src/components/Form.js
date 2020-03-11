import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name: '',
           URL: ''
       }
       this.updateNameLabel = this.updateNameLabel.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    handleChange = (event) => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.props.addNew(this.state.name)
       
       this.setState({
        name: ''
        })
    }

    updateNameLabel = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(this.state.name);
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state)
    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label form="name"> Name </label>
                <input
                type="text"
                value={this.state.name}
                onChange={this.updateNameLabel}

            />

            <button type="submit"> Submit </button>
            {/* <button onClick={this.handleChange}> Submit </button>  */}
            </form>
        )
    
    }
}

export default Form;

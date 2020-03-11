import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: ['yeet', 'teet']
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    }

    removeLink = (index) => {
        const links = Object.assign([], this.state.favLinks)

        links.splice(index, 1)
 
        this.setState({links:links})

        
    }

    handleSubmit = favLinks => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState((state) => ({
        favLinks: state.favLinks.concat([state])
       }))
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                    <Table linkData ={this.state.favLinks} />
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
            
                <Form addNew= {this.state.handleSubmit} />
            </div>
        )
    }
}

export default LinkContainer;
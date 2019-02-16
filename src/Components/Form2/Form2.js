import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:""
        }
    }

    changeInput = (e) =>{
        this.setState({username:e.target.value})
    }

    findUsername = (e) =>{
        e.preventDefault();
        this.props.submitValue(this.state.username,2)
    }

    render(){
        return(
            <div style={styling}>
            <form className="jumbotron justify-content-center">
                <div className="input-group mb-3">
                    <input style={style2} name="username" onChange={this.changeInput} type="text" value={this.state.username} className="form-control" placeholder="Enter GitHub Username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button onClick={this.findUsername} className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                    </div>
                    </div>
            </form>
            </div>
    )
    }
}

const styling={
    margin:"15px auto"
};

const style2={
    margin:"0 auto"
}

export default Form;
import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(error, info){
        this.setState({hashError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Oops. Tha is not good</h1>
        }
        return this.props.childern
    }
}

export default ErrorBoundry;
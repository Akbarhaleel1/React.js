import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {hasError:false}   
    }

    static getDerivedStatFromError(error){
        return {hasError:false}
    }

    componentDidCatch(error,errorInfo){
        console.log("ErrorBoundary caught an error", error, errorInfo);
    }
    
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong.</h1>;
    }
    return (
        <h1>Welcome to my Olx</h1>
    )
  }
}

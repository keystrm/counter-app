import React, { Component } from 'react';

class Counter extends Component {
    state={
        value: this.props.value
        
       
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    

    handleIncrement = (product) =>{
        
        this.setState({ value: this.state.value +1});
        
    };

  
    
    
    render() { 

        console.log("props",this.props);
        

        return (
            <React.Fragment>
                {this.props.children}
       
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={product=> this.handleIncrement(product)}
                 className="btn btn-secondary btn-sm">
                     
                     Increment
                </button>

                
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count ===0 ? 'Zero' :count;
    }
}
 
export default Counter;
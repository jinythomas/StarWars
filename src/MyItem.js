import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            clicks: 0,
            remainingClicks:100
        }
    }

    clickMe(){
        console.log("I clicked", this.props.name)

        this.setState({
            clicks: this.state.clicks + 1,
            remainingClicks:this.state.remainingClicks -1
        })
    }

    render(){
      return(
        <div>
            <button onClick={() => this.clickMe()}>
            Hello from {this.props.name}
        </button>
        <span>
            {this.state.clicks} clicks. {this.state.remainingClicks} clicks remaining
        </span>
        </div>
      )
    }
}

export default Item;

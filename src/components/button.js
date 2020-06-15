import React from 'react'

class Button extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return (
            <button onClick={this.props.func} class="ui primary button">
                {this.props.text}}
            </button>
        )
    }
}

export default Button 
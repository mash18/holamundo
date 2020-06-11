import React from 'react'

class Regards extends React.Component{
    constructor(props){ //las props para comunicar todas las propiedades de un componente con otro componente nuevo
        super()
    }

    render(){
        return (
            <div>
                <h1>Hola: {this.props.objectName.name}</h1>
            </div>
        )
    }
}
export default Regards
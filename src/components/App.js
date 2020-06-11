import React from 'react'

import Regards from './Regards'
class App extends React.Component{
    constructor(){
        super() //mandar a llamar el scope
        this.state = {//declarar un estado
            name: 'Fernando',  //declarado como string
            last_name: 'Mendoza'
        }
        //this.ChangeState = this.changeState.bind(this) // ya no se necesita el bind por usar row function () =>
    }

    changeState(objectName){
        this.setState(objectName)
    }

    render(){
        return (
            <div>
                <Regards objectName={this.state}/>
                <button onClick={() => this.changeState({name: 'Fernando',last_name: 'Mendoza'})}
                >Fernando</button>
                <button onClick={() => this.changeState({name: 'Manuel',last_name: 'Trujillo'})}
                >Manuel</button>
                <button onClick={() => this.changeState({name: 'Luis',last_name: 'Rosas'})}
                >Luis</button>
            </div>
        )
    }
}
export default App //2da forma de exportar
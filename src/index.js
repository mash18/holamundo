//importacion de modulos y librerias
import React from 'react'
import ReactDom from 'react-dom'

//crear componente
//componentes funcionales
/*
const App = () => {
    return <div></div>
}
function App(){
    return <div></div>
}
*/

//componentes de clase
class App extends React.Component{
    constructor(){
        super() //mandar a llamar el scope
    }

    render(){
        return (
            <div>
                <h1>
                    Hola
                </h1>
                <h2>
                    Mundo
                </h2>
            </div>
        )
    }
}


//renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root') //donde queremos desplegar el componente
);
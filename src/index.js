//importacion de modulos y librerias
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

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

//renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root') //donde queremos desplegar el componente
);
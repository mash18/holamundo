import React from 'react'

class Comments extends React.Component{
    constructor(props){
        super()
        this.state = {
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment
        }
    }

    //metodo a ejecutar antes de la primera renderizacion
    componentWillMount(){
        console.log('Antes del renderizado')
    }

    //metodo a ejecutar despues del primer renderizacion
    componentDidMount(){
        console.log('Despues del renderizado')
        //alert('creaste un comentario')
    }

    componentWillReceiveProps(nextProps){
        console.log('Recibe props',nextProps)
    }

    //antes que el componente se vaya a actualizar, recibe 2 paramatros: las props nuevas y el state que vamos a cambiar
    componentWillUpdate(nextProps,nextState){
        console.log('componente se va a actualizar',nextProps,nextState)
    }

    //se activa justo despues de actualizar el componente, obtiene lo que ya se actualizo
    componentDidUpdate(prevProps,prevState){
        console.log('componente actualizado',prevProps,prevState)
    }

    //justo antes de quitar el componente
    componentWillUnmount(){
        console.log('Componente borrado')
    }

    render(){
        return(
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        <img src={this.state.userAvatar} alt="Imagen de usuario"/>
                    </a>
                    <div className="content">
                        <a className="author">{this.state.name}</a>
                        <div className="metadata">
                            <div className="date">{this.state.date}</div>
                        </div>
                        <div className="text">
                            {this.state.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments 
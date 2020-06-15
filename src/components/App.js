import React from 'react'
import Faker from 'faker'

import Comments from './comments'
import Button from './button'

class App extends React.Component{
    constructor(){
        super() //mandar a llamar el scope
        this.state = {
            comments: []
        }
        this.addComment = this.addComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        //let copyState = {...this.state, comments: this.state.comments.push(commentM)}
        let copyState = this.state.comments
        copyState.push(comment)
        this.setState({comments : copyState})
    }

    deleteComment(){
    //    letcopyState={...this.state, comments:this.state.comments.pop()}
    //    this.setState([copyState])
    //}
        let copyState = this.state.comments
        copyState.pop()
        this.setState({comments : copyState})
    }

    render(){
        return (
            <div>
                <Button func={this.addComment} text={'Comentar'}/>
                <Button func={this.deleteComment} text={'Borrar'}/>
                {
                    this.state.comments.map((comment) => { 
                        return <Comments
                            key={comment.name}
                            userAvatar={comment.userAvatar} 
                            name={comment.name}
                            date={comment.date} 
                            comment={comment.comment}
                        />
                    })
                }
            </div>
        )
    }
}
export default App //2da forma de exportar
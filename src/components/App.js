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
    }

    addComment(){
        let comment = {
            userAvatar: Faker.image.avatar(),
            name: Faker.name.firstName(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        this.setState({comments: comment})
    }

    render(){
        return (
            <div>
                <Button />
                {
                    this.state.comments.map((comment) => { 
                        return <Comments 
                            userAvatar={comment.userAvatar} 
                            nate={comment.date}
                            come={comment.name} 
                            damment={comment.comment}
                        />
                    })
                }
            </div>
        )
    }
}
export default App //2da forma de exportar
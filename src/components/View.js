import React, { Component } from 'react';

class View extends Component {
    constructor () {
        super()
        this.state = {
            posts:null
        }
    }
    componentDidMount () {
        fetch ('http://localhost:8000/api/post').then((res)=>{
            res.json().then((resp)=>{
                console.log(resp.data)
                this.setState({posts:resp.data})
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.posts ? this.state.posts.map((post) => 
                    <div>
                        <span>Title : {post.title} </span>
                        <span>Body : {post.desc} </span>
                    </div>
                    )
                    : null
                }
            </div>
        );
    }
}

export default View;

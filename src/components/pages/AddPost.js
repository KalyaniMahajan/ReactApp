import React, { useState, useEffect} from "react"
import axios from "axios";
import { useHistory } from "react-router-dom"

const AddPost = () => {
    let history = useHistory();
    const [post, SetPost] = useState({
        title:'',
        desc:'',
    });

    const postSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/post', post);
        history.push('/list');
    };

    return (
        <div className="container col-6">
            <div className="py-4">
                <h1>Add New Post</h1>
                <form onSubmit={(e) => postSubmit(e) }>
                    <div className="form-group">
                        <label for="">Title</label>
                        <input type="text" className="form-control" name="title" onChange={(e) => SetPost({ ...post, title: e.target.value })}  placeholder="Enter Title here..." />
                        <small id="title" className="form-text text-muted"></small>
                    </div>

                    <div className="form-group">
                        <label for="">Description</label>
                        <textarea name="desc" rows="4" className="form-control" name="desc" onChange={(e) => SetPost({ ...post, desc: e.target.value })}  placeholder="Enter Description here..." />
                        <small id="desc" className="form-text text-muted"></small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost;
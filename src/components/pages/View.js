import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const View = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:8000/api/post");
        //console.log(result)
        setPosts(result.data.data.reverse());
    };

    const deletePost = async id => {
        await axios.delete(`http://localhost:8000/api/post/${id}`);
        setPosts();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>User POsts</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.title}</td>
                                    <td>{post.desc}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2">View</Link>
                                        <Link className="btn btn-outline-primary mr-2">Edit</Link>
                                        <Link className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default View;

 import React, {Component} from 'react';
import TodosService from "../../services/task.service";
import Post from "../../components/Post";
import {Link} from "react-router-dom";
import {UserService} from "../../services/user.service";

export default class TaskList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    async componentDidMount() {
        let posts = await TodosService.list();
        this.setState({posts: posts});
        console.log(posts);
    }

    render() {
        let {posts} = this.state;
        return <div className="container">
            <h1>Liste des taches</h1>
            <Link className="btn btn-primary" to="/articles/ajouter">Ajouter une tache </Link>
            <div className="row">

                {posts.map(post => {
                    return <div className="col-md-4">
                        <Post post={post}/>
                    </div>
                })}
            </div>
        </div>
    }
}

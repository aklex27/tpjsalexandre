import React, {Component} from 'react';
import {UserService} from "../../services/user.service";

export default class UserDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let response = await UserService.details(this.props.match.params.id);
        this.setState({user: response.data});
    }

    async handleDelete(id){
        await UserService.delete(id);
        this.props.history.push('/utilisateurs');
    }

    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>{user.name}</h1>
            <p>Email : {user.email}</p>
            <button className="btn btn-danger" onClick={() => this.handleDelete(user.id)}>Supprimer</button>
        </div>
    }

}

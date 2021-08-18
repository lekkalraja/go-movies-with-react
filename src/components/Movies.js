import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'


export default class Movies extends React.Component {

    state = { movies : [] }

    componentDidMount() {
        this.setState({
                movies: [
                    {id: 1, title: "GangLeader", runtime: 134},
                    {id: 2, title: "Malleswari", runtime: 154},
                    {id: 3, title: "Missamma", runtime: 149}
                ]
        })
    }

    render() {
        return(
            <Fragment>
                <h2>Choose A Movie!</h2>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}
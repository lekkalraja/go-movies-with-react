import React, { Fragment } from "react";


export default class Movie extends React.Component {

    state = { movie: {}}


    componentDidMount() {
        this.setState({
            movie: {
                id: this.props.match.params.id,
                title: "Ismart Sankar",
                runtime: "129"
            }
        })
    }

    render() {
        return(
            <Fragment>
                <h2> Movie - {this.state.movie.id} : {this.state.movie.title} </h2>
                <table className="table table-striped">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Title: </strong></td>
                            <td>{this.state.movie.title}</td>
                        </tr>
                        <tr>
                            <td><strong>Runtime: </strong></td>
                            <td>{this.state.movie.runtime} minutes</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

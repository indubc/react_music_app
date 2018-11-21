import React, { Component } from 'react';
import Header from './header'
import Albumblist from './albumblist'

const REQ_URL = 'https://my-json-server.typicode.com/indubc/react_music_app/artists/'
class artists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: ''
        }
    }

    componentDidMount() {
        // fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
        //     method: 'GET'
        //         .then(response => response.json())
        //         .then(json => {
        //             this.setState({
        //                 artist: json
        //             })

        //         })

        // })

        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method : "GET"
        }).then(response => response.json())
        .then(json => {

            // console.log(json);
            this.setState({
                artists: json
            })
        });


        // console.log(this.props.match.params.artistid)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artists.cover}.jpg')no-repeat`}}></span>

                    </div>
                    <div className="bio">
                        <h3>{this.state.artists.name}</h3>
                        <div className="bio_text">
                            {this.state.artists.bio}
                            </div>
                    </div>
                    <Albumblist albumList={this.state.artists.albums}/>
                </div>
                
            </div>
        )
    }





}
export default artists;
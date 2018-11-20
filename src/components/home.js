import React, {Component} from 'react';


import Banner from '../components/banner'
import Artistlist from './artists_list'

const URL_Artists = 'http://localhost:3004/artists'


class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            artists:''
        }
    }


    //    request to an API

componentDidMount(){
    fetch(URL_Artists,{
        method:'GET'
    })
    .then(response=>response.json())
    .then(json =>{
      this.setState({
          artists:json
      })
    })
}


    render(){
        return(
            <div>
                <Banner/>
<Artistlist allArtists={this.state.artists}/>
                


                </div>
        )
    }
}
export default Home;


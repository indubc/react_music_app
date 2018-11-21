import React from 'react'
import { Link } from 'react-router-dom'

const Artistlist = (props) => {
    
    const list = ({ allArtists }) => {
        if (allArtists) {
            return allArtists.map((item) => {
                //debugger
                const style = {
                    background: `url('/images/covers/${item.cover}.jpg') no-repeat`
                }

                return(
                    <Link key={item.id} to={`/artist/${item.id}`}
                        className="artist_item" style={style}>
                        <div>{item.name}</div>
                    </Link>
                );
            })
        }



    }
    return (
        <div className="artist_list">
            <h4> browse the artist</h4>
            {list(props)}
        </div>
    )
}
export default Artistlist;
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value}, 
            function(){
                let songs = this.props.songs.filter(song => song.title.includes(this.state.filter) || 
            song.artist.includes(this.state.filter) || 
            song.album.includes(this.state.filter)  || 
            song.genre.includes(this.state.filter) || 
            song.release_date.includes(this.state.filter))
            this.props.filterSongs(songs)
        });
    }

    render() {
            return(
                <div className='searchbar'>
                    <br />
                    <br />
                    <br />
                    <h2>Search by Title, Artist, Album or Genre</h2>
                    <input type='text' value={this.state.filter} onChange={this.handleChange}/>
                </div>
            );
    }
}

export default SearchBar;
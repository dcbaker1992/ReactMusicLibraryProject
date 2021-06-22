import React, { Component } from 'react';


class SongCreator extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: '',
            likes: '',
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date,
            likes: this.state.likes,
        }
        this.props.newSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            likes: '',
        });
    }



    render() {
        return (
            <div className='form-box'>
                <form onSubmit={this.handleSubmit}>
                <br/>          
                <h3>Add a New Song</h3>
                    <div>
                        <label>Title:  </label>
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Artist:  </label>
                        <input type='text' name='artist' onChange={this.handleChange} value={this.state.artist}/>
                    </div>
                    <div>
                        <label>Album:  </label>
                        <input type='text' name='album' onChange={this.handleChange} value={this.state.album}/>
                    </div>
                    <div>
                        <label>Release Date:  </label>
                        <input type='text' name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                    </div>
                    <div>
                        <label>Likes:  </label>
                        <input type='number' name='likes' onChange={this.handleChange} value={this.state.likes}/>
                    </div>
                    <div>
                        <label>Genre:  </label>
                        <input type='text' name='genre' onChange={this.handleChange} value={this.state.genre}/>
                        <br/>
                    </div>
                    <div>
                        <br/>
                        <input type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SongCreator;


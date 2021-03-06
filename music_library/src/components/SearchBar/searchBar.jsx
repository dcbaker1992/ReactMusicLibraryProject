import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.setState({filter:null})
    }

    filterReturn(event){
        event.preventDefault()
        let filterType = []
        let filterValue = []
        
        if(event.target.titleBox.checked){
            filterType.push('title')
            filterValue.push(event.target.title.value)

        }
        if(event.target.artistBox.checked){
            filterType.push('artist')
            filterValue.push(event.target.artist.value)
            
        }
        if(event.target.albumBox.checked){
            filterType.push('album')
            filterValue.push(event.target.album.value)
        }
        if(event.target.genreBox.checked){
            filterType.push('genre')
            filterValue.push(event.target.genre.value)
            
        }
        let result = this.props.songs
        for(let i=0;i<filterType.length;i++){
            result = this.songSearch(filterType[i],filterValue[i],result)
        }

        this.props.filterUpdate(result)

    }

    songSearch(filterType,filterValue,songs){
        if (songs[0]===undefined){
            songs=this.props.songs;
            songs = songs.filter((song)=>{
                if(song[filterType].toLowerCase()===filterValue.toLowerCase()){
                    return true;
                }
                return false;
            }
            )

        }
        else{
            songs = songs.filter((song)=>{
                if(song[filterType].toLowerCase()===filterValue.toLowerCase()){
                    return true;
                }
                return false;
            }
            )
        }
        return songs;
    }
    
    render(){
        return(
        <form className="container" onSubmit={(event) => this.filterReturn(event)}>
            <h3>Filter By Title, Artist, Album or Genre</h3>
                <input class="form-check-input" type="checkbox" value="" id="titleBox" name='titleBox'></input>
                <label>Title:<input type="text" name="title" className='btn btn-dark'/></label><br/>
                <input class="form-check-input" type="checkbox" value="" id="artistBox" name='artistBox'></input>
                <label>Artist:<input type="text" name="artist" className='btn btn-dark'/></label><br/>
                <input class="form-check-input" type="checkbox" value="" id="albumBox" name='albumBox'></input>
                <label>Album:<input type="text" name="album"   className='btn btn-dark'/></label><br/>
                <input class="form-check-input" type="checkbox" value="" id="genreBox" name='genreBox'></input>
                <label>Genre:<input type="text" name="genre"  className='btn btn-dark'/></label><br/>

                <input type="submit" value="Submit" className='btn btn-dark'/>
        </form>
        
        )

    
    }
}
export default SearchBar;
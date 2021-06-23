import React, {Component} from 'react'
import axios from 'axios'
import MusicTable from './components/MusicTable/musicTable';
import SongCreator from './components/SongCreator/songCreator';
import SearchBar from './components/SearchBar/searchBar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props){
        super(props);
        
        this.startFilter = this.startFilter.bind(this)
        this.filterUpdate = this.filterUpdate.bind(this)
    
    
    }
    
    state = {
        songs: [],
        renderType:"table",
        
    }

    startFilter(){
        this.setState({renderType:'filter'})
    }

    filterUpdate(songs){
        this.setState(
            {
                songs:songs,
                renderType:"table"
            }
        )  
    }
    

    componentDidMount(){
        this.getAllSongs();
            
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data,
        
        });
        return response
    }

    deleteSong = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    likeSong = async (id) => {
        await axios.put(`http://127.0.0.1:8000/music/${id}/`)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }


    newSong = async (song) => {
        await axios.post('http://127.0.0.1:8000/music/',song)
        let response = await this.getAllSongs()
        if(response === undefined){
            this.setState({

            });
        }
        else{
            this.setState({
                songs: response.data
            });
        }
    }

    filterSongs=(songsToDisplay)=>{
        this.setState({
            currentSongs : songsToDisplay
        })
    }
    
    
    render(){
        return(
            <div className="bg-primary">
                <SearchBar songs={this.state.songs} filterUpdate={this.filterUpdate}/>
                <br />
                <br />
                <MusicTable songs={this.state.songs} deleteSongs={this.deleteSong}/>
                <br />
                <br />
                <SongCreator newSong={this.newSong.bind(this)}/>
            </div>
        );
    }
}

export default App;
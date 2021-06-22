import react, {Component} from 'react'
import axios from 'axios'
import MusicTable from './components/MusicTable/musicTable';
import SongCreator from './components/SongCreator/songCreator';

class App extends Component {
    state = {
        songs: []
    }
    
    componentDidMount(){
        this.getAllSongs();
            
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }

    deleteSong = async (id) => {
        console.log(this.props)
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
    
    
    render(){
        return(
            <div>
                <MusicTable songs={this.state.songs} deleteSongs={this.deleteSong}/>
                <SongCreator newSong={this.newSong.bind(this)}/>
            </div>
        );
    }
}

export default App
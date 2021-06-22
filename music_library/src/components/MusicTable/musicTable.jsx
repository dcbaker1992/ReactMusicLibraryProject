import React from 'react';
import Delete from '../Delete/delete'
import 'bootstrap/dist/css/bootstrap.min.css';


function MusicTable(props){
    return (
        <div class="container">
            <h2>My Music Library</h2>
            <table class="table table-dark table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => (
                    <tr data-index={index} key={song.id}>
                        <th scope="row">{song.id}</th>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td>{song.likes}</td>
                        <Delete songid={song.id} deleteSongs={props.deleteSongs} />
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MusicTable;
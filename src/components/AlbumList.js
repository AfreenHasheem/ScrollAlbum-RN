
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    //console.log('componentWillMount ins AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

//Helper method to generate a list of album details
//Map is an array helper. Used here since "albums" is an array returned in the JSON
renderAlbums() {
   return this.state.albums.map(album =>
     //passing down the prop album to used in AlbumDetail
     <AlbumDetail key={album.title} album={album} />
   );
}

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;

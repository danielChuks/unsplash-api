import React from 'react';
import './App.css';
import SearchBar from './Components/Search/SearchBar';
import unsplash from './api/unsplash';
import ImageList from './Components/image-list/Images-list';


class App extends React.Component{
  //initializing our state...
  state = {images : []}
// here we are getting the picture from the unsplash site using their API//  unsplash is the value of axios in the api file.
 onSearchSubmit = async (term) => {
   const response = await unsplash.get('search/photos', {
        params: {query: term},
   });
   this.setState({images: response.data.results})
 }
  render(){
    return (
      <div className="ui Container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    ); 
  }
 
}

export default App;

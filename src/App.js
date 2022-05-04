import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './Components/Search/SearchBar';


class App extends React.Component{
  
 async onSearchSubmit(term){
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers:{
          Authorization: "Client-ID 3pSdKgPbWo8pqNoN3nbwo1dBEG5kRR1jlkm6fw8rz4o"
        }
   })
   const value = response.data.results
   console.log(value)
 }
  render(){
    return (
      <div className="ui Container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    ); 
  }
 
}

export default App;

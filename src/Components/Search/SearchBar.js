import React from 'react';
import './SearchBar.css';



class  SearchBar extends React.Component{
  state = {term: ''}
 
//this function prevent the form from automatically submitting its self.
onFormSubmit = event => {
  event.preventDefault();

  this.props.onSubmit(this.state.term); 
}

  render(){
    return (
     <div className='ui segment'> 
       <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
            <label>Image search</label>   
              <input type="text"
                value={this.state.term}
                // controlled component here we are storing the input value in react not in the Dom. e' represent the event and we assign that event to the state 'term' that assignd the value to the input in react  
                onChange={e => this.setState({term: e.target.value})}
               />
            </div>
            <button type="Submit">Submit</button>
          </form>
        </div>
    )
  }
}


export default SearchBar;
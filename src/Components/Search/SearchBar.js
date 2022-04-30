import React from 'react';


class  SearchBar extends React.Component{
  state ={
    input: ''
  }
conponentDidMount(){
  this.setState({input: })
}

  inputConfig(){
    return(
      <div>
         <input onChange={this.state.input} />
      </div>
    )
  
  }
  render(){
    return  <div> {this.inputConfig ()} </div>
  }
}


export default SearchBar;
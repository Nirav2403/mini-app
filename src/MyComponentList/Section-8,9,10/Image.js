import axios from 'axios';
import React from 'react';
import SearchBar from './Searchbar';
import unsplash from './unsplash';
import '../../MyComponentCSS/Image.css'

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    
    console.log(response);
    this.setState({ images: response.data.results });
  };
    
  render() {
    let img = this.state.images
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <div className="UnsplashImage">
        { img.map((i,index)=><div keys={index} className="ImageMap"><img src={i.urls.regular}/></div>)}
        </div>
      </div>
    );
  }
}

export default App;
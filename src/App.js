import logo from "./logo.svg";
import "./App.css";
// import Item from './MyItem';
import React from "react";

class CredentialItemRow extends React.Component {
  render() {
    return (
      <li>
        {this.props.url} 
      </li>
    );
  }
}

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      affiliations: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          imageUrl: data.image,
          loadedCharacter: true,
        });
      });
  }
  render() {
    const credentials =
      this.state.affiliations.map((url, i) => {
        return <CredentialItemRow key={i} url={url} />;
      });
    return (
      <div>
        <div className="content">
          {this.state.loadedCharacter && (
            <div>
              <h1>{this.state.name}</h1>
              <p>
                <img
                  src={this.state.imageUrl}
                  alt={this.state.name}
                  className="img"
                />
              </p>
              <p>Height: {this.state.height} m </p>
              <p>
                <a href={this.state.homeworld}>Homeworld</a>{" "}
              </p>
              {/* <ul>{credentials}</ul> */}
            </div>
          )}

          <button
            type="button"
            className="btn"
            onClick={() => this.getNewCharacter()}
          >
            Get me a Star Wars character
          </button>
      </div>
        <div
          className="bg-img"
          style={{ backgroundImage: `url(${this.state.imageUrl})` }}
        >
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;

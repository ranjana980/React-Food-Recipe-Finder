import './App.css';
import React, { Component } from "react";
import axios from "axios";
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      text: 'egg'
    }

    const APP_ID = "f5c945fe"
    const App_KEY = "272ae8a6053dc1372ceb9d03337cf652"
    axios.get(`https://api.edamam.com/search?q=${this.state.text}&app_id=${APP_ID}&app_key=${App_KEY}`)
      .then(response => {
        this.setState({ posts: response.data.hits })

      })
      .catch(error => {
        console.log(error)
      })
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ text: keyword })
    const APP_ID = "f5c945fe"
    const App_KEY = "272ae8a6053dc1372ceb9d03337cf652"
    axios.get(`https://api.edamam.com/search?q=${this.state.text}&app_id=${APP_ID}&app_key=${App_KEY}`)
      .then(response => {
        this.setState({ posts: response.data.hits })

      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const items = this.state.posts
      .map(post => {
        return (
          <div className="App" >
            <div className="grid-item" key={post.recipe}>
              <h2>{post.recipe.label}</h2>
              <img className="img2" src={post.recipe.image} alt="" />
              <p>calories</p>
              <h3>{post.recipe.calories}</h3>
              <p>Meal Type</p>
              <h3>{post.recipe.mealType}</h3>
              <p>Here is the Recipe of food...</p>
              <div className="paera">
                <ul><h3>Ingredients</h3>
                  {
                    post.recipe.ingredientLines.map((user) => (
                      <li><p className="i">{user}</p></li>))}
                </ul>
              </div>
            </div>
          </div>
        )
      })
    return (
      <div className="int">
        <div className="s">
          <h1 className="s"><i className='fas fa-hamburger '></i>
            Food Recipes  <i className="fas fa-search n "></i> Finder</h1>
          <input className="intp" type="text" placeholder="Search here........." onChange={(e) => this.searchSpace(e)} >
          </input>
          <img className="img1"src="food1.png" alt="food"/>
        </div>
        <div className="grid-container ">
          {items}
        </div>
      </div>
    )
  }
}

export default App;

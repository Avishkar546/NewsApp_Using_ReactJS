import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  } 

  // fetchData = async(page) =>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${page}`;

  //   let response = await fetch(url);

  //   let json = await response.json(); 
  //   this.setState({
  //     page : page,
  //     articles:json.articles
  //   });
  // }

  componentDidMount = async() => { // In order to interact with the browser we use componentDidMount method. It is component lifecycle method.
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${this.page}`);

    let json = await response.json(); 

    console.log(json);
    this.setState({
      articles:json.articles,
      last:Math.ceil(json.totalResults/20)
    });
  }

  prevFunction = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${this.state.page-1}`;

    let response = await fetch(url);

    let json = await response.json(); 
    this.setState({
      page : this.state.page-1,
      articles:json.articles
    });
    
    console.log("Previous Function");
  }

  nextFunction = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0&page=${this.state.page+1}`;
    let response = await fetch(url);

    let json = await response.json(); 
    this.setState({
      page : this.state.page+1,
      articles:json.articles
    });
    
    console.log("Next Function");
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h2>NewsMonkey Top Headlines -</h2>
        <div className="row">
          {this.state.articles?.map((element) =>{
            return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} 
                   newsUrl={element.url} />
            </div>
          })} 
          <div className="container d-flex justify-content-between">
            {/* Use this.state.page  */}
            <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-dark" onClick={this.prevFunction}>&larr; Previous</button>
            <button disabled={this.state.page===this.state.last?true:false} type="button" className="btn btn-dark" onClick={this.nextFunction}>Next &rarr;</button>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default News

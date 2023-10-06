import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles:this.articles,
      loading:false
    }
  }

  async componentDidMount(){
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fcc8f5c2ffe54e57b53b2b17cab248e0");

    let data1 = await data.json(); 

    console.log(data1);
    this.setState({articles:data1.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top Headlines -</h2>
        <div className="row">
          {this.state.articles?.map((element) =>{
            return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} 
                   newsUrl={element.url} />
            </div>
          })} 
        </div>
        
      </div>
      
    )
  }
}

export default News

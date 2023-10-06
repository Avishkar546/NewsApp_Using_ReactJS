import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
        <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
              <img src={imageUrl?imageUrl:"https://s.yimg.com/ny/api/res/1.2/Upz_AkOmgbulL1QdNQMNRQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzY-/https://media.zenfs.com/en/bloomberg_markets_842/a031f93e7638e59b72e5e7dc820c133d"}  className="card-img-top" alt="..." />
              
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
              </div>
        </div>
      </div>
    )
  }
}

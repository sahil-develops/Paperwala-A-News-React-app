import React from 'react'



const NewsItem = (props)=> {


  let  {title, description,imageUrl,newsUrl,author, date,sourceId} = props;
// console.log(imageUrl)
    return (
<div>
<div  className="card mb-3" style={{maxWidth:'100%',border:'8px #eee solid',borderRadius:'15px'}}>
  <div className="card-title">
  <img src={!imageUrl?'https://images.moneycontrol.com/static-mcnews/2023/02/stocks_sensex_nifty_stockmarket1-770x433.jpg?impolicy=website&width=770&height=431':imageUrl} className="card-img-top" alt="..." width="200px" height="250px"/>
  </div>
  <div className="card-body">
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">{sourceId}</li>
  </ol>
</nav>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>    
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary btn-sm btn-dark">Read More</a>
  </div>
</div>

<div >
</div>
</div>
    )
  
}
export default NewsItem
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalresults, setTotalresults] = useState(0)

// document.title= `${this.capitalizeFirstLetter(props.category)} - PaperWala`

 const capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }




  const updateNews = async ()=>  {
    props.setProgress(10)
    setLoading(true)
    let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=582cc813bf1648fe9f8b767becbbdb42&page=${page}&pageSize=${props.pageSize}`);
    let parsedData = await url.json();
    
    console.log(parsedData);
setArticles(parsedData.articles)
setTotalresults(parsedData.totalResults) 
setLoading(false)
    props.setProgress(100)
  }

useEffect(() => {
  updateNews();

}, [])


//   handlePrevClick = async () => {
//     console.log("Previous");

//     this.setState({ loading: true });
//     this.setState({
//       page: page - 1,
//     });
//     this.updateNews();
//   };
//   handleNextClick = async () => {
// this.setState({page:page + 1})
// this.updateNews()

//   };

const fetchMoreData = async() => {

  let url = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f6db54dbe6244a6d9b66c030d7379aeb&page=${page+1}&pageSize=${props.pageSize}`);
setPage(page+1)
setLoading(true)
let parsedData = await url.json();
setLoading(false)
console.log(parsedData);

setArticles(articles.concat(parsedData.articles))
setTotalresults(parsedData.totalresults)
};


  


    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>Paperwala - Top  {`${capitalizeFirstLetter(props.category)}`} Headlines </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row my-5">

          {articles.map((element) => {
              return (
                <div className="col-md-4 mb-5" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 165) : ""} description={ element.description ? element.description.slice(0, 565): "Description Not Found" }
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    sourceId={element.source.name}
                  />
                  
         
                </div>
                
              );
            })}
            </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-center gap-5">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <strong>&#8592; Previous</strong>


          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            <strong>&#8594; Next</strong>
          </button>
        </div> */}
      </div>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
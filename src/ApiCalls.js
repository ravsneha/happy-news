import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";

class ApiCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      url: props.url
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items);
      return (
        <div className="articles">
          {items.map(item => (
            <ArticleCard key={item.title} title={item.title} desc={item.description} imgsrc={item.urlToImage} url={item.url}/>
          ))}
        </div>
      );
    }
  }
}

export default ApiCalls;

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


class Search extends Component {
  state = {
    searchTerms: "",
    filter: "",
    results: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveBook = (book) => {
  /*
    API.saveBook(book)
      .then(res => {
        // removed the saved book from the results list.

        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
        // removed is ["mandarin"]
        // myFish is ["angel", "clown", "drum", "sturgeon"]

        // find index of book
        var bookIndex = -1;
        for (var i = 0; i < this.state.results.length; i++)
        {
            if(this.state.results[i].link === book.link)
            {
                bookIndex = i;
                break;
            }
        }

        if(bookIndex > -1)
        {
            var tmpResults = this.state.results;
            var removedBook = tmpResults.splice(bookIndex,1);
            this.setState({results: tmpResults});
        }

      })
      .catch(err => console.log(err));
    */};

  doGoogleBooksSearch = event =>
  {/*
    event.preventDefault();
    var searchText = this.state.title.trim();
    API.googleBooksSearch(searchText).then(res => 
      {
        console.log(res.data.items);
        this.setState({ books: res.data, title: "", author: "", synopsis: "" });

        var resDataItems = res.data.items;
        var searchResults = [];

        if(resDataItems.length > 0)
        {
          for(var i = 0; i < resDataItems.length; i++)
          {
            var tmpAuthor = "";
            var tmpImage = "";
           
            if (resDataItems[i].volumeInfo.authors)
            {
              tmpAuthor = resDataItems[i].volumeInfo.authors[0];
            }
            else
            {
              tmpAuthor = "UNKNOWN";
            }

            if (resDataItems[i].volumeInfo.imageLinks)
            {
              tmpImage = resDataItems[i].volumeInfo.imageLinks.thumbnail;
            }
            else
            {
              tmpImage = "no_thumbnail.png";
            }

            var tmpBook = {
              author: tmpAuthor,
              title: resDataItems[i].volumeInfo.title,
              description: resDataItems[i].volumeInfo.description,
              link: resDataItems[i].volumeInfo.infoLink,
              image: tmpImage
            };

            searchResults.push(tmpBook);

          }
        }
        else
        {
          var noResult = {
            author: "",
            title: "No results found.",
            description: "",
            link: "",
            image: ""
          };

          searchResults.push(noResult);
        }

        this.setState({ 
          books: res.data, 
          title: "", 
          author: "", 
          synopsis: "",
          results: searchResults
         });

      });
    */};

  doProductSearch = event =>
  {
    event.preventDefault();
    var searchBy = this.state.filter;
    var searchTerms = this.state.searchTerms.trim().toLowerCase();
    // find space characters replace with +
    var formatSearchTerms = searchTerms.split(' ').join('+').trim();
    searchBy = "name"; // for now filter is hard-coded, we do want the user to select their filter (name, brand, tag)

    switch (searchBy) 
    {
      case "name":
        this.searchByName(formatSearchTerms);
        break;
      case "brand":
        this.searchByBrand(formatSearchTerms);
        break;
      case "tag":
        this.searchByTag(formatSearchTerms);
        break;
      default:
        alert("Unexpected Search Filter: " + searchBy);
        break;
    }
  }

  searchByName = (searchTerm) =>
  {
    console.log("(pages/Search.js) Searching By Name: " + searchTerm);

    API.searchProductByName(searchTerm)
      .then(res => {
        console.log("searchProductByName response: ", res);

        this.setState({
          searchTerms: "",
          filter: "",
          results: res.data
        });

        /*
        // removed the saved book from the results list.

        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
        // removed is ["mandarin"]
        // myFish is ["angel", "clown", "drum", "sturgeon"]

        // find index of book
        var bookIndex = -1;
        for (var i = 0; i < this.state.results.length; i++)
        {
            if(this.state.results[i].link === book.link)
            {
                bookIndex = i;
                break;
            }
        }

        if(bookIndex > -1)
        {
            var tmpResults = this.state.results;
            var removedBook = tmpResults.splice(bookIndex,1);
            this.setState({results: tmpResults});
        }*/
      })
      .catch(err => console.log(err));

  }

  searchByBrand = (searchTerm) =>
  {
    console.log("Searching By Name: " + searchTerm);
  }

  searchByTag = (searchTerm) =>
  {
    console.log("Searching By Name: " + searchTerm);
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"> </Col>
          <Col size="md-8">
            <br />
            <Jumbotron>

              <Row>
              <Col size="md-1"></Col>
                <Col size="md-7">
                  <h1 id="title">Never be without CBD ever again.</h1>
                  <br />
                  <h2 id="subtitle">Find what you want and where it's sold!</h2>
                  <br />

                <div className="form">
                  <form className="form-inline mr-auto mb-4">

                  <input className="form-control mr-sm-2" type="text" placeholder="Search for a Product!" aria-label="Search" />

                  <button className="btn purple-gradient btn-rounded btn-sm my-0 waves-effect waves-light" type="submit">Find Product</button>

                  </form>
                </div>

                </Col>

                <Col size="3">
                  <img src="../../assets/images/route420-icon.svg" id="homeLogo" />
                </Col>

                <Col size="md-1"></Col>
              </Row>
            </Jumbotron>

            <Col size="md-2"></Col>
            </Col>
            </Row>

{/* //===================================================================== */}

        <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
        <br />
        <Jumbotron2>
                {this.state.results.length ? (
                <div>
                <h4>Products Found</h4>
                        {this.state.results.map(product => (
                        <div key={product._id}>
                          <a href={"/product/" + product._id}><strong>{product.name}</strong></a> ({product.brand})   
                        </div>
                        ))}
                </div>
                    ) : (
                        <h4>No Results to Display</h4>
                    )}
         
          </Jumbotron2>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    );
  }
}

export default Search;

import React, { Component } from "react";
import NewsArticles from "../components/NewsArticles";
import Legality from "../components/Legality";
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


  doProductSearch = event => {
    event.preventDefault();
    var searchBy = this.state.filter;
    var searchTerms = this.state.searchTerms.trim().toLowerCase();
    // find space characters replace with +
    var formatSearchTerms = searchTerms.split(' ').join('+').trim();
    searchBy = "name"; // for now filter is hard-coded, we do want the user to select their filter (name, brand, tag)

    switch (searchBy) {
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

  searchByName = (searchTerm) => {
    console.log("(pages/Search.js) Searching By Name: " + searchTerm);

    API.searchProductByName(searchTerm)
      .then(res => {
        console.log("searchProductByName response: ", res);

        this.setState({
          searchTerms: "",
          filter: "",
          results: res.data
        });
      }).catch(err => console.log(err));

  }

  searchByBrand = (searchTerm) => {
    console.log("Searching By Name: " + searchTerm);
  }

  searchByTag = (searchTerm) => {
    console.log("Searching By Name: " + searchTerm);
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"> </Col>
          <Col size="md-8">
           
            <Jumbotron>
              <Row>
                <Col size="md-1"></Col>
                <Col size="md-7">
                  <h1 id="title">Never be without CBD ever again.</h1>
                 
                  <h2 id="subtitle">Find what you want and where it's sold!</h2>
                 

                  <div className="form">
                    <form className="form-inline mr-auto mb-4">

                      <input className="form-control mr-sm-2" type="text" placeholder="Search for a Product!" aria-label="Search" value={this.state.searchTerms}
                onChange={this.handleInputChange}
                name="searchTerms" />

                      <button className="btn-rounded btn-sm" disabled={!(this.state.searchTerms)}
                onClick={this.doProductSearch}>Find Product</button>

                    </form>
                  </div>

                </Col>

                <Col size="3">
                  <img src="../../assets/images/route420-icon.svg" id="homeLogo" />
                </Col>

                <Col size="md-1"></Col>
              </Row>
            </Jumbotron>
          </Col> {/* end of col-md-8 */}
          <Col size="md-2"></Col>

        </Row>

        {/* //===================end of jumbotron row================================================== */}

        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
           

          
            <Jumbotron2>
              {this.state.results.length ? (
                <div>
                  <h4 id="underline">Products Found :</h4>
                  {this.state.results.map(product => (
                    <div key={product._id}>
                      <a className="internalLink" href={"/product/" + product._id}><strong>{product.name}</strong></a> ({product.brand})
                        </div>
                  ))}
                </div>
              ) : (
                  <h4 id="white">No Results to Display</h4>
                )}

            </Jumbotron2>
          </Col>
          <Col size="md-2"></Col>
        </Row>
 {/* //================end of results tron====================*/}


        <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
            <NewsArticles />
        </Col>
        <Col size="md-2"></Col>
        </Row>

        <Row>
          <Legality />
        </Row>
      </Container>
    );
  }
}

export default Search;

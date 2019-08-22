import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";


class Product extends Component {
    state = {
        name: "",
        brand: "",
        description: "",
        type: [],
        store: {}
    };

    componentDidMount() 
    {
        //console.log("window.location.href = " + window.location.href);
        // http://localhost:3000/store/5d474e210953e00dbc14734e
        var url = window.location.href;
        var urlArray = url.split("/");
        //console.log("urlArray" + urlArray);
        this.loadProduct(urlArray[urlArray.length - 1]);
    }

  loadProduct = (pid) => {
    API.getProduct(pid)
      .then(res => {
          console.log("getProduct response:", res);
            this.setState({ 
                name: res.data.name,
                brand: res.data.brand,
                description: res.data.description,
                type: res.data.type,
                store: res.data.store
            });
        }
      )
      .catch(err => console.log(err));
  };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                    <br />
                        <Jumbotron>
                            <Row>
                                <Col size="md-1"></Col>
                                <Col size="3">
                                    <img src="../../assets/images/route420-icon.svg" id="locLogo" />
                                </Col>
                                <Col size="md-1"></Col>
                                <Col size="md-6">
                                <h1 id="otherTitle">CBD Products</h1>
                
                                <h2 id="subtitle">Here you can explore our collection and find the best option for you! </h2>
                                </Col>
                                <Col size="md-1"></Col>
                            </Row>         
                        </Jumbotron>
                    </Col>  {/* end of md-8 col */}
                    <Col size="md-2"></Col>
                </Row>

                <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                    <br />

                    <Jumbotron2>
                        <div>   
                        <h3 id="productName">{this.state.name}</h3>
                       
                        <div>
                           From: {this.state.brand}
                        </div>
                        <br />

                        <div>
                            {this.state.description}
                        </div>
                        <br />
                        <br />
                        <div>
                            <h4>Related Tags:</h4>
                            {this.state.type.length ? (
                                <span>
                                    {this.state.type.map(tag => (
                                        <div key={tag}> 
                                            {tag}
                                        </div>
                                    ))}
                                </span>
                            ) : (
                                <div>No Tags</div>
                            )}
                        </div>

                        </div>
                    </Jumbotron2>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
        );
    }
}

export default Product;

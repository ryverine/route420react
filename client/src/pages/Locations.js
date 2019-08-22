import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";



class Locations extends Component {
  state = {
    locations: []
  };

  componentDidMount() {

    this.loadLocations();
  }

  loadLocations = () => {
    API.getLocations()
      .then(res => {
          console.log("getLocations response:", res);
            this.setState({ 
                locations: res.data, 
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
            <h1 id="otherTitle">Store Locations</h1>
            
            <h2 id="subtitle">Browse dispensaries by city!</h2>
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
        {this.state.locations.length ? (
        <div>
        {this.state.locations.map(location => (
        <div key={location._id}> 
        <strong> {location.city}, {location.state} </strong>
        {location.stores.length ? (
        <div> {location.stores.map(store => (
        <div key={store._id}>
        <strong> <a href={"store/" + store._id}>{store.name} </a></strong><br />
        {store.addressLine1}
        <br />
        {store.city}, {store.state} {store.zip}
        </div>
        ))}
        </div>
        ) : (
        <div>No Stores for location</div>
        )}
        </div>
        ))} 
        </div>
        ) : (
        <h3 id="white">No Locations to Display</h3>
        )}
      </div>
 </Jumbotron2>
 </Col>  {/* end md-8 col */}
 <Col size="md-2"></Col>

 </Row>
</Container>
      
    );
  }
}

export default Locations;

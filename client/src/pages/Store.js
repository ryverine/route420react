import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";


class Store extends Component {
    state = {
        currentUser: "0",
        newComment: "",
        storeID: "",
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        products: [],
        storecomments: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    componentDidMount() 
    {
        console.log("window.location.href = " + window.location.href);
        // http://localhost:3000/store/5d474e210953e00dbc14734e
        var url = window.location.href;
        var urlArray = url.split("/");
        console.log("urlArray" + urlArray);
        this.loadStore(urlArray[urlArray.length - 1]);
    }

    loadStore = (storeId) => {
        var currentUserID = "0";
        //check for local storage
        if(JSON.parse(localStorage.getItem('currentUser')) != null)
        {
            var lsData = JSON.parse(localStorage.getItem('currentUser'));
            currentUserID = lsData.userID;
        }

        API.getStore(storeId)
        .then(res => {
            console.log("getStore response:", res);

                this.setState({ 
                    currentUser: currentUserID,
                    newComment: "",
                    storeID: res.data._id,
                    name: res.data.name,
                    addressLine1: res.data.addressLine1,
                    addressLine2: res.data.addressLine2,
                    city: res.data.city,
                    state: res.data.state,
                    zip: res.data.zip,
                    description: res.data.description,
                    products: res.data.products,
                    storecomments: res.data.storecomments
                });
            }
        )
        .catch(err => console.log(err));
    };

    submitComment = event => {
        event.preventDefault();
        // check value of current
        if (this.state.currentUser === "0")
        {
            // tell user they need to sign in
            console.log("SIGN IN TO COMMENT!")
        }
        else
        {
            var curDate = new Date(Date.now());
            var commentObj = {
                comment: this.state.newComment,
                created: curDate,
                updated: curDate,
                user: this.state.currentUser,
                store: this.state.storeID
            }

            console.log("=== NEW COMMENT SUBMMITED ===", commentObj);

            API.submitComment(commentObj, "store").then(res => 
            {
                // this.setState({ newComment: ""});

                /* 
                    Problem: newly added comments do not populate.
                    The comments are created in the storecomments collection
                    But the comment ID is not added to the store in the stores collection.
                */

                // res.data._id = id of new comment

                console.log("NEW COMMENT ADDED:", res);

                this.loadStore(this.state.storeID);
            });
        }
    }

    deleteComment = (commentID, e) => {
        //event.preventDefault();
        console.log("DELETE COMMENT:", commentID);
        console.log("e:", e);

        API.deleteComment(commentID, "store").then(res =>
        {
            console.log("COMMENT DELETED:", res);

            this.loadStore(this.state.storeID);
        });
    }

    render() {
        var theCurrentUser = this.state.currentUser;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">

                        <Jumbotron>
                        <Row>
                                <Col size="md-1"></Col>
                                <Col size="3">
                                    <img src="../../assets/images/route420-icon.svg" id="locLogo" />
                                </Col>
                                <Col size="md-1"></Col>
                                <Col size="md-6">
                                <h1 id="otherTitleCenter">{this.state.name}</h1>
                
                                <h2 id="subtitle">One of Route420's trusted retailers! </h2>
                                </Col>
                                <Col size="md-1"></Col>
                            </Row>  
                        </Jumbotron>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>

                <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                

                <Jumbotron2>
                        <div>
                            <h4>{this.state.addressLine1} 
                            <br />
                            {this.state.addressLine2.length ? (
                                <span>
                                    {this.state.addressLine2} 
                                </span>
                                ) : (
                                    <span></span>
                                )}
                                <br />
                                {this.state.city}, {this.state.state} {this.state.zip} </h4>
                        </div>
                        
                        <div>{this.state.description}</div>
                        
                        <div>
                        <br />
                            <h4 id="underline">Available Products: </h4>
                            {this.state.products.length ? (
                                <div>
                                    {this.state.products.map(product => (
                                        <div key={product._id}> 
                                            <strong><a href={"/product/" + product._id}>{product.name}</a></strong> ({product.brand})
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Products</div>
                            )}
                        </div>
                </Jumbotron2>
                </Col>
                <Col size="md-2"></Col>
                </Row>


                <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                

                <Jumbotron2>
                        <div>
                            <h4 id="underline">Community Discussion:</h4>
                            <div>
                                <form>
                                    <TextArea
                                    value={this.state.newComment}
                                    onChange={this.handleInputChange}
                                    name="newComment"
                                    placeholder="Share your thoughts!"
                                    />
                                    <FormBtn
                                    disabled={!(this.state.newComment)}
                                    onClick={this.submitComment}
                                    >
                                    Submit Comment
                                    </FormBtn>
                                    
                                    
                                </form>
                            </div>

                            {this.state.storecomments.length ? (
                                <div>
                                    {this.state.storecomments.map(comment => (
                                        <div key={comment._id}> 
                                            <p id="username">{comment.user} says...</p>
                                            {comment.comment}
                                            
                                            Posted: {comment.updated} 
                                            
                                            {theCurrentUser === comment.user ? 
                                                <div>
                                                    <DeleteBtn onClick={(e) => this.deleteComment(comment._id, e)}>Delete</DeleteBtn>
                                                </div> : ''}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Comments</div>
                            )} 
                        </div>
                </Jumbotron2>
                </Col>
                    <Col size="md-2"></Col>
                </Row>
            </Container>
        );
    }
}

export default Store;

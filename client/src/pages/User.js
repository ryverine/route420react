import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";

class User extends Component {
    state = {
        userID: "0",
        admin: false,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        storecomments: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            //  -> put local storage data into state --- but state will not have data
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.loadUser(currentUser.email, currentUser.password);
        }
        else {
            // -> use whatever state has
            this.loadUser(this.state.email, this.state.password);
        }
    }

    loadUser = (email, password) => {
        console.log("loadUser(" + email + "," + password + ")");
        API.getUser(email + "+" + password)
            .then(res => {
                console.log("getUser response:", res);

                if (res.data === null) {
                    console.log("RES.DATA IS NULL");
                    localStorage.removeItem("currentUser");

                    // alert("Login Unsuccessful!");
                    // cant do this here becasue it will fire on page load.
                    // maybe return 

                    this.setState({
                        userID: "0",
                        admin: false,
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        storecomments: []
                    });
                }
                else {
                    //empty local storage
                    localStorage.removeItem("currentUser");
                    // put data in local storage
                    localStorage.setItem('currentUser', JSON.stringify({
                        userID: res.data._id,
                        admin: res.data.admin,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email,
                        password: res.data.password
                    }));
                    // update state

                    this.setState({
                        userID: res.data._id,
                        admin: res.data.admin,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email,
                        password: res.data.password,
                        storecomments: res.data.storecomments
                    });
                }
            }
            )
            .catch(err => console.log(err));
    };

    doSignIn = event => {
        event.preventDefault();
        console.log("Sign-In");
        // console.log("Email: " + this.state.email);
        // console.log("Password: " + this.state.password);
        this.loadUser(this.state.email, this.state.password);
    };

    doSignOut = event => {
        event.preventDefault();
        //var confirmSignOut = confirm("Are your sure you want to Sign-Out?");
        //if(confirmSignOut)
        //{
        //empty local storage
        localStorage.removeItem("currentUser");
        //update state
        this.setState({
            userID: "0",
            admin: false,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            storecomments: []
        });
        //}
    };

    deleteComment = (commentID, e) => {
        //event.preventDefault();
        console.log("DELETE COMMENT:", commentID);
        console.log("e:", e);

        API.deleteComment(commentID, "user").then(res => {
            console.log("COMMENT DELETED:", res);
            this.loadUser(this.state.email, this.state.password);
        });
    }

    render() {
        if (this.state.userID === "0") {
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
                                        <h1 id="otherTitle">Your Account</h1>

                                        <h2 id="subtitle">Login below to access your profile! </h2>
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
                            
                            <form>
                                <Input
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email (required)"
                                />
                                
                                <Input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password (required)"
                                />
                                
                                <FormBtn
                                    disabled={!(this.state.email)}
                                    onClick={this.doSignIn}
                                >
                                    Sign-In
                                </FormBtn>
                            </form>

                        </Col> {/* end md-8 col */}
                        <Col size="md-2"></Col>
                    </Row>
                </Container>
            );
        }
        else {
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
                                        <h1 id="otherTitle">Route 420</h1>

                                        <h2 id="subtitle">Welcome to your profile! Access comment history below </h2>
                                    </Col>
                                    <Col size="md-1"></Col>
                                </Row>
                            </Jumbotron>

                            

                            <form>
                                <FormBtn
                                    onClick={this.doSignOut}
                                >
                                    Sign-Out
                                 </FormBtn>

                            </form>

                            <div>
                                <h4>Welcome back, {this.state.firstName}!</h4>

                                

                                <div>
                                    Name: {this.state.firstName} {this.state.lastName}
                                </div>

                                

                                <div>
                                    Email: {this.state.email}
                                </div>

                                {this.state.admin ? (
                                    <div> 
                                    <strong> <a className="internalLink" href="admin/">Admin Dashboard</a> </strong> 
                                    </div>
                                ) : (
                                        <React.Fragment />
                                    )}
                                <div>
                                <br />
                                    <h4 id="underline">Comment History:</h4>
                                    
                                    <div>
                                        {this.state.storecomments.length ? (
                                            <div>
                                                {this.state.storecomments.map(comment => (
                                                    <div key={comment._id}>
                                                        <strong> <a className="internalLink" href={"store/" + comment.store}> Store Name </a> </strong>
                                                        
                                                        Posted: {comment.updated}
                                                        
                                                        {comment.comment}
                                                        
<br />
                                                        <DeleteBtn onClick={(e) => this.deleteComment(comment._id, e)}> Delete </DeleteBtn>

                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                                <div>No Comments</div>
                                            )}
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col size="md-2"></Col>
                    </Row>
                </Container>
            );
        }
    };
}

export default User;

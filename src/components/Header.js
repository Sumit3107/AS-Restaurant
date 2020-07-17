import React, { Component } from 'react'
import {Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse,Card,CardTitle,CardImg,CardImgOverlay,CardHeader,Carousel} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {DISHES} from '../shared/dishes'
export class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            isNavOpen:false,
        };
        this.toggleNav=this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        });
    }
    render() {
        const dish=this.state.dishes;
        const menu=this.state.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-3 m-1 ">
                    
                    <Card>
                        <CardImg width="100%" src={dish.image} alt="dishname" />
                        <CardHeader>{dish.name}</CardHeader>
                    </Card>
                </div>
                
            )
        }
        );
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.jpg" className=" rounded-circle col-4 ml-2" height="20%" width="20%" alt="Restorinto Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg">Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg">About Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">
                                    <span className="fa fa-address-card fa-lg">Contact</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div> 
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <div className="jumbotext">
                                    <h1>A.S Restaurant</h1>
                                    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {menu}
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header

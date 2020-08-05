import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

class UserNavbar extends React.Component {
  render() {
    return (
      <div className="cart-button w-inline-block">
        <Navbar className="navbar-top navbar-dark">
          <Container fluid>
              <Nav className="align-items-center d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img className="rounded-circle" alt="..." src={require("../Images/profile.jpg")} />
                    </span>
                      <div className="title-user">
                        {this.props.nameUser} <div className="fa fa-angle-down prefix" />
                      </div>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="arrow_box">
                  <DropdownItem onClick={this.props.Profile}>
                  <div className="fa fa-user prefix" />
                    <span className="user-menu">My profile</span>
                  </DropdownItem>
                  <DropdownItem onClick={this.props.Wish}>
                  <div className="fa fa-clipboard-list prefix" />
                    <span className="user-menu">Wish List</span>
                    <div className="w-commerce-commercecartopenlinkcount item-count">0</div>
                  </DropdownItem>
                  <DropdownItem onClick={this.props.Cart}>
                  <div className="fa fa-shopping-bag prefix" />
                    <span className="user-menu">Cart</span>
                    <div className="w-commerce-commercecartopenlinkcount item-count">2</div>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                  <div className="fa fa-cog prefix" />
                    <span className="user-menu">Settings</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                  <div className="fa fa-calendar-alt prefix" />
                    <span className="user-menu">Activity</span>
                    <div className="w-commerce-commercecartopenlinkcount item-count">0</div>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                  <div className="fa fa-headset prefix" />
                    <span className="user-menu">Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.props.Logout}>
                  <div className="fa fa-sign-out-alt prefix" />
                    <span className="user-menu">Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default UserNavbar;

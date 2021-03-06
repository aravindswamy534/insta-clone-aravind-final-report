import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class Header extends Component {
  state = {userEnteredText: ''}

  // eslint-disable-next-line
  onClickLogout = props => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  userSearchedInput = event => {
    this.setState({userEnteredText: event.target.value})
  }

  onEnterSearchInput = () => {
    const {userEnteredSearchedValue} = this.props
    // if (event.key === 'Enter') {
    const {userEnteredText} = this.state
    userEnteredSearchedValue(userEnteredText)
    // }
    // return null
  }

  render() {
    const {userEnteredText} = this.state
    return (
      <>
        <ul className="header-container">
          <li>
            <Link className="icon-container" to="/">
              <img
                className="logo-icon"
                src="https://res.cloudinary.com/aravindswamy534/image/upload/v1643547907/react%20insta%20share/Standard_Collection_8_mm8tng.png"
                alt="website logo"
              />
              <h1 className="font-heading">Insta Share</h1>
            </Link>
          </li>
          <li className="search-container">
            <input
              className="search-bar"
              placeholder="Search Caption"
              type="search"
              onChange={this.userSearchedInput}
              //   onKeyDown={this.onEnterSearchInput}
              value={userEnteredText}
            />
            <button
              onClick={this.onEnterSearchInput}
              testid="searchIcon"
              type="button"
              className="search-button"
            >
              <FaSearch className="search-icon" alt="searchIcon" />
            </button>
          </li>
          <li className="link-container">
            <Link className="home" to="/">
              <h1 className="home">Home</h1>
            </Link>
            <Link className="my-profile" to="/my-profile">
              <h1 className="my-profile">Profile</h1>
            </Link>
          </li>
          <li className="logout-button">
            <button
              className="btn-logout"
              type="button"
              onClick={this.onClickLogout}
            >
              {/* <FiLogOut onClick={this.onClickLogout} /> */}
              Logout
            </button>
          </li>
        </ul>
        <div className="mobile-view">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <li>
                <Link className="icon-container" to="/">
                  <img
                    className="logo-icon"
                    src="https://res.cloudinary.com/aravindswamy534/image/upload/v1643547907/react%20insta%20share/Standard_Collection_8_mm8tng.png"
                    alt="website logo"
                  />
                  <h1 className="font-heading">Insta Share</h1>
                </Link>
              </li>
              <Navbar.Toggle
                className="three-bar"
                aria-controls="responsive-navbar-nav"
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/my-profile">Profile</Nav.Link>
                  <li className="search-container">
                    <input
                      className="search-bar"
                      placeholder="Search Caption"
                      type="search"
                      onChange={this.userSearchedInput}
                      //   onKeyDown={this.onEnterSearchInput}
                      value={userEnteredText}
                    />
                    <button
                      onClick={this.onEnterSearchInput}
                      testid="searchIcon"
                      type="button"
                      className="search-button"
                    >
                      <FaSearch className="search-icon" alt="searchIcon" />
                    </button>
                  </li>
                  <li className="logout-button">
                    <button
                      className="btn-logout"
                      type="button"
                      onClick={this.onClickLogout}
                    >
                      Logout
                    </button>
                  </li>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <hr />
      </>
    )
  }
}

export default withRouter(Header)

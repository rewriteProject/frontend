import React from 'react';
import { MDBTooltip, MDBTypography, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import statisticImage from '../images/statistics.jpg'


class HeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div id="home">
        <header>
          <Router>
            <MDBNavbar color="peach-gradient" fixed="top" dark expand="md" scrolling transparent>
              <AnchorLink href='#home'>
                <MDBNavbarBrand href="home">
                  <strong>Home</strong>
                </MDBNavbarBrand>
              </AnchorLink>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>

                <MDBNavbarNav left>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="facebook"><MDBIcon fab icon="fab fa-facebook" /></MDBNavLink>
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="twitter"><MDBIcon fab icon="fab fa-twitter" /></MDBNavLink>
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="googleplus"><MDBIcon fab icon="fab fa-google-plus" /></MDBNavLink>
                      </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="linkedin"><MDBIcon fab icon="fab fa-linkedin" /></MDBNavLink>
                    </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="instagram"><MDBIcon fab icon="fab fa-instagram" /></MDBNavLink>
                      </AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink href='#foot'>
                      <MDBNavLink to="pinterest"><MDBIcon fab icon="fab fa-pinterest" /></MDBNavLink>
                    </AnchorLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                  <MDBNavItem>
                    <AnchorLink  offset={() => 50} href='#statistik'><MDBNavLink to="#statistik">Statistik</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink  offset={() => 50} href='#prognosen'><MDBNavLink to="#prognosen">Prognosen</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink  offset={() => 50} href='#informationen'><MDBNavLink to="#informationen">Informationen</MDBNavLink></AnchorLink>
                  </MDBNavItem>
                </MDBNavbarNav>

              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={statisticImage}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">

              <MDBTypography tag='h1' variant="display-1">ReWrite</MDBTypography>
              <div class="row">
                  <AnchorLink  offset={() => 50} href='#statistik'>
                    <MDBTooltip placement="top">
                      <MDBBtn rounded color="success" href='#statistik' size="lg">
                        <MDBIcon icon="chart-bar" className="mr-1" /> Statistik
                      </MDBBtn>
                      <div>Statistiken ansehen</div>
                    </MDBTooltip>
                  </AnchorLink>
                  <AnchorLink  offset={() => 50} href='#prognosen'>
                    <MDBTooltip placement="top">
                      <MDBBtn rounded color="danger" to="prognosen" href='#prognosen' size="lg">
                        <MDBIcon icon="chart-line" className="mr-1" /> Prognosen
                      </MDBBtn>
                      <div>Prognosen ansehen</div>
                    </MDBTooltip>
                  </AnchorLink>
                  <AnchorLink  offset={() => 50} href='#informationen'>
                    <MDBTooltip placement="top">
                      <MDBBtn rounded color="warning" to="informationen"  href='#informationen' size="lg">
                        <MDBIcon icon="info" className="mr-1" /> Informationen
                        {/* align-left */}
                      </MDBBtn>
                      <div>Informationen ansehen</div>
                    </MDBTooltip>
                  </AnchorLink>
              </div>

            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default HeaderPage;

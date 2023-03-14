import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const hadithIndex = useSelector((state) => state.hadithIndex);
  const { index } = hadithIndex;
  // console.log(index);

  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i class="fas fa-book-open" style={{ color: 'white' }}></i> Al
              Quran
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Hadith" id="hadithMenu">
                {index &&
                  index.map((item) => (
                    <LinkContainer
                      to={`/hadith/index/${item?.book_key}`}
                      key={item?.book_key}
                    >
                      <NavDropdown.Item className="text-capitalize">
                        {item?.nameEnglish}
                      </NavDropdown.Item>
                    </LinkContainer>
                  ))}
                <NavDropdown.Divider variant="dark" />
                <LinkContainer to="/hadith/index">
                  <NavDropdown.Item>See Details</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/about">
                <Nav.Link>About US</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

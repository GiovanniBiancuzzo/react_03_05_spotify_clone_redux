import {
    Button,
    Col,
    Container,
    Form,
    InputGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addQueryAction, addToCatalogueAction } from "../redux/actions";

const VerticalSidebarComponent = () => {
    const query = useSelector((state) => state.search.query);
    const location = useLocation();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addToCatalogueAction(query));
    };

    // useEffect(()=>
    // fetchDashboard()
    // ,[])

    return (
        <Col className="col-2">
            <Navbar
                collapseOnSelect
                bg="navbar"
                variant="white"
                expand="md"
                className="fixed-left justify-content-between sidebar"
                // id="sidebar"
            >
                <Container>
                    <Link to={"/"}>
                        <Navbar.Brand className="navbar-brand">
                            <img
                                src="../public/assets/img/Spotify_Logo.png"
                                alt="Spotify_Logo"
                                width="131"
                                height="40"
                            />
                        </Navbar.Brand>
                    </Link>
                    {
                        //? a che serve questo pulsante?
                        //? <Button
                        //?     className="navbar-toggler"
                        //?     type="button"
                        //?     data-toggle="collapse"
                        //?     data-target="#navbarNavAltMarkup"
                        //?     aria-controls="navbarNavAltMarkup"
                        //?     aria-expanded="false"
                        //?     aria-label="Toggle navigation"
                        //? >
                        //?     <span className="navbar-toggler-icon"></span>
                        //? </Button>
                    }
                    <Navbar.Collapse id="navbarNavAltMarkup">
                        <Nav>
                            <Link
                                to="/"
                                className={`nav-link ${
                                    location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <i className="fas fa-home fa-lg"></i>&nbsp; Home
                            </Link>
                            <Link
                                to="/library"
                                className={`nav-link ${
                                    location.pathname === "/library"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <i className="fas fa-book-open fa-lg"></i>
                                &nbsp; Your Library
                            </Link>
                            <Nav.Link>
                                <Form onSubmit={handleSubmit}>
                                    <div className="input-group mt-3">
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                className="mb-2"
                                                id="searchField"
                                                placeholder="Search"
                                                value={query}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addQueryAction(
                                                            e.target.value
                                                        )
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                        {/* <div
                                                className="input-group-append"
                                                style={{margin-bottom: 4%}}
                                            > */}
                                        <InputGroup.Append>
                                            <InputGroup.Text>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    type="button"
                                                    id="button-addon1"
                                                >
                                                    GO
                                                </Button>
                                            </InputGroup.Text>
                                        </InputGroup.Append>
                                        {/* </div> */}
                                    </div>
                                </Form>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                <div className="nav-btn">
                    <Button className="signup-btn" type="button">
                        Sign Up
                    </Button>
                    <Button className="login-btn" type="button">
                        Login
                    </Button>
                    <Link to="#">Cookie Policy</Link> |
                    <Link to="#"> Privacy</Link>
                </div>
            </Navbar>
        </Col>
    );
};

export default VerticalSidebarComponent;

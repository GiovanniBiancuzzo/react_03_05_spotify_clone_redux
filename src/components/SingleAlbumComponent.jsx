import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleAlbumComponent = (props) => {
    return (
        //!fixare Link all'album
        <Col className="text-center">
            <Link to="/album_page/{props.album.album.id}">
                <img
                    className="img-fluid"
                    src={props.album.album.cover_medium}
                    alt="1"
                />
            </Link>
            <p>
                <Link href="/album_page.html?id={props.album.album.id}">
                    Album: "
                    {props.album.album.title.length < 16
                        ? `{props.album.album.title}`
                        : `{props.album.album.title.substring(0, 16)}...`}
                    "<br></br>
                </Link>
                <Link href="/artist_page.html?id={props.album.artist.id}">
                    Artist: {props.album.artist.name}
                </Link>
            </p>
        </Col>
    );
};

export default SingleAlbumComponent;

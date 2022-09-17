import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleAlbumComponent = (props) => {
    return (
        <div className="col text-center">
            <Link to={"/album_page/" + props.album.album.id}>
                <img
                    className="img-fluid"
                    src={props.album.album.cover_medium}
                    alt="1"
                />
            </Link>
            <p>
                <Link to={"/album_page/" + props.album.album.id}>
                    Album: "
                    {props.album.album.title.length < 16
                        ? `${props.album.album.title}`
                        : `${props.album.album.title.substring(0, 16)}...`}
                    "<br></br>
                </Link>
                <Link to={"/artist_page/" + props.album.artist.id}>
                    Artist: {props.album.artist.name}
                </Link>
            </p>
        </div>
    );
};

export default SingleAlbumComponent;

import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { playPauseAction } from "../redux/actions";

const AlbumThumbnailComponent = (props) => {
    const navigate = useNavigate();

    return (
        <div className="col col-md-3 pt-5 text-center" id="img-container">
            <img
                src={props.album.cover}
                className="card-img img-fluid"
                alt="Album"
            />
            <div className="mt-4 text-center">
                <p className="album-title">{props.album.title}</p>
            </div>
            <div className="text-center">
                <p
                    className="artist-name"
                    onClick={() =>
                        navigate(`/artist_page/${props.album.artist.id}`)
                    }
                >
                    {props.album.artist.name}
                </p>
            </div>
            <div className="mt-4 text-center">
                <button
                    id="btnPlay"
                    className="btn btn-success"
                    type="button"
                    onClick={() => playPauseAction}
                >
                    Play
                </button>
            </div>
        </div>
    );
};

export default AlbumThumbnailComponent;

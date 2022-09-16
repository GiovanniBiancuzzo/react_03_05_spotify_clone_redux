import { Button, Card, Col } from "react-bootstrap";
import { playPauseAction } from "../redux/actions";

const AlbumThumbnailComponent = (props) => {
    return (
        <Col md={3} className="text-center" id="img-container">
            <Card>
                <Card.Img
                    src={props.album.cover}
                    className="card-img img-fluid"
                    alt="Album"
                />
                <Card.Body>
                    <Card.Title className="mt-4 text-center">
                        <p className="album-title">{props.album.title}</p>
                    </Card.Title>
                    <Card.Text className="text-center">
                        <p className="artist-name">{props.album.artist.name}</p>
                    </Card.Text>
                    <div className="mt-4 text-center">
                        <Button
                            id="btnPlay"
                            className="btn btn-success"
                            type="button"
                            onClick={() => playPauseAction}
                        >
                            Play
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AlbumThumbnailComponent;

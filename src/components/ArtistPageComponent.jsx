import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleAlbumComponent from "./SingleAlbumComponent";

const ArtistPageComponent = () => {
    const params = useParams();
    const [artist, setArtist] = useState();

    let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    const getAlbumDetails = () => {
        fetch(process.env.REACT_APP_ENDPOINT_API + "artist/" + params, {
            method: "GET",
            headers,
        })
            .then((res) => res.json())
            .then((data) => setArtist(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        console.log(artist);
        getAlbumDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Row>
                <Col xs={12} md={10} lg={10} className="mt-5">
                    <h2 className="titleMain">{artist.name}</h2>
                    <div id="followers">{artist.nb_fan} followers</div>
                    <div
                        className="d-flex justify-content-center"
                        id="button-container"
                    >
                        <Button
                            className="mr-2 mainButton d-none"
                            id="playButton"
                            variant="success"
                        >
                            PLAY
                        </Button>
                        <Button
                            className="mainButton d-none"
                            id="followButton"
                            variant="outline-light"
                        >
                            FOLLOW
                        </Button>
                    </div>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col xs={10} md={10} lg={10} className="offset-1 p-0">
                    <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div className="pt-5 mb-5">
                        <Row id="apiLoaded">
                            {artist.map((album) => (
                                <SingleAlbumComponent
                                    key={album.id}
                                    album={album}
                                />
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default ArtistPageComponent;

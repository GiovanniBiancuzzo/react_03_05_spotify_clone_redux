import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TrackListComponent from "./TrackListComponent";
import AlbumThumbnailComponent from "./AlbumThumbnailComponent";

const AlbumDetailsComponent = () => {
    const params = useParams().id;
    const [album, setAlbum] = useState();

    let headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    const getAlbumDetails = () => {
        fetch(process.env.REACT_APP_ENDPOINT_API + "album/" + params, {
            method: "GET",
            headers,
        })
            .then((res) => res.json())
            .then((data) => setAlbum(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAlbumDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {album && (
                <Row>
                    <AlbumThumbnailComponent album={album} />
                    <TrackListComponent tracks={album.tracks.data} />
                </Row>
            )}
        </>
    );
};

export default AlbumDetailsComponent;

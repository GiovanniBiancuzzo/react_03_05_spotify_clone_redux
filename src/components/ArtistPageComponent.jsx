import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleAlbumComponent from "./SingleAlbumComponent";

const ArtistPageComponent = () => {
    const params = useParams().id;
    const [artist, setArtist] = useState("");
    const [albums, setAlbums] = useState([]);

    // const getArtistDetails = () => {
    //     fetch(process.env.REACT_APP_ENDPOINT_API + "artist/" + params, {
    //         method: "GET",
    //         headers: {
    //             "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    //             "X-RapidAPI-Key":
    //                 "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setArtist(data))
    //         .catch((error) => console.log(error));
    // };

    // const getAlbums = () => {
    //     fetch(process.env.REACT_APP_ENDPOINT_API + "search?q=" + artist.name, {
    //         method: "GET",
    //         headers: {
    //             "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    //             "X-RapidAPI-Key":
    //                 "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setAlbums(data))
    //         .catch((error) => console.log(error));
    // };

    const getArtist = () => {
        fetch(process.env.REACT_APP_ENDPOINT_API + "artist/" + params, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setArtist(data);
                fetch(
                    process.env.REACT_APP_ENDPOINT_API +
                        "search?q=" +
                        data.name,
                    {
                        method: "GET",
                        headers: {
                            "X-RapidAPI-Host":
                                "deezerdevs-deezer.p.rapidapi.com",
                            "X-RapidAPI-Key":
                                "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => setAlbums(data.data))
                    .catch((error) => console.log(error));
            });
    };

    useEffect(() => {
        console.log("sono lo use effect");
        // getArtistDetails();
        // console.log(artist);
        // getAlbums();
        // console.log(albums);
        getArtist();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {albums && (
                <>
                    <div className="row">
                        <div className="col-12 col-md-10 col-lg-10 mt-5">
                            <h2 className="titleMain">{artist.name}</h2>
                            <div id="followers">{artist.nb_fan} followers</div>
                            <div
                                className="d-flex justify-content-center"
                                id="button-container"
                            >
                                <button
                                    className="btn btn-success mr-2 mainButton d-none"
                                    id="playButton"
                                >
                                    PLAY
                                </button>
                                <button
                                    className="btn btn-outline-light mainButton d-none"
                                    id="followButton"
                                    variant="outline-light"
                                >
                                    FOLLOW
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                            <div className="mt-4 d-flex justify-content-start">
                                <h2 className="text-white font-weight-bold">
                                    Tracks
                                </h2>
                            </div>
                            <div className="pt-5 mb-5">
                                <div className="row" id="apiLoaded">
                                    {albums.map((album) => (
                                        <div class="col-sm-auto col-md-auto text-center mb-5">
                                            <a href="/album_page.html?id=${album.album.id}">
                                                <img
                                                    class="img-fluid"
                                                    src={
                                                        album.album.cover_medium
                                                    }
                                                    alt="1"
                                                />
                                            </a>
                                            <p>
                                                <a href="#">
                                                    Track: "$
                                                    {
                                                        album.title.length < 16
                                                            ? `${album.title}`
                                                            : `${album.title.substring(
                                                                  0,
                                                                  16
                                                              )}...` // setting the track title, if it's longer than 16 chars cuts the rest
                                                    }
                                                    "
                                                </a>
                                                <br></br>
                                                <a href="/album_page.html?id=${album.album.id}">
                                                    Album: "$
                                                    {
                                                        album.album.title
                                                            .length < 16
                                                            ? `${album.album.title}`
                                                            : `${album.album.title.substring(
                                                                  0,
                                                                  16
                                                              )}...` // setting the track title, if it's longer than 16 chars cuts the rest
                                                    }
                                                    "
                                                </a>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ArtistPageComponent;

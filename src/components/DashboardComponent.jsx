import { useSelector } from "react-redux";
import SingleAlbumComponent from "./SingleAlbumComponent";

const DashboardComponent = () => {
    const discography = useSelector((state) => state.discography.catalogue);

    return (
        <>
            {discography && (
                <div className="row">
                    <div className="col-10">
                        <div id="searchResults">
                            <h2>Search Results</h2>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                                {discography.map((singleAlbum) => (
                                    <SingleAlbumComponent
                                        key={singleAlbum.id}
                                        album={singleAlbum}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row">
                <div className="col-10">
                    <div id="rock">
                        <h2>Rock classics</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        ></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                        ></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="hipHopSection"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardComponent;

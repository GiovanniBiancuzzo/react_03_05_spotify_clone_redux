import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerticalSidebarComponent from './components/VerticalSidebarComponent';
import DashboardComponent from './components/DashboardComponent';
import { Container, Row } from 'react-bootstrap';
import BottomPlayerComponent from './components/BottomPlayerComponent';
import AlbumDetailsComponent from './components/AlbumDetailsComponent';
import ArtistPageComponent from './components/ArtistPageComponent';
import LibraryPageComponent from './components/LibraryPageComponent';
import NavbarComponent from './components/NavbarComponent';

function App () {
  return (
    <BrowserRouter>
      <Container fluid className='body'>
        <Row >
          <VerticalSidebarComponent />
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <NavbarComponent />
            <Routes>
              <Route path='/' element={<DashboardComponent />}></Route>
              <Route path='/library' element={<LibraryPageComponent />}></Route>
              <Route path='/album_page/:id' element={<AlbumDetailsComponent />}></Route>
              <Route path='/artist_page/:id' element={<ArtistPageComponent />}></Route>
            </Routes>
          </div>
        </Row>
      </Container>
      <BottomPlayerComponent />
    </BrowserRouter>
  );
}

export default App;

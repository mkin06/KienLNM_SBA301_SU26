import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Orchids from './components/Orchids'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MyProfile from './components/MyProfile'
import BannerCarousel from './components/Carousel'
import flowers from './data/orchidsData'
import { imageFiles } from './data/banner'

function App() {
  return (
    <>
      <NavBar />
      <BannerCarousel imageFiles={imageFiles} />
      <Orchids />
    </>
  )
}

export default App

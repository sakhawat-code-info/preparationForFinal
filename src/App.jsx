import { Helmet } from 'react-helmet-async'
import './App.css'
import Banner from './Components/Banner'
import Category from './Components/Category'
import Featured from './Components/Featured'
import Testimonials from './Components/Testimonials'
import PopularMenu from './Repeat/PopularMenu'

function App() {

  // https://www.tailwind-kit.com/images/landscape/8.svg
  return (
    <>
      <Helmet>
        <title>12 || Home</title>
      </Helmet>


      <Banner></Banner>

      <Category></Category>

      <PopularMenu></PopularMenu>

      <Featured></Featured>

      <Testimonials></Testimonials>





    </>
  )
}

export default App

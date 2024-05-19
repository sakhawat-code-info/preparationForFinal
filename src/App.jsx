import './App.css'
import Banner from './Components/Banner'
import Category from './Components/Category'
import SectionTitle from './Repeat/SectionTitle'


function App() {

  // https://www.tailwind-kit.com/images/landscape/8.svg
  return (
    <>

      <Banner></Banner>


      <SectionTitle subTitle={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></SectionTitle>
      <Category></Category>





    </>
  )
}

export default App

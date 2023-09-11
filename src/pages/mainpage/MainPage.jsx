import MainLeft from "../../components/mainLeft/MainLeft"
import MainRight from "../../components/mainRight/MainRight"
import Navbar from "../../components/navbar/Navbar"
import "./mainpage.scss"
const MainPage = () => {
  return (
    <div className="mainpage">
        <Navbar/>
        <div className="content flex">
          <MainLeft/>
          <MainRight/>
        </div>
    </div>
  )
}

export default MainPage
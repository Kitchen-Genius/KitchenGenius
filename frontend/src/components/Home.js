import HeaderP1 from "./HeaderP1"
import '../style/cssP1.css'
import MainP1 from "./Page1Components/MainP1"
import FooterP1 from "./FooterP1"
export default function Home () {
    return (
        <div className="lay_out">
            <HeaderP1 />
            <MainP1 />
            <FooterP1 />
        </div>


    )

}
import "../css/Home.css"
import TryoutCard from "../component/TryoutCard";


const detail =  {title:"TO3", date:"19/02/2024",category:"mudah"}
function Home () {
    return(
        <>
            
            <TryoutCard detail={detail}/>
        </>
    )
}

export default Home
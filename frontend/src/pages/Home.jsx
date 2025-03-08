import "../css/Home.css"
import TryoutCard from "../component/TryoutCard";
import CreateTryoutButton from "../component/CreateTryoutButton";


const detail =  {title:"TO3", date:"19/02/2024",category:"mudah"}
function Home () {
    return(
        <>
            <CreateTryoutButton/>
            <div className="card-grid">
                <TryoutCard detail={detail}/>
            </div>
        </>
    )
}

export default Home
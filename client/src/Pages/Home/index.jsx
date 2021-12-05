import Dogs from '../../Components/Dogs'
import NavBar from "../../Components/NavBar";


export default function Home(){
    return (<>
    <div >
        <NavBar/>
    </div>
        <div>
        <Dogs></Dogs>
        </div>
        </>
    )
}

import {Link} from 'react-router-dom'

import Home from '../pages/Home'
import Search from '../components/Search'

export default function Navbar (){

    return(
        <div>
            <div>{<Search/>}</div>
            {/* <Link to={<Home/>}>Home</Link> */}
        </div>
    )
}
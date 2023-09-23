import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const location =<FontAwesomeIcon icon={faLocationDot} className='icon1'/>
function Main(props){
    return(
    <div className='main'>
        <img src={props.img}/>
        <div className='sideitem'>
            <p>{location} {props.country}</p>
            <h1>{props.title}</h1>
            <p><strong>{props.date}</strong></p>
            <p className='content'>{props.description}</p>
        </div>
    </div>
    )
}

export default Main
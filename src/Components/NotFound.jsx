import notFoundImg from '/src/assets/notFound.jpg';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFount() {

    return (
        <>
        <div className='notfound-container'>
        <img src={notFoundImg} className='notfound-container img'></img>
        <Link to={`/`}>
        <button className='notfound-text'>Volver</button>
        </Link>
        </div>
        </>
    )
}
export default NotFount
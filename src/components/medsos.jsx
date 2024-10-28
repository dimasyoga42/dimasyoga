import { GitHub, Instagram, Facebook } from 'react-feather';
import { Link } from 'react-router-dom';

function Medsos() {
  return (
    <div className='flex space-x-3 mt-9'>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <GitHub color="grey" size={30} />
        <small className='cursor-pointer'><Link to="https://github.com/dimasyoga42">GitHub</Link></small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Instagram color="grey" size={30} />
        <small className='cursor-pointer'><Link to="https://www.instagram.com/dimasyoga_42/profilecard/?igsh=a3RqbTBsN280Yjl4">Instagram</Link></small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Facebook color="grey" size={30} />
        <small className='cursor-pointer'><Link>Facebook</Link></small>
        </div>
    </div>
  )
}

export default Medsos
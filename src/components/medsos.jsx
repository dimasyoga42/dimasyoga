import { GitHub, Instagram, Facebook } from 'react-feather';

function Medsos() {
  return (
    <div className='flex space-x-3 mt-5'>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <GitHub color="black" size={40} />
        <small>github</small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Instagram color="black" size={40} />
        <small>Instagram</small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Facebook color="black" size={40} />
        <small>Facebook</small>
        </div>
    </div>
  )
}

export default Medsos
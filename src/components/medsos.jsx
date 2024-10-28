import { GitHub, Instagram, Facebook } from 'react-feather';

function Medsos() {
  return (
    <div className='flex space-x-3 mt-9'>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <GitHub color="grey" size={30} />
        <small>github</small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Instagram color="grey" size={30} />
        <small>Instagram</small>
        </div>
        <div className='flex flex-col justify-center justify-items-center content-center items-center'>
        <Facebook color="grey" size={30} />
        <small>Facebook</small>
        </div>
    </div>
  )
}

export default Medsos
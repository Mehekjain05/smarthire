import hire from '../assests/hire.jpg'
import logo from '../assests/logo.png'
import { NavLink } from 'react-router-dom';
const Start = () => {
  return (
    <>
      <div className='flex flex-row items-center text-2xl'>
        <div className='flex flex-row items-center ml-28'>
          <img src={logo} className='w-12 mr-4 mt-6' />
          <div className='mr-20 mt-8 dp'>Hire <a className='text-purple-900'>Genius</a></div>
        </div>
        <div className='flex flex-row items-center space-x-8 mr-20 mt-8 ml-44 dp'>
          <div className='set'>Home</div>
          <div className='set'>About</div>
          <div className='set'>Services</div>
          <div className='set'>Contact Us</div>
        </div>
        <div className='flex flex-row items-center ml-10 mt-8 space-x-10 ml-44 dp'>
          <NavLink to = '/login'><div className='w-20 text-xl rounded-md h-9 text-purple-900 dis'><a className='ml-3 mt-2'>Login</a></div></NavLink>
          <div className=' w-24 text-xl rounded-md h-9 text-purple-900 dis'><a className='ml-3 mt-2'>Sign Up</a></div>
        </div>
      </div>
      <section className="flex flex-row items-center">
        <div className='ml-20 w-1/2 h-96'>
          <h1 className='change text-6xl'><a className='text-purple-900'>Attain the ideal </a> role within the company</h1>
          <p className='text-lg mt-2 text-purple-900'>Secure the optimal position within the company through successful job application and interview processes.</p>
          <button className='border-2 bg-purple-900 w-40 text-xl mt-8 rounded-xl h-10 text-white dis'>Get Started</button>
        </div>
        <div className='ml-32 mt-12'>
          <img src={hire} className='w-80 new' />
        </div>
      </section>
    </>
  )
}

export default Start
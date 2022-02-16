import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import { useLocalStorage } from '../hooks/use-local-storage';
import { logout as logoutAction, setUser } from '../slices/login-slices';


const Navbar = () => {
  const dispatcher = useDispatch();
  const selector = useSelector(state => state.login.isLogged);
  const [isLogged, setIsLogged] = useState(false);
  const { clear } = useLocalStorage;


  useEffect(() => {
    setIsLogged(selector);
  }, [selector]);

  const logout = () => {
    clear();
    setIsLogged(false);
    dispatcher(logoutAction());
    dispatcher(setUser(null));
  }

  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/'>
              <span className='sr-only'>Cookbook</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt=''
              />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          {!isLogged ?
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <Link to='/login' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                Log in
              </Link>
              <Link
                to='/register'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Register
              </Link>
            </div> :
            <>
              <Popover.Group as='nav' className='hidden md:flex space-x-10'>
                <Link to='/create-recipe' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                  Create a recipe
                </Link>
                <Link to='/my-recipes' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                  My recipes
                </Link>
              </Popover.Group>
              <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                <Link to='/' onClick={logout} className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                  Log out
                </Link>
              </div>

            </>
          }
        </div>
      </div>
    </Popover>
  )
}
export default Navbar;
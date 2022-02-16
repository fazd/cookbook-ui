import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom'
import propTypes from 'prop-types';
import config from '../config/';


const Pagination = (props) => {
  const limit = config.limit;
  const history = useHistory();
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTotal(props.total);
  }, [total]);

  const getLowerLimit = () => {
    return limit * (page - 1) + 1;
  }

  const getUpperLimit = () => {
    return limit + (limit * (page - 1));
  }

  const handleParams = (val) => {
    const params = new URLSearchParams();
    const value = parseInt(val);
    params.append('page', value);
    setPage(value);
    history.push({ search: params.toString() })
    props.onChangePage(true);
  }

  return (
    <div className='bg-white mt-5 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
      <div className='flex-1 flex justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Previous
        </a>
        <a
          href='#'
          className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{getLowerLimit()}</span> to <span className='font-medium'>{Math.min(getUpperLimit(), total)}</span> of{' '}
            <span className='font-medium'>{total}</span> results
          </p>
        </div>
        <div>
          <nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>

            <div
              onClick={() => handleParams(Math.max(1, page - 1))}
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </div>
            {
              Array.from({ length: Math.ceil(total / 20) }, (_, i) => i + 1).map((element, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleParams(index + 1)}
                    className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
                  >
                    {index + 1}
                  </div>
                )
              })
            }
            <div
              onClick={() => handleParams(Math.min(Math.ceil(total / 20), page + 1))}
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}


Pagination.propTypes = {
  total: propTypes.number.isRequired,
  onChangePage: propTypes.func,
}

export default Pagination;
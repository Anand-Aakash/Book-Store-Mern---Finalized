import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link , useNavigate } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('');

  const navigate = useNavigate();
  const role=localStorage.getItem('role')

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8001/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  

const handleLogout=()=>{
  const confirmLogout=window.confirm('DO YOU SURE WANT TO LOG OUT ? ? ? ? ')
  if(confirmLogout){
    localStorage.removeItem('role')
    localStorage.removeItem('email')
    navigate('/')
  }

}
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4' style={{color:'#455d7a'}} >
        <button 
          style={{
            // background: 'linear-gradient(109.6deg, rgb(72, 200, 160) 11.2%, rgb(32, 40, 48) 91.3%)',
            background: '#ec185d',
            // background: 'linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)',
            // background: 'radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            border: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem',
            fontWeight: 'bold',
            letterSpacing: '0.05rem',
            textTransform: 'uppercase',
            outline: 'none',
          }}
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          DISPLAY TABLE
        </button>
        <button
        style={{
          backgroundColor: '#ec185d',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          border: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontSize: '1rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          textTransform: 'uppercase',
          outline: 'none',
        

        }}
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          DISPLAY CARD
        </button>
        
        <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={handleLogout}
        
        // style={{ cursor: 'pointer' }}
        style={{
          backgroundColor: '#ec185d',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          border: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontSize: '1rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          textTransform: 'uppercase',
          outline: 'none',
        

        }}
        >LOG OUT
        </button>
       
        
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8' style={{color:'#eaf6f6'}}><b>Books List</b></h1>
        {
          role==='admin' ?  
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
         : ''
      }
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;

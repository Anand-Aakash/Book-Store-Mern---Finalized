import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8001/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'  style={{backgroundColor:'#ec185d',width:'200px',color:'#eaf6f6'}}><b>Show Book</b></h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4' style={{background: 'linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)',color:'#f8da5b',display:'flex'}} >
          <b><div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>BOOK'S UNIQUE ID</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>BOOK'S TITLE</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>BOOK'S AUTHOR</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>PUBLISHED YEAR</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>CREATED TIME</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>LASTLY UPDATED TIME</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
          </b>
        </div>
      )}
    </div>
  );
};

export default ShowBook;

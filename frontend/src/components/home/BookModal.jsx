import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <b>
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      style={{background:'linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%)'}}
      onClick={onClose}>
      <div
        onClick={(event) => event.stopPropagation()}
        style={{background:'linear-gradient(109.6deg, rgb(245, 239, 249) 30.1%, rgb(207, 211, 236) 100.2%)'}}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>BOOK ID :  {book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>A book is a bound collection of pages, usually made of paper, parchment, or other materials, that contain written, printed, or illustrated content. </p>
        <p className='my-2'>
        Books have been an essential medium for storing and conveying information for centuries. They serve various purposes, including entertainment, education, dissemination of knowledge, storytelling, documentation of history, and preservation of culture. 
        </p>
      </div>
    </div>
    </b>
  );
};

export default BookModal;

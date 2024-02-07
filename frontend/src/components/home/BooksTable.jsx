import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
// import '../App.css'

const BooksTable = ({ books }) => {
  const role=localStorage.getItem('role')
  return (<b>
    <table className='w-full border-separate border-spacing-2' style={{background: 'linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)',color:'#1d0251'}} >
      <thead style={{background:'linear-gradient(243.4deg, rgb(0, 215, 206) 13%, rgb(0, 132, 255) 98%)'}}>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody style={{background:'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',color:'#08085e'}}>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                {
          role==='admin' ? 
          <> 
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
                </> : ''
      }
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </b>
  );
};

export default BooksTable;

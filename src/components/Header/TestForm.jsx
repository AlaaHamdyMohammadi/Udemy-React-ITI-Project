import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import './TestForm.css';

function TestForm() {
  const [inputs, setInputs] = useState([]);
  const [query, setQuery] = useState('');
  const [dropdown, setDropdown] = useState(false);

  useEffect(function () {
    axiosInstance.get('/courses').then((res) => {
    //   console.log(
    //     res.data.data.courses.filter((course) =>
    //       course.title.toLowerCase().includes('mo'),
    //     ),
    //   );
      setInputs(res.data.data.courses);
    });
  }, []);

  return (
    <div className="app relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {setQuery(e.target.value); setDropdown(true);}}
        placeholder="Search.."
        className="search"
      />
      {dropdown && inputs && <ul className='absolute w-80 bg-gray-400  top-16'>
        {inputs
          .filter((course) => course.title.toLowerCase().includes(query))
          .map((item) => (
            <li
              className="listItem flex m-4 cursor-pointer border-b-2 pb-2
              "
              key={item._id}
            >
              <img
                className="h-8 w-14"
                src={`http://localhost:4000/img/courses/${item.photo}`}
              />
              <span className="ml-4 text-sm font-bold">{item.title}</span>
            </li>
          ))}
      </ul>}
    </div>
  );
}

export default TestForm;

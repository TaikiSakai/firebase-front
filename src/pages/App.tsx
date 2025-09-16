import '@/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import CustomPagination from '../components/common/pagination'
import type { PageNation, PageNationResponse, User } from '../types'
import useAuthorize from './auth/hooks'


function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string | null>(null);
  const [pages, setPages] = useState<PageNation>(
    { page: 0, pages: 0, size: 0, total: 0 }
  );
  const [users, setUsers] = useState<Record<number, User[]>>({});
  const {handleLogout} = useAuthorize();

  const onSubmit = async (page: number, q_user_name: string | null) => {
    try {
      const response = await axios.get<PageNationResponse<User>>(
        `${import.meta.env.VITE_API_URL}/api/v1/users/search`,
        { params: { q_user_name: q_user_name, page: page, size: 2 } }
      );
      console.log(response.data);

      setPages({
        page: response.data.page,
        pages: response.data.pages,
        size: response.data.size,
        total: response.data.total,
      });
      setUsers((prev) => {
        return {
          ...prev, 
          [response.data.page]: response.data.items
        };
      });
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    onSubmit(1, searchWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = () => {    
    if (inputValue !== searchWord) {
      setSearchWord(inputValue);
      setPages({ page: 0, pages: 0, size: 0, total: 0 });
      setUsers({});
    }

    onSubmit(1, inputValue);
  };


  const onPageChange = (page: number) => {
    console.log("page change", page);
    if (users[page]) {
      setPages((prev) => ({ ...prev, page }));
      console.log("already fetched");

      return;
    }
    // fetch new data
    onSubmit(page, searchWord);
    console.log("fetch new data");
  }

  return (
    <>
      <div className="App p-50">
        <div>
          <button onClick={handleLogout}>logOut</button>
        </div>
        <div>Search User</div>
        <div className="my-5">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <button onClick={onSearch}>Search</button>
          </div>
        </div>
        <div className='my-5'>
          <CustomPagination
            currentPage={pages.page}
            lastPage={Math.ceil(pages.total / pages.size)}
            onPageChange={onPageChange}
          />
        </div>
        <div>
          <h2 className='my-5'>User List (page: {pages.page}, total: {pages.total})</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b border-gray-300">ID</th>
                <th className="py-2 px-4 border-b border-gray-300">User Name</th>
                <th className="py-2 px-4 border-b border-gray-300">Email</th>
                <th className="py-2 px-4 border-b border-gray-300">Role</th>
              </tr>
            </thead>
            <tbody>
              {users[pages.page]?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">{user.id}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.user_name}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App;

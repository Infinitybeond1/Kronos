import 'phosphor-react'
import { MagnifyingGlass } from 'phosphor-react';

export default function Index() {
  return (
    <div className='w-screen h-screen bg-slate-800 text-slate-200'>
      <div className="grid content-center p-3">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 text-slate-700 bg-slate-500 border rounded-full focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="p-2 text-white bg-slate-600 rounded-full ">
            <MagnifyingGlass size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { MagnifyingGlass } from 'phosphor-react';
import { supabase } from '../supabase'

export default function Index() {
  return (
    <div className='w-screen h-screen bg-slate-800 text-slate-200'>
      <div className="grid content-center p-3">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 text-slate-700 bg-slate-600 border-slate-800 rounded-full focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="p-2 text-white bg-slate-600 rounded-full ">
            <MagnifyingGlass size={25} />
          </button>
        </div>
      </div>
      <div className='px-3'>
        <div className='bg-slate-600 p-3 rounded-3xl grid grid-cols-5 gap-5'>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder1
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder2
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder3
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder4
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder5
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder6
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder7
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder8
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder9
          </div>
          <div className='bg-slate-700 rounded-3xl overflow-hidden p-20'>
            Reminder10
          </div>
        </div>
      </div>
    </div>
  );
}

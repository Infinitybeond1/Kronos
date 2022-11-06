import { MagnifyingGlass, PlusCircle } from 'phosphor-react';
import { supabase } from '../supabase'
import Card from '../components/card'

export default function Index() {
  return (
    <div className='w-screen h-screen bg-slate-800 text-slate-200'>
      <div className="grid content-center px-3 py-2">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 text-slate-300 bg-slate-600 border-slate-800 rounded-full focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="p-2 text-white bg-slate-600 rounded-full ">
            <MagnifyingGlass size={25} />
          </button>
        </div>
      </div>
      <div className='px-3'>
        <div className='bg-slate-600 p-3 rounded-3xl grid grid-cols-4 gap-2'>
          <Card name="Reminder1" description="Description" time="10 PM" />
          <Card name="Reminder2" description="Description" time="10 PM" />
          <Card name="Reminder3" description="Description" time="10 PM" />
          <Card name="Reminder4" description="Description" time="10 PM" />
          <Card name="Reminder5" description="Description" time="10 PM" />
          <Card name="Reminder6" description="Description" time="10 PM" />
          <Card name="Reminder7" description="Description" time="10 PM" />
          <Card name="Reminder8" description="Description" time="10 PM" />
          <Card name="Reminder9" description="Description" time="10 PM" />
          <Card name="Reminder10" description="Description" time="10 PM" />
          <Card name="Reminder11" description="Description" time="10 PM" />
          <Card name="Reminder12" description="Description" time="10 PM" />
        </div>
      </div>

      <div className='p-2'>
        <div className='rounded-3xl bg-slate-600 p-3 grid place-items-center hover:text-slate-400'>
          <button>
            <PlusCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

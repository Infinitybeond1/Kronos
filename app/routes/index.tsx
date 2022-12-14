import { MagnifyingGlass, PlusCircle } from 'phosphor-react';
import { supabase } from '../supabase'
import Card from '~/components/card'
import Modal from '~/components/modal';
import { useState } from 'react';
import { Form } from '@remix-run/react';

export default function Index() {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false)
  return (
    // Body Div 
    <div className='w-screen h-screen bg-slate-800 text-slate-200'>
      {/* Seach bar div */}
      <div className="grid content-center px-3 py-2">
        <div className="flex space-x-1">
          {/* Search bar */}
          <input
            type="text"
            className="block w-full px-4 py-2 text-slate-300 bg-slate-600 border-slate-800 rounded-full focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          {/* Seach button */}
          <button className="p-2 text-white bg-slate-600 rounded-full ">
            <MagnifyingGlass size={25} />
          </button>
        </div>
      </div>
      {/* Reminders div */}
      <div className='px-3'>
        <div className='bg-slate-600 p-3 rounded-3xl grid grid-cols-4 gap-2'>
          {/* Reminder cards */}
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
      {/* Add reminder div */}
      <div className='p-2'>
        <div className='rounded-3xl bg-slate-600 p-3 grid place-items-center hover:text-slate-400'>
          {/* Add reminder button */}
          <button className='h-full w-full px-[40rem]' onClick={() => setOpen(true)}>
            <PlusCircle size={25} />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Form>
          <label>
            <p>Reminder Name: </p>
            <input type="text" name="name" />
          </label>
          <label>
            <p>Reminder Description: </p>
            <textarea>

            </textarea>
          </label>
          <label>
            <p>Reminder Time:</p>

          </label>
        </Form>
      </Modal>
    </div>
  );
}

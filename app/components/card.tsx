import { Pencil } from "phosphor-react";

export default function Card(props: any) {
  return (
    // Card shape div
    <div className="bg-slate-700 rounded-3xl h-[9.5rem] w-70 text-center hover:text-slate-400">
      <div className="grid place-items-end p-3">
        <button className="text-slate-700 hover:text-slate-400">
          <Pencil size={25} />
        </button>
      </div>
      <div className='grid place-items-center'>
        {/* Card position div */}
        <div>
          {/* The card */}
          {/* Uses the `name` `description` and `time` property */}
          <p className="font-bold text-lg hover:text-slate-400 ">{props.name}</p>
          <p>{props.description}</p>
          <p>Time: {props.time}</p>
        </div>
      </div>
    </div>
  )
}

export default function Card(props: any) {
  return (
    <div className='grid place-items-center bg-slate-700 rounded-3xl h-[9.5rem] w-70 text-center hover:text-slate-400'>
      <div>
        <p className="font-bold text-lg">{props.name}</p>
        <p>{props.description}</p>
        <p>Time: {props.time}</p>
      </div>
    </div>
  )
}

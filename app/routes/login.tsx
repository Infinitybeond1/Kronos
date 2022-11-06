import { User } from "phosphor-react";

export default function Login() {
  return (
    <div className="h-screen bg-slate-800 text-slate-300">
      <div className="grid place-items-center h-screen">
        <div>
          <p className="text-4xl text-center">
            Login
          </p>
          <div>
            <div className="my-3">
              <input
                type={"text"}
                placeholder="Email"
                className="rounded-full p-2 text-slate-300 bg-slate-600 border-slate-800 focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
                id="email"
              />
            </div>
            <div>
              <input
                type={"text"}
                placeholder="Password"
                className="rounded-full p-2 text-slate-300 bg-slate-600 border-slate-800 focus:border-slate-600 focus:ring-slate-500 focus:outline-none focus:ring focus:ring-opacity-40"
                id="password"
              />
            </div>
            <div className="my-3">
              <button className="rounded-full bg-slate-600 text-center py-2 p-[92px]">
                <User size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
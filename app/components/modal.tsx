import { X } from "phosphor-react";

export default function Modal({ open, onClose, children }) {
  return (
    <div className={`fixed grid place-items-center inset-0 m-3 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />

      {/* content */}
      <div className={`fixed right-0 h-full p-2 bg-slate-800 shadow-lg w-full max-w-screen-sm ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="rounded-3xl bg-slate-700 h-full p-3">
          <div className="grid place-items-end">
            <button onClick={onClose}>
              <X size={25} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export function Button({children, onClick}) {
  return (
    <button
      className="p-1 px-2 border border-gray-300 rounded-md outline-none text-lg"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

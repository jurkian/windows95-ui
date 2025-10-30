export function Win95Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-block px-3 py-1 text-sm font-ms win-bevel-raised"
    >
      {children}
    </button>
  );
}

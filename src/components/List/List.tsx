export function Win95List({ items = [], selectedIndex = -1, onSelect }) {
  return (
    <ul className="bg-[#eaeaea] p-1 w-64">
      {items.map((item, idx) => (
        <li
          key={idx}
          onClick={() => onSelect(idx)}
          className={`mb-1 cursor-pointer text-sm font-ms ${
            selectedIndex === idx
              ? "win-bevel-sunken bg-[#000080] text-gray-600 px-2 py-1"
              : "win-bevel-raised px-2 py-1"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

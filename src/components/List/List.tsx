type Props = {
  items: string[];
  selectedIndex: number;
  onSelect: (idx: number, event: React.MouseEvent<HTMLLIElement>) => void;
};

export function Win95List({ items = [], selectedIndex = -1, onSelect }: Props) {
  return (
    <ul className="bg-[#eaeaea] p-1 w-64">
      {items.map((item, idx) => (
        <li
          key={idx}
          onClick={(e) => onSelect(idx, e)}
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

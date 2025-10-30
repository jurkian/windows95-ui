export function Win95Input({
  labelText = false,
  placeholder = "",
  type = "",
  id = "",
  name = "",
}) {
  return (
    <div>
      {labelText && (
        <label
          htmlFor={id}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {labelText}
        </label>
      )}

      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full px-2 py-1 text-sm font-ms bg-white win-bevel-raised outline-none"
        />
      </div>
    </div>
  );
}

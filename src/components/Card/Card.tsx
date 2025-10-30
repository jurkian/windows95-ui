import classNames from "classnames";

export function Win95Card({ title = "Program", state = "active", children }) {
  const titlebarStateClasses = classNames(
    { "bg-win-blue": state === "active" },
    { "bg-win-dark-grey": state === "inactive" }
  );

  return (
    <div className="p-1 bg-win-grey inline-block">
      <div className="border-2 border-black w-96">
        <div
          className={`win-titlebar text-white text-sm h-7 ${titlebarStateClasses}`}
        >
          <div className="flex items-center gap-2 pl-1">
            <span className="font-ms text-sm">{title}</span>
          </div>
          <div className="flex items-center">
            <div className="win-bevel-raised win-title-btn mr-1">—</div>
            <div className="win-bevel-raised win-title-btn mr-1">▢</div>
            <div className="win-bevel-raised win-title-btn mr-0">✕</div>
          </div>
        </div>
        <div className="p-3 bg-[#c8c8c8]">{children}</div>
      </div>
    </div>
  );
}

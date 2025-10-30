export function Win95ProgressBar({ type = "solid", className = "" }) {
  return (
    <div className={`w-66 ${className}`}>
      <div className="overflow-hidden rounded-none bg-win-grey">
        {type === "solid" && (
          <div
            style={{ width: "37.5%" }}
            className="h-2 rounded-none bg-win-blue"
          />
        )}
        {type === "striped" && (
          <div
            style={{
              width: "37.5%",
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--color-win-blue) 0 10px, transparent 10px 14px)",
              backgroundSize: "14px 100%",
            }}
            className="h-2 rounded-none"
          />
        )}
      </div>
    </div>
  );
}

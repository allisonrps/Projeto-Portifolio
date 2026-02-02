export function Button({ className = "", children, ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-xl border hover:opacity-80 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

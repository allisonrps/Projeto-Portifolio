export function Card({ className = "", children }: any) {
  return (
    <div className={`rounded-2xl border p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }: any) {
  return <div className={className}>{children}</div>;
}

export default function MyProject({ children, projectRef }) {
  return (
    <div className="w-full" ref={projectRef}>
      {children}
    </div>
  );
}

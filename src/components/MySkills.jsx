export default function MySkills({ children, skillsRef }) {
  return (
    <div className="container w-full" ref={skillsRef}>
      {children}
    </div>
  );
}

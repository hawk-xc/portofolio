export default function AboutMe({ children, aboutmeRef }) {
  return (
    // flex items-center h-screen md:px-7 max-sm:px-7
    // flex items-center w-full h-screen md:px-7 max-sm:px-7
    <div id="AboutMe" className="container w-full px-7" ref={aboutmeRef}>
      {children}
    </div>
  );
}

const Hero = ({ children, homeRef }) => {
  // return <div className="h-screen">{children}</div>;
  return (
    <div className="container w-full px-7" ref={homeRef}>
      {children}
    </div>
  );
};

export default Hero;

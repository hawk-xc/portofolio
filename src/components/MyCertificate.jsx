export default function MyCertificate({ children, certificateRef }) {
  return (
    <div className="container w-full" ref={certificateRef}>
      {children}
    </div>
  );
}

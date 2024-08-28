export default function ContactMe({ children, contactmeRef }) {
  return (
    <div ref={contactmeRef} className="w-full">
      {children}
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="absolute flex flex-col items-center justify-center font-light text-white align-middle max-sm:text-xs md:text-sm bottom-4">
      <p>Build by Wahyu with ❤</p>
      <p>© {new Date().getFullYear()} Codewithhawk. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

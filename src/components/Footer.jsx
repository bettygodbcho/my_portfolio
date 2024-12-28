const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5">
      <div className="text-[#62646C] flex gap-2">
        <p className="text-[#62646C]">
          © {today} Betty Godbcho. All rights reserved.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/bettygodbcho"
          className="social-icon"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/betty-lopisso-ba2b01343/"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedIn"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://wa.me/251992994677"
          target="_blank"
          className="social-icon"
        >
          <img
            src="/assets/whatsapp.svg"
            alt="whatsapp"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

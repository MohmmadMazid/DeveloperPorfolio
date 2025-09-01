function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="underline">Mohmmad Mazid</span> | All Rights Reserved
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/MohmmadMazid/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:underline hover:underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohmmad-mazid-mansury5500/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition hover:underline hover:underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mohmmadmazid5500@gmail.com"
            className="hover:text-white transition hover:underline  hover:underline-offset-4  "
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

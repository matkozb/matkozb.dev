function Navbar() {
  return (
    <nav>
      <div className="flex justify-center items-center">
        <div className="hidden md:flex items-center space-x-2 border border-gray-100 shadow-md rounded-full gap-3 cursor-pointer px-5 py-2 text-sm text-gray-800 font-medium">
          <a href="#" className="hover:text-teal-500">About</a>
          <a href="#" className="hover:text-teal-500">Projects</a>
          <a href="#" className="hover:text-teal-500">Stack</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

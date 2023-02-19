import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Home', 'About', 'Work', 'Skills', 'Contact'];

  return (
    <nav className="py-4 px-6 bg-slate-500 fixed w-full bg-opacity-5 backdrop-blur-sm z-0">
      <ul className="justify-center hidden md:flex">
        {items.map((item) => (
          <li key={item} className="px-2">
            <a
              className="uppercase text-slate-600 hover:text-slate-900 font-normal cursor-pointer transition duration-900 ease-in-out"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex md:hidden justify-end">
        <AiOutlineMenu
          className="w-8 h-8 bg-primary text-light p-2 rounded-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed w-4/6 bg-slate-100 h-screen right-0 top-0 py-4 px-6"
          >
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={() => setIsOpen(false)}
                className="bg-primary text-light w-8 h-8 p-1 rounded-full cursor-pointer"
              />
            </div>
            <ul className="my-10 ml-2">
              {items.map((item) => (
                <li key={item} className="mt-4">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="uppercase text-slate-500 font-normal cursor-pointer"
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

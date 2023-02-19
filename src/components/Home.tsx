import photo from 'assets/img/alex.jpeg';
import { motion } from 'framer-motion';
import { Logo } from '../constants';
import bg from 'assets/img/bg.jpg';

const technologies = [
  {
    Logo: Logo.Typescript,
    customMarginLeft: 'md:ml-2',
    animationDelay: 0.7,
  },
  {
    Logo: Logo.Node,
    customMarginLeft: 'md:ml-14',
    animationDelay: 0.5,
  },
  {
    Logo: Logo.React,
    customMarginLeft: 'md:ml-8',
    animationDelay: 0.9,
  },
];

const Greeting = () => {
  return (
    <div className="flex-1 flex flex-col items-end md:self-start pb-8">
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="shadow bg-neutral text-slate-700 w-auto py-3 px-4 rounded-xl flex space-x-4"
      >
        <div className="text-5xl">👋</div>
        <div>
          <p className="text-sm">Hello, I&apos;m </p>
          <p className="text-2xl text-slate-800">Alex</p>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="mt-3 shadow bg-neutral text-slate-700 w-auto p-3 rounded-lg"
      >
        Software&nbsp;Architect
        <br />
        Tech&nbsp;Lead
      </motion.div>
    </div>
  );
};

const TechBubbles = () => {
  return (
    <div className="flex-1 h-full flex md:flex-col justify-evenly items-center md:items-start">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
              delay: tech.animationDelay,
            },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className={`${tech.customMarginLeft} p-5 md:p-7 bg-light rounded-full shadow-sm`}
        >
          <tech.Logo className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative flex -z-10 flex-col md:items-center justify-start md:flex-row md:justify-center h-screen snap-start pt-24 px-6 bg-indigo-100">
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 -z-20 object-cover h-full w-full"
      />
      <Greeting />
      <motion.div
        className="flex-initial"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={photo}
          alt="home"
          className="mx-auto rounded-full shadow max-w-[70%] md:max-w-md lg:max-w-lg"
        />
      </motion.div>
      <TechBubbles />
    </div>
  );
};

export default Home;

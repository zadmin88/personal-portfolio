/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div
      className="
        max-w-[2520px]
        w-screen        
        md:mx-auto
        xl:px-20 
        md:px-10
        sm:px-8
        px-4
        dark:bg-zinc-900
        bg-stone-200
        h-full
      "
    >
      {children}
    </div>
  );
};

export default Container;

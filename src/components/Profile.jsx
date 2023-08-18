const Profile = () => {
  return (
    <div className="flex flex-col gap-8 font-Monserrat md:w-2/3 md:pb-20 ">
      <p className="text-lg text-stone-200 leading-loose">
        I am an experienced freelance front-end developer, using the latest
        trends of UX/UI design to provide a solid foundation to my projects.
        Always eager to learn new technologies or tools.
      </p>
      <div>
        <div className="bg-lime-300 text-zinc-900 px-4 py-2 md:inline-block">
          <h1 className="font-semibold text-base md:text-xl">LANGUAGES</h1>
          <p>JAVASCRIPT / TYPESCRIPT / HTML / CSS / SASS/SCSS</p>
        </div>
      </div>
      <div>
        <div className="bg-lime-300 text-zinc-900 px-4 py-2 md:inline-block">
          <h1 className="font-semibold md:text-xl">
            FRAMEWORKS/LIBRARIES/OTHER
          </h1>
          <p>
            React / NextJS / Angular / Node / Express / Redux / Tailwind CSS
          </p>
        </div>
      </div>
      <p className="text-lg text-stone-200 leading-loose">
        When not in front of a screen, I can be found riding trails in the
        mountains.
      </p>
      <div className="flex gap-8">
        <button className="rounded-full  border-solid border-2 border-stone-200 text-stone-200 font-semibold  py-1 px-12 hover:bg-zinc-800">
          CV
        </button>
        <button className="rounded-full   text-zinc-900 bg-lime-300 font-semibold  py-1 px-10 hover:bg-lime-100">
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Profile;

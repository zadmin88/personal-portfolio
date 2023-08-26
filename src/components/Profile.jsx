import CVSimonFranco from "../files/CVSimonFranco.pdf";
import { Button } from "./Button";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8 font-Monserrat md:w-2/3 md:pb-20 ">
      <p className="text-lg text-zinc-900 dark:text-stone-200  leading-loose">
        I am an experienced freelance software developer, using the latest
        trends of UX/UI design to provide a solid foundation to my projects.
        Always eager to learn new technologies or tools.
      </p>
      <div>
        <div className="dark:bg-lime-300 bg-lime-500 text-zinc-900 px-4 py-2 md:inline-block">
          <h1 className="font-semibold text-base md:text-xl">LANGUAGES</h1>
          <p>JAVASCRIPT / TYPESCRIPT / HTML / CSS / SASS</p>
        </div>
      </div>
      <div>
        <div className="dark:bg-lime-300 bg-lime-500 text-zinc-900 px-4 py-2 md:inline-block">
          <h1 className="font-semibold md:text-xl">
            FRAMEWORKS/LIBRARIES/OTHER
          </h1>
          <p>
            React / NextJS / Angular / Node / Express / Redux / Tailwind CSS
          </p>
        </div>
      </div>
      <p className="text-lg text-zinc-900 dark:text-stone-200 leading-loose">
        When not in front of a screen, I can be found riding trails in the
        mountains.
      </p>
      <div className="flex gap-8">
        <a
          href={CVSimonFranco}
          download="CV Simon Franco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label={"CV"} color={"black"} />
          {/* <button className="rounded-full  border-solid border-2 border-zinc-900 text-zinc-900 dark:border-stone-200 dark:text-stone-200 font-semibold  py-2 px-12 hover:bg-stone-100 dark:hover:bg-zinc-800">
            CV
          </button> */}
        </a>
        <a href="https://www.linkedin.com/in/simon-franco-angarita-55b1a0a4/">
          <Button label={"LinkedIn"} color={"green"} />
        </a>
      </div>
    </div>
  );
};

export default Profile;

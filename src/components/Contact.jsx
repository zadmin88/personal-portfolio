const Contact = () => {
  return (
    <div
      id="contact"
      className="flex font-Monserrat flex-col py-48 md:items-center justify-center gap-24"
    >
      <h1 className="dark:text-stone-200 text-zinc-900 text-8xl font-semibold">
        LET&apos;S TALK
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-32">
        <div className="flex flex-col dark:text-stone-200 text-zinc-900 text-2xl  font-extralight w-full">
          <div className="flex gap-2 items-center  pb-2">
            <a
              href="mailto:zaimon88@gmail.com"
              className="hover:border-b hover:border-zinc-900 dark:hover:border-stone-200 "
            >
              <h2 className=" ">zaimon88@gmail.com</h2>
            </a>
          </div>

          <div className="flex gap-2 items-center pt-4 md:self-end">
            <a
              href="https://wa.me/573007921148"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b hover:border-zinc-900 dark:hover:border-stone-200 "
            >
              <h2 className="">+ 57 3007921148</h2>
            </a>
          </div>
        </div>
        <div className="dark:text-stone-200 text-zinc-900 text-xl ">
          <ul className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/simon-franco-angarita-55b1a0a4/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="cursor-pointer hover:border-b hover:border-zinc-900 dark:hover:border-stone-200">
                LinkedIn
              </li>
            </a>
            <a
              href="https://github.com/zadmin88"
              target="_blank"
              rel="noreferrer"
            >
              <li className="cursor-pointer hover:border-b hover:border-zinc-900 dark:hover:border-stone-200">
                Github
              </li>
            </a>
            <a
              href="https://www.instagram.com/zaimon988/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="cursor-pointer hover:border-b hover:border-zinc-900 dark:hover:border-stone-200">
                Instagram
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

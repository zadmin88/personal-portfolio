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
        <div className="dark:text-stone-200 text-zinc-900 text-2xl italic font-extralight w-full">
          <h2 className=" border-b pb-2">zaimon88@gmail.com</h2>
          <h2 className="pt-4">+ 57 3007921148</h2>
        </div>
        <div className="dark:text-stone-200 text-zinc-900 text-xl font-italic">
          <ul className="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/simon-franco-angarita-55b1a0a4/">
              <li className="cursor-pointer">LinkedIn</li>
            </a>
            <a href="https://github.com/zadmin88">
              <li className="cursor-pointer">Github</li>
            </a>
            <a href="https://www.instagram.com/zaimon988/">
              <li className="cursor-pointer">Instagram</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

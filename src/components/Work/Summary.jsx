/* eslint-disable react/prop-types */
const Summary = ({ stackUsed, whatWeDid, objective }) => {
  return (
    <div className="flex flex-col md:flex-row font-Monserrat md:px-24 md:py-16 py-8  md:gap-16 gap-8 dark:text-stone-200 text-zinc-900 justify-center">
      <div className=" flex gap-8 flex-col md:gap-8 md:w-1/3">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">WHAT WE DID</h2>
          <ul>
            {whatWeDid.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">TECH STACK</h2>
          <ul>
            {stackUsed.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:w-2/3">
        <h2 className="text-base font-semibold">OBJECTIVE</h2>
        {objective.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Summary;

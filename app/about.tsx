export default function About() {
  return (
    <div className="h-screen snap-start flex flex-col place-content-center place-items-center">
      <div className="flex flex-col lg:flex-row place-content-center place-items-center">
        <img
          className="w-[30vh] lg:w-72 rounded-full  shadow-lg shadow-[#0000006e]"
          width={500}
          height={500}
          src="/photo.jpg"
          alt="Photo"
        />
        <div className="lg:ml-8 mt-2 drop-shadow text-center lg:text-left">
          <h1 className="text-4xl ">Navroop Singh</h1>
          <p className="text-xl mb-3">
            Computer Science and Engineering student from IIT Ropar
          </p>
          <p>Skills:</p>
          <ul className="lg:list-disc list-inside font-semibold">
            <li>
              Mobile application develoment:
              <div className="flex flex-row lg:pl-8 justify-center lg:justify-start gap-10 font-normal">
                <p>Flutter</p>
                <p>React-Native</p>
              </div>
            </li>
            <li>
              Web Development:
              <div className="flex flex-row lg:pl-8 justify-center lg:justify-start gap-10 font-normal">
                <p>React-Js</p>
                <p>Next-Js</p>
                <p>Tailwind CSS</p>
              </div>
            </li>
            <li>Machine learning</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify text-center lg:gap-10 mt-4">
        <a href="mailto:3k6ls1ycr@mozmail.com">
          <i className="fa fa-envelope dark:fill-white"></i> :
          3k6ls1ycr@mozmail.com
        </a>
        <a href="https://github.com/navroop005">
          <i className="fa fa-github dark:fill-white" /> : navroop005
        </a>
      </div>
    </div>
  );
}

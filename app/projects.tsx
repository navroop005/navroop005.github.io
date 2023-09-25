import Image from "next/image";
import { ReactNode } from "react";

function CustomSection(props: { title: string; children: ReactNode }) {
  return (
    <div className=" snap-start bg-gray-100 rounded-2xl dark:bg-zinc-950 pb-1 mx-2">
      <div className="sticky top-0 bg-gray-100 rounded-2xl dark:bg-zinc-950 p-2">
        <h1 className="font-bold text-3xl my-2 text-center">{props.title}</h1>
        <hr className="mx-auto w-11/12 border-zinc-700 dark:border-zinc-400" />
      </div>
      {props.children}
    </div>
  );
}

function SubSection(props: { title: string; children: ReactNode }) {
  return (
    <div className="m-3 mb-4 p-3 bg-gray-200 border border-solid dark:border-none shadow-xl border-gray-300 dark:bg-zinc-900 rounded-3xl">
      <h1 className="text-2xl my-1 text-center">{props.title}</h1>
      <hr className="mx-auto w-5/6 border-zinc-600 dark:border-zinc-500" />
      <div className="mx-auto flex flex-wrap lg:grid-cols-3 sm:grid-cols-2 p-2 place-items-center place-content-center">
        {props.children}
      </div>
    </div>
  );
}

function ProjectTile(props: {
  title: string;
  imgSrc?: string;
  about: string;
  url?: string;
}) {
  return (
    <a href={props.url} target="_blank">
      <div className="bg-zinc-300 dark:bg-zinc-800 rounded-2xl p-2 m-2 flex-1 max-w-md min-w-[20rem]">
        <h3 className="text-center text-xl">{props.title}</h3>
        {props.imgSrc == undefined ? (
          <hr className="mx-auto w-5/6 border-zinc-700 dark:border-zinc-500 my-1" />
        ) : (
          <Image
            src={props.imgSrc}
            className="w-52 h-52 rounded-md object-cover"
            alt={props.title + " image"}
          />
        )}
        <p className="text-center  text-zinc-600 dark:text-zinc-300">
          {props.about}
        </p>
      </div>
    </a>
  );
}

import data from "./project_data.json";

export default function Projects() {
  return (
    <CustomSection title="Projects">
      <SubSection title="Mobile Apps">
        {data["mobile"].map((item) => (
          <ProjectTile {...item} key={item["id"]} />
        ))}
      </SubSection>
      <SubSection title="Machine learning">
        {data["ml"].map((item) => (
          <ProjectTile {...item} key={item["id"]} />
        ))}
      </SubSection>
      <SubSection title="Database">
        {data["database"].map((item) => (
          <ProjectTile {...item} key={item["id"]} />
        ))}
      </SubSection>
      <SubSection title="Other">
        {data["other"].map((item) => (
          <ProjectTile {...item} key={item["id"]} />
        ))}
      </SubSection>
    </CustomSection>
  );
}

import { ReactNode } from 'react'
import Image from 'next/image'
import { url } from 'inspector'

function CustomSection(props: { title: string, children: ReactNode }) {
  return (
    <div className=' snap-start bg-gray-100 rounded-2xl dark:bg-zinc-950 pb-1'>
      <div className='sticky top-0 bg-gray-100 rounded-2xl dark:bg-zinc-950 p-2'>
        <h1 className='font-bold text-3xl my-2 text-center'>{props.title}</h1>
        <hr className="mx-auto w-11/12 border-zinc-700 dark:border-zinc-400" />
      </div>
      {props.children}
    </div>
  )
}

function SubSection(props: { title: string, children: ReactNode }) {
  return (
    <div className='m-3 mb-4 p-3 bg-gray-200 border border-solid dark:border-none shadow-xl border-gray-300 dark:bg-zinc-900 rounded-3xl'>
      <h1 className='text-2xl my-1 text-center'>{props.title}</h1>
      <hr className="mx-auto w-5/6 border-zinc-600 dark:border-zinc-500" />
      <div className="mx-auto flex flex-wrap lg:grid-cols-3 sm:grid-cols-2 p-2 place-items-center place-content-center">
        {props.children}
      </div>
    </div>
  )
}

function ProjectTile(props: { title: string, imgSrc?: string, about: string, url?: string }) {
  return (
    <a href={props.url} target='_blank'>
      <div className='bg-zinc-300 dark:bg-zinc-800 rounded-2xl p-2 m-2 flex-1 max-w-md min-w-[20rem]'>
        <h3 className='text-center text-xl'>{props.title}</h3>
        {props.imgSrc == undefined ?
          <hr className="mx-auto w-5/6 border-zinc-700 dark:border-zinc-500 my-1" /> :
          <Image src={props.imgSrc} className='w-52 h-52 rounded-md object-cover' alt={props.title + " image"} />}
        <p className='text-center  text-zinc-600 dark:text-zinc-300'>{props.about}</p>
      </div>
    </a>
  )
}

const data =
{
  'mobile': [{
    id: 'divy_sahayak',
    title: "Divy Sahayak",
    about: "An app for specially abled to provide information about benefits, policies, hospitals, etc.",
    url: 'https://play.google.com/store/apps/details?id=com.dep.divy_sahayak'
  }, {
    id: 'vetpet',
    title: "VetPet",
    about: "An app to connect pet owners and veterinerians including features such as chat, pet history, etc.",
    url: 'https://github.com/mohitdass13/VetPet'
  }, {
    id: 'video_editor',
    title: "Video Editor",
    about: "A video editor app based on FFmpeg to trim and crop videos",
    url: 'https://github.com/navroop005/Video-editor'
  }],
  'ml': [{
    id: 'wildfire',
    title: 'Wildfire detection system',
    about: 'U-Net based segmentation model to differentiate between vulnerable vegetation, burned vegetation and other areas.',
    url: 'https://github.com/navroop005/Wildfire-detection-and-its-spead-prediction'
  }],
  'database': [{
    id: 'railway_reservation',
    title: 'Railway reservation system',
    about: 'A client-server program developed using Java and PostgreSQL for booking tickets\
     with main focus on scalability and concurrency',
    url: 'https://github.com/navroop005/Railway-Reservation-System'
  }, {
    id: 'acad_info',
    title: 'Academic information management system',
    about: 'A terminal application in Java that interacts with PostgreSQL database with main\
    focus on design, object oriented concepts and testing',
    url: 'https://github.com/navroop005/CS305-Mini-project'
  }],
  'other': [{
    id: 'x_fast_y_fast',
    title: 'X-fast trie and Y-fast trie',
    about: 'A data structure for storing integers from a bounded domain, supports exact, \
    predecessor and successor queries in time O(log log M), using O(n log M) space',
    url: 'https://github.com/nishantgta/Implementation-of-X-fast-trie-and-Y-fast-trie'
  }, {
    id: 'smart_home',
    title: 'Home Automation using Verilog',
    about: 'Smart home automation system using Verilog hardware description language with features\
    such as burglar alarms, PIN verification at doors, lighting, ventilation and air conditioning systems, etc',
    url: 'https://github.com/KartikayIITRpr/Home-Automation'
  }, {
    id: 'ucp_champsim',
    title: 'Simulation for UCP using Champsim',
    about: 'Simulated Utility-based Cache Partitioning in LLC using Champsim to\
    divide the LRU-based LLC memory among any number of cores according to their utility',
    url: 'https://github.com/navroop005/UCP-Champsim'
  }]
}

export default function Projects() {
  return (
    <CustomSection title="Projects">
      <SubSection title="Mobile Apps">
        {data['mobile'].map(item => <ProjectTile {...item} key={item['id']} />)}
      </SubSection>
      <SubSection title="Machine learning">
        {data['ml'].map(item => <ProjectTile {...item} key={item['id']} />)}
      </SubSection>
      <SubSection title="Database">
        {data['database'].map(item => <ProjectTile {...item} key={item['id']} />)}
      </SubSection>
      <SubSection title="Other">
        {data['other'].map(item => <ProjectTile {...item} key={item['id']} />)}
      </SubSection>
    </CustomSection>
  )
}
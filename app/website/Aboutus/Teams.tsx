"use client"
import React, { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamData {
  [key: string]: TeamMember[];
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="grid sm:grid-cols-3">
      <div className="relative sm:h-48 rounded shadow max-sm:h-80">
        <Image
          className="absolute object-cover w-full h-full rounded"
          src={member.image}
          alt={member.name}
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
        <p className="text-lg font-bold">{member.name}</p>
        <p className="mb-4 text-xs text-gray-100">{member.role}</p>
        <p className="mb-4 text-sm tracking-wide text-gray-100">{member.description}</p>
      </div>
    </div>
  );
};

const Teams = () => {
  const [year, setYear] = useState("2024-2025");

  const teamData: TeamData = {
    "2023-2024": [
      {
        name: "Sudeeksha S Pai",
        role: "Assistant Professor Department of Humanities",
        description:
          "As the Club Faculty Coordinator, play a pivotal role in guiding and supporting student initiatives, ensuring a dynamic and enriching club experience.",
        image:
          "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691622/Tudar/sudheeksha_youefw.jpg",
      },
      {
        name: "Shushan Kotian",
        role: "President",
        description:
          "As President, leads with vision, driving the organization towards success through strategic planning and inspiring leadership.",
        image:
          "https://res.cloudinary.com/deax1ssmv/image/upload/v1705692297/Tudar/Screenshot_2024-01-20_005439_wrmlfv.png",
      },
      {
        name: "Anwesh",
        role: "Secretary",
        description:
          "Arrange meeting place, prepare an agenda, record minutes, and provide regular updates to the president and institute on pertinent matters affecting the proceedings",
        image:
          "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691469/Tudar/IMG_20231110_184846_-_4NM20EE009_ANWESH_R_SHETTY_m8awhp.jpg",
      },
      {
        name: "Blenson Cardoza",
        role: "Head - Tulu Lipi",
        description:
          "As the Head of Tulu Script Lipi, lead the innovation in preserving and enhancing the Tulu language through script development",
        image:
          "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581159/Tudar/IMG_0014_-_BLENSON_CARDOZA_nmrqje.jpg",
      },
      {
        name: "Suvith Kumar",
        role: "Technical Head",
        description:
          "In my role as the Technical Head, I&pos;m a forward-thinking technologist propelling our cultural community into the digital age.",
        image:
          "https://res.cloudinary.com/deax1ssmv/image/upload/v1705626318/Tudar/suvith_pvlksc.jpg",
      },
      {
        "name": "Brijwin Balakrishna",
        "role": "Digital and Social Media Head",
        "description": "Designing and managing various creatives for the digital assets of the club on various social media platforms.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/IMG_2558_-_4NM20AI013_BRIJWIN_BALAKRISHNA_qzmftp.jpg"
      },
      {
        "name": "Shreya P V",
        "role": "Documentation Head",
        "description": "Creating, maintaining, and managing the documentation of club events, meetings, and other activities.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581172/Tudar/Shreya_-_NNM22BT034_SHREYA_P_V_jz5arh.jpg"
      },
      {
        "name": "Vishnuprasad V Bhat",
        "role": "Joint Secretary",
        "description": "I ensure our club adheres to the event timeline, ensuring seamless execution of all our events.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581177/Tudar/SPV00316_-_4NM22AI405_VISHNUPRASAD_V_BHAT_jwyz6z.jpg"
      },
      {
        "name": "Tvisha Prakash",
        "role": "Social Media - Cohead",
        "description": "As Co-Head of Social Media, spearheads our digital presence, driving engagement and fostering connections in the virtual realm.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705691467/Tudar/personal2_-_4NM21CS195_TVISHA_PRAKASH_JARAPPA_q3ocvx.jpg"
      },
      {
        "name": "Vignesh Mallya",
        "role": "Assistant Tulu Lipi Head",
        "description": "To promote Tulu language and Lipi. Conduct various events related to the same, including Tulu Lipi classes and other activities.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/vignesh_mallya_lipi_-_NNM22BT040_VIGNESH_MALLYA_rsbmgo.jpg"
      },
      {
        "name": "Prathama S J",
        "role": "Event Management Head",
        "description": "Overseeing and coordinating various events, ensuring their successful planning, execution, and follow-up.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581151/Tudar/IMG-20231122-WA0008_-_4NM21CS115_Prathama_S_J_pfcl6j.jpg"
      },
      {
        "name": "Mayur Shet",
        "role": "Co-Head SMC",
        "description": "Creative visionary curating compelling visual stories for social media excellence.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581186/Tudar/mayur_m_shet_-_NNM22IS090_MAYUR_M_SHET_bqwqiu.jpg"
      },
      {
        "name": "Amrith R Naik",
        "role": "Event Management Co-Head",
        "description": "Collaborating in the planning and execution of events for our club with enthusiasm and precision.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/IMG_20240107_141407_-_Amrith_R_Naik_tsdjgy.jpg"
      },
      {
        "name": "Gagan R Rai",
        "role": "Joint Secretary",
        "description": "Managing cultural events, coordinating activities, and supporting administrative tasks.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/Gagan_Rai_-_Gagan_Rai_xuucv8.jpg"
      },
      {
        "name": "Sampreeth T Poojary",
        "role": "Core Member",
        "description": "Writing content for social media posts and volunteering in events.",
        "image": "https://res.cloudinary.com/deax1ssmv/image/upload/v1705581153/Tudar/Sampreeth_T_Poojary_-_Sampreeth_poojary_ejye9q.jpg"
      }
      
    ],
    "2024-2025": [
      {
        "name": "Shreya P V",
        "role": "President",
        "description": "Providing leadership and ensuring overall team success",
        "image": "https://drive.google.com/uc?id=1U-dko-1bhRTxCDdSJbPqqOpJfFZYoe8X"
      },
      {
        "name": "Gagan R Rai",
        "role": "Vice-President",
        "description": "Leading the team and ensuring smooth execution of events and activities",
        "image": "https://drive.google.com/uc?id=16-UuuD4Rm1BGcV2UdHHwuDlcrH_RzYeG"
      },
      {
        "name": "Prathama S J",
        "role": "Event Management Head",
        "description": "Planning and managing all events efficiently",
        "image": "https://drive.google.com/uc?id=1Lr5YxwszGivkPx4t0SDFkcIl0ZUPk1X6"
      },      
      {
        "name": "Jeevan",
        "role": "Event Management Co-Head",
        "description": "Assisting in planning and managing events effectively",
        "image": "https://drive.google.com/uc?id=1aTberyzZinuSKzdrpReC6VNjBGGhVV1d"
      },
      {
        "name": "Amrith R Naik",
        "role": "Technical Head",
        "description": "Overseeing technical aspects of events and team initiatives",
        "image": "https://drive.google.com/uc?id=17TmXmNSa8guYTchk74RIBd0iE7C2h-bO"
      },
      {
        "name": "Sampreeth T Poojary",
        "role": "Technical Co-Head",
        "description": "Assisting in technical planning and event execution.",
        "image": "https://drive.google.com/uc?id=1IvB2E5Le4P_5o9r7tvkFoQ_suI9V_VE9"
      },
      {
        "name": "Shishir Girish Karkera",
        "role": "Media & SMC Head",
        "description": "Leading Media Activities and Managing Social Media initiatives",
        "image": "https://drive.google.com/uc?id=1IvB2E5Le4P_5o9r7tvkFoQ_suI9V_VE9"
      },      
      {
        "name": "H Sumanth Bhat",
        "role": "Media Co-Head",
        "description": "Co-managing media activities and outreach programs",
        "image": "https://drive.google.com/uc?id=19bsBRRCNU8dLgPyFEzbvj4QBO8nr9n8K"
      },
      {
        "name": "Sumith Jayarama Shetty",
        "role": "Digital Head",
        "description": "Handling digital media content and graphics",
        "image": "https://drive.google.com/uc?id=1693MBf_hGAlIa3syPvietA4-dh7cctjB"
      },
      {
        "name": "Pratham S Salian",
        "role": "Tulu Lipi and Magazine Head",
        "description": "Curating and managing magazine content and promoting Tulu Lipi",
        "image": "https://drive.google.com/uc?id=1HJ9UqbE8hBY3mUbb7dSsQwWUULDOK-rT"
      },

      {
        "name": "Namana B K",
        "role": "Documentation Head",
        "description": "Managing documentation and creating reports",
        "image": "https://drive.google.com/uc?id=1w31cqu6Kl3XXa3vDncfHRrboj-Xlr3lv"
      },

      {
        "name": "Suhan Shetty",
        "role": "Joint Secretary",
        "description": "Supporting administrative tasks and team coordination",
        "image": "https://drive.google.com/uc?id=1yY_IGVMqlCNcjHYnUtnLeSHQdIE9GrCQ"
      }      
    ],
  };

  return (
    <div className="font-sans pt-10 pb-10 bg-black">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
            <strong>Team Showcase:</strong>
          </p>
          <p className="text-base text-gray-100 md:text-lg">
            Discover the talented individuals who make up our dynamic team—each
            contributing their unique skills and perspectives to our shared
            success.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setYear("2023-2024")}
            className={`px-4 py-2 font-semibold text-white rounded ${
              year === "2023-2024"
                ? "bg-gray-700 hover:bg-teal-accent-400"
                : "bg-teal-accent-400"
            }`}
          >
            2023-2024
          </button>
          <button
            onClick={() => setYear("2024-2025")}
            className={`px-4 py-2 font-semibold text-white rounded ${
              year === "2024-2025"
                ? "bg-gray-700 hover:bg-teal-accent-400"
                : "bg-teal-accent-400"
            }`}
          >
            2024-2025
          </button>
        </div>
        <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
          {teamData[year]?.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

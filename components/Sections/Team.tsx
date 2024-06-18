
'use client'
import React from 'react'
import Profile from '../ui/Profile'
import Jacky from '../../public/Jacky.jpg'
import Clara from '../../public/teamClarisse.jpg'
import Jane from '../../public/jane2.jpeg'
import profile from '../../public/profile.png'
import Yvonne from '../../public/yvonne.jpeg'
import Kazigaba from '../../public/Kazigaba.jpeg'
import Potel from '../../public/Potel.jpeg'
import Mukamurenzi from '../../public/RWR-Mukamurenzi.jpg'

const Team: React.FC = () => {
  const [showBoardMembers, setShowBoardMembers] = React.useState(false)
const leaderShipTeam = [
  {
    name: 'Clarisse Ingabire ',
    role: 'Executive Secretary	',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Clara,
    email: 'clarisse@unarwanda.org',
    linkedin: 'https://www.linkedin.com/in/ingabire-clarisse-47a9ba77/',
  },
  {
    name: 'Jane Kabera',
    role: 'Director of Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Jane,
    email: 'jane@anchoreco.com',
    linkedin: 'https://www.linkedin.com/in/jane-kabera-3b50b328b',
  },
]

const boardMembers = [
  {
    name: 'Jackline Kamanzi',
    role: 'Founder',
    description:
      "Jackline Kamanzi is a Rwandan advocate for gender, human rights, and women’s empowerment since 2000. She holds a bachelor's degree in law from the National University of Rwanda (NUR) and a Master of Arts in peace studies and conflict transformation from NUR in partnership with Gothenburg University of Sweden. Additionally, she has a postgraduate diploma in legal practice from the Institute of Legal Practice and Development (ILPD) in Rwanda and a certificate in mediation from Edwards Mediation Academy in the United States. From 2000 to 2008, she worked with various organizations, including the United Nations Association of Rwanda and Urunana Development Communication, focusing on reproductive health and family planning. In 2008, she was appointed Director of the Litigation Unit in the Public Service Commission, overseeing laws and policies regulating the Rwandan public service. Since December 2014, Jackline has served as the Executive Secretary of the National Women’s Council, a Rwandan government institution responsible for social mobilization, capacity building of women, and advocacy on their issues.",
    image: Jacky,
    email: 'jkamanzi@cnf.gov.rw',
    linkedin: 'https://www.linkedin.com/in/jackline-kamanzi-404214306',
  },
  {
    name: 'Celine Mukamurenzi',
    role: 'President',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Mukamurenzi,
    email: 'president@gmail.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Potel Jossam',
    role: 'Vice President',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Potel,
    email: 'vicepresident@gmail.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Marie Belise Isingizwe',
    role: 'Treasurer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: profile,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Jane  Uwera',
    role: 'Arbitration Committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: profile,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Rose Mutesi ',
    role: 'Arbitration Committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: profile,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Assiimwe Murebwayire ',
    role: 'Gender Coordinator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Yvonne,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Elloy KAZIGABA',
    role: 'Youth Coordinator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Kazigaba,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Peter KATANISA',
    role: 'Audit committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: profile,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Jeanine Uwimana',
    role: 'Audit committee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: profile,
    email: 'emily@example.com',
    linkedin: 'https://www.linkedin.com/in/',
  },
]

  return (
    <div className="container mx-auto px-28 py-8">
      <h2 className="text-3xl tracking-wide text-center mb-4 font-bold">
        Our Team
      </h2>
      <h3 className="text-[1.5rem] font-light tracking-[0.3px] leading-[1.22] mb-5">
        Leadership Team
      </h3>
      {leaderShipTeam.map((member, index) => (
        <Profile
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
          description={member.description}
          email={member.email}
          linkedin={member.linkedin}
        />
      ))}
      <h3
        className="text-[1.5rem] font-light tracking-[0.3px] leading-[1.22] my-5"
        onClick={() => {
          setShowBoardMembers(!showBoardMembers)
        }}
      >
        Board Members
      </h3>
      {showBoardMembers ? (
        <>
          {boardMembers.map((member, index) => (
            <Profile
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
              email={member.email}
              linkedin={member.linkedin}
            />
          ))}
          <h4
            className="text-[#4894DF] underline pt-3"
            onClick={() => {
              setShowBoardMembers(!showBoardMembers)
            }}
          >
            Hide Board Members
          </h4>
        </>
      ) : (
        <h4
          className="text-[#4894DF] underline"
          onClick={() => {
            setShowBoardMembers(!showBoardMembers)
          }}
        >
          Click to see Board Members
        </h4>
      )}
    </div>
  )
}

export default Team

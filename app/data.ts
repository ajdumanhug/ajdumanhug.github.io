type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Certs = {
  icon: string
  name: string
  title: string
  start: string
  link: string
  id: string
}

type Achievements = {
  name: string
  rank: string
  date: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Secuna',
    title: 'Co-Founder & Penetration Tester',
    start: '07/2017',
    end: '08/2024',
    link: 'https://secuna.io',
    id: 'work1',
  },
  {
    company: 'National Privacy Commission',
    title: 'Highly Technical Consultant',
    start: '10/2022',
    end: '11/2022',
    link: 'https://privacy.gov.ph',
    id: 'work2',
  },
  {
    company: 'IdeaSpace Philippines',
    title: 'Cybersecurity Mentor',
    start: '07/2021',
    end: '11/2022',
    link: 'https://www.ideaspace.vc/',
    id: 'work3',
  },
  {
    company: 'National Privacy Commission',
    title: 'Highly Technical Consultant',
    start: '12/2021',
    end: '03/2022',
    link: 'https://privacy.gov.ph',
    id: 'work4',
  },
  {
    company: 'De La Salle - College of Saint Benilde',
    title: 'Cybersecurity Lecturer',
    start: '05/2021',
    end: '10/2021',
    link: 'https://www.benilde.edu.ph/continuing-education/',
    id: 'work5',
  },
  {
    company: 'National Privacy Commission',
    title: 'Highly Technical Consultant',
    start: '08/2020',
    end: '11/2020',
    link: 'https://privacy.gov.ph',
    id: 'work6',
  },
  {
    company: 'Adamson University',
    title: 'Cybersecurity Lecturer',
    start: '10/2019',
    end: '03/2020',
    link: 'https://www.facebook.com/adamsoncpd/',
    id: 'work7',
  },
  {
    company: 'University of the Philippines SITF',
    title: 'Cybersecurity Lecturer',
    start: '11/2017',
    end: '01/2020',
    link: 'https://upsitf.org/',
    id: 'work8',
  },
  {
    company: 'University of the Philippines ITDC (UP System)',
    title: 'Cybersecurity Anaylst',
    start: '08/2016',
    end: '07/2019',
    link: 'https://itdc.up.edu.ph/',
    id: 'work9',
  },
  {
    company: 'STI College',
    title: 'College Professor',
    start: '11/2016',
    end: '11/2017',
    link: 'https://sti.edu/',
    id: 'work10',
  },
]

export const CERTS: Certs[] = [
  {
    icon: '/images/cissp.png',
    name: 'Certified Information Systems Security Professional',
    title: 'CISSP',
    start: '03/2025',
    link: 'https://www.credly.com/badges/bffdf5c9-f9eb-410d-9925-628a9c591e7c/public_url',
    id: 'cert1',
  },
  {
    icon: '/images/oswp.svg',
    name: 'Offensive Security Wireless Professional',
    title: 'OSWP',
    start: '03/2023',
    link: 'https://www.credential.net/66b17bbc-3490-4916-bfb6-a3509f8fa0e7',
    id: 'cert2',
  },
  {
    icon: '/images/crto.png',
    name: 'Certified Red Team Operator',
    title: 'CRTO',
    start: '01/2023',
    link: 'https://www.credential.net/37cbbb5b-1396-4775-8330-62fc8626373a',
    id: 'cert3',
  },
  {
    icon: '/images/osep.svg',
    name: 'Offensive Security Experienced Penetration Tester',
    title: 'OSEP',
    start: '11/2022',
    link: 'https://www.credential.net/37fc6d8d-e669-4886-aca1-865caa4b0aab',
    id: 'cert4',
  },
  {
    icon: '/images/emapt.png',
    name: 'eLearnSecurity Mobile Application Penetration Tester',
    title: 'eMAPT',
    start: '11/2022',
    link: 'https://www.credential.net/58598212-ecae-49c2-8058-61bc96dce69b',
    id: 'cert5',
  },
  {
    icon: '/images/ecir.png',
    name: 'eLearnSecurity Certified Incident Responder',
    title: 'eCIR',
    start: '01/2022',
    link: 'https://www.credential.net/c660e43b-0c5c-4eb0-baf9-6e9db38fdc17',
    id: 'cert6',
  },
  {
    icon: '/images/ecir.png',
    name: 'eLearnSecurity Certified Threat Hunting Professional',
    title: 'eCTHP',
    start: '11/2021',
    link: 'https://www.credential.net/936d7c4d-0ec5-425c-a47e-1626a244905b',
    id: 'cert7',
  },
  {
    icon: '/images/pnpt.png',
    name: 'Practical Network Professional Tester',
    title: 'PNPT',
    start: '09/2021',
    link: 'https://www.credential.net/7f1ffe9c-ea9c-4ae4-8d2e-61c382ef7e57',
    id: 'cert8',
  },
  {
    icon: '/images/ecdfp.png',
    name: 'eLearnSecurity Certified Digital Forensics Professional',
    title: 'eCDFP',
    start: '09/2021',
    link: 'https://www.credential.net/11fb8af0-3ee4-48ba-8625-5d5779f162cf',
    id: 'cert9',
  },
  {
    icon: '/images/crte.png',
    name: 'Certified Red Team Expert',
    title: 'CRTE',
    start: '05/2021',
    link: 'https://www.credential.net/a0ab709f-4c1c-4b81-927f-0d5aa7871c43',
    id: 'cert10',
  },
  {
    icon: '/images/oswe.png',
    name: 'Offensive Security Web Expert',
    title: 'OSWE',
    start: '05/2021',
    link: 'https://www.credential.net/09723d44-27f8-40cd-94fe-511bbac1f4bb',
    id: 'cert11',
  },
  {
    icon: '/images/crtp.png',
    name: 'Certified Red Team Professional',
    title: 'CRTP',
    start: '03/2021',
    link: 'https://www.credential.net/c470de6c-d4f5-4306-abc4-30edab565c3b',
    id: 'cert12',
  },
  {
    icon: '/images/oscp.png',
    name: 'Offensive Security Certified Professional',
    title: 'OSCP',
    start: '06/2020',
    link: 'https://www.credential.net/6af5ff29-d17a-426d-a1d2-ceda1a950f79',
    id: 'cert13',
  },
  {
    icon: '/images/ecsa.png',
    name: 'EC-Council Certified Security Analyst',
    title: 'ECSA',
    start: '11/2017',
    link: '#',
    id: 'cert14',
  },
  {
    icon: '/images/ceh.png',
    name: 'EC-Council Certified Ethical Hacker',
    title: 'CEH',
    start: '10/2017',
    link: '#',
    id: 'cert15',
  },
]

export const ACHIEVEMENTS: Achievements[] = [
  {
    rank: '3rd Place',
    name: 'DEFCON 29 Red Team Village CTF Finals',
    date: '08/2021',
    id: 'achievement1',
  },
  {
    rank: '3rd Place',
    name: 'DEFCON 29 Red Team Village CTF Qualifiers',
    date: '08/2021',
    id: 'achievement2',
  },
  {
    rank: '10th Place',
    name: 'SINCON 2020 Wonderland CTF',
    date: '12/2020',
    id: 'achievement3',
  },
  {
    rank: '3rd Place',
    name: 'HackTheBox 2v2 Battlegrounds',
    date: '12/2020',
    id: 'achievement4',
  },
  {
    rank: '1st Place',
    name: 'ROOTCON 13 CTF',
    date: '09/2019',
    id: 'achievement5',
  },
  {
    rank: '7th Place',
    name: 'Facebook and Google\'s Bounty Con',
    date: '09/2018',
    id: 'achievement6',
  },
  {
    rank: '2nd Place',
    name: 'ROOTCON 12 CTF',
    date: '09/2018',
    id: 'achievement7',
  },
  {
    rank: '1st Place',
    name: 'CyberSecurity Philippines - CERT Red Team CTF',
    date: '09/2018',
    id: 'achievement8',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Blog',
    link: 'https://moto.h4ck3r.sh',
  },
  {
    label: 'Github',
    link: 'https://github.com/ajdumanhug',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ajdumanhug',
  },
  {
    label: 'HackTheBox',
    link: 'https://app.hackthebox.com/profile/55589',
  },
]

export const EMAIL = 'ajdumanhug@gmail.com'

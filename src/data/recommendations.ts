export type Recommendation = {
  id: string;
  name: string;
  role: string;
  relationship?: string;
  date?: string;
  image: string;
  linkedin?: string;
  text: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "arthitha",
    name: "Arthitha Ravindran",
    role: "Senior Growth Lead, Tacheon",
    image: "https://i.ibb.co/xtJthjpd/Arthitha-Linkedin-Image.jpg",
    text: "I've had the pleasure of working closely with Sanjay, and I can confidently say he is one of the most proactive and dedicated professionals I've come across. He consistently goes above and beyond to ensure things get done, often stepping outside of his immediate responsibilities to solve problems and support the team. What truly sets him apart is his ability to maintain a positive and lively atmosphere, even during high-pressure situations. He's a true team player who not only brings solutions to the table but also brings people together...",
  },
  {
    id: "adithya",
    name: "Adithya Kanakraj",
    role: "Domain Head, Internal Audit, Hyundai",
    image: "https://i.ibb.co/DFFXsLM/Adithya-Sir-Imge-Linekdin.jpg",
    text: "I had the pleasure of supervising Sanjay during his internship in Data Analytics. He demonstrated exceptional skills in data analysis and visualization, and Python programming. Sanjay showcased strong problem-solving abilities, a positive learning mindset, and quick adaptability. He has the skills, passion, and potential to excel. I confidently endorse Sanjay...",
  },
  {
    id: "vishnu",
    name: "Vishnu Bhaskara",
    role: "Team Lead, Operational Audit, Hyundai",
    image: "https://i.ibb.co/k2BjK4VS/Vishnu-sir-Linkedin-Image.jpg",
    text: "Sanjay worked in Hyundai Motors India as a part of an internship program for 6 months. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed data analytics project on time. I'm grateful to have worked with Mr. Sanjay and highly recommend him to any company.",
  },
  {
    id: "saurabh",
    name: "Saurabh Goyal",
    role: "Technology Enthusiast",
    relationship: "Saurabh was senior to Sanjay but didn't manage Sanjay directly.",
    date: "August 5, 2026",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQFe5hLvKQXizw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1622067286009?e=1787788800&v=beta&t=-e-TlN83RsbzBqc05IQFcyr20--Iz_4U7BpYkNGw3Kw",
    linkedin: "https://www.linkedin.com/in/technology-enthusiast-saurabhgoyal/",
    text: "I've had the pleasure of working with Sanjay on integration and API development initiatives. He is a dependable professional with strong technical skills, excellent problem-solving abilities, and a proactive approach to ownership and delivery.\n\nSanjay consistently demonstrates accountability, adaptability, and attention to detail. He works effectively across teams, communicates clearly, and delivers high-quality solutions aligned with business objectives. His willingness to take initiative and support team success makes him a valuable contributor to any organization.\n\nI highly recommend Sanjay and look forward to seeing his continued growth and success.",
  },
  {
    id: "kishor",
    name: "Kishor Kishor",
    role: "Technology Architect | Cloud Integrations for Insurance & BFSI | Ex-Oracle, Dell, Skillsoft & Calyx",
    relationship: "Kishor managed Sanjay directly.",
    date: "August 8, 2026",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQF2fDUWpBWRKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517403884557?e=1787788800&v=beta&t=KBWAac7nZ9KTbVA2U6ck2QaNf-RRyIOrU2ihu-2m3qo",
    linkedin: "https://www.linkedin.com/in/kishor-nrpt/",
    text: "I highly recommend @Sanjay Dharan. He joined our team as a fresher and immediately made an impact on our AWS insurance integration projects. Despite his background being in data science, he adapted fast and was exceptionally good at using AI tools to find smart solutions to whatever we were working on. Most importantly, he was a completely dependable teammate who was always available when we needed him. Sajay is leaving to follow his passion at a data science startup, and I know he will be an excellent asset to them.",
  },
];

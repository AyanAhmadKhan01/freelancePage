
type Skill = {
  name: string
  icon: string
}

type StackSectionProps = {
  title: string
  skills: Skill[]
}


const frontend: Skill[] = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Vite.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" }
]

const backend: Skill[] = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
]

const deployment: Skill[]  = [
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
]

function SkillSection({ title, skills }: StackSectionProps) {
  return (
    <>
    <div id="tech" className="scroll-mt-40 border-2 border-accent m-5 p-10 rounded-2xl last:m-0">
      <h1 className="text-xl font-medium mb-4">{title}</h1>
      <div className="w-full">
        <div className="flex flex-wrap justify-between mx-2 gap-8">
          {skills.map((skill, index)  => (
            <div key={index} className="flex flex-col justify-between items-center my-5 transition-all hover:saturate-200">
              <img className="h-20" src={skill.icon} />
              <p className="text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </>
  )
}

export default function Skills() {
  return (
    <>
      <div>
      <div className="m-5 last:m-0">
        <SkillSection  title="Frontend" skills={frontend} />
      </div>
      <div className="m-5 last:m-0">
        <SkillSection title="Backend" skills={backend} />
      </div>
      <div className="m-5 last:my-0 ">
        <SkillSection title="Deployment" skills={deployment} />
      </div>
    </div>
    </>
  )
}

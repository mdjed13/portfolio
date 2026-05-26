import { Link } from "react-router-dom"

const projectsList = [
  {
    title: "GreenMarket",
    year: "2024",
    desc: "Plant shopping application built with JavaSwing and MySQL. Collaborative project.",
    tech: "JavaSwing, MySQL",
    link: "/greenmarket",
    hasDetails: true
  },
  {
    title: "Films Expert System",
    year: "2024",
    desc: "Movie recommendation system using Python logic programming.",
    tech: "Python",
    link: "/films",
    hasDetails: false
  },
  {
    title: "Iqraa",
    year: "2024",
    desc: "E-commerce book store built with Android Studio.",
    tech: "Android Studio, Java",
    link: "/iqraa",
    hasDetails: false
  },
  {
    title: "Dihya Couture",
    year: "2025",
    desc: "Traditional clothing e-commerce site built with React.",
    tech: "React, Tailwind CSS",
    link: "/dihya",
    hasDetails: false
  }
]

function Projects() {
  return (
    <div>
      <h2 className="text-sm font-semibold text-[#6b4f4f] uppercase tracking-wide mb-4">Projects</h2>
      <div className="space-y-6">
        {projectsList.map((project) => (
          <div key={project.title} className="border-b border-[#e8dcd5] pb-6 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-[#2d1f1f]">{project.title}</h3>
              <span className="text-sm text-[#6b4f4f]">{project.year}</span>
            </div>
            <p className="text-[#2d1f1f] text-sm leading-relaxed mb-2">
              {project.desc}
            </p>
            <p className="text-xs text-[#6b4f4f] mb-3">{project.tech}</p>
            {project.hasDetails ? (
              <Link to={project.link} className="text-sm text-[#6b4f4f] hover:text-[#2d1f1f] transition">
                View details →
              </Link>
            ) : (
              <span className="text-sm text-[#d4c5c0]">Details coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
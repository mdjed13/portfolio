import Navbar from "../components/Navbar"

function Home() {

  return (
    <>
      <Navbar />

      <main className="home">

        <div className="hero">

          {/* LEFT */}

          <div className="left">

            <div className="avatar">
              M
            </div>

            <h1 className="name">
              Djeddou
              <br />
              Malak Hanaa
            </h1>

            <p className="title">
              Computer Science Student
            </p>

            <p className="uni">
              University of Algiers 1
            </p>

            <div className="socials">

              <a
                href="https://github.com/mdjed13"
                target="_blank"
              >
                GitHub
              </a>

              <a href="mailto:yourmail@gmail.com">
                Email
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="right">

            {/* ABOUT */}

            <section id="about">

              <h2>
                About Me
              </h2>

              <p className="about">
                I'm Djeddou Malak Hanaa, a Computer Science student passionate
                about modern technologies, web development, and cybersecurity.
                I enjoy building elegant interfaces, responsive applications,
                and learning technologies that combine creativity and logic.
              </p>

            </section>

            <div className="sections">

              {/* EDUCATION */}

              <section id="education">

                <h3 className="section-title">
                  Education
                </h3>

                <div className="education-item">
                  <h4>1st Year Computer Science</h4>
                  <p>2023 - 2024</p>
                </div>

                <div className="education-item">
                  <h4>2nd Year Computer Science</h4>
                  <p>2024 - 2025</p>
                </div>

                <div className="education-item">
                  <h4>3rd Year Computer Science</h4>
                  <p>2025 - 2026</p>
                </div>

              </section>

              {/* INTERESTS */}

              <section id="interests">

                <h3 className="section-title">
                  Interests
                </h3>

                <ul className="interests">
                  <li>Computer Security</li>
                  <li>Web Development</li>
                  <li>UI / UX Interfaces</li>
                </ul>

              </section>

            </div>

            {/* SKILLS */}

            <section
              id="skills"
              style={{ marginTop: "90px" }}
            >

              <h3 className="section-title">
                Skills
              </h3>

              <div className="skills-container">

                <span className="skill">JavaScript</span>
                <span className="skill">Java</span>
                <span className="skill">Java Swing</span>
                <span className="skill">Python</span>
                <span className="skill">HTML</span>
                <span className="skill">CSS</span>
                <span className="skill">React</span>
                <span className="skill">MySQL</span>
                <span className="skill">Android Studio</span>

              </div>

            </section>

            {/* CONTACT */}

            <section
              id="contact"
              style={{ marginTop: "90px" }}
            >

              <h3 className="section-title">
                Contact
              </h3>

              <p className="about">
                Feel free to reach out through GitHub or my email: 
                mdjeddou2005@gmail.com
              </p>

            </section>

          </div>

        </div>

      </main>
    </>
  )
}

export default Home

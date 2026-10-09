import "./App.css";

import {
  FaChartLine,
  FaBroom,
  FaDatabase
} from "react-icons/fa";

function App() {
  const skills = [
    "SQL",
    "Python",
    "Pandas",
    "Excel",
    "Power BI",
    "MySQL",
    "SQLite",
    "Data Analysis",
    "Data Visualization",
    "Data Cleaning",
  ];

  const projects = [
    {
      number: "01",
      title: "Retail Business Performance & Profitability Analysis",
      description:
        "Analyzed retail sales data to understand business performance, profitability, product behavior, and regional trends.",
      tools: "SQL • Python • Pandas • Tableau",
      link: "https://github.com/raj-raja44/Retail-Performance-Analysis",
      color: "pink",
    },
    {
      number: "02",
      title: "SQL Data Analysis",
      description:
        "Performed data analysis using SQL queries to extract, filter, aggregate, and analyze business data.",
      tools: "SQL • MySQL • Data Analysis",
      link: "https://github.com/raj-raja44/Task3-SQL-Analysis",
      color: "blue",
    },
    {
      number: "03",
      title: "Data Cleaning & Preprocessing",
      description:
        "Cleaned and prepared a real-world dataset by handling missing values, duplicates, inconsistent formats, and data quality issues.",
      tools: "Python • Pandas • Data Cleaning",
      link: "https://github.com/raj-raja44/Data-Cleaning-Task",
      color: "green",
    },
    {
      number: "04",
      title: "Data Visualization using Power BI",
      description:
        "Created an interactive dashboard to analyze sales performance across products, regions, and time periods.",
      tools: "Power BI • Excel • Data Visualization",
      link: "https://github.com/raj-raja44/Data-Visualization-Task",
      color: "yellow",
    },
    {
      number: "05",
      title: "Sales Analysis",
      description:
        "Analyzed product-level sales performance by calculating revenue and quantity sold and creating meaningful visualizations.",
      tools: "Python • SQLite • Pandas • Matplotlib",
      link: "https://github.com/raj-raja44/Sales-Analysis",
      color: "red",
    },
    {
      number: "06",
      title: "Sales Trend Analysis",
      description:
        "Analyzed monthly sales trends using SQL to identify revenue patterns and order volume across different periods.",
      tools: "SQL • MySQL • Data Analysis",
      link: "https://github.com/raj-raja44/Sales-Trend-Analysis",
      color: "purple",
    },
    
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Raju<span>.</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="https://github.com/raj-raja44"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-photo">
          <img src="/raju-profile.jpeg" alt="Raju Otlam" />
        </div>
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Raju Otlam</span>
          </h1>

          <h2>Aspiring Data Analyst</h2>

          <p className="hero-description">
            I turn data into meaningful insights using SQL, Python, Excel,
            Power BI, and data visualization.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects →
            </a>

            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
          </div>

                <div className="social-links">
                  <a
                    href="https://github.com/raj-raja44"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.simpleicons.org/github/FFFFFF"
                      alt=""
                    />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/raju-otlam-ab3795256"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="linkedin-icon">in</span>
                    LinkedIn
                  </a>

                  <a href="mailto:rajoutlam4646@gmail.com">
                    <img
                      src="https://cdn.simpleicons.org/gmail/EA4335"
                      alt=""
                    />
                    Email
                  </a>
                </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-container about-layout">

          <div className="about-content">
            <p className="section-label">ABOUT ME</p>

            <h2>Turning Data Into Insights</h2>

            <p className="about-text">
              I am an aspiring Data Analyst with a strong foundation in SQL,
              Python, Excel, Power BI, and data visualization. I enjoy working
              with data to discover trends, identify patterns, and generate
              meaningful business insights.
            </p>

            <p className="about-text">
              I have hands-on experience working on data cleaning, SQL
              analysis, sales analysis, Power BI dashboards, and retail
              performance analysis. I am currently looking for entry-level
              Data Analyst opportunities where I can apply my analytical
              skills and continue learning.
            </p>
          </div>

          <div className="info-grid">

            <div className="info-card blue-card">
              <div className="info-icon">🎓</div>
              <div>
                <span>Education</span>
                <strong>B.Tech in Information Technology</strong>
              </div>
            </div>

            <div className="info-card green-card">
              <div className="info-icon">📍</div>
              <div>
                <span>Location</span>
                <strong>Hyderabad, India</strong>
              </div>
            </div>

            <div className="info-card pink-card">
              <div className="info-icon">🎯</div>
              <div>
                <span>Career Goal</span>
                <strong>Data Analytics</strong>
              </div>
            </div>

            <div className="info-card yellow-card">
              <div className="info-icon">💼</div>
              <div>
                <span>Open To</span>
                <strong>Entry-Level Roles</strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-container">

          <p className="section-label">MY SKILLS</p>

          <h2>Tools & Technologies</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <div className={`skill-icon skill-${index}`}>
                    
                    {index === 0 && <FaDatabase />}

                    {index === 1 && (
                      <img src="https://cdn.simpleicons.org/python" alt="Python" />
                    )}

                    {index === 2 && (
                      <img src="https://cdn.simpleicons.org/pandas" alt="Pandas" />
                    )}

                    {index === 3 && (
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg" alt="Excel" />
                    )}

                    {index === 4 && (
                      <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg" alt="Power BI" />
                    )}

                    {index === 5 && (
                      <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" />
                    )}

                    {index === 6 && (
                      <img src="https://cdn.simpleicons.org/sqlite" alt="SQLite" />
                    )}
                  {index === 7 && <FaChartLine />}
                  {index === 8 && <FaChartLine />}
                  {index === 9 && <FaBroom />}
                </div>

                <span>{skill}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-container">

          <p className="section-label">EXPERIENCE</p>

          <h2>Professional Experience</h2>

          <div className="timeline">

            <div className="timeline-line"></div>

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-header">
                <div>
                  <h3>Data Analyst Intern</h3>
                  <p className="company">Elevate Labs</p>
                </div>

                <span className="duration">
                  Apr 2025 – May 2025
                </span>
              </div>

                <ul className="experience-points">
                  <li>
                    Cleaned and preprocessed retail datasets using Python and Pandas.
                  </li>
                  <li>
                    Used SQL queries to extract, filter, aggregate, and analyze sales data.
                  </li>
                  <li>
                    Built Power BI dashboards to visualize business metrics and sales performance.
                  </li>
                  <li>
                    Identified trends and patterns to support data-driven decision-making.
                  </li>
                </ul>

              <div className="experience-tags">
                <span>Python</span>
                <span>SQL</span>
                <span>Power BI</span>
                <span>Excel</span>
                <span>Data Analysis</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-container">

          <div className="projects-heading">
            <div>
              <p className="section-label">MY WORK</p>
              <h2>Featured Projects</h2>
            </div>

            <a
              href="https://github.com/raj-raja44"
              target="_blank"
              rel="noreferrer"
              className="view-all"
            >
              View All Projects →
            </a>
          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.number}
              >

                <div className="project-top">
                  <div className="project-icon">
                    {project.number === "01" && "🛒"}
                    {project.number === "02" && "🗄️"}
                    {project.number === "03" && "📄"}
                    {project.number === "04" && "📊"}
                    {project.number === "05" && "📈"}
                    {project.number === "06" && "📉"}
                  </div>

                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* RESUME */}
      <section className="section resume-section">
  <div className="section-container">
    <div className="resume-box">
      <div className="resume-icon">📄</div>

      <div className="resume-content">
        <p className="section-label">RESUME</p>

        <h2>Interested in working together?</h2>

        <p>
          Download my resume to learn more about my education, experience,
          skills, certifications, and data analytics projects.
        </p>

        <div className="resume-actions">
          <a
            href="/Raju_Otlam_Data_Analyst_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn"
          >
            View Resume →
          </a>

          <a
            href="/Raju_Otlam_Data_Analyst_Resume.pdf"
            download
            className="btn secondary-btn"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-container">

          <p className="section-label">CONTACT</p>

          <h2>Let's Connect</h2>

          <p className="contact-text">
            I am currently looking for entry-level Data Analyst opportunities.
            Feel free to connect with me for opportunities, projects, or
            collaboration.
          </p>

          <div className="contact-links">

            <a href="mailto:rajuotlam4646@gmail.com">
              ✉ Email
            </a>

            <a
              href="https://www.linkedin.com/in/raju-otlam/"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>

            <a
              href="https://github.com/raj-raja44"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Raju Otlam • Aspiring Data Analyst</p>
      </footer>

    </div>
  );
}

export default App;
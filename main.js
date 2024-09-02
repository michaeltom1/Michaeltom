const root = document.getElementById("root");
const style = document.getElementById("style");

document.title = "Michael Tom"

root.innerHTML = `
<div>
    <header>
      <nav>
        <div>
          <a href="#"> <p class="logo">Michael</p></a>
        </div>
        <div class="navItems">
          <ul class="">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="intro">
      <img src="../asset/img/mich.jpg" alt="" id="img" />
      <h1>Hello I am Michael Tom 👋</h1>
    </section>
    <div class="sect">
      <section id="about">
        <div class="subHeadings">
          <h2>About Me</h2>
        </div>
        <div class="sectionText">
          <p>
            Greetings! I'm Michael Tom, a passionate web developer and graphic
            designer with over a year of experience in crafting visually
            appealing websites and stunning graphic designs. My portfolio
            showcases my journey and expertise in these fields
          </p>
        </div>
      </section>

      <section id="skills">
        <div class="subHeadings">
          <h2>Skills</h2>
        </div>
        <div class="sectionText">
          <p>
            Proficient in HTML, CSS, JavaScript. My skills are complemented by a
            strong eye for design and a deep understanding of user experience
            principles
          </p>
        </div>
      </section>

      <section id="services">
        <div class="subHeadings">
          <h2>Services</h2>
        </div>
        <div class="sectionText">
          <p>I provide Services Ranging from Web design to Graphic Design</p>
        </div>
      </section>
      <section id="contact">
        <div class="subHeadings">
          <h2>contact</h2>
        </div>
        <div class="sectionText">
          <p>
            Ready to start a project together? Reach out to me via email or
            connect with me on Social Media
          </p>
        </div>
      </section>
    </div>
    <footer id="footer"><a href="#"><<< © Michael Tom>>></a></footer>
</div>`;

const documentCss = `
      *{
        scroll-behavior: smooth;
      }
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #ff7f50;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
      }
      header {
        background: #e4e2e2;
        box-shadow: -18px 3px 61px 9px rgba(0, 0, 0, 0.07);
        position: fixed;
        width: 100%;
      }
      nav {
        display: flex;
        align-items: center;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        height: 4rem;
      }
      a {
        text-decoration: none;
        color: #ff7f50;
      }
      a:hover {
        color: brown;
      }
      .logo {
        font-weight: 800;
        font-size: xx-large;
        color: brown;
      }
      .active {
        color: brown;
      }
      li {
        list-style: none;
      }
      ul {
        display: flex;
        gap: 2rem;
      }

      section {
        width: 80%;
        margin: auto;
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      .intro h1 {
        font-size: 3rem;
        font-weight: 700;
      }
      .intro {
        height: 100vh;
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      #img {
        height: 20rem;
        width: 20rem;
        border-radius: 50%;
        background: #d84712d2;
      }
      .sect {
        background: brown;
      }
      .subHeadings {
        background: coral;
        border-radius: 2rem;
        padding: 0.25rem 0;
      }
      .sectionText {
        box-shadow: -18px 3px 61px 9px rgba(0, 0, 0, 0.07);
        padding: 2rem;
        border-radius: 2rem;
        margin-top: 2rem;
      }
      footer a{
        color: white;
      }
      footer {
        height: 5rem;
        background: coral;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
      .intro {
        height: 100vh;
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 5rem;
      }
       .navItems {
        display: none;
        gap: 2rem;
      }
      }
`;

style.innerHTML = documentCss;

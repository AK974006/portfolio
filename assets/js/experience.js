AOS.init();
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development & Domain Operations",
    cardImage: "assets/images/trishul_school.png",
    place: "School Platform & Prototyping",
    time: "",
    desp: "<li><strong>School Platform Infrastructure:</strong> Managed full-stack web setup, hosting, and domain configuration for trishulschool.online, deploying frontend features on Vercel/GitHub and configuring local search indexing and Google Business profile optimization.</li><li><strong>Full-Stack Prototyping:</strong> Built dynamic user interface components using React, Vite, and Electron, focusing on responsive local-first web applications and storage management tools (such as Cloud OS platform architectures).</li>",
  },
  {
    title: "Software Engineering & Systems Architecture",
    cardImage: "assets/images/eddie_ai.png",
    place: "Eddie AI Core & Tooling",
    time: "",
    desp: "<li><strong>Eddie AI Core:</strong> Built a local, voice-controlled desktop assistant incorporating local language models (Gemma), desktop automation scripts, and custom visual interface components.</li><li><strong>Languages & Tooling:</strong> Software development in Python, Java, C, C++, and Jetpack Compose, backed by active version control practices on GitHub (AK974006) and model hosting on Hugging Face.</li>",
  },
  {
    title: "Hardware & Embedded Prototyping",
    cardImage: "assets/images/experience-page/3.jpg",
    place: "IoT & Embedded Systems",
    time: "",
    desp: "<li><strong>IoT & Embedded Systems:</strong> Hands-on circuit assembly and firmware development using microcontrollers, sensors, LCD displays, and breadboards to build traffic monitoring (ALPR/LiDAR concept) and network utility prototypes.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="200"> 
      <div class="card card1">
        <!-- Using generic placeholder if img fails -->
        <img src="${cardImage}" class="featured-image" onerror="this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  if (experiencecards) {
    experiencecards.innerHTML = output;
  }
};
document.addEventListener("DOMContentLoaded", showCards2);

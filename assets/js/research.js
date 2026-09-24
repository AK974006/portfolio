/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Eddie AI Assistant",
    authors: "Akash KM",
    conferences: "Personal AI Assistants & Local Architectures",
    researchYr: 2026,
    citebox: "popup1",
    image: "assets/images/eddie_ai.png",
    citation: {
      vancouver: "Akash KM. Eddie AI Assistant. Personal AI Assistants & Local Architectures. 2026.",
    },
    abstract: "Designing and building a local, voice-controlled personal desktop assistant integrated with local language models (including Gemma), featuring custom system architectures, visualization modules, and lightweight speech interaction routines.",
    absbox: "absPopup1",
  }
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  if (researchTable) {
    researchTable.innerHTML = output;
  }
};
document.addEventListener("DOMContentLoaded", fillData);

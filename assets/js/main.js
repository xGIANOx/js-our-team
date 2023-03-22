const team = [
    {
        name: "Wayne Barnett",
        img: "./assets/img/wayne-barnett-founder-ceo.jpg",
        role: "Founder & CEO"
    },
    {
        name: "Angela Caroll",
        img: "./assets/img/angela-caroll-chief-editor.jpg",
        role: "Chief Editor"
    },
    {
        name: "Walter Gordon ",
        img: "./assets/img/walter-gordon-office-manager.jpg",
        role: "Office Manager"
    },
    {
        name: "Angela Lopez",
        img: "./assets/img/angela-lopez-social-media-manager.jpg",
        role: "Social Media Manager"
    },
    {
        name: "Scott Estrada",
        img: "./assets/img/scott-estrada-developer.jpg",
        role: "Developer"
    },
    {
        name: "Barbara Ramos",
        img: "./assets/img/barbara-ramos-graphic-designer.jpg",
        role: "Graphic Designer"
    }
]
const rowEl = document.querySelector('.row')
console.log(team);
for (let i = 0; i < team.length; i++) {
    const thisMember = team[i];
    console.log(thisMember);
    const orderClass = i % 2 === 0 ? 'odd' : 'even'; // add order class to alternate cards
    const markup = `
    <div class="col pb-5 ${orderClass}">
        <div class="card border-0 text-center bg-black text-white">
            <img src="${thisMember.img}" alt="">
            <div class="card-body ${orderClass}">
                <h3>
                    ${thisMember.name} 
                </h3>
                <p>
                    ${thisMember.role}
                </p>
            </div>
            
        </div>
    </div>
    <div class="col pb-5 text-white align-items-center d-flex fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, at neque illo dolore ullam illum dolores a id, consequuntur ea aliquam eligendi iure quas repellendus inventore possimus nam error doloribus.
    </div>`
    rowEl.innerHTML += markup
}

const arrow = document.querySelector("a");

arrow.addEventListener("click", () => { 
  const nextSection = document.querySelector("section.wrapper").nextElementSibling;
  nextSection.scrollIntoView({ behavior: "smooth" });
});

class CardNews extends HTMLElement {
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const sectionCard = document.createElement("section");
    sectionCard.setAttribute("class", "section-card");

    const imageCol = document.createElement("div");
    imageCol.setAttribute("class", "column-top");

    const newImage = document.createElement("img");
    newImage.src = this.getAttribute("photo") || "assets/img/default-image.svg";
    newImage.alt = "Foto do vovo python";
    imageCol.appendChild(newImage);

    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const titleContent = document.createElement("h2");
    titleContent.textContent = this.getAttribute("title");
   
    const paragraphTitle = document.createElement("p");
    paragraphTitle.textContent = this.getAttribute("texto");
  

    const endereco = document.createElement("div");
    endereco.setAttribute("class", "endereco");

    info.appendChild(titleContent);
    info.appendChild(paragraphTitle);
    info.appendChild(endereco);

    const imageIcone = document.createElement("img");
    imageIcone.src = this.getAttribute("iconPhoto");
    imageIcone.alt = "Icone da cidade";

    const city = document.createElement("span");
    city.textContent = this.getAttribute("Localization");

    endereco.appendChild(imageIcone);
    endereco.appendChild(city);


    sectionCard.appendChild(imageCol);
    sectionCard.appendChild(info);

    componentRoot.appendChild(sectionCard);
  

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    
    .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .section-card {
      max-width: 385px;
      width: 100%;
      border-radius: 10px;
      border: 1px solid #EAEAEA;
    }

    .column-top > img {
      width: 100%;
      height: auto;
      border-radius: 10px 10px 0 0;
    }

    .info {
      padding: 16px;
      gap: 16px;
      display: flex;
      flex-direction: column;
    }

    .info > h2{
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 140%;
      display: flex;
      align-items: center;
      color: #121214;
      margin: 0;
    }

    .info > p, .endereco > span{
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.75);
      margin: 0;
    }
    .endereco{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    @media (max-width: 600px){
      .card{
        flex-direction: column;
        gap: 30px;
      }
    }
     `;

    return style;
  }
}

customElements.define("card-news", CardNews);
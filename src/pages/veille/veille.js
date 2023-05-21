import React, { useState } from "react";
import "./veille.css";
import Nav from "../../components/general/nav/Nav";
import VeilleArticle from "../../components/veilleComponent/veilleArticle/veilleArticle";
import VeilleOutils from "../../components/veilleComponent/veilleOutils/veilleOutils";
import cyber1 from "../../image/maVeille/cyber1.png";
import cyber2 from "../../image/maVeille/cyber2.png";
import art1 from "../../image/articles/art1.jpg";
import art2 from "../../image/articles/art2.jpg";
import art3 from "../../image/articles/art3.webp";
import art4 from "../../image/articles/art4.jpg";
import art5 from "../../image/articles/art5.jpg";
import art6 from "../../image/articles/art6.png";


function Veille() {
  const [articles] = useState([
    {
      class: "A1",
      title: "Cybersécurité : le français Wallix met la main sur Kleverware",
      date: "17 Mai 2023",
      desc: "Le spécialiste de la gestion des accès à privilège Wallix veut compléter son offre logicielle, pour se développer sur le marché de la sécurité des infrastructures cloud.      ",
      url: "https://www.usine-digitale.fr/article/cybersecurite-le-francais-wallix-met-la-main-sur-kleverware.N2133216",
      image: art1,
    },
    {
      class: "A2",
      title:
        "Une cyberattaque rend inaccessible le site du département des Côtes-d’Armor",
      date: "16 Mai 2023",
      desc: "Une cyberattaque par rançongiciel ayant visé un hébergeur proposant également des services d'infogérance a entraîné par ricochet l'indisponibilité du site du département des Côtes d'Armor.",
      url: "https://www.usine-digitale.fr/article/une-cyberattaque-rend-inaccessible-le-site-departement-des-cotes-d-armor.N2132976",
      image: art2,
    },
    {
      class: "A3",
      title: "La trouvaille scandaleuse d’un journaliste sur Tiktok",
      date: "24 Mai 2023",
      desc: "Un journaliste a diffusé des preuves pouvant prouver que tik tok communiquerai les informations personnels de ses utilisateur au partie communiste chinois",
      url: "https://www.youtube.com/watch?v=gKyTc3YEn-Q&t",
      image: art3,
    },
    {
      class: "A4",
      title: `En quoi consiste le projet de loi pour "sécuriser" internet ?`,
      date: "7 juin 2023",
      desc: `Filtre anti-arnaques, luttes contre le cyberharcèlement ou l'accès des mineurs au porno : voici les principales mesures prévues par le gouvernement pour "sécuriser et réguler" internet.`,
      url: "https://www.capital.fr/economie-politique/en-quoi-consiste-le-projet-de-loi-pour-securiser-internet-1467802",
      image: art4,
    },
    {
      class: "A5",
      title:
        "CIEM, Gestion des identités et accès cloud : comment réduire les risques de sécurité ?",
      date: "4 juin 2023",
      desc: "En enjeu majeur, le cloud soulève aussi des risques particuliers et différents pour la cybersécurité des entreprises qui l’adoptent. La gestion des identités et des accès est sans conteste l’un des aspects les plus critiques de la sécurité dans le cloud.",
      url: "https://www.informatiquenews.fr/ciem-gestion-des-identites-et-acces-cloud-comment-reduire-les-risques-de-securite-xavier-duros-check-point-93499",
      image: art5,
    },
    {
      class: "A6",
      title: `Sécurité informatique : le concept de "confiance zéro" est-il garant d’un risque zéro ?`,
      date: "9 Mai 2023",
      desc: "Si le ‘zero trust’ (confiance zéro) permet de réduire fortement le risque des cyberattaques, il ne l’élimine pas pour autant. Il tend vers le « zéro risque », sans toutefois l’atteindre.",
      url: "https://www.gazettenormandie.fr/article/securite-informatique-le-concept-de-confiance-zero-est-il-garant-d-un-risque-zero",
      image: art6,
    },
  ]);

  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="veille-main">
        <div className="section-header">
          <img src={cyber1} alt="" />
          <h1 className="page-title">Veille Cyber</h1>
          <img src={cyber2} alt="" />
        </div>
        <VeilleOutils />
        <div className="defilement">
          <h1 className="section-title">Derniers acticles</h1>
        </div>
      </div>
      <div class="container veille">
        {articles.map((article, index) => (
          <VeilleArticle
            key={index}
            articleClass={article.class}
            articleImage={article.image}
            articleUrl={article.url}
            articleTitle={article.title}
            articleDate={article.date}
            articleDesc={article.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Veille;

import React from "react";
import ISET from "../../assets/partners/isettz.jpg";
import ssS from "../../assets/partners/3s.png";
import ADDPAB from "../../assets/partners/addpab.png";
import CANDY from "../../assets/partners/candyled.png";
import GNET from "../../assets/partners/Gnet.png";
import OXACLOUD from "../../assets/partners/oxaCloud.png";
import DEVER from "../../assets/partners/Devercipe.png";
import Tree from "../../assets/partners/TreeTronix.png";
const partners = [
  { id: 1, url: ssS, link: "https://www.3s.com.tn/en/" },
  { id: 2, url: GNET, link: "https://www.gnet.tn/" },
  {
    id: 3,
    url: DEVER,
    link: "https://www.devrecipe.com/?fbclid=IwAR29Zvo_grBOOF8haaDgmmg_Jskqmp_bw6aLO2K_yBuTQbQ13cwFxo9a4Z8",
  },
  { id: 4, url: CANDY, link: "http://www.candyled.com/en/" },
  { id: 5, url: Tree, link: "https://treetronix.com/" },
  { id: 6, url: OXACLOUD, link: "https://oxacloud.tn/" },
  { id: 7, url: ADDPAB, link: "" },
  { id: 8, url: ISET, link: "http://www.isett.rnu.tn/" },
];
const PartnairesSection = () => {
  return (
    <div className="mx-auto my-auto grid h-5/6 items-center justify-center  py-20 text-white md:h-full">
      <div className=" h-full w-full items-center justify-center md:grid">
        <div className="mx-auto mt-48 flex w-full flex-col items-center justify-center px-8">
          <h1 className="text-center text-3xl font-bold">Partners</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner) => (
              <a href={partner.link}>
                <img
                  key={partner.id}
                  className=" w-20 rounded-full border-8 border-white transition duration-300 hover:scale-110 hover:border-dustLight md:m-2 md:w-28  lg:m-5 "
                  src={partner.url}
                  alt="logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnairesSection;

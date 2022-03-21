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
  { id: 1, url: ssS },
  { id: 2, url: GNET },
  { id: 3, url: DEVER },
  { id: 4, url: CANDY },
  { id: 5, url: Tree },
  { id: 6, url: OXACLOUD },
  { id: 7, url: ADDPAB },
  { id: 8, url: ISET },
];
const PartnairesSection = () => {
  return (
    <div className="mx-auto my-auto grid h-5/6 items-center justify-center  py-20 text-white md:h-full">
      <div className=" h-full w-full items-center justify-center md:grid">
        <div className="mx-auto mt-48 flex w-full flex-col items-center justify-center px-8">
          <h1 className="text-center text-3xl font-bold">Partners</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner) => (
              <img
                key={partner.id}
                className=" w-20 rounded-full border-8 border-white transition duration-300 hover:scale-110 hover:border-dustLight md:m-2 md:w-28  lg:m-5 "
                src={partner.url}
                alt="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnairesSection;

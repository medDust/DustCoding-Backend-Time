import React from "react";

const Service = () => {
  return (
    <div className="bg-dustDark pt-32 -top-20 h-1/2 space-y-8 p-9">
      <div className="items-center text-center ">
        <h5 className=" text-4xl font-extrabold text-white">Our Services</h5>
      </div>
      <div className="mx-auto flex grid-cols-9 flex-col justify-center p-2 text-black md:grid">
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-white col-start-1 col-end-5 my-4 ml-auto rounded-xl p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Client</h3>
            <p className="text-justify leading-tight">What is Dustcoding ?</p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="bg-dustLight pointer-events-none h-full w-1"></div>
            </div>
            <div className="bg-dustLight absolute top-1/2 -mt-3 h-6 w-6 rounded-full shadow"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="bg-dustLight pointer-events-none h-full w-1"></div>
            </div>
            <div className="bg-dustLight absolute top-1/2 -mt-3 h-6 w-6 rounded-full shadow"></div>
          </div>
          <div className="bg-dustLight col-start-6 col-end-10 my-4 mr-auto rounded-xl p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding</h3>
            <p className="text-justify leading-tight">
              A Tunisian SSII that creates high quality professional websites
              using the most advanced web solutions with the highest standards .
            </p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-white col-start-1 col-end-5 my-4 ml-auto rounded-xl p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Client</h3>
            <p className="text-justify leading-tight">
              And what type of services and solutions are you offering ?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="bg-dustLight pointer-events-none h-full w-1"></div>
            </div>
            <div className="bg-dustLight absolute top-1/2 -mt-3 h-6 w-6 rounded-full shadow"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="bg-dustLight pointer-events-none h-full w-1"></div>
            </div>
            <div className="bg-dustLight absolute top-1/2 -mt-3 h-6 w-6 rounded-full shadow"></div>
          </div>
          <div className="bg-dustLight col-start-6 col-end-10 my-4 mr-auto rounded-xl p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding</h3>
            <p className="text-justify leading-tight">
              DUSTcoding is a startup specializing in computer development and
              integration and computer engineering services that specializes in
              state-of-the-art software solutions, design of websites and
              applications, development of information systems, development of
              solutions for the of things (IOT) and artificial intelligence (AI)
              big data and administration solutions..
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="bg-dustLight pointer-events-none h-full w-1"></div>
            </div>
            <div className="bg-dustLight absolute top-1/2 -mt-3 h-6 w-6 rounded-full shadow"></div>
          </div>
          <div className="bg-dustLight col-start-6 col-end-10 my-4 mr-auto rounded-xl p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">DUSTcoding </h3>
            <p className="text-justify leading-tight">
              For more information about our services check above.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap ">
          <div className=" w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" max-h-fitnpm start mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                Development
              </h4>
              <p className="text-dustDark">
                We have talented designers, of developers and creators of all
                kinds, which deliver digital products very high quality.
              </p>
            </div>
          </div>
          <div className="h-1/6 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                Dust smart
              </h4>
              <p className="text-dustDark">
                DUST SMART is a project modern technology aimed at facilitate
                the management and control of oasis thanks to an application
                that allows farmers to control irrigation, cameras monitoring
                and alarms.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                DUST light
              </h4>
              <p className="text-dustDark">
                A project that we offer to establishments private industrialists
                and public establishments to develop the digitization and modern
                technology
              </p>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dark mb-3 text-xl font-semibold">Xibalba</h4>
              <p className="text-dustDark">
                Lifi (or Li-Fi), for Light Fidelity, means a technology wireless
                communication based on the light. Concretely, Li-Fi works thanks
                to LED bulb lighting which have an intensity modular light
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="mb-3 text-xl font-semibold text-black">
                DUST SERVICES
              </h4>
              <p className="text-dustring">
                with our partners GlobalNet has created a division Business. She
                offers a full range of services very high internet access speed:
                Fiber Optics, SDSL, ADSL PRO.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                SMART HOME
              </h4>
              <p className="text-dustDark ">
                A smart home refers to a convenient home setup where appliances
                and appliances can be automatically controlled distance from
                anywhere with a Internet connection using a device mobile or
                other networked device.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                Lighting Smart
              </h4>
              <p className="text-dustDark">
                Solutions economic and intelligent public lighting
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className=" mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 ">
              {/* logo */}
              <h4 className="text-dustDark mb-3 text-xl font-semibold">
                DUST cloud
              </h4>
              <p className="text-dustDark">
                Cloud computing is the on-demand availability of computer system
                resources, especially data storage and computing power, without
                direct active management by the user, And now it's avaible in
                DUSTcoding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

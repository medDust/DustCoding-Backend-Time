import React from "react";

const Messaging = () => {
  return (
    <div className="mx-auto  rounded-lg bg-white shadow-lg">
      <div className="flex h-full w-full flex-row justify-between bg-white">
        <div className="flex w-2/5 flex-col overflow-y-auto border-r-2 bg-white">
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="border-black-200 w-full rounded-2xl border-2 py-2 px-2"
            />
          </div>

          <div className="flex flex-row items-center justify-center border-b-2 py-4 px-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Luis1994</div>
              <span className="text-black">Pick me at 9:00 Am</span>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 bg-dustLight py-4 px-2 ">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Everest Trip 2021</div>
              <span className="text-black">Hi Sam, Welcome</span>
            </div>
          </div>
          <div className="border-blue-400 flex flex-row items-center border-b-2 border-l-4 py-4 px-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">MERN Stack</div>
              <span className="text-black">Lusi : Thanks Everyone</span>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 py-4 px-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-black">Evan : some one can fix this</span>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 py-4 px-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-black">Evan : some one can fix this</span>
            </div>
          </div>

          <div className="flex flex-row items-center border-b-2 py-4 px-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-12 w-12 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Javascript Indonesia</div>
              <span className="text-black">Evan : some one can fix this</span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between px-5">
          <div className="mt-5 flex flex-col">
            <div className="mb-4 flex justify-end">
              <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-dustM py-3 px-4 text-black">
                Welcome to group everyone !
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-8 w-8 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="mb-4 flex justify-start">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-8 w-8 rounded-full object-cover"
                alt=""
              />
              <div className="bg-black-400 ml-2 rounded-br-3xl rounded-tr-3xl rounded-tl-xl py-3 px-4 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                at praesentium, aut ullam delectus odio error sit rem.
                Architecto nulla doloribus laborum illo rem enim dolor odio
                saepe, consequatur quas?
              </div>
            </div>
            <div className="mb-4 flex justify-end">
              <div>
                <div className="bg-dustLight-400 mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl py-3 px-4 text-black">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, repudiandae.
                </div>

                <div className="bg-dustLight-400 mt-4 mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl py-3 px-4 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, reiciendis!
                </div>
              </div>
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-8 w-8 rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="mb-4 flex justify-start">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="h-8 w-8 rounded-full object-cover"
                alt=""
              />
              <div className="-400 ml-2 rounded-br-3xl rounded-tr-3xl rounded-tl-xl py-3 px-4 text-black">
                happy holiday guys!
              </div>
            </div>
          </div>
          <div className="py-5">
            <input
              className=" w-full rounded-xl border py-5 px-3"
              type="text"
              placeholder="type your message here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;

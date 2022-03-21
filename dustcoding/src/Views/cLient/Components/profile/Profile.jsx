import React from "react";

const Profile = () => {
  return (
    <div class="relative  mt-0 w-full overflow-hidden rounded shadow-2xl">
      <div class="top bg-blue-600 relative h-64 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          class="bg absolute z-0 h-full w-full object-cover object-center"
        />
        <div class="relative flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 class="text-2xl font-semibold">Antonia Howell</h1>
          <h4 class="text-sm font-semibold">Joined **/**/****</h4>
        </div>
      </div>
      <div class="grid grid-cols-12 bg-white ">
        <div class="col-span-12 flex w-full justify-center space-x-4 border-b border-solid px-3 py-6 md:col-span-2 md:flex-col md:justify-start md:space-x-0 md:space-y-4 "></div>

        <div class="col-span-12 h-full pb-12 md:col-span-10 md:border-l md:border-solid md:border-black md:border-opacity-25">
          <div class="px-4 pt-4">
            <form action="#" class="flex flex-col space-y-8">
              <div>
                <h3 class="text-2xl font-semibold">Basic Information</h3>
              </div>

              <div class="form-item">
                <label class="text-xl ">Full Name</label>
                <input
                  type="text"
                  value="Antonia P. Howell"
                  class="focus:shadow-outline text-md mr-2 w-full appearance-none rounded py-2 px-3 text-black shadow focus:border-dustLight focus:outline-none"
                  disabled
                />
              </div>

              <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <div class="form-item w-full">
                  <label class="text-xl ">Username</label>
                  <input
                    type="text"
                    value="antonia"
                    class="focus:shadow-outline s mr-2 w-full appearance-none rounded py-2 px-3 text-black focus:outline-none "
                    disabled
                  />
                </div>

                <div class="form-item w-full">
                  <label class="text-xl ">Email</label>
                  <input
                    type="text"
                    value="antoniaph@gmail.com"
                    class="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black focus:outline-none "
                    disabled
                  />
                </div>
              </div>

              <div>
                <h3 class="text-2xl font-semibold">Curnte project</h3>
              </div>

              {/* <div class="form-item">
                <label class="text-xl ">Instagram</label>
                <input
                  type="text"
                  value="https://instagram.com/"
                  class="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black text-opacity-50 text-opacity-25 shadow focus:border-blue-200 focus:outline-none "
                  disabled
                />
              </div>
              <div class="form-item">
                <label class="text-xl ">Facebook</label>
                <input
                  type="text"
                  value="https://facebook.com/"
                  class="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black text-opacity-50 text-opacity-25 shadow focus:border-blue-200 focus:outline-none "
                  disabled
                />
              </div>
              <div class="form-item">
                <label class="text-xl ">Twitter</label>
                <input
                  type="text"
                  value="https://twitter.com/"
                  class="focus:shadow-outline mr-2 w-full appearance-none rounded py-1 px-2 text-black  text-opacity-50 shadow focus:border-blue-200 focus:outline-none  "
                  disabled
                />
              </div>
              */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

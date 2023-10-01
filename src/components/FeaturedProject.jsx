import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  return (
    <div className="space-y-8 bg-green-100 py-8">
      <div className="px-[120px] space-y-8">
        <p className="text-green-400">FEATURED PROJECT</p>
        <h2 className="font-bold text-3xl">
          We provide the Perfect Solution to your business growth
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-full px-[120px]">
        <div class="row-span-2 lg:col-span-2 md:col-span-2 pb-[100px]">
          <img
            src={data[0].image}
            alt=""
            class="w-full h-full object-cover object-left-bottom rounded-xl"
          />
          <div>
            <p>App Design - June 20, 2022</p>
            <h3 className="font-bold text-xl">App Redesign</h3>
          </div>
        </div>

        <div class="md:col-span-1 xl:col-span-1 pb-[100px]">
          <img
            src={data[1].image}
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <div>
            <p>App Design - June 20, 2022</p>
            <h3 className="font-bold text-xl">
              Redesign channel website landing page
            </h3>
          </div>
        </div>

        <div class="md:col-span-1 xl:col-span-1 pb-[100px]">
          <img
            src={data[2].image}
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
          <div className="">
            <p>App Design - June 20, 2022</p>
            <h3 className="font-bold text-xl">
              Redesign channel website landing page
            </h3>
          </div>
        </div>

        <div class=" xl:col-span-1 pb-[100px]">
          <img
            src={data[3].image}
            alt=""
            class="w-full h-full object-cover object-top rounded-xl"
          />
          <div>
            <p>App Design - June 20, 2022</p>
            <h3 className="font-bold text-xl">
              Redesign channel website landing page
            </h3>
          </div>
        </div>

        <div class="pb-[100px]">
          <img
            src={data[4].image}
            alt=""
            class="w-full h-full object-cover object-right-top rounded-xl"
          />
          <div>
            <p>App Design - June 20, 2022</p>
            <h3 className="font-bold text-xl">
              Redesign channel website landing page
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

import { headers } from "next/headers";
import Breadcrumb from "./BreadCrumbs";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const Services = async () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathnameWithSlash] =
    fullUrl.match(new RegExp(`https?://${domain}(/?.*)`)) || [];

  const pathname = pathnameWithSlash ? pathnameWithSlash.slice(1) : "";

  const data = await getData();

  return (
    <div>
      <Breadcrumb pathname={pathname} />
      <div className="px-[125px] space-y-3">
        <p className="text-green-400 font-semibold pt-[80px]">
          OUR ALL SERVICES
        </p>
        <h1 className=" font-bold text-3xl">
          We Provide BestWeb design
          <br />
          services
        </h1>
      </div>
      <div className="space-y-10 px-[120px] ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 md:space-y-10 sm:space-y-10  pt-20 pb-22">
          <div className=" w-[650px] h-[735px] pt-[60px] mt-[38px]  shadow pl-6 rounded-xl space-y-6">
            <h1 className="text-3xl font-bold overflow-hidden">
              Build & Launch without problems
            </h1>
            <p className="text-gray-400">
              Increase your team’s productivity and save time <br />
              with a bot that answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 grid-rows-4 gap-6 rounded w-[600px]">
              <div className="col-span-4 row-span-2 w-full">
                <img src={data[0].image1} alt="" className="rounded-xl " />
              </div>
              <div className="row-span-2 col-start-5 col-span-2">
                <img
                  src={data[1].image2}
                  alt=""
                  className="h-full  object-cover rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-3">
                <img src={data[2].image3} alt="" className="rounded-xl" />
              </div>
              <div className="col-span-3 row-span-2 col-start-4 row-start-3">
                <img
                  src={data[3].image4}
                  alt=""
                  className="rounded-xl h-[214px]"
                />
              </div>
            </div>
          </div>
          <div className=" w-[650px] h-[735px]  pt-[60px] p-8 shadow rounded-xl space-y-6">
            <h1 className="text-3xl font-bold overflow-hidden">
              Build & Launch without problems
            </h1>
            <p className="text-gray-400">
              Increase your team’s productivity and save time <br />
              with a bot that answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 grid-rows-4 gap-6 rounded w-[600px]">
              <div className="col-span-4 row-span-2 w-full">
                <img src={data[0].image1} alt="" className="rounded-xl " />
              </div>
              <div className="row-span-2 col-start-5 col-span-2">
                <img
                  src={data[1].image2}
                  alt=""
                  className="h-full  object-cover rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-3">
                <img src={data[2].image3} alt="" className="rounded-xl" />
              </div>
              <div className="col-span-3 row-span-2 col-start-4 row-start-3">
                <img
                  src={data[3].image4}
                  alt=""
                  className="rounded-xl h-[214px]"
                />
              </div>
            </div>
          </div>
          <div className=" w-[650px] h-[735px]  pt-[60px] p-8 shadow rounded-xl space-y-6">
            <h1 className="text-3xl font-bold overflow-hidden">
              Build & Launch without problems
            </h1>
            <p className="text-gray-400">
              Increase your team’s productivity and save time <br />
              with a bot that answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 grid-rows-4 gap-6 rounded w-[600px]">
              <div className="col-span-4 row-span-2 w-full">
                <img src={data[0].image1} alt="" className="rounded-xl " />
              </div>
              <div className="row-span-2 col-start-5 col-span-2">
                <img
                  src={data[1].image2}
                  alt=""
                  className="h-full  object-cover rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-3">
                <img src={data[2].image3} alt="" className="rounded-xl" />
              </div>
              <div className="col-span-3 row-span-2 col-start-4 row-start-3">
                <img
                  src={data[3].image4}
                  alt=""
                  className="rounded-xl h-[214px]"
                />
              </div>
            </div>
          </div>
          <div className=" w-[650px] h-[735px]  pt-[60px] p-8 shadow rounded-xl space-y-6">
            <h1 className="text-3xl font-bold overflow-hidden">
              Build & Launch without problems
            </h1>
            <p className="text-gray-400">
              Increase your team’s productivity and save time <br />
              with a bot that answers and fields customer inquiries
            </p>
            <div className="grid grid-cols-6 grid-rows-4 gap-6 rounded w-[600px]">
              <div className="col-span-4 row-span-2 w-full">
                <img src={data[0].image1} alt="" className="rounded-xl " />
              </div>
              <div className="row-span-2 col-start-5 col-span-2">
                <img
                  src={data[1].image2}
                  alt=""
                  className="h-full  object-cover rounded-xl"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-3">
                <img src={data[2].image3} alt="" className="rounded-xl" />
              </div>
              <div className="col-span-3 row-span-2 col-start-4 row-start-3">
                <img
                  src={data[3].image4}
                  alt=""
                  className="rounded-xl h-[214px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

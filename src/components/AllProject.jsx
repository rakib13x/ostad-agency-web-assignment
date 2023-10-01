import { headers } from "next/headers";
import Breadcrumb from "./BreadCrumbs";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const AllProject = async () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathnameWithSlash] =
    fullUrl.match(new RegExp(`https?://${domain}(/?.*)`)) || [];

  const pathname = pathnameWithSlash ? pathnameWithSlash.slice(1) : "";

  console.log(pathname);
  const data = await getData();

  return (
    <>
      <Breadcrumb pathname={pathname} />

      <div className="px-[125px] space-y-3">
        <p className="text-green-400 font-semibold pt-[80px]">All Project</p>
        <h1 className=" font-bold text-3xl">
          Better Agency/SEO Solution At
          <br />
          Your Fingertips
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1   gap-8 px-[140px] pt-[80px]">
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[0].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[0].title}</h2>
          </div>
        </div>
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[1].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[1].title}</h2>
          </div>
        </div>
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[2].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[2].title}</h2>
          </div>
        </div>
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[3].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[3].title}</h2>
          </div>
        </div>
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[4].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[4].title}</h2>
          </div>
        </div>
        <div className="card w-[604px] h-[450px] bg-base-100 shadow-xl">
          <figure>
            <img src={data[5].image} alt="Shoes" />
          </figure>
          <div className="pt-4">
            <h2 className="text-center font-bold pb-4">{data[5].title}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProject;

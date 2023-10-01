import { headers } from "next/headers";
import Breadcrumb from "./BreadCrumbs";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("TeamList Calling Fail");
  }
  return res.json();
}

const Team = async () => {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathnameWithSlash] =
    fullUrl.match(new RegExp(`https?://${domain}(/?.*)`)) || [];

  const pathname = pathnameWithSlash ? pathnameWithSlash.slice(1) : "";

  const data = await getData();

  return (
    <>
      <Breadcrumb pathname={pathname} />
      <div className="px-[125px] space-y-3">
        <p className="text-green-400 font-semibold pt-[80px]">
          OUR TEAM MEMBER
        </p>
        <h1 className=" font-bold text-3xl">
          Check our awesome team
          <br />
          members
        </h1>
      </div>
      <div className=" grid lg:grid-cols-3 gap-10 px-[140px]  justify-center pt-[60px]">
        <div className="card h-[500px] w-[300px] bg-base-100 shadow-md ">
          <figure>
            <img src={data[0].image} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold text-center">{data[0].name}</h2>
          </div>
        </div>
        <div className="card h-[500px] w-[300px] bg-base-100 shadow-xl ">
          <figure>
            <img src={data[0].image} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold text-center">{data[0].name}</h2>
          </div>
        </div>
        <div className="card h-[500px] w-[300px] bg-base-100 shadow-xl ">
          <figure>
            <img src={data[0].image} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold text-center">{data[0].name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

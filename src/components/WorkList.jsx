import { BsArrowRight } from "react-icons/bs";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("StatList Calling Fail");
  }
  return res.json();
}
const WorkList = async () => {
  const data = await getData();
  console.log(data[0].title);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 pl-6 hover:shadow-xl hover:duration-200 transition duration-300 rounded space-y-4 pb-6">
            <span className="mb-6 inline-block p-4 rounded-xl bg-green-100">
              <img src="logo/Activity.png" />
            </span>
            <h3 className="text-xl font-bold">{data[0].title}</h3>
            <p className="text-gray-500">{data[0].des}</p>
            <button className="flex items-center gap-2 ">
              <p>Learn More</p>
              <BsArrowRight />
            </button>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 pl-6 hover:shadow-xl hover:duration-200 transition duration-300 rounded space-y-4 pb-6">
            <span className="mb-6 inline-block p-4 rounded-xl bg-green-100">
              <img src="logo/Heart.png" />
            </span>
            <h3 className="text-xl font-bold">{data[1].title}</h3>
            <p className="text-gray-500">{data[1].des}</p>
            <button className="flex items-center gap-2 ">
              <p>Learn More</p>
              <BsArrowRight />
            </button>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4 pl-6 hover:shadow-xl hover:duration-200 transition duration-300 rounded space-y-4 pb-6">
            <span className="mb-6 inline-block p-4 rounded-xl bg-green-100">
              <img src="logo/Work.png" />
            </span>
            <h3 className="text-xl font-bold">{data[2].title}</h3>
            <p className="text-gray-500">{data[2].des}</p>
            <button className="flex items-center gap-2 ">
              <p>Learn More</p>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <div className="  flex  justify-between md:gap-8  px-[120px] pt-[20px]">
        <div>
          <img src={data[0].image} alt="" />
        </div>
        <div>
          <img src={data[1].image} alt="" />
        </div>
        <div>
          <img src={data[2].image} alt="" />
        </div>
        <div>
          <img src={data[3].image} alt="" />
        </div>
      </div>
      <div className="h-12 w-full bg-green-100 mt-4"></div>
    </div>
  );
};

export default Brands;

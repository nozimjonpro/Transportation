import { useRouter } from "next/router";
import Image from "next/image";
import HeavyConst from "../components/HeavyConst/HeavyConst";
interface Item {
  id: number;
  name: string;
  carHero: string;
  fullText: string;
  carContentImg: string;
  findName: string;
  secoundText: string;
  thridText: string;
}

function ServicesId() {
  const routerId = useRouter();
  const { servicesId } = routerId.query;

  const allList: {
    id: number;
    findName: string;
    name: string;
    carHero: string;
    carContentImg: string;
    fullText: string;
    secoundText: string;
    thridText: string;
  }[] = [
    {
      id: 1,
      findName: "car",
      name: "Car Shipments",
      carHero: "/Images/singleImgs/car-hero.avif",
      carContentImg: "/Images/singleImgs/car-hero2.avif",
      fullText: `One of the most widely-known segment of the freight industry is Auto Transport. It offers car shipping services to individuals and organizations who require a car to be transferred from one place to another. This could be because of employment reasons, seasonal travel, or the purchase of a new car.`,
      secoundText:
        "Are you having similar situations and need to ship your car? You are on the right Place; Optimum Auto Shipping offers you all types of auto transport services with full coverage of insurance and Door to Door delivery.",
      thridText:
        " Optimum Auto Shipping is specialized in transporting Sedans, SUVs, Pickup trucks, Vans and other type of vehicles. Ship your car with PROs anytime and anywhere.",
    },
    {
      id: 2,
      findName: "moto",
      name: "Motorcycle shipments",
      carHero: "/Images/singleImgs/moto-hero.avif",
      carContentImg: "/Images/singleImgs/moto-hero2.avif",
      fullText:
        "Motorcycle shipments are as popular as regular vehicles. People might need motorcycle shipments due to some reasons like moving to another state, buying or selling purposes, and the most popular one “Vintage motorcycle shows",
      secoundText:
        "How to Ship a Motorcycle | Tips & Solutions It is very important to choose a reliable shipping company for your motorcycle shipment. After choosing a company you need to clarify whether you want to ship your motorcycle with an open carrier or with an enclosed one. Usually, people choose enclosed shipments for their motorcycle shipments because it gives protection to your bike from the elements and from thieves. Open carriers are also fine for those who have a small budget. Optimum Auto Shipping offers both enclosed and open carriers for your motorcycle shipments.",
      thridText: " Ship your motorcycle with PROs anytime and anywhere.",
    },
    {
      id: 3,
      findName: "heavy",
      name: "Heavy Equipment",
      carHero: "/Images/singleImgs/heavy-hero.avif",
      carContentImg: "/Images/singleImgs/heavy-hero2.avif",
      fullText:
        "Shipping Heavy equipment is not always an easy process to do. Heavy machinery plays an important role in your business. So that’s why you will need a professional heavy equipment transporter to ship your machinery.",
      secoundText:
        " Heavy equipment is a wide term that refers to a number of devices used in several industries. This equipment is defined by both its weight and size. Heavy equipment can be Tractors, Forklifts, Cranes, Industrial equipment, and others. Measurements and the weight of the heavy equipment are one of the crucial aspects of shipping process. Dimensions impact the shipping price dramaticall ",
      thridText: "",
    },
    {
      id: 4,
      findName: "hi",
      name: "HI / AK Shipments",
      carHero: "/Images/singleImgs/hawii-hero.avif",
      carContentImg: "",
      fullText:
        "It can be difficult to locate a firm that offers car transportation to Alaska because several auto shippers only cover the lower 48 states. We'll first go over the procedure for transporting a car to Alaska in order to make things clearer before moving on to typical charges and suggestions. ",
      secoundText:
        "The challenging winter weather in Alaska often makes it more difficult to ship cars across the state, causing delays and additional expenditures. While the summers are often mild and rainy, the winters are chilly and covered in snow. Be ready for road conditions to cause transit times to be extended if you intend to send an automobile to Alaska during the winter",
      thridText:
        "Although the weather can have a significant impact on shipping cars across Alaska, this varies by region. For instance, Juneau and most of southeast Alaska have milder weather than the rest of the state, which means that transportation problems are far less common there. However, with average lows in January reaching minus 17 degrees Fahrenheit, Fairbanks is the coldest major city in theOptimum Auto Shipping offers professional Alaska Car shipping from any state to Alaska. Our professional drivers and vessels will guarantee you safe and fastShip your vehicle with PROs anytime and anywhere.",
    },
    {
      id: 5,
      findName: "boat",
      name: "Boat Shipments",
      carHero: "/Images/singleImgs/boat-hero.avif",
      carContentImg: "/Images/singleImgs/boat-hero2.avif",
      fullText:
        "You might have purchased a boat after making the trip to a far-off boat show, read about a great offer on a far-off yacht, or purchased a boat directly from the manufacturer. There's a strong probability that in either of these scenarios, you'll now need to make plans for shipping your boat to your house or marina. Although it might seem like a big deal, long-distance boat deliveries are actually extremely routine and simple to arrange.",
      secoundText:
        "When shipping a boat, the dimensions play a very important role. Because the boat can be on its own trailer or without a trailer. Boats with their own trailer give flexibility to the drivers when shipping it",
      thridText:
        "Optimum Auto Shipping offers professional Boat shipping from any state. Our professional drivers will guarantee you a safe and fast shipment Ship your Boat with PROs anytime and anywhere.",
    },

    {
      id: 6,
      findName: "man",
      name: "Door to Door delivery",
      carHero: "/Images/singleImgs/man-hero.avif",
      carContentImg: "/Images/singleImgs/man-hero2.avif",
      fullText:
        "Optimum Auto Shipping offers Door to Door delivery to all the services we offer to our valuable customers. Regular cars and even Heavy equipment shipping will be delivery to your front door.",
      secoundText:
        " Your vehicle will be fully insured bumper to bumper by carriers.",
      thridText: " Ship your car with PROs anytime and anywhere..",
    },
  ];
  const resultData: Item | undefined = allList.find(
    (item: Item) => item.findName === servicesId
  );

  return (
    <>
      <section
        style={{ backgroundImage: `url(${resultData!?.carHero ?? ""})` }}
        className={`py-[182px] bg-cover bg-no-repeat`}
      >
        <div>
          <h2 className="text-center  text-white font-bold text-30 leading-36 sm:text-38 sm:leading-46">
            {resultData!?.name ?? ""}
          </h2>
        </div>
      </section>
      <section className="pt-50 pb-50 sm:pb-120 lg:pt-114 lg:h-[744px] lg:pb-136 relative flex items-center justify-between">
        <div className="container">
          <div
            className={`${
              resultData!?.carContentImg ?? "" === ""
                ? "lg:max-w-543 md:w-[45%]"
                : ""
            } text-sm lg:text-base p-2.5`}
          >
            <p className="mb-6 md:mb-4 lg:mb-8 ">
              {resultData!?.fullText ?? ""}
            </p>
            <p className="mb-6 md:mb-4 lg:mb-8">
              {resultData!?.secoundText ?? ""}
            </p>
            <p className="">{resultData!?.thridText ?? ""}</p>
          </div>
        </div>
        {resultData!?.carContentImg === "" ? (
          ""
        ) : (
          <Image
            className="content-img hidden md:flex absolute top-0 -z-10 bottom-0 my-auto right-0"
            src={resultData!?.carContentImg ?? ""}
            width={787}
            height={510}
            alt=""
          />
        )}
      </section>
      {servicesId === "heavy" ? <HeavyConst /> : ""}
    </>
  );
}

export default ServicesId;
//

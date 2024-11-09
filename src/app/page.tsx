import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="">
      <div>
        <Header></Header>
      </div>
      <div className="flex  ml-24 pt-16 mt-9 w-[1486px] h-[825.56px]">
        <div className="pt-24 mr-4 ">
          <h1 className="text-black text-[37.84px] font-serif font-black ">
            IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
          </h1>
          <p className="text-[#787054] text-[29.24px] font-bold pt-6 ">
            An example of intricate workmanship and detail, elegant <br />
            necklaces and long and short chains form a part of our <br />
            desirable collection.
          </p>
          <div className="pt-8">
            <button className="bg-[#a29976] text-white font-serif  font-bold text-[20px] w-[247.67px] h-[49.2px] rounded-[8.6px]  ">
              EXPLORE NOW
            </button>
          </div>
        </div>
        <div>
          <img src="/image.svg" alt="" width={462} className="ml-8" />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  const wrapper =
    "flex h-screen justify-center items-center bg-background select-none";
  const content = "flex items-center mobile:flex-col-reverse";
  return (
    <div className={wrapper}>
      <div className={content}>
        <div className="flex items-center flex-col">
          <h1 className="hover:scale-150 transition-all duration-500 text-[4rem] mobile:text-[3rem]">
            Jakdow Wanathong
          </h1>
          <h1 className="text-[3rem] mobile:text-[2rem]">Song 2</h1>
        </div>
        <img
          className="w-96 transition-all duration-500 hover:scale-150"
          src="https://avatars.githubusercontent.com/u/31090851?s=400&u=fb26eb2be02dbe8b99cb99e5e12aac067a1c32e6&v=4"
        />
      </div>
    </div>
  );
}

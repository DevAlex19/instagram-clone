import Image from "next/image";
import Button from "./Button";
import HomePageCarousel from "./HomePageCarousel";
import Input from "./Input";

function HomePage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center" style={{ width: "820px" }}>
        <HomePageCarousel />
        <div className="w-1/2 bg-white flex flex-col border-1 border-gray">
          <div className="mx-auto mt-12 mb-5">
            <Image
              src="/images/logo.png"
              width="200px"
              height="50px"
              objectFit="contain"
            />
          </div>
          <Input
            width="80"
            labelText="Telefon, e-mail sau nume de utilizator"
          />
          <Input width="80" labelText="Parola" />
          <Button />
        </div>
      </div>
    </div>
  );
}
export default HomePage;

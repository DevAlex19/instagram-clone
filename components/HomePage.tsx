import Image from "next/image";
import Button from "./Button";
import HomePageCarousel from "./HomePageCarousel";
import Input from "./Input";

function HomePage() {
  return (
    <div className="w-full h-screen lg:flex lg:justify-center">
      <div className="flex justify-center lg:items-center lg:gap-x-10">
        <HomePageCarousel />
        <div style={{ width: "80%", maxWidth: "350px" }}>
          <div className="flex flex-col pt-12 xs:bg-white xs:border-1 xs:border-gray mt-20 lg:m-0">
            <div className="mx-auto mb-5">
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
            <Button
              width="80"
              modifiers="bg-blue m-auto text-white font-medium text-s rounded mt-4 py-1"
            >
              Conectare
            </Button>
            <Button
              width="80"
              modifiers="m-auto text-darkBlue text-xs mt-6 mb-5"
            >
              Ai uitat parola?
            </Button>
          </div>
          <div
            style={{ fontSize: "0.9rem" }}
            className="mt-4 text-center py-5 xs:bg-white xs:border-1 xs:border-gray"
          >
            <p>
              Nu ai un cont?
              <span className="text-blue font-medium cursor-pointer ml-1">
                Inscrie-te
              </span>
            </p>
          </div>
          <p className="text-center mt-5" style={{ fontSize: "0.9rem" }}>
            Instaleaza aplicatia.
          </p>
          <div className="flex justify-center gap-x-2 mt-5">
            <Image
              src="/images/appStore.png"
              width="120px"
              height="50px"
              objectFit="contain"
            />
            <Image
              src="/images/googlePlay.png"
              width="120px"
              height="50px"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

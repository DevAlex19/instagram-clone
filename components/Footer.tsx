import Link from "next/link";

const LINKS = [
  "Meta",
  "Despre",
  "Blog",
  "Joburi",
  "Ajutor",
  "API",
  "Confidentialitate",
  "Conditii de utilizare",
  "Top conturi",
  "Hashtaguri",
  "Locatii",
  "Instagram Lite",
  "Incarcarea contactelor si non-utilizatori",
  "Dans",
  "Mancare si bauturi",
  "Casa si gradina",
  "Muzica",
  "Arte vizuale",
];

function Footer() {
  return (
    <div
      style={{ marginBottom: "3rem" }}
      className="max-w-screen-lg flex flex-wrap mx-auto justify-center gap-x-3 text-gray text-xs gap-y-2"
    >
      {LINKS.map((link, index) => (
        <Link key={index} href="">
          {link}
        </Link>
      ))}
    </div>
  );
}

export default Footer;

function Error() {
  return (
    <div
      style={{ minHeight: "84vh" }}
      className="flex flex-col items-center mt-10"
    >
      <p className="font-semibold text-2xl mb-5">
        Ne pare rău, această pagină nu este disponibilă.
      </p>
      <p>
        Este posibil ca linkul pe care l-ai accesat să nu fie valid sau ca
        pagina să fi fost ştearsă. Mergi înapoi la Instagram.
      </p>
    </div>
  );
}

export default Error;

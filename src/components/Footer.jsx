export default function Footer() {
  return (
    <>
      <div className="m-auto h-0.5 w-4/5 max-w-3/4 bg-color-white"></div>
      <section className="footer justify-evenly lg:grid grid-cols-3 my-5">
        <p className="col-start-2 col-span-1 self-center text-center uppercase font-bold hover:cursor-default sm:mb-5 lg:mb-0">All rights reserved &#169; </p>
        <p className="col-start-3 col-span-1 flex justify-center lg:justify-end">
          <a href="#" className="underline underline-offset-4 hover:no-underline mr-5 xl:mr-10">
            info@foofest.dk
          </a>
          <a href="#" className="underline underline-offset-4 hover:no-underline lg:mr-10">
            (+45) 12 34 56 78
          </a>
        </p>
      </section>
    </>
  );
}

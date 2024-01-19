export default function Footer() {
  return (
    <footer className=" bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-around items-center py-8 px-6 xl:px-0 max-w-6xl mx-auto gap-y-6">
        <div>
          <h1 className="font-title font-medium text-3xl">Little Lemon</h1>
          <div
            alt=""
            className="bg-[url('https://coxauto.com.au/wp-content/uploads/2019/07/Map-Placeholder@2x.jpg')] aspect-video h-44 opacity-85 object-cover mr-4 rounded-2xl border-2 border-white relative text-center "
          >
            <a
              href="/"
              className="uppercase font-medium absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 h-fit w-max bg-secondary px-2 py-1"
            >
              Get directions
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-extrabold uppercase">Check us out on</h2>
          <a
            className=" hover:scale-105"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className=" hover:scale-105"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className=" hover:scale-105"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-extrabold uppercase">About us</h2>
          <a className=" hover:scale-105" href="/about">
            Our Story
          </a>
          <a className=" hover:scale-105" href="/reservation">
            Reservations
          </a>
          <a className=" hover:scale-105" href="/reviews">
            Reviews
          </a>
        </div>
      </div>
    </footer>
  );
}

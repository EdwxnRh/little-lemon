export default function Main() {
  return (
    <main>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-4xl md:text-6xl text-center mb-8 font-medium">
            Today&#39;s specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-white  shadow-sm overflow-hidden">
              <img
                src="/special1.jpg"
                alt="Our lemon cake"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg uppercase font-bold mb-2">
                  Lemon cake{" "}
                  <span className="font-medium text-secondary">$5.99</span>
                </h3>
                <p className="text-secondary mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatem?
                </p>
                <div className="flex justify-between items-center">
                  <button className=" text-secondary px-4 py-2 w-full border-secondary border-2 rounded-2xl hover:scale-105 transition-all">
                    Start Ordering
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-sm overflow-hidden">
              <img
                src="/special2.jpg"
                alt="Our famous greek salad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className=" text-lg uppercase font-bold mb-2">
                  Greek salad{" "}
                  <span className="font-medium text-secondary">$9.49</span>
                </h3>
                <p className="text-secondary mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatem?
                </p>
                <div className="flex justify-between items-center">
                  <button className=" text-secondary px-4 py-2 w-full border-secondary border-2 rounded-2xl hover:scale-105 transition-all">
                    Start Ordering
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white  shadow-sm overflow-hidden">
              <img
                src="/special3.svg"
                alt="Tomato bruchetta with olive oil"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className=" text-lg uppercase font-bold mb-2">
                  4pc Bruchetta{" "}
                  <span className="font-medium text-secondary">$11</span>
                </h3>
                <p className="text-secondary mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatem?
                </p>
                <div className="flex justify-between items-center">
                  <button className=" text-secondary px-4 py-2 w-full border-secondary border-2 rounded-2xl hover:scale-105 transition-all">
                    Start Ordering
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative z-10">
            <h2 className="font-title text-4xl md:text-6xl text-center mb-6 font-medium">
              Our story
            </h2>
            <h3 className="text-center mb-8 max-w-[60ch] mx-auto">
              Little Lemon is a charming neighboorhoud restaurant, located in
              Chicago, serving traditional Mediterranean food with a modern
              twist. Our restaurant features a locally-sourced menu with daily
              specials. Enjoy our cocktails on our patio or in our dining room.
              We are open for breakfast, lunch, and dinner.
            </h3>
            <div className="flex justify-center">
              <a href="/about">
                <button className=" border-white border-2 text-white px-4 py-2 rounded-2xl transform transition-all hover:scale-105 uppercase">
                  Read more about our story
                </button>
              </a>
            </div>
          </div>
          <img
            src="/aboutus.jpg"
            alt="Our story"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40"
          />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-title text-4xl md:text-6xl text-center mb-8 font-medium">
            Opening hours
          </h2>
          <div className="flex gap-8 justify-center flex-wrap lg:flex-nowrap">
            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Mon</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - 9:00pm</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Tue</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - 9:00pm</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Wed</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - 9:00pm</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Thur</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - 9:00pm</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Fri</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - 10:00pm</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Sat</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">1:00pm - openend</p>
            </div>

            <div className="p-6">
              <h3 className="text-xl uppercase font-extrabold mb-2">Sun</h3>
              <p className="text-secondary mb-4">8:00am - 11:30am</p>
              <p className="text-secondary mb-4">01:00pm - openend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto">
          <img
            src="/team.jpg"
            alt="Our chefs at work"
            className="px-6 lg:px-0 lg:aspect-square object-cover"
          />
          <div className="px-6 place-self-end mt-4 lg:mt-0">
            <h3 className="text-lg uppercase font-bold mb-2">
              Mario and Adrian, our beloved founders and head-chefs
            </h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quam consectetur molestiae consequuntur accusantium!
              Quibusdam quaerat quis amet non cumque a perspiciatis maiores!
              Blanditiis perspiciatis culpa necessitatibus expedita voluptates,
              quidem aperiam.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quam consectetur molestiae consequuntur accusantium!
              Quibusdam quaerat quis amet non cumque a perspiciatis maiores!
              Blanditiis perspiciatis culpa necessitatibus expedita voluptates,
              quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit beatae labore eligendi quod sit provident asperiores
              voluptatem repellendus illum quam!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto mt-3 md:mt-6">
      <section className="relative">
        <img
          src="/hero-img.jpg"
          alt="Our lovely Chef making a salad"
          className="aspect-video object-cover"
        />
        <div className="sm:absolute -bottom-12 text-white bg-secondary px-4 sm:px-6 py-4 sm:py-6 font-medium mx-auto sm:max-w-fit inset-x-0">
          <h1 className="font-title text-3xl md:text-6xl">
            Chicago&#39;s most loved bruchetta
          </h1>
          <p className="sm:text-lg sm:w-[60ch]">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-white text-secondary px-4 py-2 rounded-2xl flex justify-center items-center w-full gap-2 font-extrabold uppercase mt-4 group">
            <p className="group-hover:scale-105 transition-all">Book a table</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-all"
            >
              <path
                d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9L15 9V7L0 7L0 9Z"
                fill="#495E57"
              />
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
}

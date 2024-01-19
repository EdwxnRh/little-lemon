import React from "react";

export default function NoPage() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center -mt-12">
        <h1 className="font-title text-3xl text-secondary font-medium">
          Oooppss, this page is not available!
        </h1>
        <a
          href="/"
          className="text-primary hover:scale-105 font-medium uppercase"
        >
          Lets take you back to the homepage
        </a>
      </div>
    </div>
  );
}

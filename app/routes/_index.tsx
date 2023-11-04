import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
        <div>
          <img src="/remix-logo.png" alt="remix" width="100"/>
        </div>
        <ul>
          <li className="bg-red-500">
            <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li className="bg-green-500">
            <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li className="bg-yellow-500">
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
        <div className="relative">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
                src="/bg-example.avif"
                alt=""
                className="h-full w-full object-cover object-center"
            />
          </div>
          <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-80"
          />

          <div
              className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Welcome to Remix
            </h1>
            <p className="mt-4 text-xl text-white">
              Build better websites with Remix and React Router
            </p>
            <a
                href="#"
                className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <img src="/earth.avif" alt="earth"/>
          <img src="/purple.avif" alt="purple"/>
          <img src="/sun.avif" alt="sun"/>
          <img src="/water.avif" alt="water"/>
        </div>
      </div>
  );
}

import { render, html } from "lit-html";
import data from "./data.json";

const state = {
  step: 1,
  destination: data.destinations[0],
  crew: data.crew[0],
  technology: data.technology[0],
};

const headerHtml = () =>
  html`<header class="relative flex w-full flex-row items-center px-6 pt-6">
    <img src="/assets/shared/logo.svg" alt="logo" class="h-8 w-8" />
    <input type="checkbox" id="menu" class="peer sr-only" />
    <label for="menu" id="menu-button" class="z-20 md:hidden"></label>
    <nav
      class="absolute top-0 right-0 hidden h-screen w-2/3 flex-col gap-4 bg-white/10 p-6 pt-24 text-white backdrop-blur-md peer-checked:z-20 peer-checked:flex"
    >
      <a href="#home">Home</a>
      <a href="#destination">Destination</a>
      <a href="#crew">Crew</a>
      <a href="#technology">Technology</a>
    </nav>
    <hr class="mr-[-8rem] ml-4 hidden flex-grow text-slate-700 md:block" />
    <nav class="z-1 hidden flex-row py-6 backdrop-blur md:flex">
      ${["home", "destination", "crew", "technology"].map(
        (k, i) =>
          html`<a href="#${k}" class="mx-4">
            <div class="flex flex-row gap-4">
              <span class="text-bold">0${i}</span>
              <div class="tracking-widest uppercase opacity-50">${k}</div>
            </div>
          </a>`
      )}
    </nav>
  </header>`;

const homeHtml = () => html`
  <div
    id="home"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    <div class="hidden w-screen md:block">${headerHtml()}</div>
    <div class="flex-grow-2"></div>
    <div
      class="flex h-full w-4/5 flex-col justify-between md:flex-row md:items-end"
    >
      <main class="m-8 flex flex-col items-center gap-8">
        <div class="text-lg uppercase opacity-50">
          So, you want to travel to
        </div>
        <div class="font-serif text-8xl">SPACE</div>
        <div class="max-w-md text-center opacity-50">
          You’ll never have enough time. Space Let’s face it; if you want to go
          to space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience!
        </div>
      </main>
      <button
        @click=${() => (window.location.hash = "#destination")}
        class="my-8 ml-auto aspect-1/1 rounded-full bg-white p-12 text-3xl text-slate-900"
      >
        Explore
      </button>
    </div>
    <div class="flex-grow-1"></div>
  </div>
`;

const destinationHtml = () =>
  html`<div
    id="destination"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${headerHtml()}
    <main class="m-6 flex h-[85vh] w-4/5 flex-col items-center gap-6">
      <h2 class="text-lg tracking-widest uppercase opacity-80 md:self-start">
        <span class="mr-2 font-bold">01</span> Pick your destination
      </h2>
      <div class="flex flex-col md:w-4/5 md:flex-row md:gap-32">
        <div
          class="flex max-h-1/4 min-h-0 flex-grow items-center justify-center md:max-h-full"
        >
          <img
            class="max-h-full max-w-full object-contain"
            src=${state.destination.images.png}
            alt=${state.destination.name}
          />
        </div>

        <div class="flex flex-col items-center gap-2 opacity-80">
          <nav class="flex flex-row">
            ${data.destinations.map(
              destination =>
                html`<button
                  @click=${() => {
                    state.destination = destination;
                    renderBody();
                  }}
                  class="${destination == state.destination
                    ? "border-white"
                    : "border-transparent hover:border-white/50"} mx-4 border-b-2 pb-2 tracking-widest uppercase"
                >
                  ${destination.name}
                </button>`
            )}
          </nav>
          <h1 class="font-serif text-6xl uppercase md:text-8xl">
            ${state.destination.name}
          </h1>
          <p class="max-w-md px-4 text-center">
            ${state.destination.description}
          </p>
          <div class="gap flex w-full flex-col">
            <hr class="my-4 w-full border-white/25" />
            <div class="flex flex-row justify-center md:justify-between">
              <div class="flex flex-col items-center md:items-start">
                <div class="text-sm tracking-widest uppercase">
                  Avg. Distance
                </div>
                <div class="font-serif text-2xl uppercase">
                  ${state.destination.distance}
                </div>
              </div>
              <div
                class="mx-8 hidden flex-col items-center md:flex md:items-start"
              >
                <div class="text-sm tracking-widest uppercase">
                  Est. Travel Time
                </div>
                <div class="font-serif text-2xl uppercase">
                  ${state.destination.travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>`;

const crewHtml = () =>
  html`<div
    id="crew"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${headerHtml()}
    <main class="m-6 flex h-[85vh] max-w-lg flex-col items-center gap-6">
      <h2 class="hidden text-lg tracking-widest uppercase opacity-50">
        <span class="mr-2 font-bold">02</span> Meet your crew
      </h2>

      <div class="flex min-h-0 flex-grow items-center justify-center">
        <img
          class="max-h-full max-w-full object-contain"
          src=${state.crew.images.png}
          alt=${state.crew.name}
        />
      </div>

      <div class="flex flex-col items-center gap-2">
        <nav class="flex flex-row">
          ${data.crew.map(
            crew =>
              html`<button
                @click=${() => {
                  state.crew = crew;
                }}
                class="filled ${crew == state.crew
                  ? ""
                  : "opacity-20 hover:bg-white"} mx-4 h-2 w-2 rounded-full bg-white"
              ></button>`
          )}
        </nav>
        <div class="text-sm uppercase opacity-33">${state.crew.role}</div>
        <div class="font-serif text-xl opacity-50">${state.crew.name}</div>
        <p class="max-w-md px-4 text-center opacity-50">${state.crew.bio}</p>
      </div>
    </main>
  </div>`;

const technologyHtml = () =>
  html`<div
    id="technology"
    class="flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat text-white"
  >
    ${headerHtml()}
    <main
      class="m-6 flex h-[85vh] max-w-lg flex-col items-center gap-6 text-blue-200"
    >
      <h2 class="text-lg tracking-widest uppercase opacity-50">
        <span class="mr-2 font-bold">03</span> Space launch 101
      </h2>

      <div class="flex min-h-0 flex-grow items-center justify-center">
        <img
          class="max-h-full max-w-full object-contain"
          src=${state.technology.images.landscape}
          alt=${state.destination.name}
        />
      </div>
      <nav class="flex flex-row gap-4 opacity-50">
        ${data.technology.map(
          (t, i) =>
            html`<button
              @click=${() => (state.technology = t)}
              class="aspect-1/1 rounded-full border-1 bg-transparent"
            >
              ${i}
            </button>`
        )}
      </nav>
      <p class="uppercase opacity-50">The technology</p>
      <h1 class="font-serif text-4xl uppercase opacity-50 md:text-8xl">
        ${state.technology.name}
      </h1>
      <p class="mb-4 text-center opacity-50">${state.technology.description}</p>
    </main>
  </div>`;

const bodyHtml = () => {
  switch (window.location.hash) {
    case "#destination":
      return destinationHtml();
    case "#crew":
      return crewHtml();
    case "#technology":
      return technologyHtml();
    case "#home":
    default:
      return homeHtml();
  }
};

const renderBody = () => render(bodyHtml(), document.body);

window.onclick = window.onhashchange = window.oninput = renderBody;
renderBody();

import { render, html } from "lit-html";
import data from "./data.json";

const state = {
  step: 1,
  destination: data.destinations[0],
  crew: data.crew[0],
  technology: data.technology[0],
};

const headerHtml = () =>
  html` <header
    class="relative flex flex-row justify-between items-center w-full px-6 pt-6"
  >
    <img src="/assets/shared/logo.svg" alt="logo" />
    <input type="checkbox" id="menu" class="peer sr-only" />
    <label for="menu" id="menu-button" class="md:hidden z-20"></label>
    <nav
      class="absolute right-0 top-0 hidden h-screen w-2/3 flex-col gap-4 bg-white/10 p-6 pt-24 text-white backdrop-blur-md peer-checked:flex peer-checked:z-20"
    >
      <a href="#home">Home</a>
      <a href="#destination">Destination</a>
      <a href="#crew">Crew</a>
      <a href="#technology">Technology</a>
    </nav>
    <hr class="hidden md:block flex-grow ml-4 text-slate-700 mr-[-8rem]" />
    <nav class="hidden md:flex flex-row gap-4 backdrop-blur p-6 z-1">
      ${["home", "destination", "crew", "technology"].map(
        (k, i) =>
          html`<a href="#${k}" class="mx-8">
            <div class="flex flex-row gap-4">
              <span class="text-bold">0${i}</span>
              <div class="uppercase tracking-widest opacity-50">${k}</div>
            </div>
          </a>`
      )}
    </nav>
  </header>`;

const homeHtml = () => html`
  <div
    id="home"
    class="h-screen flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
  >
    <div class="hidden md:block w-screen">${headerHtml()}</div>
    <div class="flex-grow-2"></div>
    <div
      class="flex flex-col h-full justify-between md:flex-row w-4/5 md:items-end"
    >
      <main class="m-8 flex flex-col items-center gap-8">
        <div class="text-lg uppercase opacity-50">
          So, you want to travel to
        </div>
        <div class="text-8xl font-serif">SPACE</div>
        <div class="text-center opacity-50 max-w-md">
          You’ll never have enough time. Space Let’s face it; if you want to go
          to space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience!
        </div>
      </main>
      <button
        @click=${() => (window.location.hash = "#destination")}
        class="ml-auto my-8 text-slate-900 text-3xl bg-white rounded-full p-12 aspect-1/1"
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
    class="h-screen flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
  >
    ${headerHtml()}
    <main class="m-6 flex flex-col items-center gap-6 h-[85vh] w-4/5">
      <h2 class="text-lg uppercase tracking-widest opacity-80 md:self-start">
        <span class="font-bold mr-2">01</span> Pick your destination
      </h2>
      <div class="flex flex-col md:flex-row md:gap-32 md:w-4/5">
        <div
          class="flex-grow flex items-center justify-center min-h-0 max-h-1/4 md:max-h-full"
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
                  class="mx-4 uppercase tracking-widest pb-2 border-b-2 ${destination ==
                  state.destination
                    ? "border-white"
                    : "border-transparent hover:border-white/50"}"
                >
                  ${destination.name}
                </button>`
            )}
          </nav>
          <h1 class="text-6xl md:text-8xl font-serif uppercase">
            ${state.destination.name}
          </h1>
          <p class="text-center max-w-md px-4">
            ${state.destination.description}
          </p>
          <div class="flex flex-col gap w-full">
            <hr class="w-full border-white/25 my-4" />
            <div class="flex flex-row justify-center md:justify-between">
              <div class="flex flex-col items-center md:items-start">
                <div class="text-sm  uppercase tracking-widest">
                  Avg. Distance
                </div>
                <div class="text-2xl uppercase font-serif">
                  ${state.destination.distance}
                </div>
              </div>
              <div
                class="hidden md:flex flex-col items-center md:items-start mx-8"
              >
                <div class="text-sm uppercase tracking-widest">
                  Est. Travel Time
                </div>
                <div class="text-2xl uppercase font-serif">
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
    class="h-screen flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
  >
    ${headerHtml()}
    <main class="m-6 flex flex-col items-center gap-6 h-[85vh] max-w-lg">
      <h2 class="hidden text-lg uppercase tracking-widest opacity-50">
        <span class="font-bold mr-2">02</span> Meet your crew
      </h2>

      <div class="flex-grow flex items-center justify-center min-h-0">
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
                class="mx-4 h-2 w-2 rounded-full filled bg-white ${crew ==
                state.crew
                  ? ""
                  : "opacity-20 hover:bg-white"}"
              ></button>`
          )}
        </nav>
        <div class="uppercase text-sm opacity-33">${state.crew.role}</div>
        <div class="text-xl font-serif opacity-50">${state.crew.name}</div>
        <p class="text-center max-w-md px-4 opacity-50">${state.crew.bio}</p>
      </div>
    </main>
  </div>`;

const technologyHtml = () =>
  html`<div
    id="technology"
    class="h-screen flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
  >
    ${headerHtml()}
    <main
      class="m-6 flex flex-col items-center gap-6 h-[85vh] max-w-lg text-blue-200"
    >
      <h2 class="text-lg uppercase tracking-widest opacity-50">
        <span class="font-bold mr-2">03</span> Space launch 101
      </h2>

      <div class="flex-grow flex items-center justify-center min-h-0">
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
              class="rounded-full aspect-1/1 bg-transparent border-1"
            >
              ${i}
            </button>`
        )}
      </nav>
      <p class="uppercase opacity-50">The technology</p>
      <h1 class="text-4xl md:text-8xl font-serif uppercase opacity-50">
        ${state.technology.name}
      </h1>
      <p class="text-center mb-4 opacity-50">${state.technology.description}</p>
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

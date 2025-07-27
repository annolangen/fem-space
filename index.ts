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
    <label for="menu" id="menu-button" class="z-20"></label>
    <nav
      class="absolute right-0 top-0 hidden h-screen w-2/3 flex-col gap-4 bg-white/10 p-6 pt-24 text-white backdrop-blur-md peer-checked:flex"
    >
      <a href="#home">Home</a>
      <a href="#destination">Destination</a>
      <a href="#crew">Crew</a>
      <a href="#technology">Technology</a>
    </nav>
  </header>`;

const homeHtml = () => html`
  <div
    id="home"
    class="h-screen flex flex-col justify-between items-center text-white bg-cover bg-center bg-no-repeat"
  >
    ${headerHtml()}
    <main class="m-8 flex flex-col items-center gap-8">
      <div class="text-lg">So, you want to travel to</div>
      <div class="text-8xl font-serif">SPACE</div>
      <div class="text-center">
        You’ll never have enough time. Space Let’s face it; if you want to go to
        space, you might as well genuinely go to outer space and not hover kind
        of on the edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience!
      </div>
    </main>
    <button
      class="m-8 text-slate-900 text-3xl bg-white rounded-full p-12 aspect-1/1"
    >
      Explore
    </button>
  </div>
`;

const destinationHtml = () =>
  html`<div
    id="destination"
    class="h-screen flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
  >
    ${headerHtml()}
    <main
      class="m-6 flex flex-col items-center gap-6 h-[85vh] max-w-lg text-blue-200"
    >
      <h2 class="text-lg uppercase tracking-widest  opacity-50">
        <span class="font-bold mr-2">01</span> Pick your destination
      </h2>

      <div class="flex-grow flex items-center justify-center min-h-0">
        <img
          class="max-h-full max-w-full object-contain"
          src=${state.destination.images.png}
          alt=${state.destination.name}
        />
      </div>

      <div class="flex flex-col items-center gap-4 opacity-50">
        <nav class="flex flex-row">
          ${data.destinations.map(
            destination =>
              html`<button
                @click=${() => {
                  state.destination = destination;
                  renderBody();
                }}
                class="mx-4 uppercase tracking-widest pb-2 ${destination ==
                state.destination
                  ? "border-b-2 border-white"
                  : "border-b-2 border-transparent hover:border-white/50"}"
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
        <hr class="w-full border-white/25 my-4" />
        <div class="flex flex-col md:flex-row gap-8 md:gap-16">
          <div class="text-center">
            <div class="text-sm  uppercase tracking-widest">Avg. Distance</div>
            <div class="text-2xl uppercase font-serif">
              ${state.destination.distance}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>`;

const bodyHtml = () => {
  switch (window.location.hash) {
    default:
    case "#home":
      return homeHtml();
    case "#destination":
      return destinationHtml();
  }
};

const renderBody = () => render(bodyHtml(), document.body);

window.onclick = window.onhashchange = window.oninput = renderBody;
renderBody();

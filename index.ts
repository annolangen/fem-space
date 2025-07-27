import { render, html } from "lit-html";
import data from "./data.json";

const headerHtml = () =>
  html` <header
    class="relative flex flex-row justify-between items-center w-full p-16"
  >
    <img
      src=${new URL("./assets/shared/logo.svg", import.meta.url)}
      alt="logo"
    />
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
    class="h-screen flex flex-col justify-between items-center text-white"
  >
    ${headerHtml()}
    <main class="m-8 flex flex-col items-center gap-8">
      <div class="text-lg">So, you want to travel to</div>
      <div class="text-9xl">SPACE</div>
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
    class="h-screen flex flex-col justify-between items-center text-white"
  >
    ${headerHtml()}
    <main></main>
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

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="feather mt-8 flex px-8">
    <div class="flex flex-items-center flex-grow-1">
      <div class="flex-grow-1">
        <a href="/" class="logo text-3xl font-black flex flex-items-center p-4">
        <img src="/assets/images/favicon.png" alt="logo" class="w-32">
        <span>Buzzr</span>
        </a>
      </div>
      <nav class="ml-auto">
        <ul class="inline-flex">
          <li class="text-xl font-bold"><a href="/">Leader board</a></li>
          <li class="text-xl font-bold"><a href="/pages/rules.html">Rules</a></li>
          <li class="text-xl font-bold"><a href="/">Login</a></li>
        </ul>
      </nav>
    </div>
</header>`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplate.innerHTML;
  }
}

customElements.define('header-component', Header);

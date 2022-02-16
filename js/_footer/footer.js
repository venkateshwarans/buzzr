const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer class="feather mb-8 mt-16 flex flex-justify-center flex-items-center px-8 text-center flex-column">
<div>
  <a class="text-decoration-none text-2xl font-black text-dark-600" target="_blank" href="https://github.com/venkateshwarans/buzzr"><i class="fab fa-github mr-2" aria-hidden="true"></i> Github</a>
</div>
<div>
    <p class="text-lg mt-2 text-gray-600"> All images used are solely for non-profit educational purpose.</p>
    </p>
  </div>
</footer>`;
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(footerTemplate.content.cloneNode(true));
  }
}
customElements.define('footer-component', Footer);

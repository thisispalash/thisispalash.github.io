(() => {
  function rgb2hex(orig) {
    var rgb = orig.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return rgb && rgb.length === 4
      ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : orig;
  }

  function lightOrDark(color) {
    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
      // If RGB --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If hex --> Convert it to RGB: http://gist.github.com/983661
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return "light";
    } else {
      return "dark";
    }
  }

  function createBudgetWrapperDivEl() {
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "made-with-softr");

    divEl.innerHTML = `
   <a href="https://www.softr.io/?utm_source=madewithbadge" target="_blank" title="Softr - Build a website, web app or portal on Airtable without code">
      <img src="https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/softr_logo_icon_only.svg" alt="Softr - Build a website, web app or portal on Airtable without code">
      <span class="made-with">Made with</span>
      <span class="softr-word">Softr</span>
    </a>`;
    document.body.appendChild(divEl);
  }

  function isInCurrentSection(elTop, elBottom) {
    const innerHeight = window.innerHeight - 30;
    return elTop < innerHeight && elBottom > innerHeight;
  }

  function setRightTheme(sections, softrEl) {
    sections.forEach(item => {
      const elementTop = item.getBoundingClientRect().top;
      const elementBottom = item.getBoundingClientRect().bottom;

      if (isInCurrentSection(elementTop, elementBottom)) {
        const documentBodyColor = window
          .getComputedStyle(item)
          .getPropertyValue("background-color");

        const bgColor = lightOrDark(rgb2hex(documentBodyColor));

        if (bgColor === "light") {
          softrEl.classList.add("dark-theme");
        } else {
          softrEl.classList.remove("dark-theme");
        }
      }
    });
  }

  function init() {
    const madeWithSoftrEl = document.querySelector(".made-with-softr");

    if (madeWithSoftrEl) {
      madeWithSoftrEl.remove();
    }

    createBudgetWrapperDivEl();
    const headers = document.querySelectorAll("header");
    const sections = document.querySelectorAll("section");
    const footers = document.querySelectorAll("footer");
    const softrEl = document.querySelector(".made-with-softr a");
    const allSections = [...headers, ...sections, ...footers];
    setRightTheme(allSections, softrEl);

    document.addEventListener("scroll", () => {
      setRightTheme(allSections, softrEl);
    });
  }

  init();
  setInterval(() => init(), 50 * 1000);
})();
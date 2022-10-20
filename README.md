# alealrom - Interactive Rating Component

This is a solution to Interactive Rating Component on Frontend Mentor.

With Frontend Mentor I want better my improve your coding skills by building realistic projects.

## Table of Contents 👋

-[Overview](#overview)

- [Screenshot](#screenshot)
- [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

The challenge was to build out Interactive Rating Component and get it looking as close to the design as possible.

### Screenshot

![](/design/solution_alealrom_desktop.jpg)
![](/design/solution_alealrom_desktop_1.jpg)
![](/design/solution_alealrom_desktop_active.jpg)
![](/design/solution_alealrom_desktop_active_1.jpg)

### Links

- Solution URL: [https://github.com/alealrom/interactive-rating-component](https://github.com/alealrom/interactive-rating-component)
- Live Site URL: []()

## My Porcess

1. Initialized my project as a public repository on [GitHub](https://github.com/).
2. Configured my solution URL and my live-site URL.
3. Checked the designs and requirements for start plannig approach the project.
4. Started my develop project with TDD methodologic.
5. Structured the necessary tests to comply with the requirements.
6. Structured the content with HTML and created well-structured content.
7. With the style.guide, structured the CSS file in relation with the HTML.
8. This project was realize with HTML, CSS, JS and TDD.

### Build With

- Semantic HTML5 markup.
- CSS custom properties.
- CSS Grid.
- Mobile-first workflow.
- JavaScript.
- TDD.

### What I learned

In this project I had the opportunity to test my JavaScript skills, and I learned:

- Create unit tests that allow testing the operation of the form and the creation of the logic of the functions.

  ```js
  function shouldExistDOM() {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="firstCard" role="firstCard">
  ```

- Appropriation of the concepts of function and cycles in JavaScript.

```js
    function selectionRating(event) {
        for (let i=0; i < allButtons.length; i++) {
            let button = allButtons[i];
            button.classList.remove("buttonSelected");
        }
```

- Unique responsibility by function.

## Author

- Website - [Alejandra Álvarez Romero](https://alealrom.co/)
- Twitter - [@alealrom](https://www.twitter.com/alealrom)
- Mentor - [Robert Stevens Pineda](https://stevenscol.co/)

**Was fun develop!** 🚀

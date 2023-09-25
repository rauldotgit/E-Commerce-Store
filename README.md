# VUE.JS E-Commerce Project - Mechanical Keyboard Store

## Table of contents

- [VUE.JS E-Commerce Project - Mechanical Keyboard Store](#vuejs-e-commerce-project---mechanical-keyboard-store)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [:mount\_fuji: The Challenge](#mount_fuji-the-challenge)
    - [:camera: Screenshot](#camera-screenshot)
    - [:link: Links](#link-links)
  - [My process](#my-process)
    - [:wrench: Built with](#wrench-built-with)
    - [:bulb: What I learned](#bulb-what-i-learned)
    - [:mountain\_bicyclist: Continued development](#mountain_bicyclist-continued-development)
    - [:cake: Acknowledgements \& Useful resources](#cake-acknowledgements--useful-resources)
  - [Author](#author)


## Overview

### :mount_fuji: The Challenge

Wanting to combine one of my interests, building custom mechanical keyboards, with my pursuit of learning new web technologies such as Vue.JS, Typescript and Cypress, I decided to take on the challenge of building a fully fledged web store with the most important core functionalities.

Customers can enjoy a minimalistic and responsive design on desktop and mobile devices, a simple e-commerce flow, a robust, session persistent shopping cart and fast loading times, due to client side form validation and optimized image content.

Shop owners can easily add new products through the products file. Subsequently, product pages, their routes and show boxes in each individual item category are created automatically and styled dynamically.

"Happy" and "unhappy" customer purchase flows have E2E tests, the navbar has implementation tests and the cart some component tests to gain a small impression of Cypress's abilities. 

### :camera: Screenshot

Some animations are not presented correctly in the full page screenshot, so make sure to visit the web app [here](https://e-commerce-store-amber-zeta.vercel.app/).

![Landing Page](./screenshots/e-commerce-store-amber-zeta.vercel.app_(1080p).png)

![Keyboard Product Page](./screenshots/e-commerce-store-amber-zeta.vercel.app_keyboards_0(1080p).png)

### :link: Links

You can find a live deployment of this project [right here!](https://e-commerce-store-amber-zeta.vercel.app/)

## My process

### :wrench: Built with

- [Vue.js](https://vuejs.org/) - JS Frontend Framework
- [Vue Router](https://router.vuejs.org/) - The official Router for Vue.js
- [Pinia](https://pinia.vuejs.org/) - Central State management for Vue.js
- [Unhead](https://unhead.unjs.io/) - Any-framework document head manager
- [TypeScript](https://www.typescriptlang.org/) - JS but type safe
- [TailwindCSS](https://tailwindcss.com/) - Simple Frontend Styling in HTML
- [Vite.js](https://vitejs.dev/) - Packaging and frontend tooling
- [Crypess](https://www.cypress.io/) - Component and E2E Testing for JS
- [ESLint](https://eslint.org/) / [Prettier](https://prettier.io/) - Linting and formatting
- [Git](https://git-scm.com/) - Version control
- [Asana](https://app.asana.com/) - For project management
- HTML5

### :bulb: What I learned

TODO

Vue Router routing with props and routes with params, lazy imports and catching unwritten routes to 404. 

Vuex initially, but then used pinia due to type safety, ease of use, specifically in terms of forms with v-model. Learned about central state management.

Typescript basics, especially used for component default props and pinia store logic and new products structure.

Handling bigger vue project structure.
Learned but not yet implemented image optimization.

Learned more about Tailwind dynamic styling for forms with validation, absolute placement such as in cart, auto margins, image layouts, flex basis and responsive design.

Learner about page meta tags and how to dynamically overwrite meta data with unhead on SPA's.

Small bits of DOM related JS, such as disabling the scroll functionality on cart modal show or purchase success modal.

Cypress component and E2E testing with different viewport sizes.

### :mountain_bicyclist: Continued development

TLDR: Nuxt refactor and backend functionality (authentication etc.)

During all of my previous projects, I have noticed that each new problem in web development can drag you into a rabbit hole of new functionalities to add, new tools to use and ways to optimize past solutions.

As this project was no different, I have a list of scribbled down ideas for future improvements:

- Delve into backend development with previously gained express, django or golang (gin) knowledge and serve page through web server
- On that note, implement user authentication (sign up, login, forgot password, account persistent cart)
- Create tools with UI for shop owners to CRUD new products.
- For that purpose, use image compression API's to optimize images automatically
- Retrieve customer purchase info and behavioral data and offer dashboard for owners
- Implement payment providers manually (paypal, credit etc.)
- Use responsive images for different screen sizes with html srcset
- Refactor the app to use Nuxt for simpler routing, meta data for SEO, content management and server side rendering
- Aim for full test coverage on all components
- Refine tablet view  

### :cake: Acknowledgements & Useful resources

[LearnVue](https://www.youtube.com/@LearnVue) is a must have resource for vue beginners to intermediate.

[Make Apps with Danny](https://www.youtube.com/watch?v=JGC7aAC-3y8&t=1423s) has been crucial in helping me get a first glimpse at VueX and Pinia

[freeCodeCamp - Learn Typescript](https://www.youtube.com/watch?v=30LWjhZzg50) has tought me everything regarding TypeScript, and I can wholeheartedly recommend watching it.

[freeCodeCamp - Testing JS with Cypress](https://www.youtube.com/watch?v=u8vMu7viCm8&t=7880s) is great for learning E2E testing basics in Cypress and some component testing.

[Web Dev Simplified - (...) Responsive Images](https://www.youtube.com/watch?v=fp9eVtkQ4EA&t=679s) Not yet implemented, but a great tutorial on how to make images responsive with only HTML and some image compression.

Special thanks go out to the creators of the rendered images I have used for each product.

- [Haziq hsbllh](https://www.behance.net/haziqhsbllh)
- [Jake (Jongha) Lee](https://www.behance.net/jake_acasso)
- [Dayoung Lee](https://www.behance.net/poiiu83229f5)
- [Raphael Rau](https://www.behance.net/Silverwing-VFX)
- [Alex Casabo](https://www.behance.net/alexcasabo)
- [Manasuka Creative](https://www.behance.net/manasukcreativ)
- [Krittin Tachasiritanakul](https://www.behance.net/Febust)
- [Julio Redondo](https://www.behance.net/julio_redondo)

Part of the page design has been inspired by projects from [Frontend Mentor](https://www.frontendmentor.io/)

## Author

- Raul Nikolaus
- [Github - @rauldotgit](https://github.com/rauldotgit)

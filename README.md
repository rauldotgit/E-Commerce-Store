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
    - [:bulb: What I've learned](#bulb-what-ive-learned)
      - [Vue Router](#vue-router)
      - [State management (Vuex / Pinia / Vueuse)](#state-management-vuex--pinia--vueuse)
      - [Typescript](#typescript)
      - [Tailwind](#tailwind)
      - [Cypress Testing](#cypress-testing)
      - [Search Engine Optimization (Open Graph / Meta Tags / Unhead / HTML Semantics)](#search-engine-optimization-open-graph--meta-tags--unhead--html-semantics)
      - [Page Optimization](#page-optimization)
      - [Code and project cleanliness](#code-and-project-cleanliness)
      - [Miscellaneous](#miscellaneous)
    - [:mountain\_bicyclist: Continued development](#mountain_bicyclist-continued-development)
    - [:cake: Acknowledgements \& Useful resources](#cake-acknowledgements--useful-resources)
  - [Author](#author)


## Overview

### :mount_fuji: The Challenge

Wanting to combine one of my interests, building custom mechanical keyboards, with my pursuit of learning new web technologies such as Vue.JS, Typescript and Cypress, I decided to take on the challenge of building a fully fledged web store with the most important core functionalities.

Customers can enjoy a minimalistic and responsive design on desktop and mobile devices, a simple e-commerce flow, a robust, refresh persistent shopping cart and fast loading times, due to client side form validation and optimized image content.

Shop owners can easily add new products through the products file. Subsequently, product category boxes, product pages, page routes and SEO metadata are created automatically and components styled dynamically.

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
- [Vueuse](https://vueuse.org/core/) - A collection of Vue composition utilities
- [TypeScript](https://www.typescriptlang.org/) - JS but type safe
- [TailwindCSS](https://tailwindcss.com/) - Simple Frontend Styling in HTML
- [Vite.js](https://vitejs.dev/) - Packaging and frontend tooling
- [Crypess](https://www.cypress.io/) - Component and E2E Testing for JS
- [ESLint](https://eslint.org/) / [Prettier](https://prettier.io/) - Linting and formatting
- [Git](https://git-scm.com/) - Version control
- [Asana](https://app.asana.com/) - For project management
- HTML5

### :bulb: What I've learned

#### Vue Router

- Use route parameters and props to create routes and render product pages dynamically, irrespective of the shop's catalog size
- Catch if customers have entered a wrong route or a missing product ID and forward them to the 404 page
- Lazy load/import pages to decrease loading times on landing page visit and further navigation
- Allow customers to go back to the previously seen page using a web history
- Adjust the scrolling behavior to reset the view to the page top when visiting a route
- Run logic, such as overwriting metadata, before entering a new route
  
#### State management (Vuex / Pinia / Vueuse)

In order to use state more efficiently without prop drilling, mostly for the shopping cart and checkout form, I looked into using Vuex to have a centralized state storage. After learning and playing around with Vuex, I noticed that using Vuex with Typescript is quite cumbersome, and I can't use v-model directly to alter form state. After some research, I found Pinia, which is not only type safe but also allows using Vue's v-model directly on store data!

- Create centralized data stores for app state
- Catch and validate form data with reactive store functions
- Implement a reload persistent shopping cart in local storage with Vueuse useStorage within Pinia

#### Typescript

Although my use of TypeScript is at times "patchy", it has helped me a lot to find problems before they happened when it comes to passing props for components and using Pinia store functions with product data.

- Typescript basics such as interfaces, types, typed functions, generics etc.
- Use typed props and default props for Vue components to ensure the proper data is passed
- Enforce proper types for newly added shop products

#### Tailwind

This project has been a great opportunity to further practice responsive design for mobile/tablet/desktop.

- Use absolute placement with layers to create shopping cart with blurry background layer and hover animation on big landing grid
- Use order class to adjust product category box styling based on component ID (left, right)
- Style checkout form based on validation in Pinia store
- Use flex basis to adjust space taken up by element
- Use viewport sizes for responsive design 

#### Cypress Testing

- Write E2E tests for happy and unhappy customer paths
- Write isolated Component / Integration tests 
- Run tests for different viewport sizes
- Track and mock functions with spies and stubs

#### Search Engine Optimization (Open Graph / Meta Tags / Unhead / HTML Semantics)

- Add and change metadata dynamically within a single page application using Unhead
- Use Open Graph meta tags to offer customers a more pleasant experience when sharing the app on the web
- Semantically structure a web page with HTML tags such as header, main, section, article etc.

#### Page Optimization

- Use Lighthouse Report in Google Chrome to assess app performance
- Convert images to more web friendly, smaller format WEBP for faster loading times
- Use lazy loading on images
- Use Srcset for responsive images (learned, but not yet implemented)
- Lazy load pages (see Vue Router)

#### Code and project cleanliness

- Lint with ESLint
- Format with Prettier in combination with the TailwindCSS plugin to sort HTML classes
- Organize directories properly for a "bigger" project

#### Miscellaneous

- Disable background scrolling, such as when the shopping cart or purchase success banner are visible, using JavaScript
- Adjust scroll bar styling
- Use Asana to schedule milestones and structure to-do lists

### :mountain_bicyclist: Continued development

TLDR: Nuxt refactor and backend functionality (authentication etc.)

During all of my previous projects, I have noticed that each new problem in web development can drag you into a rabbit hole of new functionalities to add, new tools to use and ways to optimize past solutions.

As this project was no different, I have a list of scribbled down ideas for future improvements:

- Delve into backend development with previously gained Express, Django or Golang (Gin) knowledge and serve page through web server
- On that note, implement user authentication (sign up, login, forgot password, account persistent cart)
- Create tools with UI for shop owners to CRUD new products.
- For that purpose, use image compression API's to optimize images automatically
- Retrieve customer purchase info and behavioral data and offer dashboard for owners
- Implement payment providers manually (PayPal, credit etc.)
- Use responsive images for different screen sizes with HTML srcset
- Refactor the app to use Nuxt for simpler routing, metadata for SEO, content management and server side rendering
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

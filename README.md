# RMONews blog

<p>
  <img src="https://img.shields.io/badge/made%20by-Renan%20MDO-black?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RenanMDO/RMOMoney?color=black&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/RenanMDO/RMOMoney?color=black&style=flat-square">
</p>

<img align="right" src="public/images/logo.svg" width="35%" alt="RMONews">

## Topics 

[About RMO Money](#about-rmonews)

[Technologies](#technologies)

[installation and use](#installation-and-use)


## About RMONews

RMONews is a blog with informative posts about React technologies. The application ideas are just examples, putting JAMstack concepts into practice (Javascript, APIs and Markup). These are technologies that integrate ReactJs (web application), Stripe (payment management API), Prismic Cms (Content API), NextAuth (Login Authentication).

## Technologies

The following tools were used in building the project:

<div align="left">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> 
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" />
<img src="https://img.shields.io/badge/Prismic -%23484A7A.svg?&style=for-the-badge&logo=Prismic&logoColor=white" />
 
</div>

Made with the <a href="https://nextjs.org/">Framework Next.js</a>, the blog brought several technologies and intelligences to the application that made production available.

Next.js ensured the separation of back-end and front-end rules, protecting fragile system data, such as connection to database, payment system, and other API's.

As a front-end facilitator it also brings a simple way to create routes to our pages, which was very useful for both static and dynamic pages.
The great advantage of Next.js is the possibility of working with Server-side rendering (SSR) and Static-side generation (SSG), which are nothing more than ways of rendering the page in different ways.

The <a href="https://stripe.com/">Stripe API</a> was used as a means of transactions, the great point of using this technology was to understand WebHooks, which create a connection between two systems, and one of these receives event from the other.

All user management and subscription status was controlled by the database <a href="https://fauna.com/">faunaDB</a>, with it you can simply insert and collect data in a dynamic according to the needs that the application asked for, without needing a back-end doing all the query work.

And finally the <a href="">Prismic</a> which is the Headless CMS, content manager, which is responsible for storing and serving the content of the articles.

## installation and use

```bash
# Clone this repository 
$ git clone <https://github.com/RenanMDO/RMONews.git>

# Access the project folder in terminal/cmd
$ cd rmonews

# Install dependencies
$ yarn install

# Run the application in development mode
$ yarn dev

# Server will start on port:3000 - go to <http://localhost:3000>
```
Feito com :black_heart: by [Renan Montenegro de Oliveira](https://github.com/RenanMDO/)

[![Linkedin Badge](https://img.shields.io/badge/-Renan%20MDO-black?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/renanmdo/)](https://www.linkedin.com/in/renanmdo/) 
[![Gmail Badge](https://img.shields.io/badge/-renan.montenegro.oliveira@gmail.com-black?style=flat-square&logo=Gmail&logoColor=white&link=mailto:renan.montenegro.oliveira@gmail.com)](mailto:renan.montenegro.oliveira@gmail.com)
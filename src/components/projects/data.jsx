import {
  ExpressJsDark,
  PostgreSQL,
  Prisma,
  React,
  ReactRouter,
  JavaScript,
  HTML5,
  Webpack,
  Render,
  VercelDark,
  Netlify2,
  CSS3,
} from 'developer-icons';

import { Jwt, Passport, EJS } from '../../shared/StackIcons';

const projectsDb = () => {
  const projects = {
    blogapp: {
      name: 'Personal blog',
      prvwUrl: 'https://siakablog-web-d1yr.vercel.app/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526584/blog_api1_jnip8a.png`,
      repoUrl: 'https://github.com/chacka1315/blogsiaka',
      date: '2025',
      tag: 'Bloging',
      desc: `Une blog personnel permettant aux visiteurs de lire les articles et au prorpiétaire de gérer ses articles.  `,
      stack: [
        ExpressJsDark,
        Prisma,
        PostgreSQL,
        Jwt,
        Render,
        React,
        ReactRouter,
        VercelDark,
      ],
    },
    msgapp: {
      name: 'iChat',
      prvwUrl: 'https://messaging-app-client-five.vercel.app/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526585/message_app_hdrt9g.png`,
      repoUrl: 'https://github.com/chacka1315/messaging-app',
      date: '2025',
      tag: 'Social media',
      desc: `Un mini WhatsApp permettant envoies et réceptions de messages/images entre utilisateurs et les inscrits.`,
      stack: [
        ExpressJsDark,
        Prisma,
        PostgreSQL,
        Render,
        Jwt,
        React,
        ReactRouter,
        VercelDark,
      ],
    },
    waldo: {
      name: "Where's Waldo?",
      prvwUrl: 'https://waldogame.vercel.app/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526586/ws_waldo_ho6uh9.jpg`,
      repoUrl: 'https://github.com/chacka1315/where-is-waldo',
      date: '2025',
      tag: 'Gaming',
      desc: `Version online du célèbre jeu "Où est Charlie?", basé sur la recherche d'objets cachés dans des images.`,
      stack: [
        ExpressJsDark,
        Prisma,
        PostgreSQL,
        Render,
        React,
        ReactRouter,
        VercelDark,
      ],
    },
    uploader: {
      name: 'File uploader',
      prvwUrl: 'https://file-uploader-9dnb.onrender.com/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526583/uploader_dxau4v.png`,
      repoUrl: 'https://github.com/chacka1315/file-uploader-app',
      date: '2025',
      tag: 'Cloud',
      desc: `Un mini Google Drive pour uploads et organisqtion de fichiers de façon simple et intuitive.`,
      stack: [ExpressJsDark, Prisma, PostgreSQL, Passport, EJS, Render],
    },
    shopping_cart: {
      name: 'Shopy',
      prvwUrl: 'https://shopingcartsiaka.netlify.app/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526584/shopping_cart_hjudsx.png`,
      repoUrl: 'https://github.com/chacka1315/shopping-cart',
      date: '2025',
      tag: 'Shopping',
      desc: `Application e-commerce pour ajout et gestion des produits dans un panier d'achat.`,
      stack: [React, ReactRouter, Netlify2],
    },
    // todo_list: {
    //   name: 'Todo list',
    //   prvwUrl: 'https://chacka1315.github.io/to-do-list/',
    //   imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526584/todo_list_yun7on.png`,
    //   repoUrl: 'https://github.com/chacka1315/to-do-list/tree/main',
    //   date: '2025',
    //   tag: 'Productivity',
    //   desc: `Application de gestion de tâches avec persistance locale des données des utilisateurs.`,
    //   stack: [HTML5, CSS3, JavaScript, Webpack],
    // },
    weather_app: {
      name: 'METEO',
      prvwUrl: 'https://chacka1315.github.io/weather-App/',
      imgUrl: `https://res.cloudinary.com/deeklaav9/image/upload/v1766526583/meteo_app_u98y1k.png`,
      repoUrl: 'https://github.com/chacka1315/weather-App',
      date: '2025',
      tag: 'Forecast',
      desc: `Application météo pour consulter la météo en temps réel pour n'importe quelle ville dans le monde.`,
      stack: [HTML5, CSS3, JavaScript, Webpack],
    },
  };
  const getProjects = () => projects;

  return { getProjects };
};

export const projectsData = projectsDb();

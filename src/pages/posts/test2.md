---
title: Reactivity News
category: web
date: 1/4/22
layout: ../../layouts/PostLayout.astro
---

Welcome to the March 2021 edition of Reactivity News. This edition covers SvelteKit, bundlers, forms, interesting projects found across the web and the mandatory Bad Joke of the Month.

Svelte Trunk
Svelte crew managed to get four releases out in February. Incredible! Check out the changes below.

https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md

If you a curious about the future of Svelte, check out the RFCs repository. Lots of interesting suggestions and discussions going on there.

Sapper Trunk
Sapper had one release last month and is now on version 0.29.1. If you are using TypeScript that release probably broke some types for you, the Preload.Preload one.

https://github.com/sveltejs/sapper/blob/master/CHANGELOG.md

SvelteKit
Still no official news on SvelteKit, but progress is being made.

If you are dying to learn more about SvelteKit check out this ambitious unofficial documentation. A very interesting read!

https://sk-incognito.vercel.app/learn/what-is-sveltekit

Bundlers, Bundlers!
I like bundlers as much as I hate them, but they are fun to play with. I tried Snowpack before the official version 2 came out and really liked it, but after using it for a few projects my feelings are mixed. One recent project upgrade from Snowpack v2 to v3 didn't go smooth for me either.

Rollup is currently the official bundler for Svelte, but I think it's more suited for building libraries than web apps. I like Svite, but the author put it on hold after Vite v2 came out. What else is left? Webpack of course!

I must admit that actually never took a close look at Webpack, because I always found its configuration daunting. This ignorance made me reject it. This time I decided to take a deep dive and finally find out what it's made off.

It took me a while to go to the bottom of things, but it was worth the time. I think I've finally found the bundler I've been looking for.

Webpack might not be the fastest bundler, but it's solid as a rock and flexible as a Russian Olympic gymnast. It's also the oldest bundler (est 2012). This is actually good, because the age means it has a mature codebase, mature ecosystem, tons of documentation and all the wrinkles are ironed out.

Webpack's Svelte loader v3 came out in January and it works incredibly well with latest Webpack 5.

https://github.com/sveltejs/svelte-loader

Webpack is slow(er) to start, but once you are up and running, the reloads are blazing fast with hot module reload enabled. The feedback loop is really short.

There is also official Sapper Webpack template with TypeScript support if you want to give it a try.

https://github.com/sveltejs/sapper-template-webpack

If you want to learn more about Webpack check out the links below by @survivejs. Great resource!

https://presentations.survivejs.com/webpack-from-apprentice-to-journeyman
https://survivejs.com/webpack/foreword/

Want to know the differences between the Packs? Read the Snowpack vs. wWbpack.

Vite.js, the next gen ESM bundler, had a v2 release recently, together with a gorgeous documentation site. Its Svelte plugin repo is now archived, but apparently Vite supports Rollup plugins out of the box. Interesting! Just need to find some time to try it out.

Also, I don't know what @benmccann and @lukeed are cooking with Vite, but it sure looks interesting.

https://github.com/benmccann/vite-svelte

Interesting Stuff Found on the Web
Svelte Society released a nice Svelte cheatsheet slash reference. Make sure to bookmark it!

https://sveltesociety.dev/cheatsheet

Svelte's official Eslint plugin finally supports TypeScript in Svelte templates. Enable it at your own risk in the existing project with strict TypeScript settings on.

If you are using Tailwind CSS make sure to disable the style tag parsing in Eslint configuration or you will get errors.

https://github.com/sveltejs/eslint-plugin-svelte3

Talking about TypeScript. Want to speed up you TypeScript compilation? Check out this Svelte preprocess fork that uses Esbuild.

https://github.com/lukeed/svelte-preprocess-esbuild

TypeScript has a complex type system. This article has 10 valuable tips for 10 bad TypeScript habits to break.

https://startup-cto.net/10-bad-typescript-habits-to-break-this-year/

Interesting discussion (or maybe rant) happened on /r/sveltejs recently - Please Stop being Fanboys. The comments are interesting too. What's your stand on this?

Ever wondered what you can use Svelte's new keywork #key for? Me too! Here is a simple REPL that will make everything click.

Clubhouse is all the rage at the moment and Svelte is there too! Mike Nikles started Casual Svelte Chat on weekdays where you can hang out and chat about Svelte. However, I think that he wants to move it from Clubhouse to some other platform. Check out his Twitter on where and when.

Cool Projects
ElectroBlocks
Cool Arduino IDE that uses Blockly. It comes with a built-in simulator as well and is built with Sapper and TypeScript.

Unicode Lookup
Snappy Unicode lookup PWA app built with Svelte and TypeScript by @emnudge.

svelte-sheets
Excel Sheets in Svelte. Not Google Sheets, but still pretty cool. Download a sample file from here if you want to play with it.

Editors
Two popular rich text editor for Svelte are Quill.js and Editor.js, but there is also Typewriter and ByteMD that look very promising.

Building a blog with Svelte
Learn how to build a blog in Svelte with these series on DEV.to by Chris Jackson.

Svelte Quick Tips
Check out Svelte Quick Tips by Dana Woodman. This one on basic internationalization.

MiniRx
I always say that you can double Svelte's reactivity by using RxJS. Florian Spier and friends just released MiniRx, a framework agnostic reactive store backed by RxJS.

Firebase Open Source
Fan of Firebase? Check out this collection of Firebase open source projects.

Svelte Forms
There has been an explosion of Svelte form libraries lately. That's fantastic to see! Forms library are useful, and fun to build, but they will not solve all your problems. More on this further down.

Some of the new Svelte form libraries are:

Formula - Zero Configuration Reactive Forms for Svelte
https://formula.svelte.codes

Felte - A simple form library based on Svelte stores and Svelte actions
https://github.com/pablo-abc/felte

Fastform - a Formik like library
https://github.com/srmullen/fastform

svelte-use-form - Svelte form library that is easy to use and has 0 boilerplate
https://www.npmjs.com/package/svelte-use-form

Some of the other popular Svelte form libraries are:

Sveltik - More or less Formik ported to Svelte
https://github.com/nathancahill/sveltik

Svelte Forms Lib - A lightweight library for managing forms in Svelte with Yup support
https://github.com/tjinauyeung/svelte-forms-lib

Svelte Forms - Form library with built-in validations
https://github.com/chainlist/svelte-forms

Svelte Forms - simple forms library using Svelte actions
https://github.com/svelteschool/svelte-forms

svelte-formup - Form helpers for Svelte
https://github.com/kenoxa/svelte-formup

svelte-formit - heavily inspired by the react-hook-form library
https://github.com/galkatz373/svelte-formit

Validation Libraries
Many of the form libraries above either have built-in validation or use Yup, but there are other great validation libraries out there.

Vest - My favorite validation library with a different validation approach
https://github.com/ealush/vest

Iodine.js - Micro client-side validation library (1.6kb)
https://github.com/mattkingshott/iodine

Nope - Lightweight clone of Yup
https://github.com/bvego/nope-validator

v8n - "The ultimate JavaScript validation library you've ever needed"
https://github.com/imbrn/v8n

Zod - Low-level TypeScript-first schema declaration and validation library
https://github.com/colinhacks/zod

Validator.js - A library of string validators and sanitizers
https://github.com/validatorjs/validator.js

Superstruct - Lower-level validation library for JavaScript (and TypeScript).
https://github.com/ianstormtaylor/superstruct

async-validator - Validate forms asynchronously
https://github.com/yiminghe/async-validator

Bueno! - Tiny, composable validation library
https://github.com/philipnilsson/bueno

Schema - Schema validator like Yup, but with a different API
https://github.com/zuze-lab/schema

Remember I said earlier that form libraries will not solve all your problems? I know this from experience of building a couple of forms heavy Svelte apps last year. You usually always have a fresh start, but sooner or later you run into edge cases such as parent-child selects, dynamic fields, calculated fields or input formatting. Things that no forms library will solve for you.

Instead of using form libraries, I've developed a set of useful abstractions and patterns for working with forms. It might result in slightly more code, but at least that code is under my control and not upstream in some forms library.

I've distilled and documented all my Svelte forms knowledge in a book. It's the missing manual for Svelte forms. Check it out here.

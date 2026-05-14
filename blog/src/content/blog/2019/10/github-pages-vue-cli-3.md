---
title: GitHub Pages + Vue CLI 3
pubDate: "2019-10-28T21:11:00.001Z"
description: ""
legacyPath: /2019/10/github-pages-vue-cli-3.html
canonicalPath: /blog/2019/10/github-pages-vue-cli-3
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKfQgBwVDrLS3dhEx7UjKdlNsGj95HPi2baSMK8CS3ryaMDgyy_zQn2OFdb6vh28aTg0OXY8LwZXWzQ07szqD3YCu59FYYNNeZVC04yc0PAtDL_e6Z8pkLbJZvLmJJGlX1qHgwdI5zggA/s640/manuel+mejia+jr+Vue+CLI+%252B+GitHub+Pages.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKfQgBwVDrLS3dhEx7UjKdlNsGj95HPi2baSMK8CS3ryaMDgyy_zQn2OFdb6vh28aTg0OXY8LwZXWzQ07szqD3YCu59FYYNNeZVC04yc0PAtDL_e6Z8pkLbJZvLmJJGlX1qHgwdI5zggA/s1600/manuel+mejia+jr+Vue+CLI+%252B+GitHub+Pages.png)

  
In this post, I will show you how to run your Vue CLI 3 project on GitHub Pages in a few simple steps. GitHub Pages is ideally for your personal website, documentation, demos, or your [wife's website](https://cubicalconsulting.com/) 😊 ... basically, any static project that you want to display to the world quickly.  
  
For the purpose of this tutorial, I will be using [mejiamanuel5](https://github.com/mejiamanuel57)/[gh-pages-vue-cli-3](https://github.com/mejiamanuel57/gh-pages-vue-cli-3)  a project that I created for a better demonstration. You can clone my repo, use your existing Vue CLI 3 project or create a new one. If you don't know how to create one, this [guide](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) can help you.  
  
Ready? let's start:  

### 1) At the root of your project create a file called deploy.sh and add this script:

\# abort on errors  
set -e  
  
\# build  
echo Linting..  
npm run lint  
echo Building. this may take a minute...  
npm run build  
  
\# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines)  
#cd docs  
#echo 'yourcustomdomain.com' > CNAME  
#cd -  
  
\# deploy  
echo Deploying..  
git add -A  
git commit -m 'deploy'  
git push -f https://github.com/mejiamanuel57/gh-pages-vue-cli-3.git master

  
Substitute **mejiamanuel57** with your GitHub username and **gh-pages-vue-cli-3** with the name of the repo you are pointing to. This script will lint, commit and deploy your code to GitHub.  

### 2) In your package.json, change your "scripts": section for this:

"scripts": { "dev": "vue-cli-service serve --open", "build": "vue-cli-service build --dest docs", "lint": "vue-cli-service lint", "deploy": "bash deploy.sh" },

  
Now your output directory for the **"build"** will be **docs** (We will use this directory in GitHub Pages later)**.**  Also we have added **"deploy":** to run the script from step 1.  

### 3) At the root of your project create vue.config.js and add this configuration:

module.exports = { publicPath: process.env.NODE\_ENV === 'production' ? '/gh-pages-vue-cli-3/' : '/' }

  
Substitute **gh-pages-vue-cli-3** with the name of your repo. This will tell GitHub Pages where your public path starts.  

### 4) Now, in your terminal run npm run deploy to build and deploy.

### 5) On GitHub go to your repo -> settings -> GitHub Pages - > Source and select master branch /docs folder

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLkOZcqxWckUdm8xyXiAXgO11N0GfbtMuonI3K4qw1tvAU0g67hVpW7reTU4coBG9qR0GQ14L5YJjsInGoAau9ASBYO8Z6CAHnF56AYZ72zbRrllSaYowSQKM3rRid_IgapRuxTieADwg/s640/Capture.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLkOZcqxWckUdm8xyXiAXgO11N0GfbtMuonI3K4qw1tvAU0g67hVpW7reTU4coBG9qR0GQ14L5YJjsInGoAau9ASBYO8Z6CAHnF56AYZ72zbRrllSaYowSQKM3rRid_IgapRuxTieADwg/s1600/Capture.PNG)

  

### 🌟Bonus: if you want to improve the SEO and routing of your Vue project, add the [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) package:

### 1) Run  npm install -D prerender-spa-plugin

### 2) Change your vue.config.js for this:

const path = require('path') const PrerenderSPAPlugin = require('prerender-spa-plugin') const Renderer = PrerenderSPAPlugin.PuppeteerRenderer module.exports = { publicPath: process.env.NODE\_ENV === 'production' ? '/gh-pages-vue-cli-3/' : '/', configureWebpack: (config) => { if (process.env.NODE\_ENV !== 'production') return return { plugins: \[ new PrerenderSPAPlugin({ staticDir: path.join(\_\_dirname, 'docs'), routes: \['/', '/about'\], minify: { collapseBooleanAttributes: true, collapseWhitespace: true, decodeEntities: true, keepClosingSlash: true, sortAttributes: true }, renderer: new Renderer({ headless: true }) }) \] } } }

  
Substitute **gh-pages-vue-cli-3** with the name of your repo and use **routes: \[\]**  to add the routes of your current project.  
  
**Note**: if you are going to use a custom domain (www.mydomain.com) remove or comment the **publiPath** line:   
publicPath: process.env.NODE\_ENV === 'production' ? '/gh-pages-vue-cli-3/' : '/',  

### 3) ....and run npm run deploy in your terminal.

That's all, enjoy your Vue project hosted on GitHub Pages with SEO optimizations.👍  
  
[Source of the project.](https://github.com/mejiamanuel57/gh-pages-vue-cli-3)  
  
I hope this post helps you. If you have any question please, leave a comment, also stay tuned for the updates about how to run a Vue CLI 4 project on GitHub Pages.

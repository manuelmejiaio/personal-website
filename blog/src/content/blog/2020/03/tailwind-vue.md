---
title: Tailwind + Vue
pubDate: "2020-03-30T00:05:00.001Z"
description: ""
legacyPath: /2020/03/tailwind-vue.html
canonicalPath: /blog/2020/03/tailwind-vue
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht4lHWgXMrPvVdIMxwEKkXWcsOEY91GGAj00XVLm1NzrvdNwl7ZMov_2on5fy8b6Tce8KqP41MC7O8KzP9CXpzay6B6j5ycmSaBCppXFs5iT15mA_MWPAtgeFZhqaBy74Zw3-cvjTwLLo/s320/manuelmejiajr.com+vue+%252B+tailwind.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht4lHWgXMrPvVdIMxwEKkXWcsOEY91GGAj00XVLm1NzrvdNwl7ZMov_2on5fy8b6Tce8KqP41MC7O8KzP9CXpzay6B6j5ycmSaBCppXFs5iT15mA_MWPAtgeFZhqaBy74Zw3-cvjTwLLo/s1600/manuelmejiajr.com+vue+%252B+tailwind.png)

I can't stress enough how happy I am after start using [Tailwind CSS](https://tailwindcss.com/) in my Vue projects. Now, I don't have to deal directly with CSS; Tailwind will handle that for me 😉.  
  
This is a short tutorial on how to add Tailwind CSS to your Vue app created with the Vue CLI. Let's start:  
  
**1)** Open your project and install **Tailwind**.  

npm i --save\-dev tailwindcss

  
**2)** Create a CSS file called tailwind.css in the following path **src/assets/css/** and add the content below:  

@tailwind  base;  
@tailwind  components;  
@tailwind  utilities;

**3)** Now import the **tailwind.css** in **main.js**  
  

import './assets/css/tailwind.css'

  
**4)** Create your Tailwind config file by running  

npx tailwindcss init

  
This will create a minimal **tailwind.config.js** file at the root of your project.  
  
**5)** Create a **postcss.config.js** file at the root of your app and add this:  
  

const autoprefixer = require('autoprefixer')  
const tailwindcss = require('tailwindcss')  
module.exports = {  
plugins: \[    tailwindcss,    autoprefixer  \]  
}

  
At this point, Tailwind is ready to be used, but if you try to compile the app you will get a warning because your CSS bundle size is too big, around **850 KiB**. So let's use **PurgeCSS** to downsize it by removing the unused CSS.  
  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMP_ZG6RBSnvZAcGzay4njDn1arOp1dy21cw0ILYsz8jCMMu8mSN1w8W16DhYCZBPVA55xcewg-toLhLSjsnlbGOv0Iq8oI9kuRJZLWDeN_Krj7aVwF2rV2G4ENWRJi3V0q-jMQrybN60/s1600/1.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMP_ZG6RBSnvZAcGzay4njDn1arOp1dy21cw0ILYsz8jCMMu8mSN1w8W16DhYCZBPVA55xcewg-toLhLSjsnlbGOv0Iq8oI9kuRJZLWDeN_Krj7aVwF2rV2G4ENWRJi3V0q-jMQrybN60/s1600/1.PNG)

  
**6)** Install **PurgeCSS**:  

npm i --save\-dev @fullhuman/postcss\-purgecss

  
**7)** Set up **PurgeCSS** in our **postcss.config.js** file (only enabled  in production):  

const autoprefixer = require('autoprefixer')  
const tailwindcss = require('tailwindcss')  
const postcssPurgecss = require('@fullhuman/postcss-purgecss')  
const purgecss = postcssPurgecss({  
  content: \['./public/\*\*/\*.html', './src/\*\*/\*.vue'\],  
  defaultExtractor: content \=> content.match(/\[\\w\-/:\]+(?<!:)/g) || \[\],  
  // Whitelisted classes (E.g.: The router-link active class)    
whitelistPatterns: \[  
    /-(leave|enter|appear)(|\-(to|from|active))$/, /^(?!(|.\*?:)cursor-move).+\-move$/, /^router-link(|\-exact)\-active$/  \]  
})  
module.exports = {  
  plugins: \[  
    tailwindcss,  
    autoprefixer,  
    ...(process.env.NODE\_ENV === 'production' ? \[purgecss\] : \[\]),  
  \]  
}

**8)** Edit the **tailwind.css** file to only apply PurgeCSS on utility classes, and not to base styles or component classes:  

/\* purgecss start ignore \*/  
@tailwind  base;  
@tailwind  components;  
/\* purgecss end ignore \*/  
@tailwind  utilities;

  
Done, now if we compile our app, we will get a smaller CSS bundle size, around **4 KiB**.  

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyNxKEqJcIeDC7PhuBYCMciXCzapsZWjWleopsQ3nO3jQrsVOHJ_A81Dmib0lWCC2-XeMymj3gON6lc0tuIRW7-sm1V2ZtaSM6wNpM89W8qrI4KD00yyHKarEWhrepcub5LXhS2ganthg/s1600/2.PNG)

  
  
**Bonus**  
If you are using **VS Code,** install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to get suggestions as you type + some features that will improve the Tailwind experience.  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0_qy58dMNucajgy1ZY74tW4sycCZdNLy-7oZQT-QElmLSyeGhGC-tvyOqP_AU6MgTkSSS6xF1XeD1eFbZ58d8BN5xAVmxCHMDB0Zak3o89MKg6x70-cD32qRp9tvte63qQQ5fR7zHU9c/s1600/html.gif)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0_qy58dMNucajgy1ZY74tW4sycCZdNLy-7oZQT-QElmLSyeGhGC-tvyOqP_AU6MgTkSSS6xF1XeD1eFbZ58d8BN5xAVmxCHMDB0Zak3o89MKg6x70-cD32qRp9tvte63qQQ5fR7zHU9c/s1600/html.gif)

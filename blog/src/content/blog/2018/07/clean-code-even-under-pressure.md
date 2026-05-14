---
title: Clean Code, even under pressure
pubDate: "2018-07-09T15:35:00.003Z"
description: ""
legacyPath: /2018/07/clean-code-even-under-pressure.html
canonicalPath: /blog/2018/07/clean-code-even-under-pressure
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiF8OmsdlTJmEEV_HpzvGBfXsmMtziNl3rYsIYif0UfeZQsSaEEitjWQndrE31a_GhApdpSdnfVt677_gPwf_AaFy4wy7OCNcX2HozvfhwP8UTfY7QeNx0noPhwvxTJcSsjUL8MdEUSxrY/s320/giphy.gif)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiF8OmsdlTJmEEV_HpzvGBfXsmMtziNl3rYsIYif0UfeZQsSaEEitjWQndrE31a_GhApdpSdnfVt677_gPwf_AaFy4wy7OCNcX2HozvfhwP8UTfY7QeNx0noPhwvxTJcSsjUL8MdEUSxrY/s1600/giphy.gif)

  
  
We all have been in the position at work when the pressure comes, and delivering on time is a "life-or-death situation". There are a lot of factors that influence a bad project planning like wrong time estimation, workload distribution, team choice, etc...and maybe it will happen more than once, after all, we are humans and we are really bad forecasting.  
  
Certainly, nobody wants to work under pressure, we can't think clearly,  we try to work faster, making more mistakes than in a normal situation, it sucks I know. In those moments we tend to focus more on delivering at all costs, even sacrificing our reputation...and that's why I wanted to write this post.  
  
Keep in mind, when you are coding, maybe alone or within a team, you are building something to solve a problem, it doesn't matter how big or small it is, I'm pretty sure that problem will evolve over the time. Having said that, more and more code will be written. This code should be maintainable over time, therefore, setting rules, design patterns, and conventions are a "**MUST**".  
  
A strong recommendation is to **start wrapping all these settings before writing the first line of code** because it will be very difficult to clean the mess later. Some examples of simple things to define at the beginning are:  
  

*   Name conventions for variables and functions (Pascal case, Camel case, etc..)

*   Curly braces format, find some wise advice [here](https://softwareengineering.stackexchange.com/questions/2715/should-curly-braces-appear-on-their-own-line)

*   Line length (horizontal line of code), [this questions of SO](https://stackoverflow.com/questions/276022/line-width-formatting-standard) it's an interesting starting point

*   Indentation style, [here](https://en.wikipedia.org/wiki/Indentation_style) you have some examples

  
Alternatively, and my preferred one, you can **set up a linter** (a tool that is used to mark the source code with some suspicious and non-structural) and set the rules for the whole team, that will force each member of the team to respect the rules. However, a linter will not help you to write rational algorithms and data structures. For this, I highly recommend you read [this set of books](http://blog.manuelmejiajr.com/2017/07/books-you-must-read-as-developer.html) especially the Bob Martin's choice and long hours of code.  

  
Also, we could be forced to skip all these rules and conventions to start working right away, but no! stop right there and take a couple of hours to set the rules, this will save you a lot of time in the future. Nobody wants to deal with your messy work. After all, it's your code, your responsibility, your reputation. Be aware of all the possible consequences this could trigger, from a bad recommendation for a new position or job opportunity to the unpleasant experience of work with you. I'm sure you don't want to be in that situation, hence **"****Clean Code, even under pressure".**  

  

> "To leave the world better than you found it, sometimes you have to pick up other people's trash."

> \-Bill Nye

---
title: My Productivity Stack in the Age of AI (Software &amp; Hardware)
pubDate: "2025-10-26T21:02:00Z"
description: ""
legacyPath: /2025/10/my-productivity-stack-in-age-of-ai.html
canonicalPath: /blog/2025/10/my-productivity-stack-in-age-of-ai
---

We’re living in an incredible moment for productivity. AI tools are reshaping how we work, letting us move faster, explore ideas more freely, and focus on higher-level thinking. Every day, it feels like there’s something new that can supercharge our workflow. Still, I’ve realized that no matter how powerful the AI assistant is, the foundation, the tools we sit on and type into every day, can either unlock that potential or hold it back.  
  
Over the last few months, I’ve been on a mission to fine-tune my setup, and I’ve landed on a stack of software and hardware that has genuinely made a huge difference. Let's dive in.

## The Software

This is the digital engine. Make it fast, make it smart, and make it work for you.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgv82p0UGV7DOXgcP1Uh5CldDtUZ4TXIZVUG6BbUtuUYkRf0QVQUwExBBWK0YjEGmjlL4oAlMJ-YeYfrdEGDsAKVPtvMMRO52UB7wkz0eLNOsNYO7ax70CDG1O48dy8xy4BguxsE7E_8b2yFNz8Wb6n7nANJE9zW9gIKsX-TzPy25ZentGipLI-fozuurY=w640-h292)](https://blogger.googleusercontent.com/img/a/AVvXsEgv82p0UGV7DOXgcP1Uh5CldDtUZ4TXIZVUG6BbUtuUYkRf0QVQUwExBBWK0YjEGmjlL4oAlMJ-YeYfrdEGDsAKVPtvMMRO52UB7wkz0eLNOsNYO7ax70CDG1O48dy8xy4BguxsE7E_8b2yFNz8Wb6n7nANJE9zW9gIKsX-TzPy25ZentGipLI-fozuurY)

## **1\. The OS: [Linux/Ubuntu](https://ubuntu.com/desktop)**

To me, speed is everything. I’ve used **Windows** for a long time, but as I started running more things in parallel, the slowdowns became obvious. Working on several projects at once, with different apps and agents running in the background, made the system feel heavy. Build times took longer, the OS dragged, and it started to get in the way of getting work done. In today’s AI-driven era, where we iterate, compile, and experiment more than ever, every slowdown feels worse, every extra minute adds up.

  

That’s why I made the switch to **Ubuntu**. There are plenty of Linux distros out there, but Ubuntu stands out for its community and stability. And the change was immediate. A fairly big Node.js project that used to take about 10 minutes to build on Windows now takes just 3 minutes on Ubuntu, same code, same hardware. That’s seven minutes of my life back every single time I hit build.

  

Now, some people might be thinking: “**Why not just buy a Mac?”** The truth is, I’ve never been an Apple user. Personally, I feel I can get the same value their products offer at a cheaper price, plus I don’t like the feeling of being locked into their restrictive ecosystem. But that’s me.

  
We're seeing a huge trend of developers shifting back to a Linux environment, and it's no surprise. Most of our servers run on it, and the tooling is just native. Even **DHH (David Heinemeier Hansson)**, the creator of Ruby on Rails and Basecamp and someone long known for advocating Macs for developers, has been championing this move and even created his own opinionated Arch-based distro called [Omarchy](https://omarchy.org/). The message is clear: if you want raw performance, you need to get close to the metal.

## 2\. The Editor: [Cursor AI](https://cursor.com/)

This is my one big AI-specific tool, and it's a gem. Cursor is essentially a fork of VS Code that has been rebuilt from the ground up with AI at its core.  

Forget just having a chat window on the side. With Cursor, you can:

*   **Highlight a chunk of code** and ask it to refactor, debug, or explain it.
    
*   **Chat with your entire repository.** You can literally ask, "Where is the user authentication logic handled?" and it will find it.
    
*   **Generate code inline** with a simple `Ctrl+K` prompt.  
    
*   **Plans**: instead of a single code snippet, Cursor can produce a full multi-file plan for bigger tasks. For example, you can ask it to “add dark mode support” and it will draft all the necessary changes across different files, so you can review and apply them.
    
*   Use the "**Debug**" button in the terminal when a command fails, and it will read the error and tell you how to fix it.
    

It's everything you love about VS Code, but with AI superpowers baked directly into your workflow.

## 3\. The Database Manager: [DBeaver](https://dbeaver.io/)

I started with the classic, heavy **SQL Server Management Studio (SSMS)**. I then moved to **Azure Data Studio** for its simplicity and speed. But now that it seems to be heading towards deprecation, I was back on the hunt.

I found **DBeaver**, and it looks like my "forever" tool.  

It’s a universal database manager that feels just as fast and simple as Azure Data Studio but is infinitely more powerful. The best part? It supports everything. I’m talking **PostgreSQL, MySQL, SQL Server, Oracle, SQLite, MongoDB, Redis, Cassandra**... you name it, DBeaver can connect to it.

And here’s the killer feature for this AI era: it has a built-in **AI assistant**. You can hook up your GitHub Copilot or OpenAI API credentials and just... talk to your database.  
  
You can literally write, "Show me all users from the 'users' table who signed up in the last 30 days and also have more than 10 posts in the 'posts' table, and join their names," and it will generate the query for you. It’s beautiful.  

It also reminds me of this classic (and spicy) tweet from Uncle Bob Martin:

> [![](https://blogger.googleusercontent.com/img/a/AVvXsEhL9Fv3zFwRhZErCWEoh4BDTOi1RjHuynQ3UkAmLuOAXZ2l75iwQ9xs6y_cGPTenoO-awpWI6Zz48MM1R89h9Oa8CyaMZww3DaHN2pLZ6hn9_EbfvWpx5DGeBk-f3CDKDpkCKVojr0ICTzr5YPXH3wWYgXbiSjaVa0gtsai9NpwnvMhjfP4vmdkEtr_wDg=w598-h155)](https://blogger.googleusercontent.com/img/a/AVvXsEhL9Fv3zFwRhZErCWEoh4BDTOi1RjHuynQ3UkAmLuOAXZ2l75iwQ9xs6y_cGPTenoO-awpWI6Zz48MM1R89h9Oa8CyaMZww3DaHN2pLZ6hn9_EbfvWpx5DGeBk-f3CDKDpkCKVojr0ICTzr5YPXH3wWYgXbiSjaVa0gtsai9NpwnvMhjfP4vmdkEtr_wDg)

Maybe this new AI-to-SQL translation is finally fixing that "grave error" by letting us speak human again.

## 4\. The Shell: [ble.sh](https://github.com/akinomyoga/ble.sh) + [fzf](https://github.com/junegunn/fzf)

On Linux (and by default on Ubuntu), Bash is the standard shell. It’s what most of us start with, and the good news is you don’t need to switch shells to get a powerful experience. With a couple of add-ons, you can supercharge it into something that feels modern and fast:

*   **ble.sh**: This extension gives Bash fish-like features, including syntax highlighting (you’ll know if a command is valid before pressing enter) and smart auto-suggestions pulled from your history.
    
*   **fzf**: A lightning-fast fuzzy finder. Hit `Ctrl+R` and instead of a slow scroll through history, you get an interactive list you can filter instantly. It feels like magic.
    

Together, these tools turn Bash from “just the default” into a productivity powerhouse.

## The Hardware 

The journey to the metal extends to the desk: these are the physical tools that lock in my flow state.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhjy_xgV8vGynHBErYfZPMepJWCnehM-imQUHIMKcXVF4BXvcQwkZAed_D6qWkv_uOp4L0dShVv-Hq5YDoK2mIkppl6x3mDLJsgGz4o-KHsxgU7zw6HwQvy4XY61aGXg54SkcsbjUoLjPJi12BnJ-wFZfgPy-MC3Z6dKJczaIBRJCL3vmlE0oBY8B48lYM=w640-h306)](https://blogger.googleusercontent.com/img/a/AVvXsEhjy_xgV8vGynHBErYfZPMepJWCnehM-imQUHIMKcXVF4BXvcQwkZAed_D6qWkv_uOp4L0dShVv-Hq5YDoK2mIkppl6x3mDLJsgGz4o-KHsxgU7zw6HwQvy4XY61aGXg54SkcsbjUoLjPJi12BnJ-wFZfgPy-MC3Z6dKJczaIBRJCL3vmlE0oBY8B48lYM)

## 1\. Monitor: [27" 4K  ( LG 27UP650)](https://www.amazon.com/LG-27UP850K-W-DisplayHDR-DisplayPort-Adjustable/dp/B0DS2TCW9L/ref=mp_s_a_1_4?crid=PEI14ZNQ9XQU&dib=eyJ2IjoiMSJ9.dWndF007FVKu6_6nQ6Dc0atkCQw3HwfzSeg5DVgyqsRU1cTx93IEeSuuayVdgM7YfIQ7qJnBg98u32LmsUEfXbnrpN8mZCeBtgR4Ghy0LQLsrbxVdSnvvoT0r_G9ELsV4xAsY7csijR_8joYSjQD_R-06l3kBkNImvJfBvMWZV_ObUpVKKuGtqJX35zS1gNxtOYshSjGiB0b5HL2kjTdnw.cF0MPUPTBlsfRRuB0EeKYcGjKe6w4IOpQvFVtr2rT38&dib_tag=se&keywords=lg%2B4k%2Bmonitor%2B27&qid=1761402384&sprefix=LG%2B4k%2Bmonitor%2Caps%2C139&sr=8-4&th=1&psc=1)

I’ve gone through a few different setups over the years: dual monitors, a 35-inch curved display, and even some hybrid combinations. None of them quite clicked.

  

Then a friend suggested something simple: a **27-inch 4K monitor** paired with my laptop screen. That was a game-changer. The 4K resolution makes everything razor-sharp, so I can comfortably split the screen into two windows without feeling cramped. It also solves the classic “dual-monitor neck swivel” problem, no more head turns back and forth. Just one crisp display in front of me, with my laptop screen right there as a secondary space in case I need it.

  

Sometimes the best productivity boost comes from less, not more.

## 2\. Keyboard: [Logi MX Mechanical Mini](https://www.logitech.com/en-us/shop/p/mx-mechanical-mini)

This mechanical keyboard hit all my requirements:

*   **Portable:** The "mini" layout is compact and perfect for my desk.
    
*   **Long-lasting Battery:** Logitech claims up to 15 days on a full charge with backlighting on, and a staggering up to 10 months with the backlight off. In practice, I’ve been charging it maybe once every 3-4 weeks.
    
*   **Not that loud:** I chose the tactile quiet switches, they combine laptop-like speed with the depth and feedback of a traditional mech board, without the uncomfortable clacky noises. It just makes typing a joy.
    

It just feels good to type on.

## 3\. Mouse: [MX Master 3S](https://www.logitech.com/en-us/shop/p/mx-master-3s)

I have to be honest here, I bought this mouse mostly to match my keyboard. I'm not a "power mouse user", I don't have a dozen macros mapped to all the buttons. But even for a simple user like me, this mouse is fantastic. It’s incredibly comfortable and ergonomic, and the magnetic scrolling wheel is a piece of engineering art. The subtle haptic feedback as you scroll is really nice.

## 4\. Focus Tool: [Digital Pomodoro Timer](https://www.amazon.ca/EooCoo-Creative-Rotation-Countdown-Productivity/dp/B0CW3871YR?th=1)

This is my secret weapon against the "era of distraction." It's a small, digital timer I keep on my desk.

The method is simple (it's the Pomodoro Technique):

1.  Set the timer for **25 minutes**.
    
2.  Work, focused, on one task. No email. No phone. No Slack/Teams.
    
3.  When the timer goes off, take a **5-minute break**.
    
4.  Repeat. (After 4 "pomodoros," take a longer 15-minute break).
    

This little piece of plastic on my desk is a physical contract with myself to focus. When the timer is counting down, I'm working. When it's off, I'm resting. In a world of endless pings and notifications, this tiny tool gives me back control of my time.

## Conclusion

So that’s my productivity stack in the age of AI. For me, the goal isn’t to chase every new tool that comes out, but to make sure the foundation is solid. AI is powerful, but it only takes you so far if the machine underneath feels slow or clunky. By investing in the basics: the OS, the shell, the editor, and the hardware I touch every day, I’ve created a setup that lets AI do its best work.

These choices might look small on their own, but together they make a big difference in how smooth, fast, and enjoyable my workflow feels. This is what’s working for me right now, and I’m sure it will evolve as both my needs and the tools around us change. I’d love to hear what you’re using, what’s in your stack?

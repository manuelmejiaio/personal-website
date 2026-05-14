---
title: Let's talk about Web Accessibility
pubDate: "2020-08-02T17:26:00.008Z"
description: ""
legacyPath: /2020/08/lets-talk-about-web-accessibility.html
canonicalPath: /blog/2020/08/lets-talk-about-web-accessibility
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnYfTM-JZ7IJ12ah3WLgT7bCkrFGbiHEvUNOM_v8XByvD2qCCdn4tnTiEM_D9nsTFYyi1k1_IFJ5PvroXBXYL2aPXusJh8sLhpkbRy0yvaUrFt2mNiESqH1khmPAyu-s1kjQOHkwq4bYk/w400-h267/manuelmejiajr.com+accessibility.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnYfTM-JZ7IJ12ah3WLgT7bCkrFGbiHEvUNOM_v8XByvD2qCCdn4tnTiEM_D9nsTFYyi1k1_IFJ5PvroXBXYL2aPXusJh8sLhpkbRy0yvaUrFt2mNiESqH1khmPAyu-s1kjQOHkwq4bYk/s1350/manuelmejiajr.com+accessibility.jpg)

  

Most web applications are developed for users with no disabilities, under the assumption that all users have the same physical abilities and resources, when in fact it's the opposite. The circumstances of our users will vary from having internet issues to being physically disabled, and here is when **Web Accessibility** comes into play, so you can optimize your web app and adapt it to all audiences.

  

**Web Accessibility *(a11y*** ***for short)*** refers to designing/developing web apps so people with some kind of physical disability, situational disability, and socio-economic restriction (like low internet speed) can use them. Web Accessibility encompasses all disabilities that affect web navigation, including:

*   👁 visual
*   🧠 neurological
*   👂🏽 auditory
*   🖐🏽 physical
*    🗣 speech

The first time I heard about this concept, I was surprised by the number of people who are restricted to fully use web applications. My first guess was that around 1% to 5% percent of the population has a disability, but this was far from reality. According to the [Centers for Disease Control and Prevention](https://www.cdc.gov/) in 2019, **26% of the adult population in the United States is somehow disabled**. Yes, Web Accessibility is not a luxury but a necessity.

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgon-b0hi-WhnaKWYXdDjN85yMrgIfdFTFbQ3STBwGFtb2WFPlqRFWX8TJzcXkh44VG-aIR0P6QCPo40zxGJR-SuYchdKUcI9FIYmvVOUDXKJ_lsJnqFRewDNWopSvsqf8-AbjMoZ0lZ7I/s640/Capture.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgon-b0hi-WhnaKWYXdDjN85yMrgIfdFTFbQ3STBwGFtb2WFPlqRFWX8TJzcXkh44VG-aIR0P6QCPo40zxGJR-SuYchdKUcI9FIYmvVOUDXKJ_lsJnqFRewDNWopSvsqf8-AbjMoZ0lZ7I/s838/Capture.PNG)

[Image from Vue Conf - Maria Lamardo's presentation](https://www.youtube.com/watch?v=mHubDB6DIfE&t=89s)

  

As you can see, if you don't consider Web Accessibility on your web app, you will miss a lot of users. Also, remember that Web Accessibility will help you eliminate barriers for users with **situational disabilities** to interact with your application. Some examples of situational disabilities are:

*   Older people with changing abilities due to aging.
*   People using small screens (phones, smartwatches, etc.).
*   People with broken bones or lost glasses.
*   People with “situational limitations” such as in bright sunlight or in an environment where they cannot listen to the audio.
*   People using a slow internet connection due to expensive bandwidth.

Now, let's work on how to assess and improve Web Accessibility. There are multiple ways to do it, but my favorite one is to use **Google Chrome DevTools**. Follow these simple steps:

1.  On your web app press **F12**
2.  Go to the **Lighthouse** tab
3.  Make sure **Accebility** is selected
4.  Press **Generate report  
    **

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnVRemApdi9ZUV-ZuLyS9j7QaGsN-zZ9-MkGaYgAJ8JEAlU5q8IqAyJ474xVMz2W-VWW9jLeijCh53AzRkrdd5zn-BZfWKoRrgRXwodzx9lBR1O7hi2He3cwchlbniZ0IUTaTnATId-pY/s640/test.gif)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnVRemApdi9ZUV-ZuLyS9j7QaGsN-zZ9-MkGaYgAJ8JEAlU5q8IqAyJ474xVMz2W-VWW9jLeijCh53AzRkrdd5zn-BZfWKoRrgRXwodzx9lBR1O7hi2He3cwchlbniZ0IUTaTnATId-pY/s1909/test.gif)

  

The report will tell you what is wrong with your web app and it will guide you on how to fix the issues. Some recommendations that the report may give you are to increase the font size, change the background color to have better contrast, add alternative text to the images, and more. Another good way to test Web Accessibility in our web app is to disconnect the mouse and the screen and to navigate using a **screen reader**. I know it is hard, but it's definitely a good test.

  

  

**“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”** 

**– Tim Berners-Lee**

---
title: Logging from ASP.NET Core with Elmah.io
pubDate: "2017-06-25T15:00:00Z"
description: ""
legacyPath: /2017/06/logging-from-aspnet-core-with-elmahio.html
canonicalPath: /blog/2017/06/logging-from-aspnet-core-with-elmahio
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLOjSyQA8jDCvjC-L1MkQnH23NMeyXQYMogZWgbCCZkmpTZHEL53ibjYFYtTdmU6D65okKFVRMn95uPcE7Qr2SrwdzbL1lffYavU1EvbrlloO0MsDmoUnRX8gE6zUvg_Nqw8bQFPXPPyI/s320/ne+cote+%252B+elmahio.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLOjSyQA8jDCvjC-L1MkQnH23NMeyXQYMogZWgbCCZkmpTZHEL53ibjYFYtTdmU6D65okKFVRMn95uPcE7Qr2SrwdzbL1lffYavU1EvbrlloO0MsDmoUnRX8gE6zUvg_Nqw8bQFPXPPyI/s1600/ne+cote+%252B+elmahio.png)

Log and log often ~ Nobody said that.  
  
There's a quote that says "You can't improve what you can't measure". Logging events in web apps is one of those things developers tend to underestimate.  
  
In this tutorial, I will explain shortly how to implement  Elmah in ASP.NET Core for logging errors, important info, warnings, or any other kind of level.... and send it to the Elmah.io cloud service. You are maybe wondering, why Elmah.io? there are others Third-party logging providers, but I chose this for 4 main reasons:  
  
\* Vast documentation.  
\* Public and private support of the product itself.  
\* Cool user interface.  
\* ~Cost (a freemium pricing model)~ **free plan discontinued :(**  
  
First step: get everything ready with an Elmah.io account, go directly to their website and sing up. Once you are registered, sing in --> Dashboard --> click on the gear symbol of the organization  --> API Keys. Now create your API or use the default one:[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTE9JgjkKpVdcuVdGikyX7vOqxFG_htC5C_kPbvptghmzcoUPY5kzwRS8hkyELS4pSQ3cdgYHS8V15G_lX4xkGSENVV4fWsmxuvzA4f4mF4RbkGzT2ztQFZqBuG3QEV9_LJiTQKIcRt-Y/s1600/1.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTE9JgjkKpVdcuVdGikyX7vOqxFG_htC5C_kPbvptghmzcoUPY5kzwRS8hkyELS4pSQ3cdgYHS8V15G_lX4xkGSENVV4fWsmxuvzA4f4mF4RbkGzT2ztQFZqBuG3QEV9_LJiTQKIcRt-Y/s1600/1.PNG)  
  
Second Step: To save your logs in Elmah.io besides your API Key you will also need to create a log. Under the Dashboard, go to Create Log, and keep the  Log ID:  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbpa8xI1DNwKWkQWf-RUrcjISTfRa8q9LcmYDcO5KWceTgdlSox39Q5072Axw9UupVAwSpUGu1LR07ZMmAmNhEtXIWM_SofG75ufU0kmnG_Fr3JE52PhvDSUwCOH652N22fPTt9mepqc8/s1600/2.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbpa8xI1DNwKWkQWf-RUrcjISTfRa8q9LcmYDcO5KWceTgdlSox39Q5072Axw9UupVAwSpUGu1LR07ZMmAmNhEtXIWM_SofG75ufU0kmnG_Fr3JE52PhvDSUwCOH652N22fPTt9mepqc8/s1600/2.PNG)  
Tips: In my case for every project, I create 2 logs, one for Production and another one for Development,  this is up to you.  
  
Third step: Open your  ASP.NET Core project. We are going to use Elmah.Io.Extensions.Logging .To install it on your project, open the Package Manager Console and type: Install-Package Elmah.Io.Extensions.Logging -Version 3.1.22-pre -Pre or you can do it through the NuGet.  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGWobPE4WLwTZpGzx_KVejxvn_Abp9ijSLkghHNN0eYD35xFix39K8eJtfaX02rSQoBGqL3DTFy-oqVywML-eVGeOX5zzlSbdJLLWRHJlYWlcLORZXkjdBrzjmXfwU0JOkNZRShXpJt5s/s1600/3.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGWobPE4WLwTZpGzx_KVejxvn_Abp9ijSLkghHNN0eYD35xFix39K8eJtfaX02rSQoBGqL3DTFy-oqVywML-eVGeOX5zzlSbdJLLWRHJlYWlcLORZXkjdBrzjmXfwU0JOkNZRShXpJt5s/s1600/3.PNG)  
  
Fourth step: Now we need to go to the `Seturp.cs` `and inside` `public void Configure` after`loggerFactory.AddDebug()` type:  
  
loggerFactory.AddElmahIo("your API key", new Guid("your Log ID"))  
  
In my implementation, I got 2 scenarios one for Production and another one for Development as I said it before:  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisVFi-IjXfS4XSate4jkKX_wkqMOaJpCizqZuxB75Kzap6tSJ5tdsNy4lj3F1Rgo-Bws5xBLZyaFIZHeuvwR6ze1rbhluHjMkBpksyRVRDXvnJEAquIzTJhjK9W6hwrK9cBeAI-RO1tzQ/s1600/4.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisVFi-IjXfS4XSate4jkKX_wkqMOaJpCizqZuxB75Kzap6tSJ5tdsNy4lj3F1Rgo-Bws5xBLZyaFIZHeuvwR6ze1rbhluHjMkBpksyRVRDXvnJEAquIzTJhjK9W6hwrK9cBeAI-RO1tzQ/s1600/4.PNG)  
  
And that's it, this will log every exception, identity error or any other failure in Elmah.io automatically.  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisGk0iJ9Vli_qX9X2wtGsiUsClf4q4ABwQMuA6_rEmF-Urza3ZenAFO9XMHGgLK7zaWDd96zbZxGsDUzHVkoVKP1UyvVmo5cdIQcLKY4rVleKykUsBq50Ywh2RtSqw3dJSj75s8yvTBiI/s1600/5.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisGk0iJ9Vli_qX9X2wtGsiUsClf4q4ABwQMuA6_rEmF-Urza3ZenAFO9XMHGgLK7zaWDd96zbZxGsDUzHVkoVKP1UyvVmo5cdIQcLKY4rVleKykUsBq50Ywh2RtSqw3dJSj75s8yvTBiI/s1600/5.PNG)  
  
  
  
BONUS  
  
1# Manual logging:  
  
This is an example of how to log manually:  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipy0_krdh8SIOEy7RG_E-m32gFRp1IYBywa36og3B-exLrXYnjT3KVG822L7X_vb942E-3tHhZ-CnpsYqM5smkkaFj5WctGPRkVY19QHOrETl87IE_cyR4XThy-VIOXhpxWnNdSh-qchw/s1600/6.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipy0_krdh8SIOEy7RG_E-m32gFRp1IYBywa36og3B-exLrXYnjT3KVG822L7X_vb942E-3tHhZ-CnpsYqM5smkkaFj5WctGPRkVY19QHOrETl87IE_cyR4XThy-VIOXhpxWnNdSh-qchw/s1600/6.PNG)

  
  
2# Logging information level:  
  
By default  Elmah.Io.Extensions.Logging doesn't use  LogInformation to obviously log information, to enable it in your Startup.cs --> public void Configure  method use:  
  
loggerfactory.AddElmahIo("API\_KEY", new Guid("LOG\_ID"), new FilterLoggerSettings { {"elmah.io", LogLevel.Information} })  
  
  
If you have any question leave a comment in the section below, I'll get to it as soon as possible.  
  
Link: [https://elmah.io/](https://elmah.io/).

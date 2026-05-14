---
title: .NET Core handling Client-Side Routes
pubDate: "2017-10-30T18:44:00.001Z"
description: ""
legacyPath: /2017/10/letting-net-core-handle-client-routes.html
canonicalPath: /blog/2017/10/letting-net-core-handle-client-routes
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdivHE8XioJXmALRcWPcV3ImYUdddicf4Msnv31cuiyB932q-cNALvsEqAnVtw00XRvf23TOvpKPbccJ1srMcOIRy_2Wp3HC8wquTuj4ScNAQ2FpI8hRHboMEQsfHbNLcFznUH4BboZJY/s320/f73.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdivHE8XioJXmALRcWPcV3ImYUdddicf4Msnv31cuiyB932q-cNALvsEqAnVtw00XRvf23TOvpKPbccJ1srMcOIRy_2Wp3HC8wquTuj4ScNAQ2FpI8hRHboMEQsfHbNLcFznUH4BboZJY/s1600/f73.png)

  
  
If you are using any client-side framework like [Vue](https://vuejs.org/), [Angular](https://angular.io/), [React](https://facebook.github.io/react/) and so, you are probably doing client-side routing which is letting the browser handles the routes E.g.  myapp.com/about, myapp.com/account/user etc...  
  
By default, the server only recognizes the root (/) and if you try to refresh the page (f5) or enter directly the URL myapp.com/about  you will get **404 ERROR** because you are sending an HTTP request to the server in the route /about,  but your server doesn't handle routes different from (/).  
  
To solve this problem I found a really [nice approach](http://nice%20approuch/) which is a simple fallback handler in the `**Startup.cs** of our .NET Core app:`   
`   `  

public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
{
        ....Your configuration
      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");
      });
      //handle client side routes
      app.Run(async (context) =>
      {
        context.Response.ContentType = "text/html";
        await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
      });
    }
 }

`   `The code above will return the right route to the Browers avoiding the 404 error if the path exists.  
  
  
Do you have any question or a better approach? share with us in the comments.

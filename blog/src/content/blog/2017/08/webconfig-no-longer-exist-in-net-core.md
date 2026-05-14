---
title: Web.config no longer exists in .NET Core
pubDate: "2017-08-01T19:35:00.004Z"
description: ""
legacyPath: /2017/08/webconfig-no-longer-exist-in-net-core.html
canonicalPath: /blog/2017/08/webconfig-no-longer-exist-in-net-core
---

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOgFmypacGE2V1i84JnUyJJsRh_sgYvgERwLut6Q1OraO0FM9CnuPHOv5GtMHcukCfXIUVsNJIqjNa4BIVA_Vjl9XmMnAzx5AIzi7DXVYRstBtaC-MaQPW7Jiqwrofjuzn1cUtfByCVT0/s1600/63231199.jpg)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8afE_lPefE5favPCmFp6p6aIvAEQFXMmiih2WsaWs8X8Awf548p4t1Y5ibcAuGqATQuaO3lshyjRuX3x_mllc56fEuh59gCvF-s5wAKSOMhUn5agzd-1Pk7Wte45P1YtQWO-2lWYsQRw/s320/63231199.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8afE_lPefE5favPCmFp6p6aIvAEQFXMmiih2WsaWs8X8Awf548p4t1Y5ibcAuGqATQuaO3lshyjRuX3x_mllc56fEuh59gCvF-s5wAKSOMhUn5agzd-1Pk7Wte45P1YtQWO-2lWYsQRw/s1600/63231199.jpg)

  
  
I thought to write a post about my journey making projects with .NET Core but that will be a long post and maybe nobody will read it; instead, I will make a series of posts with some topics I found interesting to talk about.  
  

Many of us come from ASP.NET 4 and old versions, we used to work with **Web.config** in our web projects, a file to place our settings in XML format, but it no longer exists in .NET Core (or at least in our Solution Explorer).  
  
In .NET  Core we use **appsettings.json** to place our settings in JSON format. Let's see how this works by getting our hands dirty:

  
  
**1)** Create a .NET Core Web Application project:  

![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1nNUGyukdexBbkSm4dqhxIEtGoxPSH8adVXnQF0T_oAwMYrlVn5-fmCUGf2avB8gZws7LxLNiFg2ChcEqSmRj2MwOdhkolnquwIop3Z5Vsx362dQOnpguZrC1yWKhQ5a9z_aA18MpeJs/s1600/1.PNG)

  
You will see a bunch of files generated from the template in the Solution Explorer. appsettings.json is meant to replace settings previously located in Web.config . To catch these configurations in the project, the **Startup.cs** file has the following lines:  
  
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyp0s6g5QOlvb2hdP1kpAdDjYtIkONWFL-9R05QPXWA1O17wpGq2lnUYG65vaeYDKzdUB-6sW0CFV9fN3Fd20r6m0VYQqvFORG9U_LP-H-F1DP3FnDZrjXPduMmK6rMKw8juiQ7VYBmkk/s1600/2.PNG)  
  
As you can see the appsettings.json file is added to the **ConfigurationBuilder**. Also, pay attention to the $"appsettings.{env.EnvironmentName}.json" line, where it checks the environment, i will talk about that in a few minutes.  
  
**2)** To add application settings to our application, open appsettings.json and add the following lines before the **"Logging"** part already there:  
  
"AppSettings": {  
    "Spoiler": "If you watch Game Of Thrones you are awesome"  
},  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYSLxC4GUhkhA0ncTanMYGGa30fn7ov9XLUXwgekZzawghn5XReaOb9xi3hVW3ScFkoc8WiqOajSFM4IB4wIpFi8k105as9uM5vc_91mSt5gl3hdhSxe3Ie03g4kdxxzaS4ZdcLWM4j9M/s1600/3.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYSLxC4GUhkhA0ncTanMYGGa30fn7ov9XLUXwgekZzawghn5XReaOb9xi3hVW3ScFkoc8WiqOajSFM4IB4wIpFi8k105as9uM5vc_91mSt5gl3hdhSxe3Ie03g4kdxxzaS4ZdcLWM4j9M/s1600/3.PNG)  
  
For the record, both AppSettings and Spoiler could have been named anything we’d like, this is just an example.  
  
**3)** .NET Core uses an options pattern to resolve settings from appsettings.json. To read the Spoiler setting add the following line to the **ConfigureServices** method in Startup.cs:  
  
var appSettings = Configuration.GetSection("AppSettings");  
  
**4)** Another point to keep in mind .Net Core is based on dependency injection, you will be injecting various options in your controllers. To register AppSettings in the container, create a new C# class to represent the settings:  
  
public class AppSettings  
{     
   public string Hello { get; set; }  
}  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8coGMH_3XGnzOEu0Jej93xtoni_VzcO1R2L1VqTpzBNDe3eoPtWKbeqdMWpe5tCLKvcmgo5spEAxNI7T97bfdFP6wmCP7OMjwhz1VNXew3YfnEW8fZHtwjxz3TvUnQjqN5TTwrJ9a9_4/s1600/4.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8coGMH_3XGnzOEu0Jej93xtoni_VzcO1R2L1VqTpzBNDe3eoPtWKbeqdMWpe5tCLKvcmgo5spEAxNI7T97bfdFP6wmCP7OMjwhz1VNXew3YfnEW8fZHtwjxz3TvUnQjqN5TTwrJ9a9_4/s1600/4.PNG)  
  
**5)** Now register the service in the Startup.cs file just after the call to GetSection (**step 3**):  
  
services.Configure<AppSettings>(appSettings);  
  
**6)** Now it's time to inject it into our controller. Add a **constructor to the HomeController** looking like this:  
  
private readonly AppSettings \_appSettings;  
public HomeController(IOptions<AppSettings> appSettings)  
{  
   \_appSettings = appSettings.Value;  
}  
  
**7)** To use the Spoiler option from our settings, we’ll send the value in the Index method:  
  
public IActionResult Index()  
{  
    ViewBag.Spoiler = \_appSettings.Spoiler;  
    return View();  
}  
  
**8)** Finally in our Index.cshml:  
  
<h1> This is very important: @ViewBag.Spoiler</h1>  
  
Press F5 And Voila!  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtejKFGIgSOsjnW7uSDNrcl_l2kyqQ9n8FarJ6dkFE3J-uLRLKak5EfDZ1devE-zAc__aJvIwdXUqZbYMJFM9iN4V3LLvzY6xXEWWGDbo4A1pWdlCczVB6Ssuq7QhWwRR3wkaed7ciiT4/s640/10.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtejKFGIgSOsjnW7uSDNrcl_l2kyqQ9n8FarJ6dkFE3J-uLRLKak5EfDZ1devE-zAc__aJvIwdXUqZbYMJFM9iN4V3LLvzY6xXEWWGDbo4A1pWdlCczVB6Ssuq7QhWwRR3wkaed7ciiT4/s1600/10.PNG)  
  
**AppSetings enviroments**  
  
As you can remember in our ASP.NET 4 project, We had different web.config files depending on the deploying environment we wanted to use:  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU7bN-QhcFb-bOqvW3QLCjb9XVRNZIiK7VGQkHUj_9UUrDcRGAveC1tP9VEaibLznu2YaZ4dNjzoAkh-oftq-DVaFeP2gcbFWODG2d7kNz8lvD6gO6egeEUM4pBKGUd1gw-nSB9BtE2oA/s1600/11.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU7bN-QhcFb-bOqvW3QLCjb9XVRNZIiK7VGQkHUj_9UUrDcRGAveC1tP9VEaibLznu2YaZ4dNjzoAkh-oftq-DVaFeP2gcbFWODG2d7kNz8lvD6gO6egeEUM4pBKGUd1gw-nSB9BtE2oA/s1600/11.PNG)  
  
We used to have settings for the development and production environment in most cases. Now in .Net Core we have something similar. Let's create another set of settings for the production environment, create a new JSON file named **appsettings.Production.json** .See how the new file is automatically nested beneath appsettings.json  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_N8h8i0TG-1a79pZIArVs-IThUJ_0JpR4I-J-yx8monU9K2CxiCTAcXZiJr3SjByZz2EspEEX71N0Wbx2LzP2moAoInCrMinhDnK4WcC9V6aLLRCwr6deTnh1xqdj2ujRfrbJBfIdHwI/s400/13.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_N8h8i0TG-1a79pZIArVs-IThUJ_0JpR4I-J-yx8monU9K2CxiCTAcXZiJr3SjByZz2EspEEX71N0Wbx2LzP2moAoInCrMinhDnK4WcC9V6aLLRCwr6deTnh1xqdj2ujRfrbJBfIdHwI/s1600/13.PNG)  
  
To override the value of the Spoiler setting, add the following to appsettings.Production.json:  
  
{  
   "AppSettings": {  
       "Spoiler": "If you watch Game Of Thrones you are awesome and also you are in Production"  
   }  
}  
  
Open **launchSettings.json**  file and change "ASPNETCORE\_ENVIRONMENT": "Development" for "ASPNETCORE\_ENVIRONMENT": "Production"  
  
Press F5  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuK7xQzz5_nBZHCYi1CRJ6sLNYq2uBq7WDwA-c61zzyJmCl-rdusRU_8bHiO0md__RPgQjVo8ngGE8aR47V7QUi2XAJIzVGqGQLJSNg5pdlSKxUXnQPCi3DB5jDyBH-UiVUOlITHQvMMk/s640/16.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuK7xQzz5_nBZHCYi1CRJ6sLNYq2uBq7WDwA-c61zzyJmCl-rdusRU_8bHiO0md__RPgQjVo8ngGE8aR47V7QUi2XAJIzVGqGQLJSNg5pdlSKxUXnQPCi3DB5jDyBH-UiVUOlITHQvMMk/s1600/16.PNG)  
  
It knows the environment thanks to this line in the Startup.cs :  
  
appsettings.{env.EnvironmentName}.json  
  
  
If you have any question leave a comment in the section below, I'll get to it as soon as possible.

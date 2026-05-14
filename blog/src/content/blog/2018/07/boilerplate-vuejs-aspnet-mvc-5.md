---
title: "Boilerplate: Vue.js + ASP.NET MVC 5"
pubDate: "2018-07-19T19:28:00.002Z"
description: ""
legacyPath: /2018/07/boilerplate-vuejs-aspnet-mvc-5.html
canonicalPath: /blog/2018/07/boilerplate-vuejs-aspnet-mvc-5
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2PhCSFGFjEAPIR02k4o3NlgHJfXJDTL6Q4ovJ9R0xcyNeBPjxx7Tq6OWeCkY3YcI5N9tAeiVANGW-OmOK0gBEYrWVEftwMVyZWnvyq4euIVVCNevD40rwGZP-SZCqpRxCJay3i6nu3Nc/s320/vuejs+%252B+netmvc+5.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2PhCSFGFjEAPIR02k4o3NlgHJfXJDTL6Q4ovJ9R0xcyNeBPjxx7Tq6OWeCkY3YcI5N9tAeiVANGW-OmOK0gBEYrWVEftwMVyZWnvyq4euIVVCNevD40rwGZP-SZCqpRxCJay3i6nu3Nc/s1600/vuejs+%252B+netmvc+5.png)

  
  
If you need to start as soon as possible with a project using **Vue.js 2.0** and **ASP.NET MVC 5**, here I bring you a light Boilerplate/Template with the minimum setup 👍:  
  
**[https://github.com/mejiamanuel57/Boilerplate-VueJS2-ASPNETMVC5](https://github.com/mejiamanuel57/Boilerplate-VueJS2-ASPNETMVC5)**  
  
**Let's make this run:**  
  
1) First, clone the repository  
2) cd VueJS2-MVC5  
3) npm install  
4) npm run dev ...And the Vue.js is running with hot reloading on port **8080**  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSMFtQF16d5R45bssNwzq3WjK1JMHx8UgyL8gQZ4HBY7HbFe9_pNDh9gpI3Damm79aolinsLp8glUvqP3Qs27x3h9iQc_mAedK6uh3VbbaXBPEOCxuatD1BWuJnK60RlQJnJLaa3ZrDwA/s1600/vuejs.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSMFtQF16d5R45bssNwzq3WjK1JMHx8UgyL8gQZ4HBY7HbFe9_pNDh9gpI3Damm79aolinsLp8glUvqP3Qs27x3h9iQc_mAedK6uh3VbbaXBPEOCxuatD1BWuJnK60RlQJnJLaa3ZrDwA/s1600/vuejs.PNG)  
**Now let's go to the server-side:**  
  
1) npm run build to build the web project "for production use"  
2) Open the solution in Visual Studio  
3) Make sure to run the web project on [http://localhost:54490](http://localhost:54490/)  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_kf2LOpn2c5EAc3ISVpOR6XFg5wKK3WoF-kEZSAOSdgd3LqRaPI9H1NF2O6H1kZxJUW0mDjfMS7iJJAypCkVa6Br-ZpVLfGZNOlU4-EEyf1EZeYJK8cZaN9CfMwDfneacMpSCVQcJ-TU/s1600/visualStudioWeb.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_kf2LOpn2c5EAc3ISVpOR6XFg5wKK3WoF-kEZSAOSdgd3LqRaPI9H1NF2O6H1kZxJUW0mDjfMS7iJJAypCkVa6Br-ZpVLfGZNOlU4-EEyf1EZeYJK8cZaN9CfMwDfneacMpSCVQcJ-TU/s1600/visualStudioWeb.PNG)  
4) Press **F5** and another window will open showing the built project on port **54490**  
  
**Test the connexion between Vue.js and ASP.NET MVC:**  
  
1) Go to the windows  running the Vue.js project on **http://localhost:8080/**  
2) Click on the button **"Go and test the backend"**  
3) If the result says: "**You have reached the backend**", everything is working  
  
That's all 🚀  
  
  
If you want to know how this project is working, keep reading, there are certain things to take into consideration:  
  
**config/index.js**  
  
Here we specified the Vue.js build path. Note the Index.cshtml is on the same route of the ASP.NET MVC default startup project.  
  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAt60yayPv9gW5jwNzfcbL4hXYDQHDAUq5sM55JkHUEzHgwdi-xRICCoH5MjATi9741eewO6t19oIpgVOVk3F8qayQP43KNbVM3rKsu_kjs_cmKgedR09KFFTWe0kZfrzU_Qumk1ETHp4/s1600/buildVuejs.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAt60yayPv9gW5jwNzfcbL4hXYDQHDAUq5sM55JkHUEzHgwdi-xRICCoH5MjATi9741eewO6t19oIpgVOVk3F8qayQP43KNbVM3rKsu_kjs_cmKgedR09KFFTWe0kZfrzU_Qumk1ETHp4/s1600/buildVuejs.PNG)  
  
  
  
**App\_Start/RouteConfig.cs**  
  
Rember, we will have the client-side routes handled by **v****uejs/vue-router** and the server-side routes handled by **ASP.NET MVC**.   
On RouteConfig.cs set the constraints to identify the server-side routes on our case, every URL which starts with **"api"** :  
  
  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwOXTqL-1jQm0C_AD2tYZV5hDI1hUoZW2b06BjbQJWsueVQo756M7cpwDQgooPHC-LYpu3dXXA1Eia3g9SpdTyaZRBd2hNmJ27Hbnargw7aE8kNcluWNLOzep3yA9g7NW0zzp-TOH9aLU/s1600/server-side+routes.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwOXTqL-1jQm0C_AD2tYZV5hDI1hUoZW2b06BjbQJWsueVQo756M7cpwDQgooPHC-LYpu3dXXA1Eia3g9SpdTyaZRBd2hNmJ27Hbnargw7aE8kNcluWNLOzep3yA9g7NW0zzp-TOH9aLU/s1600/server-side+routes.PNG)

  
  
**Web.config**  
  
Since the server-side will be receiving http requests from different ports in the development environment; Vue.js on **8080** and ASP.NET **54490,** we need to enable **[cross-origin HTTP request](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) . \***On our example, it's enabled for any domain, be aware of the security gap\*.  
  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDrbdVp4OAv0Yxhs8Y1pFJ0j88whzXCDcZIKsPCxvsMmzXTfHJ83xyaJmdCkdZWXZQ4n1Qq_cX6CqUtVWMFrKYjG14YA6bVso5hNA-HflHteAv9WrpyDh0ZDRtvN8EgdE24LXuOYnD9sE/s1600/web-config.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDrbdVp4OAv0Yxhs8Y1pFJ0j88whzXCDcZIKsPCxvsMmzXTfHJ83xyaJmdCkdZWXZQ4n1Qq_cX6CqUtVWMFrKYjG14YA6bVso5hNA-HflHteAv9WrpyDh0ZDRtvN8EgdE24LXuOYnD9sE/s1600/web-config.PNG)

  
If you have any question leave a comment or send me an email. I will make another boilerplate/template for **Vue.js + ASP.NET** **Core**, stay tuned.

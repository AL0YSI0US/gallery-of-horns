# Gallery of Horns

> *A note on cloning and forking* : Don't forget to say so in your REAMDME 😉

<table align="center"><tr><td>
<pre>
                   " ⏰  "
--------------------------------------------<br>

````javascript
Estimated TOTAL time needed to complete: 13 hours

Actual TOTAL time needed to complete: 


The TOTAL difference: 
````

</pre><p></p>
</td></tr></table>


**Feature 1: Display images**

> "As a user, I want to view the images on the page so that I can browse the photo collection."

+ Given that a user opens the application in the browser, when the user navigates to the home page  the photo gallery should display all of the images in the gallery.

```javascript
Estimate of time needed to complete: 60 minutes                    
                                                       
Start time: 5:00                                        
                                                        
Finish time: 5:57                                     
                                                          
Actual time needed to complete: 57 minutes               
```

**Feature 2: Allow users to vote for their favorite beast**

> "As a user, I want to be able to interact with the site and pick my favorite beast."

+ Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

```javascript
Estimate of time needed to complete: 180 minutes                   

Start time: 6:00                                       
                                                    
Finish time: 830                                     
                                                      
Actual time needed to complete: 90
```

**Feature 3: Bootstrap**

> "As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes."

+ Given that a user opens the application in the browser when the images are displayed on the screen, each image should be rendered in a visually pleasing way. { displayed in columns, as screen width allows }

```javascript
Estimate of time needed to complete: 180 minutes                 

Start time: 5:00                               
                                                
Finish time: 8:00                          
                                               
Actual time needed to complete: 120 minutes    
```

✨**Stretch Goal: Add Interaction**

> "As a user, I want to be able to interact with each item on the page."

+ When the user clicks on elements such as the header, footer or title of page, make something change using state.
  + You can update the words, change the styles or add something new. Be creative.

```javascript
Estimate of time needed to complete: 60 minutes                       

Start time:

Finish time: 

Actual time needed to complete: 
```

**Feature 1: Display a Modal**

> "As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image."

+ Given that a user wants to view the details of the image, when the user clicks on an individual image the image should render larger on the screen with the description displayed.

```javascript
Estimate of time needed to complete: 180 minutes                       

Start time: 5:00

Finish time: 6:00

Actual time needed to complete: 60 minutes
```

✨**Stretch Goal: Fuzzy search**

> As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

+ Given that a user wants to view specific images, when the user enters a character into the search field only the images matching the current set of characters should be displayed on the screen.

```javascript
Estimate of time needed to complete: 60 minutes                         

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

**Feature 1. Filter by Numbers of Horns**

> "As a user, I want to be able to view the beasts by the number of horns"

+ Given that a user is presented with filtering options, when the user clicks on one option the images should be filtered accordingly.

```javascript
Estimate of time needed to complete: 60 minutes                       
                                                       
Start time: _____                                                
                                                             
Finish time: _____                                           
                                                               
Actual time needed to complete: _____ 
```

## 🌐 R E S O U R C E S

* **Code challenge** [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges) 🛠️
* **.gitignore**
* React [Documentation](https://reactjs.org/docs/getting-started.html)

+ { `React - Button` } - [react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/components/buttons/)
+ { `React CarDeck` } - [react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/components/cards/)
+ { `React - Modal` } - [react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/components/modal/#modals)
+ { `dropdowns` } - [react-bootstrap.netlify.app](https://react-bootstrap.netlify.app/components/dropdowns/#dropdowns)
+ { `.find()` } - [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
+ [adding-fonts-to-create-react-app](https://dev.to/annequinkenstein/adding-fonts-to-create-react-app-3ed7) - { `Blog by : Anne Quinkenstein ` }
+ { `Rajdhani` } - [google fonts](https://fonts.google.com/specimen/Rajdhani?preview.text_type=custom)
+ { `!important` } - [CSS The !important Rule](https://www.w3schools.com/css/css_important.asp)

## 🛠️ C O O L - T O O L S

+ [react-bootstrap](https://react-bootstrap.github.io/)
+ [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related) - { `TA Bryant shared this tool with the class.` }
+ [Shadow Box Tool](cssgenerator) - { `thanks TA Bryant for showing me this one!` }
+ [Visual Studio](https://code.visualstudio.com/) - { `VS Code` }

**To ensure I am installing both parts of Bootstrap, I use the following installation command:**

````javascript
npm install react-bootstrap bootstrap

                                     resource: TA hexx
````

## 👥 C O L L A B O R A T O R S

* Michelle helped me unbreak my page when It was failing to render. Turned out I only had one part of bootstrap installed. which leads me to my next thank you...
* Hexx provided me with the `npm install react-bootstrap bootstrap` command line to ensure I'm getting all the goods when I set up a project.

## 🤔 R E F L E C T I O N S

* Creating templates for repetitive work makes my life simpler. I needed to render an image...a whole lot! I made a template so I did not miss any key pieces along the way, here's what that looked like:

````html
     <HornedBeast title="" image_url="" keyword="" description="" alt="" />
````

## ❤️ G R A T T I T U D E

+ **SHOUT OUT** to TA Bryant who helped me sort out my Gallery of horns files. He also showed me how to use a shadowbox tool called: [cssgenerator](https://cssgenerator.org/box-shadow-css-generator.html)
+ **SHOUT OUT** to Tom who showed me how to save code snippets while I traverse the web
+ **SHOUT OUT** to Madeline who told me to look into the CSS `!important` rule: *it will override ALL previous styling rules for that specific property on that element!*
  + The only way to override an `!important` rule is to include another `!important` rule on a declaration with the same (or higher) specificity in the source code.

---

<p align="center">
<img src="https://github.com/AL0YSI0US/AL0YSI0US/blob/main/img/linkedin.png?raw=true" height="auto" width="auto">
</p>

#### I happily support others in the curation of thier respective networks, you can connect with me via Linkedin by clicking [here](https://www.linkedin.com/in/a-todd-charliemike/).

---

This work by [AL0YSI0US](https://github.com/AL0YSI0US/) is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). [![Creative Commons License](https://camo.githubusercontent.com/72af7c8e70a45c471163e803748d0338b3b2b52f6b040804e549e4163de72a58/68747470733a2f2f692e6372656174697665636f6d6d6f6e732e6f72672f6c2f62792f342e302f38387833312e706e67)](http://creativecommons.org/licenses/by/4.0/)

This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAL0YSI0US%2Fgallery-of-horns&count_bg=%23FF0090&title_bg=%23555555&icon=counter-strike.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

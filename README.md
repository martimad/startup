# startup
# Project Overview

## Introduction
For my startup, I am developing a website dedicated to my nail services. As I currently work in a salon and operate a small business, enhancing my online presence is essential for attracting new clients and engaging with existing ones.

## Purpose
The website will serve a dual purpose: 
1. To educate potential clients about the services I offer.
2. To encourage clients to make appointments easily.

To facilitate this, I will integrate my existing booking service into the site, allowing clients to view real-time availability.
Clients can also recieve education on potential services the site. Many clients may be unfamiliar with the services I provide or their specifics. To address this, the website will feature detailed explanations and educational content about each service, helping clients understand what they need to book.

## Mockups
![First image](https://github.com/martimad/startuphub.com/martimad/startup/blob/main/startup%20specs-5.jpg)
![Second image](https://github.com/martimad/startuphub.com/martimad/startup/blob/main/startup%20specs-6.jpg)
![Third image](https://github.com/martimad/startuphub.com/martimad/startup/blob/main/startup%20specs-7.jpg)
![Fourth image](https://github.com/martimad/startuphub.com/martimad/startup/blob/main/startup%20specs-8.jpg)
![Login image](https://github.com/martimad/startuphub.com/martimad/startup/blob/main/startup%20specs-9.jpg)



## Technology Stack

### HTML
HTML will be utilized to create the structure of the website and organize content effectively. For instance, the portfolio tab will utilize a grid layout to display images, while the services tab will likely use a list format to outline all available services. The homepage will feature a prominent banner and headings.

### CSS
CSS will be employed for styling purposes. The homepage will feature a rotating banner showcasing various elements. Different fonts will be applied to titles and text to personalize the look, and colors will highlight selected tabs, improving user navigation.

### JavaScript
JavaScript will add functionality to buttons and links throughout the site. This includes numerous "Book Now" links and integrated systems, such as Instagram feeds. JavaScript will enable interactivity, allowing users to engage with the content dynamically.

### React
React will perform similar functions to JavaScript, enhancing user experience by linking my booking site to the webpage, enabling smooth scrolling, and routing clients to external pages and links.

### Web Service
The website will incorporate an integrated booking system, which will display my calendar to clients on the front end. Additionally, my Instagram account will be linked, allowing clients to view my portfolio without requiring multiple updates.

### Authentication
A user authentication system will allow clients to log in and access their appointment history, including the number of appointments they have had, their next appointment date, and a referral link.

### Websocket
A WebSocket connection will be utilized to display real-time information about scheduled appointments and gaps in my calendar, ensuring clients have the most accurate information available.

## Conclusion
This project aims to create a comprehensive online platform for my nail services, enhancing client education and streamlining the booking process while leveraging modern web technologies.

# Html Startup 
## Notes
One of the biggest tools I discovered was the search and replace button can swap out segments of code very fast which was super helpful for updating the bootstrap code 

I learned that instagram has a pre-made widget that you can embed into your html to display the images already posted on the socials 

I learned more of what a caddy file is and how to manipulate it 

I learned that you need to redeploy AND commit and push every time you make significant changes - something that I messed up on many times 

I realized just how ugly things are witout css.. yikes haha.

# CSS startup 
## notes 

One of the biggest things I learned - GRIDS. Oh man doing flex grids and getting cards to sit nicely in a grid pattern took so much time. This is what ended up being successful for evenly sized, evenly spaces rows:
```
.cards{
    display: grid;
    grid-template-columns: 30% 30% 30%;
}

.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 20px;
    margin: 20px;
    background-color: white;
}
```

Figuring out how to make the header tabs evenly spaced, have a logo image and a way to click on a login icon in the top right corner ended up being way harder than I thought. I figured since like every website ever uses those it wouldnt be to hard, but I was wrong. Its still not perfect, but its not horrible. 
I ended up needing a **flex, z-index of 999, inline display of all elements, and some very specific margins** to get this look

**I figured out by creating a "main" css sheet I could have elements and theme apply across multiple pages, to create a sort of 'brand' theme and have it all match**

getting the Login widget to center in the page and the items to have spacing to make it readble was a lot harder than I thought. I ended up needing to use **a lot of *div containters*** to be able to encompace all the elements and create lots of different boxes within boxes that I could adjust

I learned that plugins often dont allow you to edit their css - like on my portfolio page that had an instagram feed plugin- it did not want to let me adust it- so I didn't.



# React Startup 
### React Components 
Setting variables within react components is tricker than I thought. I discovered this is how to set a component 
```
//Within a react function
const [backColor, setColor] = React.useState("lightblue");

function changeColor() {
//rand color generator code
setColor(newColor);
}
```
This uses setColor to be able to change the "backColor" to newColor. The 'useState' is mostly used as an initial state

### React startup 

Importing react has to be done on EVERY jsx page, not just the main file 

#### Browser Router 
    Getting the browser router to work right was a mess. I learned that the brouser router needs to be the MAIN wrapping tag - it contains EVERYTHING from the app jsx. Therefore, every other index piece gets wrapped inside the browser router when the app dynamically adjusts the pages 
#### Converting html to javascript 
2 things created the biggest headaches for me 
Getting images to display properly, knowing if I needed to use a react component or I could just import it from the public file and then getting them properly styled. The second was how picky javascript is about all the syntax. Trying to change all the 'class' tags to 'className' or making sure that <img> tags had a closing / at the end of them (which my original html didnt require, but I had to retroactively input) 

#### Plugins 
On one page, I had instagram feeds embedded into my page so that it would display all my work that is posted on instagram. This is a plugin that I did not write, and while it worked in my initial html, it did not work in my javascript router. I had to visit tas multiple times, adjust all sorts of tags I knew nothing about and run it through chatgpt many times in order for it to run the way it was supposed to. 


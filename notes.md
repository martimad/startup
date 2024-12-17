I figured out more of what it means to merge files when commiting to github - I had done it before but now i actually understand!
I learned that in html media - youtube videos are acutally really hard to integrate into the page, but other things like images are really easy

**HTML Startup**
One of the biggest tools I discovered was the search and replace button can swap out segments of code very fast which was super helpful for updating the bootstrap code 

I learned that instagram has a pre-made widget that you can embed into your html to display the images already posted on the socials 

I learned more of what a caddy file is and how to manipulate it 

I learned that you need to redeploy AND commit and push every time you make significant changes - something that I messed up on many times 

I realized just how ugly things are witout css.. yikes haha.

**Midterm**
Midterm Questions
In the following code, what does the link element do?

In the following code,  what does a div tag do? Is a divider- keeps things separate

In the following code, what is the difference between the #title and .grid selector? The dot (.) selector targets elements by class, while the hash (#) selector targets elements by id

In the following code, what is the difference between padding and margin? Padding is inside, margin is outside

Given this HTML and this CSS how will the images be displayed using flex?- flex, one dimensional perfect spacing

What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?

What does the following code using map with an array output?
	The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

What does the following code output using getElementByID and addEventListener? The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. - allows for clickable items on specific elements 

What does the following line of Javascript do using a # selector? Selects items with that particular id 


Which of the following are true? (mark all that are true about the DOM)Question: Select all statements about the Document Object Model (DOM) that are true: all of these are true:
The DOM represents the structure of an HTML document as a tree of objects.
JavaScript can be used to dynamically update, add, or remove elements from the DOM.
The DOM is created by the browser when an HTML document is loaded.
Each element in the DOM has properties and methods that allow manipulation of its content and style.
document.querySelector() method  returns the first element that matches the specified CSS selector, not an array of all matching elements.If you want to get all matching elements, you would use document.querySelectorAll(), which returns a NodeList (a collection similar to an array)


By default, the HTML span element has a default CSS display property value of: inline. This means that it does not start on a new line and only takes up as much width as necessary, flowing inline with other elements.

How would you use CSS to change all the div elements to have a background color of red? .div{background-color : red;}


How would you display an image with a hyperlink in HTML? 
Using an “href” tag -> <a href=”link.com”> <img src=”image.jpg” alt=”description”></a>   href tells where the user will be directed when clicking on it 
Img tag displayed the image, src specifies the image path/url


In the CSS box model, what is the ordering of the box layers starting at the inside and working out? Content → Padding → Border → Margin.


Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? Id use a # selector to select by id only


What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? document.getElementById("byu").style.color = "green";

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

How do you declare the document type to be html?

What is valid javascript syntax for if, else, for, while, switch statements?
 switch (expression) { 
case value1: // code to execute if expression === value1 break; 
case value2: // code to execute if expression === value2 break;
 default: // code to execute if none of the cases match }

What is the correct syntax for creating a javascript object?
const person = { name: "Alice", age: 30, greet: function() { console.log("Hello, " + this.name); }
const car = new Object(); car.make = "Toyota"; car.model = "Corolla"; car.year = 2020;
function Animal(name, type) { this.name = name; this.type = type; } const dog = new Animal("Buddy", "Dog");

Is it possible to add new properties to javascript objects? Yes
const person = { name: "Alice", age: 30 }; person.job = "Engineer"; // { name: "Alice", age: 30, job: "Engineer" }


If you want to include JavaScript on an HTML page, which tag do you use? to include JavaScript in an HTML page, you use the <script> tag. 

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected? document.getElementById('animal').textContent = 'crow';

Which of the following correctly describes JSON? A JSON (JavaScript Object Notation) file is a text file that stores data in a structured, human-readable format. It uses a syntax that is easy to understand and is widely used for data interchange between applications, especially in web development. JSON is language-independent, but it is based on a subset of JavaScript.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

Which of the following console command creates a remote shell session?

Which of the following is true when the -la parameter is specified for the ls console command? When you run ls -la, the command lists all files and directories (including hidden ones) in the current directory in a detailed format

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS. yes
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?

 Port 80: Reserved for HTTP (Hypertext Transfer Protocol). It is used for transmitting unencrypted web traffic.
Port 443: Reserved for HTTPS (Hypertext Transfer Protocol Secure). It is used for transmitting encrypted web traffic, providing a secure connection over the internet.
Port 22: Reserved for SSH (Secure Shell). It is used for secure remote login and command execution over a network.

What will the following code using Promises output when executed?


# Final 

### HTTP Status Code Ranges
300 (Redirection): Indicates further action is needed to complete the request (e.g., redirects).
400 (Client Errors): The request is invalid due to a client-side issue (e.g., bad syntax, unauthorized).
500 (Server Errors): The server encountered an issue and cannot process the request.

### Cookie types 
Secure Cookie: Sent only over HTTPS to prevent interception.
HttpOnly Cookie: Inaccessible to JavaScript (prevents XSS attacks).
SameSite Cookie: Prevents cross-origin requests, mitigating CSRF attacks.

### Express Fetch Return 
If the server responds with res.json({ message: "Success" }):

''' const response = await fetch('/api/document');
const data = await response.json();
console.log(data);
'''
Output: { message: "Success" }

The fetch function is a client-side JavaScript API used to send HTTP requests (e.g., GET, POST, PUT) to a server. It doesn't handle WebSocket communication. 

### WebSocket Protocol Purpose
The WebSocket protocol provides full-duplex communication over a single TCP connection, enabling real-time, bidirectional data exchange between client and server.

### Acronyms : 
JSX: JavaScript XML
JS: JavaScript
AWS: Amazon Web Services
NPM: Node Package Manager
NVM: Node Version Manager

### React Hook Types
State Hook: useState – Manages local state.
Context Hook: useContext – Consumes context values.
Ref Hook: useRef – Accesses DOM elements or persists values.
Effect Hook: useEffect – Runs side effects.
Performance Hook: useMemo/useCallback – Optimizes rendering.

### package.json
The package.json file defines the project metadata, dependencies, scripts, and configurations for a Node.js project.

###  Node.js
Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side.

### PM2
PM2 is a process manager for Node.js applications, enabling automatic restarts, load balancing, and monitoring in production environments.

### Vite
Vite is a fast build tool for modern web projects that leverages ES modules and provides rapid development server performance.



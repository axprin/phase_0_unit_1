#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS:
   <br>The Elements tab. Clicking this tab shows a breakdown of the HTML (left) and CSS (right) in the dev tools window. Anything you change will appear in the browser in real time, so you can constantly update and edit on the go.
  * Javascript Debugging:<br>The Source panel is the best place to debug your javascript code. It allows for easy updating of not only content and styles but also javascript that can be edited through revision auditing and easily output as source code to update your website.
  * Performance Optimization:<br>The Network tab is the best place to optimize performance. It allows you to see aspect and file of your webpage, the load times, size and a timeline of how your page loads. This can allow you to see bottlenecks in the load time and tweak the order in which things load to improve speeds.

* What's the quick key for your OS to spawn the Dev Tools inspector?<br>Cmnd + option + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!):<br>#0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)<br>http://imgur.com/16cLb8T<br>http://imgur.com/N4wH4Zy

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.<br>That’s actually part of the image, not HTML.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.<br>After you navigate to website, open dev tools, make sure chacheing is turned off (or launch in-cognito window) and reload page. Click the network tab and filter by size. Find the largest image type file. Double click that line and the preview pane should open which will tell you the dimensions (500 x 210), File size (316KB), MIME type (image/png) and url (http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png)

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?<br>The lowest hanging fruit to optimize the website would be to reduce server response time, minify CSS, minify JS and minify HTML, this would eliminate 9.3KB
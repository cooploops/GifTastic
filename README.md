# GT - HW_GifTastic

## Live Link (Hosted on GitHub as a static site)
 - cooploops.github.io/GifTastic

## Description on how to use the app

Once you open the app you will see some buttons at the top, a search field, and a button below that says "Add Show". Type in a show or movie that you like in the search field and Hit "Enter" or click the "Add Show" button to create a button (sort of like a save point) up top. The buttons above allow you to grab/get gifs from Giphy based on the title of each button.

## Requirements

- Make an AJAX call to the giphy API
	-grab a still image
	-grab the rating
	-grab a max limit of 10 images per call

- dynamically generate buttons based on an array of strings

- Be able to take user input through a form and generate a button for it

- Display images when button is clicked for it
	- Images will animate or pause when clicked on


## Technologies Used
- Jquery for DOM Manipulation/Traversing
- AJAX for API GET requests
- Bootstrap for styling
- GoogleFonts for Fonts

## Code Explanation
### Overall Lesson Learned
- This HW helped me understand more about AJAX calls, how to structure them, how to take user input to dynamically change them, and also how to manipulate the data/response that comes back from the AJAX call

### Specific Lessons Learned
- One of the more "in-the-weeds" things I realized with AJAX calls is because they're done asynchronously when I created functions to target the buttons created after a AJAX call was .done I couldn't specifially target the button itself. So I needed to create document.on("click") functions that would look for elements that had a specific id or class I gave it during the .done promise
- After letting my girlfriend play around with it, it was surprising to see how styling affected her response to the site, (i.e. whether she would use it or not). Need to consider more simpler/minimal stylings for future sites so as not to overload users with background images, gifs, buttons, crazy colors, etc...
- I realized I could grab more images from giphy if I wanted with the API but only display 10 at a time(to meet the HW requirement) and then for future use create a "show more gifs" button to show more if the user wanted


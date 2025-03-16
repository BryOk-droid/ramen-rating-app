# Ramen Rating App
# Author
Brian Okoth

Email: brianokoth534@gmail.com

Contact: +254715462900
## Description
The **Ramen Rating App** is a web-based application designed to allow users to **view, rate, and add ramen dishes**. Users can explore a menu of different ramen dishes, see details like the **name, restaurant, rating, and comments**, and even contribute by adding their own ramen dishes.

This application is **fully interactive**, meaning all changes (such as selecting a ramen dish or adding a new one) are reflected instantly without requiring a page refresh. The rating system allows users to rate ramen dishes on a scale of **1 to 10**.
## Features
✔ Display a list of ramen dishes with images.  
✔ Click on a ramen image to view detailed information.  
✔ Add a new ramen dish with **name, restaurant, image URL, rating (1-10), and comment**.  
✔ Instantly update and display the newly added ramen dish.  
✔ Hover effects on ramen images for a better user experience.  
✔ User-friendly form validation for proper input handling.  

---

## Setup Instructions

1. To set up the project locally, run:
git clone https://github.com/your-username/ramen-rating-app.git
2. cd ramen-rating-app
3. Open the Project - Navigate to the folder containing the project files.
4. Open index.html in your browser or use a local server.
5. Start a Live Server

## BDD (Behavior Driven Development)
#### Viewing Ramen Details

- When a user clicks on a ramen image in the menu, the application updates the main display section.
- The user will see the ramen’s name and restaurant below the selected image.
- This change happens dynamically without refreshing the page.
#### Adding a New Ramen

- The user can fill in the ramen name, restaurant, image URL, rating (1-10), and comment in the provided form.
- After clicking the "Add Ramen" button, the app validates the input and ensures the rating is within the range of 1 to 10.
- Once validated, the new ramen dish is added to the menu, and the newly added ramen's details are displayed immediately.
#### Rating System

- The user is required to enter a rating between 1 and 10 when adding a new ramen dish.
- If the user enters a value outside this range, an alert message will prompt them to input a valid number.
- The correct rating will then be displayed dynamically under the ramen details.

## Technologies Used
1. HTML
2. CSS
3. JavaScript

## License
Copyright (c) 2025 BryOk-droid

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
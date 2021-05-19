# Inventory Management System.

## Introduction

This project represents my solution to the coding assignment to build a subset of an inventory management system. The project has 2 main features:

-  A product viewer to view all the stats in the sample data;
-  A Quantity updater to update the quantity of a product in any of its warehouse locations.

### Tech stack

React and Material UI for the frontend, Node with Express for the backend, and Postgres for the database. The frontend is hosted on Netlify and the backend on Heroku.

## Getting started

### Folder Structure

The project is divided into 2 folders: the client and server folders.

Each folder is completely independent of the other and should be viewed as 2 completely separate projects.

### Setup

-  After cloning the project, cd into the server and client folders separately and install all dependencies using `yarn install` or `npm install`.
-  Some environment variables were used in the project and the format can be found in the `.env.example` files in both folders.
-  Start the client server using `yarn start` or `npm start` for the client.
-  For the server folder, a couple more steps need to be taken to get it working on your machine.
-  Create a Postgres database with the name matching that of `DB_NAME` in your `.env` file.
-  Run the migrations using `yarn migrate` or `npm run migrate`.
-  Run the seeders afterwards using `yarn seed` or `npm run seed`.
-  Start the Node server using `yarn dev` or `npm run dev`.

## Notes on Design Choices and Asuumptions.

### Database

Based on my limited understanding of what each of the stat in the sample data meant, I was able to create 6 tables to save the data. Product, Vendor, Location, Packing Information, Tags, and Notes tables.

#### Notes

I chose to separate the Notes into its own table because several notes might be written for a single product over a period of time. And also because I assumed the "Notes for next order" stat is separate from the Notes stat.

#### Tags

As for the Tags table, I had 4 different fields named tagOne...tagFour. I did that because I noticed in the sample data that the tags were not just some randomly generated value. Each tag has a particular meaning (that i don't know) and have consistent data types. For example, every data in the tagFour field were all numbers. In others, they were all strings.

If I hadn't made that assumption, the Tag table would have had just two columns - the product core number and the tag associated with it. So, if a product has more than one tag, each tag would be stored in different rows in the table. And the Product table would have a one-to-many relationship with the Tag table.

### Quantity updater

I have the quantity updater CTA as a button on each product card on the home page. Including my solution, I initially thought of 3 different ways to implement it:

-  Have a page with a form where I can select a product, and then select the location I want to to update. I decided against this because in a case where there are numerous products, it won't be ideal for a user to start having to scroll through numerous products before reaching the desired product.
-  Second one is to have the feature on the product viewer page itself. I decided against that because having to click the product and route to another page is an extra step that could be removed. Also, making a (costly) network request for all the information of the clicked product is redundant since all the user wants is just to update the quantity.
-  Clicking a button on the product card (the one I went with). I felt this was the best (of my 3) option because no extra network request will be made and no much scrolling will be needed. In a situation where you want to update the quantity of a product that's not immediately displayed on your screen, you can use the search bar (I didn't implement it but it's a feature I'm assuming would surely be present in a full inventory management system) to find it and update the quantity immediately. Voila!

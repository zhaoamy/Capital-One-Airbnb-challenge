# Linkbnb
Linkbnb is a webapp to optimize your new listing! Just give it the
geocoordinates of your listing and this app will tell you the optimal price
to list your property along with the average income you can earn per week!

This project was made by Amy Zhao for the Capital One Summit challenge.

Link to website: https://zhaoamy.github.io/Capital-One-Airbnb-challenge/
---

#### Technologies used

**Data Visualization:** FusionCharts

**Data Extraction:** Python, Pandas, NumPy

**Front End:**: Bootstrap


#### Computations
The computations made for the data visualization were made keeping what the user would want to see in mind. The data I wanted to see is the popularity of each neighborhood and how the number of amenities would affect ratings.

In order to separate and clean the data I needed to graph, I used Pandas in Python, and NumPy in Jupyter Notebook.

To do the computations needed to find the optimal price and the average income per night, I again used Pandas to extract the data I needed to minimize the wait time on the website. How I approached finding the average price per week was by finding the coordinates that were within a range of .01 in longitude and latitude. I average all their prices to get the average income for the user's listing.

To do the computations for the optimal booking price, there were two pieces of data I took into consideration. I equated the number of bookings to the number of reviews that were submitted. Granted that will not be the exact number of bookings, it was the most relevant given our data.

After finding the number of reviews for each listing that was in the geocoordinate range mentioned before, I multiplied it with the number of reviews to get a "score". I then took the listing with the top 3 highest scores and averaged their prices to get the optimal price.

#### Overview of Tasks Completed
[x] Visualize the data: Graph some (any 3) interesting metrics, maps, or trends from the dataset.

[x] Price estimation: Given the geo-location (latitude and longitude) of a new property, estimate the weekly average income the homeowner can make with Airbnb.

[x] Bookings optimization: Given the geo-location (latitude and longitude) of a property, what is the ideal price per night that will yield maximum bookings or revenue?

[x] Animate: Add an animation to your visualization.

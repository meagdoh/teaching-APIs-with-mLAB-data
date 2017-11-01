# Introduction to APIs using internet speed data (via mLAB)

## Presented at
- API User Group Meetup, Washington, D.C.,  October 2017
- Tech Lady Hackathon, Washington, D.C., October 2017

### Learning Objectives
- Understand the basics of APIs (endpoint, GET request)
- Understanding data
- Develop a research question
- Develop User Stories
- Pulling in data into your app by setting up nested AJAX calls
- Testing your application using Chai, Mocha, Sinon

## What You'll Need
- Understanding of HTML/CSS and beginner Javascript and jQuery (AJAX calls)
- OPTIONAL: Bootstrap for front-end

## What is an API?
### An Application Programming Interface

The concept of an API is simple (in this lesson):
- Sometimes when you build an application, there's information you want to display in your app that someone else has. You could download the data, set up a server, and host the data yourself, but why do that when you can 'plug' into an existing data set, and ask for results to specific queries (questions)
- The 'plug' webpage _is_ the API. [ show clean example of an API | cartoon about API]
- [and what are endpoints?]

##### FAQs
- Are all APIs public? Nope. Some need a key, which you can access by requesting a key from the administrator.
- Can I build my own API? Yup
- We are talking about GET requests a lot. Can we _send_ data?

### Working with an API
- For this lesson, I am working with mLab API and internet speed data. If you are interested in another topic, head over to Programmable Web for the largest directories of APIs. [link] You can still follow along this walk-through.

#### Decide which data you want

##### Measurement Lab API
[what is measurementlab]

The mLAB API nicely answers three main questions:
1. ISPs
2. Speeds by location
3. and time

#### Do your research
Make sure you know what exists before you are building a new thing. With the mLab API,
there is a well-documented visualization [link] that I used for inspiration. mLAB's work is targeted at academics, policy makers, and other experts.

This made me think, what would a consumer facing application look like? Hm - yeah, people want to know a quick snapshot of local ISPs and compare recent performance before they make a purchasing decision.

[ snapshot of existing viz ]

#### Develop User Stories
Okay, now we know where we are going with this application, answer the question:
*What are my local ISPs and how does performance compare?*

Our user stories [define user stories]:
- A user should have the ability to enter a location.
- A user should see results of local ISPs.
- A user should compare recent (12 mos.) speeds among local ISPS.

#### Sketch front-end
- KISS (Keep it Simple)
- [screenshot of Sketch app]


#### Understand the data
- Background on ndt test --> brief overview of data pipeline. Show what data gets translated into the viz (ul, dl, etc)
- Read the Documentation - closely. If you don't find plain english on the main API page, that doens't mean it doesn't exist
- Ask the creators - I was fortunate to be working with the mLAB team and could ask directed questions about where to find things but don't hesitate. People want to help!
- After reading the documentation, I knew I needed the following endpoints:
  - http://data-api.measurementlab.net/locations/search _Location database_
  - http://data-api.measurementlab.net/locations/+ [string] + /clients _Local ISPs based on locations_
  - [URL for performance data] _12 mos. of performance data_

##### Test returned object
- For all three data points, [screenshot objects]

#### Start Coding
- `index.html`
  - Header
  - Short Description of app
  - Directions
  - Input box (for user's to submit location)
  - <div> to store results (local ISPs and performance)
- `script.js`
  - [jQuery - autocomplete]
  - [Nested AJAX call]

#### Unit testing
- Using Chai (unit testing framework) - Mocha (test runner) - Sinon (spies)

#### Deploy to gh pages // heroku

------
### Introduction
The average consumer is limited by choice when it comes to choosing an ISP. Using MLab's data viz API, this app provides a summary of local ISPs and internet speed performance over time.

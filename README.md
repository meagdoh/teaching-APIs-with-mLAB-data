# Working with My First API from scratch

### Introduction
The average consumer is limited by choice when it comes to choosing an ISP. Using MLab's data viz API, this app provides a summary of local ISPs and internet speed performance over time.

### Before a Single Line of Code
#### Understand the data
- Background on ndt test --> brief overview of data pipeline. Show what data gets translated into the viz (ul, dl, etc)
#### ID your question
- What are my local ISPs and how does performance compare?
#### ID your audience
- Consumers who want a quick snapshot of local ISPs and performance.
#### User Stories
- A user should have the ability to enter a location.
- A user should see results of local ISPs.
- A user should compare recent (12 mos.) speeds among local ISPS.
#### Sketch front-end
- KISS (Keep it Simple)

### Begin Coding
#### Bootstrap front-end
- U.S. Web Design Standards
#### Setup AJAX Call
- Explore the data structure **snippet of object from mLab Data Viz**
- Drill down to the return value you want. For locations, return drop down list. For available ISPs, loop through client_asn_name and limit to 3 (for readability)
#### Add test to AJAX Call
- Using Chai (unit testing framework) - Mocha (test runner) - Sinon (spies)

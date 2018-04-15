# UDACITY FEED READER TESTING PROJECT

This is a Udacity Front End Nanodegree project in which students are given a
web-based application that reads RSS feeds. The students then are expected to use
Jasmine to write a number of tests against this pre-existing application. These
tests will test the underlying business logic of the application as well as the
event handling and DOM manipulation.<br>

The feedreader.js file in this repo are my solution.

## feedreader.js
This is the Jasmine spec file that contains all of the tests that will be run
against the RSS Feeder application.<br>
<br>
All of the test suits are places within the $() function, since some of these
tests require DOM elements. It is to ensure they don't run until the DOM is ready.

## Test Suites
There are 4 test suits with a total of 7 specs

#### 1. RSS Feeds
Contains 4 specs that check if
- If RSS Feeds are defined
- If RSS Feeds have URLs
- If RSS Feeds have names

#### 2. The Menu
Contains 2 specs that check if
- If the menu is hidden by default
- If the menu appears visibly when clicked on it

#### 3. Initial Entries
Contains 1 spec that checks if
- Initial entries are properly loaded

#### 4. New Feed Selection
Contains 1 spec that checks if
- Upon selecting a new feed, new content is properly loaded

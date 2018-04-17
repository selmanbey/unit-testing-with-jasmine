/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests require DOM elements. It is
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - It is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
        /* This is our first test - It is to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("have URLs", function() {
           for (let feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           };
         });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it("have names", function() {
           for (let feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           };
         });

    });


    /* A new test suite named "The menu" */
    describe("The Menu", function() {

        /* This is a test that ensures the menu element is
         * hidden by default.
         */
         it("is hidden by default", function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. It checks if
          * the menu display when clicked and does it
          * hide when clicked again.
          */
          it("changes visibility", function() {
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* A new test suite named "Initial Entries" */
    describe("Initial Entries", function(){

      /* This function runs before every test in this suite to ensure
       * that asynchronous loadFeed() function is called and completed
       * its work
       */
      beforeEach(function(done) {
        loadFeed(0, done);
      })

      /* This a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       it("are loaded", function(done) {
         expect($(".feed").children().length).not.toBe(0);
         expect($(".feed > a > article").hasClass("entry")).toBe(true);
         done();
       });
     });

      /* A new test suite named "New Feed Selection" */
      describe("New Feed Selection", function() {

        /* This function runs before every test in this suite to ensure
         * that asynchronous loadFeed() function is called and completed
         * its work
         */
         var prevUrl;
         var newUrl;

         beforeEach(function(done) {
           loadFeed(0, function() {
             prevUrl = $(".feed").children()[0];
             loadFeed(1, function() {
               newUrl = $(".feed").children()[0];
               done();
             });
           });
         });

         /* This is a test that ensures when a new feed is loaded
          * by the loadFeed function that the content actually changes.
          */
         it("loads new content properly", function(done) {
             expect(prevUrl.getAttribute("href")).not.toBe(newUrl.getAttribute("href"));
             expect(prevUrl.innerText).not.toBe(newUrl.innerText);
             done();
            });
         });
}());

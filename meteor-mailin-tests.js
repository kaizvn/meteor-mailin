// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-mailin.js.
import { name as packageName } from "meteor/meteor-mailin";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-mailin - example', function (test) {
  test.equal(packageName, "meteor-mailin");
});

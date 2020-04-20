## Security Fundamentals

### Input Validation
Anything that is submitted by the user should be considered potentially dangerous. An attacker can intentionally input a destructive SQL query to ruin the database or steal information from it. Hence there is a need to validate the user's input - by explicitly defining its format such that it can do no harm to the application. 

#### Types of Validation
Validation can be classified into 2 kinds, blacklist and whitelist

##### Blacklist Validation
Blacklist validation is where the input is validated against a list of negative examples - an input which matches any example in the list is rejected. This is a very inefficient way of validating an input; there are always more ways to do something wrongly than to do something correctly. We can think of all the SQL queries which are potentially harmful, but the next day someone can always think of another one we have not thought of.

##### Whitelist Validation
Whitelist validation is where the input is validated using a list of positive examples - an input must match with one of the examples in the list for it to be validated. The best way to implement whitelist validation is through 
Regular Expressions, or Regex, when the logic of validating an input is complex, e.g. an email address.
Tried and tested Regex can be found in regexlib.com.

** 
It is not enough to build just validation logic for the client-side. After all, the browser is just an interface through which HTTP requests are sent and received. Someone can always craft a HTTP requests ( or even intercept and modify a request on its way to the server)

Having said that client side validation is still good practice as it prevents unnecessary error throwbacks from the server which will waste a user's time.


#### Attack Surface Reduction
In an application, an attack surface is all the code and functionalities which an untrusted user can potentially attack. Every feature we develop for our users is just another means for an attacker to tamper the application. Thus we shouldn't unnecessarily build features, and limit them to the ones the users really need, providing them with the option to opt-in on the restricted features should they really need them.

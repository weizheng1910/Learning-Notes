## Security Fundamentals

### Input Validation
Anything that is submitted by the user is potentially dangerous, hence there is a need to validate the user's input. Its format has to be explicitly defined so that there is no room for it to be malicious. An example of a malicious input will be an SQL injection attack, where an SQL query is inputted and gets piggybacked on top of the database query which follows the RESTful route.

#### Types of Validation
Validation can be classified into 2 kinds, blacklist and whitelist

##### Blacklist Validation
Blacklist validation is coming up with the different ways a input shouldn't be like. This is a very inefficient way of coming up with validation; there are always more ways to do something wrongly than to do something correctly. We can think of all the SQL queries which are potentially harmful, but the next day someone can always think of another one we have not thought of.


##### Whitelist Validation
Whitelist validation is coming up with a list of how correct input should be like. The best way to implement whitelist validation is through 
Regular Expressions, or Regex, when the logic of validating an input is complex, e.g. an email address.
Tried and tested Regex can be found in regexlib.com.

** 
It is not enough to build just validation logic for the client-side. After all, the browser is just an interface through which HTTP requests are sent and received. Someone can always craft a HTTP requests ( or even intercept and modify a request on its way to the server)

Having said that client side validation is still good practice as it prevents unnecessary error throwbacks from the server which will waste a user's time.


#### Attack Surface Reduction
In an application, an attack surface is all the code and functionalities which an untrusted user can potentially exploit. Every feature we develop for our users is just a new means for an attacker to harm the application. Thus we shouldn't unnecessarily build features, and limit them to the ones the users really need, providing them with the option to opt-in should they really need them.

## Security Fundamentals

### Input Validation
Anything that is submitted by the user is potentially dangerous, hence there is a need to validate the user's input. Its format has to be explicitly defined so that there is no room for it to be malicious. An example of a malicious input will be an SQL injection attack, where an SQL query is inputted and gets piggybacked on top of the database query which follows the RESTful route.

#### Types of Validation
Validation can be classified into 2 kinds, blacklist and whitelist

##### Blacklist Validation
Blacklist validation is coming up with the different ways a input shouldn't be like. This is a very inefficient way of coming up with validation; there are always more ways to do something wrongly than to do something correctly.

#### Whitelist Validation


#### Attack Surface Reduction
In an application, an attack surface is all the code and functionalities which an untrusted user can potentially exploit. Every feature we develop for our users is just a new means for an attacker to harm the application. Thus we shouldn't unnecessarily build features, and limit them to the ones the users really need, providing them with the option to opt-in should they really need them.

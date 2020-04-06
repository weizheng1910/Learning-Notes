### Microservices vs Monolithic Patterns and Docker
#### Microservices

A microservices architecture is where the app is separated into 'microservices', each microservice is an application on its own which can be deployed and developed independently from each other (as a result making it easier to modify and update) . HTTP REST is one of the many ways communication between microservices could be made, other ways include service discovery and messaging.

Benefits to Microservices include:
* Focus on building the functionality of each microservice rather than worrying on how the code should fit into the app. 
* More flexibility, as each microservice can be written with a different tech stack. 

Drawbacks include:
* Hard to debug, as a user action can go through many microservices and it can be hard to pinpoint where the action fails.

#### Monolithic

A monolithic pattern is a single-tiered application, where its multiple components are combined and deployed on one platform. 
An application developed monolithically is easier to:
* Build initially, as there is only one place to work on. 
* Scale Horizonally, by duplicating the application on multiple servers and using a load balancer to redistribute network traffic.</br>

But its drawback is 
* Hard to modify and maintain when the application gets too big,
* Long application start up time
* Relying on a single tech stack of a certain version

#### Docker
In recent years, there has been a paradigm shift towards microservices in software architecture. Docker facilitates the deployment and management of microservices. Docker is also mainly used to address the discrepancy between the development environment and the production environment. Because of different operating systems, libraries, and dependencies, a developer might run into issue when transferring his code to production. Containers resolve this issue by providing a common environment for development and production.

## Systems Design

### Protocols

A network protocol dictates how computers and servers communicate over a network.

#### IP
The fundamental layer of all network protocols is the Internet Protocol.
Messages over IP are transmitted in packets, which are small bits on information.
The packets contain:
* Headers, which states from and to whom the data is sent, identified by IP address
* Data itself

#### TCP
The Transmission Control Protocol was created to solve a problem where the multiple packets sent over IP gets lost and become disordered.
TCP ensures packets are transmitted in an orderly manner, with a built-in TCP header which states the order and quantity of packets.
As it is built on top of IP, this protocol is also known as TCP/IP.

#### HTTP 
Known as the HyperText Transfer Protocol, the HTTP is built on top TCP/IP. HTTP introdues the request-response pattern, which is the response cycle between a client and a server.

### Storage

#### Disk VS Memory
Disk storage is persistent - the data still persists after a restart. (Hard Disk)
Memory storage is transient - the data gets wiped away after a restart. (Memory)

#### Latency 
Simply the time taken to do something. In the context of a web application, it is commonly understood as the time taken for a request-response cycle between the client and the server.

#### Considering the trade off between Latency and Disk design
In system designs there are certain trade-offs which needs to be weighed - to avoid retrieving data from distant servers, we might choose to store things in memory, but storing things in memory might not be feasible as well. 

### Throughput 
* As a server is a finite machine, there is only so many user requests it can process per unit time.
* Knowing the maximum capacity of a server will allow us to know its breaking point, and together with other factors, e.g. the amount of network traffic, we will be able to make an informed decision regarding the system design.
* The act of measuring the maximum capacity of a server is called benchmarking.
If there are many servers in the system, the systems throughput is as much as its bottleneck, the server with the lowest processing capacity. Throughput can be increased through horizontal scaling - the buying of more hardware, or vertical scaling - the improvment of existing hardware.</br>
* Alternatively we could distribute incoming user requests evenly using a load-balancer.

#### Load Balancers and its algorithm
* A load balancer can distribute network traffic in mainly 3 ways:
- Round Robining
  - Cycling through the servers as it receives the requests, i.e. If there are 3 servers, first request goes to server 1, the second to server 2, and the third to server 3 and fourth back to server 1 again, and so on.
- Random choice
  - Assigning requests to the servers randomly.
- Fewest Connection
  - Assigning a request to the sever with the fewest connection.
  - Number of requests might not to be a good proxy of the server load, though there might be fewer user requests, each requests might demand greater computational power. 
  - Computational energy is also required to monitor the servers.
- Session aware load-balancing (Sticky sessions)
  -If the same user makes another request to the page, but its request has to be handled by the server which handled his previous request, or his session data will be lost.
  -Cookie is used to keep track of the server which has handled the user's request.
  -If a server crashes, then for the users whose requests are handled by the server, their data will be lost.
  -There are plenty of workarounds to this - instead of storing session data in the server, we can store it in the database or save it with the client.

#### Autoscaling
  - Server traffic varies with the time of the day or the period of the year. During peak periods, we might need 5 servers to handle the traffic, but during lull period, we might only need one, leaving 4 servers unused.
  - AWS offers autoscaling services, which adjusts the number of servers allocated to the application owner, according to server traffic. This allows the application owner to get the additional resources only when it is needed, thus optimising the usage of its servers and lowering operating cost.
  
### System Avaliablity
This is a measurement of how much uptime a system has. </br>
99.99% uptime might sound impressive, but it means 3.5 days of downtime in a year, which is bad for service providers like Netflix.</br> Most services aim for a SA of 99.999 which is a little over 5mins of downtime per year.</br>
To ensure a system which is highly availlable, single points of failure(POF) have to be eliminated.
POFs can be eliminated by introducing a backup server to the service, in case the original one breaks down, but this could be costly, and wasteful if the backup was seldom used.
Thus engineers has to decide if the breakdown of the service is tolerable, and if a purchase of a backup is warranted.

### Proxies
A client can send a request to a server via a proxy.
The proxy may sometimes hide the identity of the client from the server, as the IP address in the request may be the proxy's and not the client's. 
A proxy which takes over a request from a client is a forward proxy,
and one which takes over a request from a server is a reverse proxy.

Examples of forward proxies, VPN
Examples of reverse proxies, load balancers.

### Load Balancers
Distribute load across multiple servers.

### Caching 
We can define the caching policy via the Cache-Control HTTP header.
Indications:
| no-cache      | no-store      | 
| ------------- |:-------------:| 
|Always validate if response has been changed, using the Etag. Used cached response if resource has not changed| Always download full response, ignore validation.  | 

| private    | public      | 
| ------------- |:-------------:| 
|Can only be stored in the user's browser, meant for sensitve user-data | Can be cached by browser or intermdeiate cahces

| col 2 is      | centered      |  
| zebra stripes | are neat      |   
Cache-control: max-age

Intermediate caches, are caches like content delivery networks(CDN) which offers caching services for the web application's end users.  

Allows you to make a request for a new
















### Database scalability
#### Database partitioning 
##### Vertical partitioning
- Splitting up a table into smaller, relational ones.
  - A database table of people with the attributes: name, race, and marital status can be split into 3 tables.
    - The main table, will contain all 3 attributes, but 2 attributes: race and marital status, will be represented by an integer id. 
    - The other two tables will contains the mapping to the actual wordings.
  
##### Horizontal partitioning 
- Splitting the table horizontally 
  - A database table of soccer players, with attributes like their height and weight can be split into smaller tables according to their race, for example.
  - The partitioning can be visualised by cutting a database table horizontally.
  - Referring to the current example, if we wanted to query for soccer players above a certain height, we will have to make numerous queries, a query for each of the smaller tables, compared to only a single query we need to make if we have not partitioned the database.
  - Schema change will inevitably be more tedious compared to a single table.
  
#### Database replication 
Making replicas of your database to avoid single points of failure.
##### Single Primary Replication
Only allow both write and read requests on the primary database - the other databases can only process read requests.
The primary database updates the other databases after processing the write requests.
Drawbacks: 
Timelag before the other databases gets updated.
Write requests bottleneck.

##### Multiple Primary Replication
All databases acts as primary databases, where they are able to process both read and write requests.
Drawbacks:
When two databases registers a new user at the same time, there will be primary id conflict. Rules have to be established to manage these concurrent updates.





#### Relational Database
ACID

#### Non-Relational Database
BaSE






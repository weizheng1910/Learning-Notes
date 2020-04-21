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

### Database

#### Relational Database
ACID

#### Non-Relational Database
BaSE






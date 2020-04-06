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
Maximum capacity of a server, measured in bits per second.
If there are many servers in the system, the systems throughput is as much as its bottleneck, the server with the lowest processing capacity. Throughput can be increased through horizontal scaling - the buying of more hardware, or vertical scaling - the improvment of existing hardware.</br>
But a smarter way will be splitting the requests among other resources.

### System Avaliablity
This is a measurement of how much uptime the system is running, or how little downtime the system encounters.




# WiseSight Assignment

> RabbitMQ - ipWorker. 

# Start

* Installing dependencies

```bash
$ npm install
```

## Building RabbitMQ sever

* Building an image

```bash
$ docker-compose up
```

## Building publisher source

* start

```bash
$ cd app
```
* start running 

```bash
$ npm run publish
```

* receives BODY parameters 
*url  http://localhost:4000*

  {
     "ip_address" : "exampleTicket",
     "username" : "exampleDescription"
  }

* receives BODY parameters 


## Building Ip Worker & destination

* start running 

```bash
$ npm run consume
```

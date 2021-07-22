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

* url GET  *http://localhost:4000*

* receives BODY parameters 


  {
     "ip_address" : "00.00.000.00",
     "username" : "rabbitadmin"
  }



## Building Ip Worker & destination

* start running 

```bash
$ npm run consume
```

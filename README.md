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
## Building Ip Worker & destination

* start running 

```bash
$ npm run consume
```
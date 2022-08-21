# Kubernetes and Docker web development tutorial 

The purpose of this tutorial is to provide a demo example of a web app containerized with Docker and orchestrated by Kubernetes.

This tutorial includes: 1) a guide for building and running the applications via docker-compose or a single-node Kubernetes cluster, 2) an overview and explanation of the technology stack used and 3) explanations of the core concepts and design patterns which are used.

## Technology stack

The app in this tutorial is a simple web app, which is built in Angular 2+ and hosted on a Nginx web server. The backend is a Express Node.js application, which uses a PostgresSQL database for managing data. 

The apps are containerized using Docker, and docker-compose is used to build and deploy a small scale, local environment of the apps. Kubernetes is used to manage and maintain a realistic, production-like environment of the apps.

TODO Include figure here

## Instructions

## Database setup

### Connecting to PostgresSQL

### Clearing volumes

## Docker-compose setup
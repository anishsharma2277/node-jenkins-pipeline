# Jenkins Pipeline for Node.js Application

This repository contains a sample Jenkins pipeline for building and deploying a Node.js application.

## Pipeline Flow

* Pull latest code from repository
* Install dependencies using `npm ci`
* Build the application (`npm run build`)
* Sync files to deployment directory
* Start or reload application using PM2
* Perform a basic health check

## Process Management

The application is managed using PM2:

* Runs in cluster mode (`instances: max`)
* Uses reload mechanism to apply updates
* Multiple instances handle incoming requests

## How to Run Locally

```bash
npm install
npm run build
pm2 start ecosystem.config.js
```

## Requirements

* Node.js and npm
* PM2 (`npm install -g pm2`)
* Jenkins with shell execution enabled
* Application exposing a `/health` endpoint

## Notes

This setup uses PM2 cluster mode with reload to apply updates while the application continues handling requests.

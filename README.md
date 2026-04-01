# Node.js CI/CD Pipeline with PM2

This repository contains a sample Node.js application with a CI/CD pipeline for building and deploying using Jenkins and GitHub Actions. The application is managed with PM2 in cluster mode for zero-downtime deployments.

## Pipeline Flow

The deployment pipeline follows these steps:

1. Pull the latest code from the repository  
2. Install dependencies using `npm ci`  
3. Build the application (`npm run build`)  
4. Sync files to the deployment directory  
5. Start or reload the application using PM2  
6. Perform a basic health/version check  

## Process Management

The application uses PM2 for process management:

- Runs in cluster mode (`instances: max`)  
- Uses reload mechanism to apply updates without downtime  
- Handles multiple incoming requests across all instances  

## How to Run Locally

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start PM2 in cluster mode
pm2 start ecosystem.config.js

# Check the version endpoint
curl http://localhost:3000/version

```

# CI/CD Setup

## Jenkins Pipeline
- Automates build, deploy, and PM2 reload

## GitHub Actions
- Can be used for automated build & deployment

## Requirements
- Node.js (v18+ recommended) and npm
- PM2 (`npm install -g pm2`)
- Jenkins (if using Jenkins CI/CD)
- GitHub Actions (if using workflow)
- Application exposes `/health` and `/version` endpoints

## Troubleshooting

### Old version displayed at `/version`
- Ensure PM2 reloads the latest dist files:
```bash
pm2 delete all
pm2 start ecosystem.config.js

Verify the app runs locally first



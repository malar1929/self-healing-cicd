\# Self-Healing and Automatic Rollback System for Reliable CI/CD Deployment



\## Project Overview



This project implements a self-healing CI/CD deployment system that automatically detects unhealthy deployments and restores the previous stable version.



The system uses Jenkins for CI/CD automation and Docker for containerized deployment.



\## Problem Statement



During software deployment, a newly released version may contain errors that can cause application failure or downtime.



Manual rollback requires human intervention and increases recovery time.



\## Proposed Solution



The system automatically:



1\. Builds the new application version.

2\. Deploys it using Docker.

3\. Performs a health check.

4\. Detects deployment failure.

5\. Automatically rolls back to the previous stable version.

6\. Restarts a failed container using a self-healing monitor.



\## Technologies Used



\- Git

\- GitHub

\- Jenkins

\- Docker

\- Node.js

\- Express.js

\- PowerShell



\## System Workflow



Developer

↓

GitHub

↓

Jenkins

↓

Build Docker Image

↓

Deploy New Version

↓

Health Check

↓

Healthy → Continue

↓

Unhealthy → Automatic Rollback

↓

Previous Stable Version



\## Self-Healing



A PowerShell monitoring script continuously checks the application container.



If the container stops running, the monitor automatically starts it again.



\## Automatic Rollback



If the newly deployed version fails the health check:



\- Failed container is removed.

\- Previous stable Docker image is deployed.

\- Application health is verified again.



\## Application Endpoints



\### Home



http://localhost:3000/



\### Health Check



http://localhost:3000/health



\## Project Files



\- `server.js` – Node.js application

\- `Dockerfile` – Docker image configuration

\- `Jenkinsfile` – CI/CD pipeline

\- `self-healing-monitor.ps1` – Self-healing monitor

\- `package.json` – Node.js dependencies

\- `package-lock.json` – Dependency lock file



\## Result



The system successfully demonstrates automated Docker deployment, health monitoring, automatic rollback of failed deployments, and self-healing container recovery.


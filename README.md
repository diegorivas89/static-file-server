# NodeJS static file server

This is another NodeJS static file server that use Express and is designed to run with a minimal configuration and minimal resources (image size less than 50MB)

![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/diegorivas89/static-file-server?sort=date) ![](https://img.shields.io/badge/licence-MIT-green)

## Environment variables
- `STATIC_ROOT`: Root directory to server files
- `PORT`: Port where the server will be running (default is 3000)

## Execution
After cloning the repo, you need to install dependencies
```bash
npm install
```
and you could run it by executing the following command
```bash
STATIC_ROOT=/my/project/directory/dist node index.js
```

### Docker
If you want to run with docker you could do the following steps
#### 1) Build the image with:
```bash
docker build -t static-file-server:v0.1 .
```
#### 2) Run it:
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -p 8001:3000 -d static-file-server:v0.1
```
Or you could use the image directly from Docker Hub running
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -e PORT=8001 -p 8001:8001 -d diegorivas89/static-file-server:v0.2
```

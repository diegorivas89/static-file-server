# NodeJS static file server

This is another NodeJS static file server that use Express and is designed to run with a minimal configuration and minimal resources (image size less than 60MB)

![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/diegorivas89/static-file-server?sort=date) ![](https://img.shields.io/badge/licence-MIT-green)

## Environment variables
- `STATIC_ROOT`: Root directory to server files
- `PORT`: Port where the server will be running (default is 3000)
- `HOST`: Hostname for binding (default accept any incoming HTTP request)
- `CORS`: Set to `true` if you want to enable CORS from any domain (default is false)

## Execution
After cloning the repo, you need to install dependencies and execute the server
```bash
npm install && STATIC_ROOT=/my/project/directory/dist node index.js
```

### Docker
#### Building the image locally
If you want to run with docker building the image from scratch you need to run
```bash
docker build -t static-file-server:v0.1 .
```
and then run it by executing
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -p 8001:3000 -d static-file-server:latest
```
#### Using image from Docker Hub
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -e PORT=8001 -p 8001:8001 -d diegorivas89/static-file-server:latest
```

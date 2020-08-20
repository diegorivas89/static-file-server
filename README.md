# NodeJS static file server

This is another NodeJS static file server that use Express and is designed to run with a minimal configuration.

## Environment variables
- `STATIC_ROOT`: Root directory to server files
- `PORT`: Port where the server will be running (default is 8000)

## Execution
You could run it by executing the followin command
```
#> STATIC_ROOT=/my/project/directory/dist PORT=3000 node index.js
```

### Docker
If you want to run with docker you could do the following steps
#### 1) Build the image with:
```bash
docker build -t static-file-server:v0.1 .
```
#### 2) Run it:
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -e PORT=8001 -p 8001:8001 -d static-file-server:v0.1
```
Or you could use the image directly from Docker Hub running
```bash
docker run -e STATIC_ROOT=/my/project/directory/dist -e PORT=8001 -p 8001:8001 -d diegorivas89/static-file-server:v0.1
```

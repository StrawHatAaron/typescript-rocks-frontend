1. The docker run command creates and runs a new container instance from the image we just created.
2. -it starts the container in interactive mode. Why is this necessary? As of version 3.4.1, react-scripts exits after start-up (unless CI mode is specified) which will cause the container to exit. Thus the need for interactive mode.
3. --rm removes the container and volumes after the container exits.
4. -v ${PWD}:/app mounts the code into the container at “/app”.
`{PWD} may not work on Windows. See this Stack Overflow question for more info.`
5. Since we want to use the container version of the “node_modules” folder, we configured another volume: -v /app/node_modules. You should now be able to remove the local “node_modules” flavor.
6. -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.
7. Finally, -e CHOKIDAR_USEPOLLING=true enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.
   
For more, review this Stack Overflow question.



```bash
$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    typescript-rocks-frontend:dev
```


Better just to run this tho.
```bash
docker-compose up -d --build
```


References: 
1. https://mherman.org/blog/dockerizing-a-react-app/

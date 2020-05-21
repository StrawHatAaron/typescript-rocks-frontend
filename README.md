1. The docker run command creates and runs a new container instance from the image we just created.
2. -it starts the container in interactive mode. Why is this necessary? As of version 3.4.1, react-scripts exits after start-up (unless CI mode is specified) which will cause the container to exit. Thus the need for interactive mode.
3. --rm removes the container and volumes after the container exits.
4. -v ${PWD}:/app mounts the code into the container at “/app”.
`{PWD} may not work on Windows. See this Stack Overflow question for more info.`
5. Since we want to use the container version of the “node_modules” folder, we configured another volume: -v /app/node_modules. You should now be able to remove the local “node_modules” flavor.
6. -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.
7. Finally, -e CHOKIDAR_USEPOLLING=true enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.

# Type Script Rocks #



## For Dev Environment ##
#### ATM this command works best for my docker container ###
Little bit about Docker..
If you added more libs in package.json or with npm install.
``` bash
docker build -t typescript-rocks-frontend:dev .
```
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

#### This is not working  ####
Learning Docker better to get these commands to work is something I really want to do. 
build and start services on port 3001
```bash
docker-compose up -d --build
```
to stop the services and containers
```bash 
docker-compose stop
```


## For Prod Environment ##
``` bash
$ docker build -f Dockerfile.prod -t sample:prod .
```

``` bash
$ docker run -it --rm -p 1337:80 sample:prod
```

``` bash
$ docker-compose -f docker-compose.prod.yml up -d --build
```


## Some Notes for how I manage my node environment ##

###### since this is the main hub for all of my apps I will be spreading online I want to say how I have properly managed node environments when wanting the best dev experince with a plain local npm start. Note: Using zsh 5.7.1. ######

### 1. Clear npm's cache ###
```node
sudo npm cache clean -f
```
### 2. Install the node helper if you don't have it. It is an awesome helper! ###
```node
sudo npm install -g n
```
### 3. For knowing the latest stable node version. ###
```node
sudo n stable
```
### 4. Install/Switch to any version you want. ###
```node
sudo n 8.0.0
```
### 6. My Fav step. Choose the version of node you want to run! ###
```node
n
```


# For home hosting use DuckDNS

https://www.duckdns.org/update?domains={typescriptrocks.duckdns.org}&token={secret}&txt={YOURVALUE}[&verbose=true][&clear=true]




#### My References and Kudos go out to: ####
1. https://mherman.org/blog/dockerizing-a-react-app/
2. https://codeforgeek.com/update-node-using-npm/
3. https://duckdns.org/spec.jsp

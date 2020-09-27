# node-red-heroku-docker
Deploying Node-RED (docker) on Heroku template.

## How to deploy

### Create heroku account.
+ [Heroku | Sign up](https://signup.heroku.com/)

### Install heroku-cli
+ [The Heroku CLI | Heroku Dev Center](https://devcenter.heroku.com/articles/heroku-cli)

### Clone this repository your local from github

```bash
git clone git@github.com:your-name/node-red-heroku-docker.git
de node-red-heroku-docker
```

### Settings heroku

#### Create heroku app

```bash
heroku create your-app-name
```

#### Set docker build, scale value

```
heroku stack:set container # Required for container build and deployment
heroku ps:scale web=1 # Required for the container to start up properly
```

#### Push remote repository (heroku)

```
git push heroku master
```



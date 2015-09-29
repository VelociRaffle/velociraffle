# VelociRaffle

[VelociRaffle](http://www.velociraffle.com/) is a non-profit that raffles off sweet prizes and donates the profits to a charity of one of the participant's choosing.

The reasons behind starting VR are: have fun, learn, and use skills for charitable causes.

## Starting the server

* Install node packages: `$ npm install`
* Set up environment variables in `.env`

```
NODE_ENV=development
EMAIL_ACCOUNT={your email address}
EMAIL_PASSWORD={your email password}
EMAIL_RECIPIENTS={your email address}
```

* Start the server with foreman: `$ nf start dev=1`
	* Can simulate the web environment: `$ nf start web=1`

## Tech stack

My goal is to go beyond the philosophy of using the right technology for the job. I want to use awesome technologies before they are needed. This mentality will keep VR, myself, and any contributors ahead of the curve.

### Current tech

* node.js
* EJS
* Bootstrap
* Sass
* Gulp
* Heroku
* Trello
* Slack

### Future tech (as of Sept 28, 2015)

* Mocha
* React
* Ionic
* CloudFlare
* DigitalOcean
* Redis
* MailChimp
* Amazon Web Services
* Docker

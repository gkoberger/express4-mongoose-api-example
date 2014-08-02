Based on https://gist.github.com/fwielstra/1025038
Upgraded for Express 4

SETUP
-----

Edit the config file

    cp config.example.js config.js
    vim config.js

Install packages

    npm install

RUN
---

You may need to start mongo:

    mongod

Start the server:

    npm start

DEPLOY TO HEROKU
----------------

First time:

    git remote add heroku git@heroku.com:[heroku site name].git
    git push -u heroku
    heroku config:set NODE_ENV=production
    heroku ps:scale web=1

To deploy:

    git push heroku


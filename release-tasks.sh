#!/bin/bash

echo "window.__config = " > public/config.js
heroku releases -a solid-computing-machine -n 1 --json >> public/config.js
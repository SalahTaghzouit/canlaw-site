#!/usr/bin/env bash

# Build
NODE_ENV=production ./node_modules/.bin/webpack --config ./internals/webpack/webpack.prod.babel.js --color -p --progress


#!/bin/sh
echo "***********************"
echo "**** TESTING SUITE ****"
echo "***********************" 
echo "Running through unit tests via mocha ... "
nyc --reporter=html --reporter=text mocha --require source-map-support/register --require ts-node/register --exit unit_tests/**/*.spec.ts
# istanbul cover mocha --exit
# mocha -r ts-node/register --exit **/**/*.spec.ts
echo "Running through static analysis via TSLint ... "
tslint -c tslint/tslint.json '../src/**/*.ts'
echo "Success ! "

[![Build Status](https://travis-ci.org/jonathanhedren/flight-attach.svg?branch=master)](https://travis-ci.org/jonathanhedren/flight-attach)

# flight-attach

A Flight component for automatic component attachments using HTML data attributes.


## Usage

Start by attaching flight-attach to the document:

`define('app', ['flight-attach'], function (flightAttach) {
    flightAttach.attachTo(document);
});`

Declare any component attachments in your HTML using data-attach="componentName":

`<div data-attach="componentName"></div>`


### Mixins

It's possible to use mixins too (a new "anonymous" component will be defined if only mixins are specified):

`<div data-attach="componentName, mixinName"></div>`

### Passing options

Options are passed through the "data-option-"-prefix:

`<div data-attach="myMixin" data-option-myOption="a value"></div>`



## Installation

```
npm install & bower install
```

## Unit tests

A local installation of Karma is used to run the JavaScript unit tests.
Karma makes it easy to watch files and run unit tests in real browsers:

```
npm run watch-test
```

This is the recommended approach because the moment your unit tests start
failing, you'll be notified in the terminal.

To run the unit tests just once in PhantomJS (for CI), you must install
PhantomJS and then run:

```
npm test
```

For further information about configuring Karma, please refer to the [Karma
website](http://karma-runner.github.io/).


## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

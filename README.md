# cal.js

A Node.js emulation of the unix cal - with the extent of emulation including whitespace.

## Usage

To view a month's calendar, run

```
$ ./cal.js 12 1999
```

or, for an annual calendar,

```
$ ./cal.js 2000
```
![CLI](https://raw.githubusercontent.com/calebgregory/cal.js/master/doc/screenshots/cal-cli.png)
To view calendar in the browser, run

```
$ ./cal.js --serve
```
![Browser](https://raw.githubusercontent.com/calebgregory/cal.js/master/doc/screenshots/cal-serve.png)

and open the provided link in your browser.

## Installation

```
$ git clone https://github.com/calebgregory/cal.js.git
$ npm install
```

## Accomplished Goals

- Gain a proficiency in test-driven development using Mocha & Chai
- Use continuous integration tools Travis CI and Code Climate
- Build a Node.js app with small modules, separating business logic from
  the user interface

This app was my first go at using TDD to build an app. My main focus was
on digesting a collection of tasks and simplifying these tasks into small
microservices and functions each of which performs one job well. I
wasn't completely successful in this task (this [month.addLine
function](https://github.com/calebgregory/cal.js/blob/master/lib/cal.month.js#L5-L26)
is brutal). Still, this app demonstrates my [analytical approach to
problem solving](https://github.com/calebgregory/cal.js/blob/master/lib/whitespace.txt) and my drive to [simplify tasks into generalized functions](https://github.com/calebgregory/cal.js/blob/master/lib/cal.month.js#L107-L119).

## Desired Features

- Total integration for a Linux environment

Travis CI runs on an Ubuntu virtual machine. The whitespace rules of
Linux's cal binary are totally different from those of Darwin's, so
getting the build to pass on Travis CI involves writing totally
different unit and integration tests. I started this process, using
node's os module, but have not finished.

## License

The MIT License (MIT)

Copyright (c) 2015 Caleb Gregory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

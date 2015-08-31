# cal.js

A Node.js emulation of the unix cal

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

## Goals

- Gain a proficiency in test-driven development using Mocha/Chai
- Build an app using small modules of functionality

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

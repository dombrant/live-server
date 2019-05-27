# Live Server

## Synopsis

A custom wrapper for @tapio's [live-server package](https://github.com/tapio/live-server).

## Installation

Download this repo's contents, or clone it:

```bash
git clone https://github.com/dombrant/live-server.git
cd live-server
npm install
```

## Usage

### From the command line:

Call

```bash
$ live-server
```

### From Node:

After cloning this repo, copy its contents into your project, then import it:

```js
const liveServer = require('lib/live-server/index.js);

liveServer();
```

## Motivation

I've really enjoyed using the `live-server` for development, but I wanted to create a simplified version that I can edit for myself. Specifically, this package displays both the local and remote (from the network's ip address) URLs (inspired by Zeit's [serve](https://github.com/zeit/serve)).

## Contributors

**Dominic Brant**.

[Follow me on Twitter](https://twitter.com/dombrant). If you have any thoughts/suggestions/problems, feel free to open an issue or Tweet me.

## License

MIT© [Dominic Brant](https://dombrant.com)

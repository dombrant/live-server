#!/usr/bin/env node

const liveServer = require("live-server");
const ip = require("ip");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const params = {
  port: 3000,
  root: "dist",
  open: false,
  logLevel: 0
  // Set log level to 0 so it only logs errors
};

const launchServer = async () => {
  const arguments = process.argv.slice(2);
  [...arguments].toString();
  // Make an array of any arguments the user passes via the command line
  // This will allow the user to specify the port with the first argument
  // and they can change the root folder from 'src' to 'dist'

  if (arguments.length === 2) {
    params.port = Number(arguments[0]);
    params.root = arguments[1];
    // If the user passes two arguments, make the port equal to the first argument
    // and change the root folder to 'dist' if the user types it as the second argument
  } else if (arguments.length === 1) {
    params.port = Number(arguments[0]);
    // If the user passes one argument, change the port to the argument passed
  }

  liveServer.start(params);

  const localURL = `http://localhost:${params.port}`;
  const remoteURL = `http://${ip.address()}:${params.port}`;

  console.log(`\n${chalk.bold("Local:")}  ${localURL}`);
  console.log(`${chalk.bold("Remote:")} ${remoteURL}`);

  try {
    await clipboardy.write(remoteURL);
    console.log("\nRemote URL copied to clipboard!");
  } catch (error) {
    console.log(`${chalk.red("Error")} copying URL to clipboard: ${error}`);
  }
  // Use the clipboardy module to copy the localhost URL to the clipboard
};

launchServer();

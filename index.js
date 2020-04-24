#!/usr/bin/env node

const liveServer = require("live-server");
const ip = require("ip");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const params = {
  port: 3000,
  root: "",
  logLevel: 0,
  // Set log level to 0 so it only logs errors
};

const launchServer = async () => {
  const argumentsArray = process.argv.slice(2);
  [...argumentsArray].toString();
  // Create an array of the arguments passed via the command line

  for (let i = 0; i < argumentsArray.length; i++) {
    if (argumentsArray[i] === "--port" || argumentsArray[i] === "-p") {
      params.port = parseInt(argumentsArray[i + 1]);
    }
    if (argumentsArray[i] === "--root" || argumentsArray[i] === "-r") {
      params.root = argumentsArray[i + 1];
    }
    if (argumentsArray[i] === "--logLevel" || argumentsArray[i] === "-l") {
      params.logLevel = parseInt(argumentsArray[i + 1]);
    }
  }
  // Allow the user to set their own arguments with any of the flags above

  liveServer.start(params);

  const localURL = `http://localhost:${params.port}`;
  const remoteURL = `http://${ip.address()}:${params.port}`;

  console.log(`\n${chalk.bold.green("Local:")}  ${localURL}`);
  console.log(`${chalk.bold.green("Remote:")} ${remoteURL}`);

  try {
    await clipboardy.write(remoteURL);
    console.log(`\n${chalk.cyan("Remote URL copied to clipboard!")}`);
  } catch (error) {
    console.log(`${chalk.red("Error")} copying URL to clipboard: ${error}`);
  }
  // Use the clipboardy module to copy the localhost URL to the clipboard
};

launchServer();

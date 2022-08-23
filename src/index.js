//ts-check

const { load: loadHome } = require("./home-page");
const { load: loadContact } = require("./contact-page");
const { load: loadMenu } = require("./menu-page");

const tabs = document.createElement('');

const content = document.getElementById('content');
loadHome(content);
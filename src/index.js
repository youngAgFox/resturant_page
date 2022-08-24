//ts-check

const { load: loadHome } = require("./home-page");
const { load: loadContact } = require("./contact-page");
const { load: loadMenu } = require("./menu-page");

const homeTab = document.createElement('button');
const contactTab = document.createElement('button');
const menuTab = document.createElement('button');
homeTab.innerText = "Home";
contactTab.innerText = "Contact";
menuTab.innerText = "Menu";

const tabs = document.createElement('div');
tabs.append(homeTab, menuTab, contactTab);

const bodyContent = document.getElementById('content');
const content = document.createElement('div');

bodyContent.append(tabs);
bodyContent.append(content);

loadHome(content);
homeTab.addEventListener("click", () => loadHome(content, tabs));
contactTab.addEventListener("click", () => loadContact(content, tabs));
menuTab.addEventListener("click", () => loadMenu(content, tabs));
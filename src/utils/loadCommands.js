const fs = require('fs');
const path = require('path');

function loadCommands(program, mergedConfig) {
  const commandsDir = path.join(__dirname, '..', 'commands');
  const commandFolders = fs
    .readdirSync(commandsDir)
    .filter((file) => fs.statSync(path.join(commandsDir, file)).isDirectory());

  for (const folder of commandFolders) {
    const commandModule = require(path.join(commandsDir, folder));
    commandModule(program, mergedConfig);
  }
}

module.exports = loadCommands;

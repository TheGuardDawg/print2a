'use strict'

const fs = require('fs');
const path = require('path');

const gitIgnore = fs.readFileSync('.gitignore', 'utf-8');
const readmeRegex = new RegExp(/readme.md$/, 'gi');
const imagesRegex = new RegExp(/.jpg|.png$/, 'gi');

const filesAndFoldersToExclude = [
  '.git',
  'docs',
  '.gitignore',
  '.gitattributes',
  // remove everything listed in .gitignore
  ...gitIgnore.split('\n').filter(l => l !== '')
];

function getFilesByRegex(dir, regex) {
  return fs.readdirSync(dir).reduce((list, f) => {
    const filepath = path.join(dir, f);

    // skip stuff we don't want showing up in search
    // and skip folders
    if(filesAndFoldersToExclude.includes(filepath)) {
      return list;
    }

    // recurse through dir
    if(fs.statSync(filepath).isDirectory()) {
      return [...list, ...getFilesByRegex(filepath, regex)];
    }

    // no hit, pass
    if(filepath.search(regex) == -1) {
      return list;
    }

    return [...list, filepath];
  }, []);
}

// readme.md is the one file to determine a thing
const thingsList = getFilesByRegex('.', readmeRegex);

const infoList = thingsList.map(readmeFilepath => {
  const folder = readmeFilepath.replace(readmeRegex, '');
  const tags = folder.split('/').map(str => str.split('_')).flat().filter(str => str !== '');
  const readmeStat = fs.statSync(readmeFilepath);

  return {
    location: folder.replace(/\/$/, ''), //remove the last slash
    datetime: readmeStat.mtime,
    tags: tags,
    readme: readmeFilepath,
    renders: folder ? getFilesByRegex(folder,imagesRegex) : null
  }
});

fs.writeFileSync('docs/files.js', `window.__print2a_files = ${JSON.stringify(infoList)}`);
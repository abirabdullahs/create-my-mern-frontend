#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child-process-promise');

async function main() {
  // Ask for the project name
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the project name:',
      validate: (input) => input.trim() ? true : 'You must provide a name!'
    }
  ]);

  const safeName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  const projectDir = path.join(process.cwd(), safeName);
  const templateDir = path.join(__dirname, '..', 'template');

  // If the folder exists, warn
  if (await fs.pathExists(projectDir)) {
    console.log(`⚠️  A folder named "${safeName}" already exists!`);
    process.exit(1);
  }

  try {
    console.log('📁 Creating folder...');
    await fs.mkdir(projectDir);

    console.log('📋 Copying template...');
    await fs.copy(templateDir, projectDir);

    // Update package.json
    const pkgPath = path.join(projectDir, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = safeName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    console.log('📦 Installing dependencies... (this will take a little time)');
    await exec(`cd "${projectDir}" && npm install`);

    console.log('\n🎉 Everything is set up!');
    console.log(`\n👉  To start: `);
    console.log(`   cd ${safeName}`);
    console.log(`   npm run dev\n`);

  } catch (err) {
    console.error('❌ Something went wrong:', err.message);
  }
}

main();

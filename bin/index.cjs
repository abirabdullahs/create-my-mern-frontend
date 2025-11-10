
import inquirer from 'inquirer';   
const { prompt } = require('inquirer');   
// -------------------------

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child-process-promise');

async function main() {
  const { projectName } = await prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the project name:',
      validate: input => (input.trim() ? true : 'You must provide a name!')
    }
  ]);

  const safeName = projectName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  const projectDir = path.join(process.cwd(), safeName);
  const templateDir = path.join(__dirname, '..', 'template');

  if (await fs.pathExists(projectDir)) {
    console.log(`Warning: A folder named "${safeName}" already exists!`);
    process.exit(1);
  }

  try {
    console.log('Creating folder...');
    await fs.mkdir(projectDir);

    console.log('Copying template...');
    await fs.copy(templateDir, projectDir);

    const pkgPath = path.join(projectDir, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = safeName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    console.log('Installing dependencies... (this will take a little time)');
    await exec(`cd "${projectDir}" && npm install`);

    console.log('\nSuccess: Everything is set up!');
    console.log(`\nTo start:`);
    console.log(`   cd ${safeName}`);
    console.log(`   npm run dev\n`);
  } catch (err) {
    console.error('Error: Something went wrong:', err.message);
    process.exit(1);
  }
}

main();
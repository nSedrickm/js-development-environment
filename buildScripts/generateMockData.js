/* this script is used to generate mock data for local development */

import jsf from 'json-schema-faker';
import {schema} from './mockDataShema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

jsf.extend("faker", function() {
  return faker;
  });

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});


// bit of a hack (though we'd want to test app anyway at some point)
// can't get includeAllSources to work in Karma: including the main app.ts does this implicitly

import { MyApp} from '../app/app';

export function main() {

  // this return doesn't do anything, it's just so tsc doesn't bitch about unused variables
  return [
    MyApp
  ];
}

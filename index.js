/*import * as michelsonImport from "michelson-interpreter";

console.log("michselonImport", michelsonImport.default.michelsonInterpreter);
*/
//import React, { useState } from 'react';
import * as fs from 'fs';
import * as michelsonImport from "michelson-interpreter";
//import {michelsonInterpreter, State} from 'michelson-interpreter';
//import michelsonInterpreter from 'michelson-interpreter/lib/michelson-interpreter-function.cjs';
//import  { State } from 'michelson-interpreter/lib/types.cjs';
console.log("MichelsonImport: ")
console.log(michelsonImport);
//console.log("michelsonInterpreter: ", michelsonInterpreter);
//console.log("State: ", State);

fs.readFile('attic_add1.tz', 'utf8', (err, script) => {
    if (err) {
      console.error('Fehler beim Lesen der Datei: ', err);
      return;
    }
const state = new michelsonImport.default.State('', '', 0, 'default', 0, 0, 0);
const michelsonReturnValue = michelsonImport.default.michelsonInterpreter(script, 0.1, 0.1, state);
console.log(michelsonReturnValue);
console.log("File on load");
});

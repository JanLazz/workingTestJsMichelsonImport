import * as michelsonImport from "michelson-interpreter";

console.log("michselonImport", michelsonImport);

import * as fs from "fs";

fs.readFile("attic_add1.tz", "utf8", (err, script) => {
  if (err) {
    console.error("Fehler beim Lesen der Datei: ", err);
    return;
  }
  const state = new michelsonImport.default.State(
    "",
    "",
    0,
    "default",
    0,
    0,
    0
  );
  const michelsonReturnValue = michelsonImport.default.michelsonInterpreter(
    script,
    0.1,
    0.1,
    state
  );
  console.log(michelsonReturnValue);
});

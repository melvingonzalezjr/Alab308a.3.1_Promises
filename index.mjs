// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
    
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  const returnedValue = await central(id);
  // // console.log(returnedValue);

  // const result = await dbs[returnedValue](id)
  // // console.log(result)

  // const vaultResult = await vault(id);

  Promise.all([dbs[returnedValue](id), vault(id)]).then(([result, vaultResult]) => {
  
    const finalObject = {'id': id, ...result, ...vaultResult}
    console.log(finalObject);

  });
  // const finalObject = {'id': id, ...result, ...vaultResult}
  // console.log(finalObject);
  
}

console.time('getUserData takes this long');
getUserData(3);
console.timeEnd('getUserData takes this long');




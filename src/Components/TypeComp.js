const typeComp = (objX, typeArr) => {
    let result = [];
    let finalOutput = [];
    const findStats = (target) => {
      let current = objX[target]
      for (let prop in current){
          if (current[prop] >= 2){
              result.push(prop)
            }
          }
    }
    typeArr.map((type) => {
      findStats(type);
    })
    result.map((item) => {
      if (finalOutput.indexOf(item) <= -1){
        finalOutput.push(item)
      }
    });
    
    return finalOutput
  };
  
//  console.log(typeComp(types, ['fire', 'steel']));
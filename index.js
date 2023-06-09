function saturdayFun(funActivity = `roller-skate`) {
    return `This Saturday, I want to ${funActivity}!`
}
saturdayFun(`bathe my dog`)

const mondayWork = function(backToWork = `go to the office`) {
    return `This Monday, I will ${backToWork}.`
}
mondayWork(`work from home`)

/*function wrapAdjective(congrats){
    const party1 = `*a hard worker*!`;
    return function() {
        const party2 = `||a dedicated programmer||!`
        return function() {
            return (`${congrats}`)
        }
    }
}*/

  function wrapAdjective(symbol = `*`) {
    return function(adjective = `special`) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
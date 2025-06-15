
const receivesAFunction = function(cb) {
    return cb();
  };
  

  const returnsANamedFunction = () => {
    const mySpecialFunction = function customLogger() {
      console.log("Custom logic here if needed.");
    };
    return mySpecialFunction;
  };
  
  const returnsAnAnonymousFunction = () => {
    return () => {
      console.log("Anonymous function executed.");
    };
  };
  

const receivesAFunction = function(cb) {
    return cb();
  };
  

  const returnsANamedFunction = () => {
    const mySpecialFunction = function customLogger() {
      console.log("Hello");
    };
    return mySpecialFunction;
  };
  
  const returnsAnAnonymousFunction = () => {
    return () => {
      console.log("Anonymous");
    };
  };
  
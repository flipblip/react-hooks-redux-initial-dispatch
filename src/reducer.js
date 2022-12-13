// Decalre but don not assign state || State will start off undefined
let state;

function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

// Dispatch @@INIT, which calls dispatch(), dispatch will pass through our initial action
// Dispatch then calls changeState() reducer, passing two local variables: state and action
// Basically, we're calling changeState(undefined, { type: "@@INIT"})
// When changeState() reducer returns, dispatch assigns it a return value, updating the4 initial sate to { count: 0 }. 
// On the next line, render() displays 0 in our HTML
dispatch({ type: "@@INIT"})

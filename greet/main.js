function greet(name, greetingFunc) {
    console.log(`I'm in greet, about to call:`);
    console.log(greetingFunc.name);
    return greetingFunc(name);
}

function greetCalmly(name) {
    console.log(`I'm in greetCalmly`);
    return `Welcome, ${name}.`
}

function greetExcitedly(name) {
    console.log(`I'm in greetExcitedly`);
    return `Welcome, ${name}!`
}

function greetWarmly(name) {
    console.log(`I'm in greetWarmly`);
    return `Happy to see you, ${name}!`
}

function greetDismissively(name) {
    console.log(`I'm in greetDismissively`);
    return `Oh, great. ${name} is here.`
}

const answer = greet(`Colin`, greetWarmly);

document.querySelector('#result').innerText = answer;
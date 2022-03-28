let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let moreCats = [...cats, "Broom"];
    
    return moreCats;
}

function prependCat() {
    let prependCats = ["Arnold", ...cats];

    return prependCats;
}

function removeLastCat() {
    let removeLastCats = cats.slice(0, -1);

    return removeLastCats;
}

function removeFirstCat() {
    let removeFirstCats = cats.slice(1, cats.length);

    return removeFirstCats;
}

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
return cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    return cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}


function appendCat(Broom) {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(Arnold) {
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice();
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice();
    copyOfCats.shift();
    return copyOfCats;
}
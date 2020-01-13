function XO(text) {
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter === 'x' || letter === 'X') {
            countX++;
        }

        if (letter === 'o' || letter === 'O') {
            countO++;
        }
    }

    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}
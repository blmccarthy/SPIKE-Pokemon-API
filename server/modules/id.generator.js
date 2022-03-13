// Generator functions return the next thing
// every time they are called. We'll go into
// more detail on these next week.

function* getId() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}

module.exports = getId;
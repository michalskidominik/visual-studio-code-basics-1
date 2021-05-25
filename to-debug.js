function logger(time) {
    console.log(time);
    console.warn(time);
}

setInterval(() => logger(new Date()), 1500);
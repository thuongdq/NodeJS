console.log("Begin");
process.nextTick(function() {
    console.log("Process");
});
console.log("End");
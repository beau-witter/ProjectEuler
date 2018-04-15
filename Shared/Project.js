export function Project(mainFunction, printFunction, ...input) {
    let output = {};

    output.startTime = Date.now();
    output = mainFunction(input, output);

    output.endTime = Date.now();

    printFunction(output);
    
    console.log("Time is took (ms): " + (output.endTime - output.startTime));
    console.log("Time is took (s): " + ((output.endTime - output.startTime) / 1000));
}
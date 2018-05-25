export class Project {
    private startTime: number;
    private endTime: number;
    mainFunction: () => any;
    printFunction: () => void;
    input: number[];
    output: any;
    constructor(public main, public print, public incoming) {
        this.mainFunction = main;
        this.printFunction = print;
        this.input = incoming;
    }
    execute = function() {
        this.startTime = Date.now();

        this.output = this.mainFunction(this.input);

        this.endTime = Date.now();

        this.printFunction(this.output);
        
        console.log("Time is took (ms): " + (this.endTime - this.startTime));
        console.log("Time is took (s): " + ((this.endTime - this.startTime) / 1000));
    }
}
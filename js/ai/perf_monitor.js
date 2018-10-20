class PerfMonitor {
  constructor() {
    this.exploredNodes = 0;
    this.tableHits = 0;
  }

  setStartTime() {
    this.startTime = new Date();
  }

  setEndTime() {
    this.endTime = new Date();
  }

  setDepth(depth) {
    // console.log('setting depth');
    this.depth = depth;
  }

  printResults() {
    console.log('---------');

    if (this.startTime && this.endTime) {
      console.log(`Run Time: ${this.endTime - this.startTime}`);
    }

    console.log(`Depth:  ${this.depth}`);
    console.log(`Explored Positions: ${this.exploredNodes}`);
    console.log(`Table Hits: ${this.tableHits}`);

    console.log('---------');
  }

  logTableHit() {
    this.tableHits++;
  }

  logExploredNode() {
    this.exploredNodes++;
  }
}

module.exports = PerfMonitor;

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to start the voting process
function startVoting() {
    const candidates = []; // Array to store candidate objects

    // Ask for the number of candidates
    rl.question("Enter the number of candidates: ", (numCandidates) => {
        const numberOfCandidates = parseInt(numCandidates);

        // Collect names of the candidates
        let count = 0;
        const askForCandidateName = () => {
            if (count < numberOfCandidates) {
                rl.question(`Name for candidate ${count + 1}: `, (name) => {
                    candidates.push({
                        name: name,
                        votes: 0
                    });
                    count++;
                    askForCandidateName();
                });
            } else {
                // Ask for the number of voters
                rl.question("Enter the number of voters: ", (numVoters) => {
                    const numberOfVoters = parseInt(numVoters);
                    let voterCount = 0;

                    const askForVote = () => {
                        if (voterCount < numberOfVoters) {
                            rl.question(`Voter ${voterCount + 1}, vote for a candidate (or press enter for an empty vote): `, (vote) => {
                                // Check if the voter entered a candidate name or an empty value
                                if (vote.trim() === "") {
                                    console.log(`Voter ${voterCount + 1} cast an empty vote.`);
                                } else {
                                    // Find candidate
                                    const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
                                    if (candidate) {
                                        candidate.votes++; // Increment vote count
                                        console.log(`Voter ${voterCount + 1} voted for ${candidate.name}.`);
                                    } else {
                                        console.log(`Voter ${voterCount + 1} entered an invalid candidate: "${vote}".`);
                                    }
                                }
                                voterCount++;
                                askForVote();
                            });
                        } else {
                            // Determine the winner
                            let winner = null;
                            candidates.forEach(candidate => {
                                if (!winner || candidate.votes > winner.votes) {
                                    winner = candidate;
                                }
                            });

                            // Display results
                            console.log("\nVoting Results:");
                            candidates.forEach(candidate => {
                                console.log(`${candidate.name}: ${candidate.votes} votes`);
                            });

                            // Announce the winner
                            if (winner) {
                                console.log(`\nThe winner is ${winner.name} with ${winner.votes} votes!`);
                            } else {
                                console.log("No votes were cast.");
                            }

                            // Close the readline interface
                            rl.close();
                        }
                    };

                    askForVote(); // Start asking for votes
                });
            }
        };

        askForCandidateName(); // Start asking for candidate names
    });
}

// Start the voting program
startVoting();

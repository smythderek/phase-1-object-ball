function gameObject() {
    const gameStats = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["black", "white"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
        
    }
    
    return gameStats;
}

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

function printAllScores() {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
            let data = teamObj.players;           
            for (let key in data) {
                let numPoints = data[key].points;
                console.log(`${key} scored ${numPoints} points.`);
            }
    }
}

function numPointsScored(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (let key in data) {
            let numPoints = data[key].points;
                if (key === name) {
                    return numPoints;
                }
        }
    }
}

function shoeSize(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (let key in data) {
            let sizeOfShoe = data[key].shoe;
                if (key === name) {
                    return sizeOfShoe;
                }
        }
    }
}

function teamColors(team) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        for (teamKey in teamObj) {
            let nameToCheck = teamObj.teamName;
            if (nameToCheck === team) {
                return teamObj.colors;
            }
        }
    }
}

function teamNames() {
    const bothTeamNames = [];
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        bothTeamNames.push(teamObj.teamName);
    }
    return bothTeamNames;
}

function playerNumbers(team) {
    const teamNumbers = [];
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            let jersey = data[key].number;
            if (teamObj.teamName === team) {
                teamNumbers.push(jersey);
            }
        }
    }
    return teamNumbers;
}

function playerStats(name) {
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            if (key === name) {
                console.log(data[key]);
            }
        }
    }
}

function bigShoeRebounds() {
    let biggestShoe = 0;
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            let playerShoe = data[key].shoe;
            if (playerShoe > biggestShoe) {
                biggestShoe = playerShoe;
                playerWithBiggestShoe = key;
                shoeRebounds = data[key].rebounds;
            }
        }
    }
    return shoeRebounds;
}

function mostPointsScored() {
    let highestPointTotal = 0;
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            let playerPoints = data[key].points;
            if (playerPoints > highestPointTotal) {
                highestPointTotal = playerPoints;
                highScorer = key;
            }
        }
    }
    return highScorer;
}

function winningTeam() {
    let highestTeamTotal = 0;
    let game = gameObject();
    for (gameKey in game) {
        teamTotal = 0;
        let teamObj = game[gameKey]
        let data = teamObj.players;
        for (key in data) {
            let playerPoints = data[key].points;
            teamTotal = teamTotal + playerPoints;
            console.log(teamTotal);
            if (teamTotal > highestTeamTotal) {
                highestTeamTotal = teamTotal;
                victoriousTeam = teamObj.teamName;
            }
        }
    }
    return victoriousTeam;
}

function playerWithLongestName() {
    let longestNameLength = 0;
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            let nameLength = key.length;
            if (nameLength > longestNameLength) {
                longestNameLength = nameLength;
                playerWhoseNameIsLongest = key;
            }
        }
    }
    return playerWhoseNameIsLongest;
}

function doesLongNameStealATon() {
    let mostSteals = 0;
    let game = gameObject();
    for (gameKey in game) {
        let teamObj = game[gameKey];
        let data = teamObj.players;
        for (key in data) {
            let numSteals = data[key].steals;
            if (numSteals > mostSteals) {
                mostSteals = numSteals;
                playerWithMostSteals = key;
            }
        }
    }

    playerWithLongestName();
    
    if (playerWhoseNameIsLongest === playerWithMostSteals) {
        return true;
    }
}
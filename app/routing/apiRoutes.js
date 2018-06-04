var friends = require("../data/friends.js");

// creates an export to compare your entered answers against the provided array

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);

    })

    app.post("/api/friends", function(req,res){
        var newFriendEntry = req.body;

        var runningTotalDiffs =[];

        for(i=0; i< newFriendEntry.length;i++){
            var compare = newFriendEntry[i];
            var diffBetweenPpl = 0;

            for(j=0;j<compare.scores.length;j++){
                var personDiff = Math.abs(compare.scores[k] - newFriendEntry.scores[k]);
                diffBetweenPpl+=personDiff;
            }
            runningTotalDiffs.push(diffBetweenPpl);
        }
        var testBest = runningTotalDiffs[0];
        var testBestIndex = 0;

        for(i=1;i<runningTotalDiffs.length;i++){
            if(runningTotalDiffs[i] < testBestIndex) {
				testBestIndex = runningTotalDiffs[i];
				testBestIndex = i;
			}
        }
        friends.push(newFriendEntry);

        res.json(friends[testBestIndex]);
    })
}
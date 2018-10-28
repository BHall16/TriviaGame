var questions = [{
            ques: "What is the capital of New Hampshire?",
            key: ["Manchester", "Concord", "Dover", "Portsmouth"],
            ans: "Concord",
        },
        {
            ques: "What is the capital of California?",
            key: ["Sacramento", "San Francisco", "Los Angeles", "San Diego"],
            ans: "Sacramento",
        },
        {
            ques: "What is the capital of North Dakota?",
            key: ["Pierre", "Bismarck", "Fargo", "Mandan"],
            ans: "Bismarck",
        },
        {
            ques: "What is the capital of New York?",
            key: ["Syracuse", "Buffalo", "Albany", "New York City"],
            ans: "Albany",
        },
        {
            ques: "What is the capital of South Carolina?",
            key: ["Charleston", "Greenville", "Columbus", "Columbia"],
            ans: "Columbia",
        },
        {
            ques: "What is the capital of South Dakota?",
            key: ["Pierre", "Sioux Falls", "Bismarck", "Rapid City"],
            ans: "Pierre",
        },
        {
            ques: "What is the capital of Florida?",
            key: ["Jacksonville", "Tampa", "Tallahassee", "Miami"],
            ans: "Tallahassee",
        },
        {
            ques: "What is the capital of Texas?",
            key: ["Dallas", "Houston", "San Antonio", "Austin"],
            ans: "Austin",
        },
        {
            ques: "What is the capital of Kentucky?",
            key: ["Lexington", "Frankfort", "Louisville", "Bowling Green"],
            ans: "Frankfort",
        },
        {
            ques: "What is the capital of Connecticut?",
            key: ["New Haven", "Bridgeport", "Greenwich", "Hartford"],
            ans: "Hartford"
        }
    ];


var startGame = $("#start-button").on('click', function() {
    countdown(60);
})




var countdown = function(seconds) {
    var timer = setInterval(function() {
        seconds = seconds -1;
        $("#timer").html(seconds);

        if (seconds <= 0) {
            
        }
    })
}
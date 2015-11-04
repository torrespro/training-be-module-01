function TrainingStorageManager() {

    this.username = b$.portal.loggedInUserId;
    this.bestScoreKey = b$.portal.loggedInUserId + "-bestScore";
    this.gameStateKey = b$.portal.loggedInUserId + "-gameState";
    this.sessionId = null;
    this.storage = window.localStorage;
}

// Best score getters/setters
TrainingStorageManager.prototype.getBestScore = function () {
    return this.storage.getItem(this.bestScoreKey) || 0;
};

TrainingStorageManager.prototype.setBestScore = function (score) {
    if (score && score > 0) {

        console.log("Setting Best Score:", score)
        var url = "/portalserver/services/rest/player/" + this.username + "/highscore";
        console.log("PUT", url);
        $.ajax({
            url: url ,
            dataType: "json",
            type: "PUT",
            data: JSON.stringify(score),
            contentType: "application/json; charset=utf-8",
            success: function () {
                console.log("High score updated");
            }
        });
    }


    this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
TrainingStorageManager.prototype.getGameState = function () {
    var stateJSON = this.storage.getItem(this.gameStateKey);
    return stateJSON ? JSON.parse(stateJSON) : null;
};


//update game state
TrainingStorageManager.prototype.setGameState = function (gameState) {
    var self = this;
    var url,method;
    if (this.sessionId) {
        url = '/portalserver/services/rest/game/session/' + this.sessionId;
        method = "PUT";
    } else {
        url =  '/portalserver/services/rest/game/session';
        method = "POST";
    }

    gameState.playerId = this.username;
    gameState.sessionId = this.sessionId;
    console.log("setGameState", gameState);
    console.log(method, url);
    $.ajax({
        url: url,
        dataType: "json",
        type: method,
        data: JSON.stringify(gameState),
        contentType: "application/json; charset=utf-8",
        success: function (gameSession) {
            console.log("reply: ", gameSession)

            if (gameSession != null && !self.sessionId) {
                self.sessionId = gameSession.id;
            }
            self.storage.setItem(this.gameStateKey, JSON.stringify(gameState));

        }
    });

};

TrainingStorageManager.prototype.clearGameState = function (gameState) {
    if(gameState && gameState.over == false) {
        gameState.over = true;
        this.setGameState(gameState);
    }
    this.storage.removeItem(this.gameStateKey);
    this.storage.removeItem(this.sessionIdKey);
};

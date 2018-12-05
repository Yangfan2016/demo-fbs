const Mock = require("mockjs");

function apiMock(app) {
    app.get("/users/get", function (req, res) {
        let json = Mock.mock({
            success: true,
            "data|1-10": [
                { "id|+1": 1,"name":/[A-Za-z]{3}/,"guid":/[A-F0-9]{8}(-[A-F0-9]{4}){3}-[A-F0-9]{12}/ }
            ]
        });
        res.send(json);
    });
    app.post("/users/post", function (req, res) {
        res.send({
            success: true,
        });
    });
    app.put("/users/put", function (req, res) {
        res.send({
            success: true,
        });
    });
    app.delete("/users/delete", function (req, res) {
        res.send({
            success: true,
        });
    });
};



module.exports = apiMock;
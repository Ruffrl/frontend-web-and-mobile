"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var instructions = react_native_1.Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android: "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});
var App = function () {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.container, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.welcome, children: "Welcome to React Native!" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.instructions, children: "To get started, edit App.tsx" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: styles.instructions, children: count }), (0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } })] }));
};
exports.App = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});

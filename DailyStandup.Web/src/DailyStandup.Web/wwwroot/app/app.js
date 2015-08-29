var App = React.createClass({displayName: "App",

    render: function () {
        return React.createElement("div", {className: "appWrapper"}, 
            React.createElement(Header, null), 

            React.createElement("div", {className: "row contentArea"}, 
              React.createElement("div", {className: "col s2 leftPanel"}, 
                  React.createElement("div", {className: "teamBlock"}, 
                    React.createElement("select", null, 
                        React.createElement("option", null, "Team A"), 
                        React.createElement("option", null, "Team B")
                    ), 
                    React.createElement("input", {type: "date", className: "datepicker"}), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("img", null), 
                            React.createElement("span", null, "Miguel Alho"), 
                            React.createElement("span", null, "status")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("img", null), 
                            React.createElement("span", null, "User2 test"), 
                            React.createElement("span", null, "status")
                        ), 
                        React.createElement("li", null, 
                            React.createElement("img", null), 
                            React.createElement("span", null, "User3 test"), 
                            React.createElement("span", null, "status")
                        )

                    )
                  )
              ), 
              React.createElement("div", {className: "col s5 centerPanel"}, 
                  React.createElement("h4", null, "#StandUp"), 
                  React.createElement("div", {className: "standupForm"}, 
                      React.createElement("form", null, 
                          React.createElement("div", {className: "card"}, 
                            React.createElement("div", {className: "card-content "}, 
                              React.createElement("label", null, "Entry"), 
                              React.createElement("textarea", null)
                            ), 
                            React.createElement("div", {className: "card-action"}, 
                                React.createElement("button", {value: "submit"}, "Ok"), 
                                React.createElement("a", {href: "#"}, "link")
                            )
                          )
                      )
                  ), 
                  React.createElement("hr", null), 
                  React.createElement("div", {className: "standupEntries"}, 
                      React.createElement("div", {className: "card entry"}, 
                        React.createElement("div", {className: "card-content "}, 
                            React.createElement("span", {className: "card-title"}, "Card Title"), 
                            React.createElement("p", null, 
                                "Today I'm finishing up yesterdays set of UI tasks. Still learning the inner workings of" + ' ' +
                                "the react cycle and what not. got stuck in a loop with the this keyword but finally" + ' ' +
                                "got past. Added some links to the event set for any interested parties. I'll have a" + ' ' +
                                "meeting later on with @ABC to clean some stuff up. Will add a PR asap."
                            ), 
                            React.createElement("p", null, 
                                "Can anyone handle the broken test in CI for me?"
                            ), 
                            React.createElement("hr", null), 
                            React.createElement("div", {className: "replies"}, 
                                React.createElement("div", {className: "card-content "}, 
                                    React.createElement("span", {className: "card-title"}, "Card Title"), 
                                    React.createElement("p", null, 
                                        "I'll whats up with CI. Also found this !!link for anyone interested.."
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "card-action"}, 
                            React.createElement("a", {href: "#"}, "This is a link"), 
                            React.createElement("a", {href: "#"}, "This is a link")
                        )
                      ), 
                      React.createElement("div", {className: "card entry"}, 
                        React.createElement("div", {className: "card-content "}, 
                            React.createElement("span", {className: "card-title"}, "Card Title"), 
                            React.createElement("p", null, 
                                "Today I'm finishing up yesterdays set of UI tasks. Still learning the inner workings of" + ' ' +
                                "the react cycle and what not. got stuck in a loop with the this keyword but finally" + ' ' +
                                "got past. Added some links to the event set for any interested parties. I'll have a" + ' ' +
                                "meeting later on with @ABC to clean some stuff up. Will add a PR asap."
                            ), 
                            React.createElement("p", null, 
                                "Can anyone handle the broken test in CI for me?"
                            ), 
                            React.createElement("hr", null), 
                            React.createElement("div", {className: "replies"}, 
                                React.createElement("div", {className: "card-content "}, 
                                    React.createElement("span", {className: "card-title"}, "Card Title"), 
                                    React.createElement("p", null, 
                                        "I'll whats up with CI. Also found this !!link for anyone interested.."
                                    )
                                )
                            )
                        ), 
                        React.createElement("div", {className: "card-action"}, 
                            React.createElement("a", {href: "#"}, "This is a link"), 
                            React.createElement("a", {href: "#"}, "This is a link")
                        )
                      )
                  )
              ), 
              React.createElement("div", {className: "col s5 rightPanel"}, 
                React.createElement("h4", null, "Events"), 
                React.createElement("ul", {className: "collection linkList"}, 
                    React.createElement("li", {className: "collection-item avatar"}, 
                       React.createElement("i", {className: "material-icons circle"}, "account_circle"), 
                       React.createElement("span", {className: "title"}, "Title"), 
                       React.createElement("p", null, 
                            React.createElement("a", {href: "http:\\\\www.nfl.com"}, "NFL.com"), React.createElement("br", null), 
                           "Cause fantasy league time is here!"
                       )
                       
                    ), 
                    React.createElement("li", {className: "collection-item avatar"}, 
                        React.createElement("i", {className: "material-icons circle"}, "account_circle"), 
                        React.createElement("span", {className: "title"}, "CI Build Passed (#12345)"), 
                        React.createElement("a", {href: "#!", className: "secondary-content"}, React.createElement("i", {className: "material-icons"}, "grade"))
                    ), 
                    React.createElement("li", {className: "collection-item avatar"}, 
                        React.createElement("i", {className: "material-icons circle"}, "folder"), 
                        React.createElement("span", {className: "title"}, "Title"), 
                        React.createElement("p", null, 
                            React.createElement("a", {href: "http:\\\\www.nfl.com"}, "NFL.com"), React.createElement("br", null), 
                            "Cause fantasy league time is here!"
                        ), 
                        React.createElement("a", {href: "#!", className: "secondary-content"}, React.createElement("i", {className: "material-icons"}, "grade"))
                    ), 
                    React.createElement("li", {className: "collection-item avatar"}, 
                         React.createElement("i", {className: "material-icons circle"}, "account_circle"), 
                        React.createElement("span", {className: "title"}, "Pull Request Added (#12345)"), 
                        React.createElement("a", {href: "#!", className: "secondary-content"}, React.createElement("i", {className: "material-icons"}, "grade"))
                    ), 
                    React.createElement("li", {className: "collection-item avatar"}, 
                        React.createElement("i", {className: "material-icons circle"}, "account_circle"), 
                        React.createElement("span", {className: "title"}, "v1.0.3 Deployed To staging"), 
                        React.createElement("a", {href: "#!", className: "secondary-content"}, React.createElement("i", {className: "material-icons"}, "grade"))
                    )
                )
              )
            )
        )
    }

});


var Header = React.createClass({displayName: "Header",
   
    render: function(){
        return React.createElement("nav", null, 
            React.createElement("div", {className: "nav-wrapper"}, 
              React.createElement("a", {href: "#!", className: "brand-logo"}, "DailyStandup"), 
              React.createElement("ul", {id: "nav-mobile", className: "right hide-on-med-and-down"}, 
                React.createElement("li", null, React.createElement("a", {href: ""}, "Link1")), 
                React.createElement("li", null, React.createElement("a", {href: ""}, "Link2"))
              )
            )
          )

    }

});
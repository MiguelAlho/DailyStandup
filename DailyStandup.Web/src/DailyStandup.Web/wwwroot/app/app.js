var App = React.createClass({displayName: "App",

    render: function(){
        return React.createElement("div", {className: "contentArea"}, 
            React.createElement(Header, null), 

            React.createElement("div", {className: "row contentArea"}, 
              React.createElement("div", {className: "col s2 lateralPanel"}, 
                  "left"
              ), 
              React.createElement("div", {className: "col s7"}, 
                  "center"
              ), 
              React.createElement("div", {className: "col s3 lateralPanel"}, 
                  "right"
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
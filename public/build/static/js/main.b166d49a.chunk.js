(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,s,c){},51:function(e,s,c){},66:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c.n(t),n=c(23),r=c.n(n),l=(c(50),c(51),c(81)),i=c(83),o=c(80),j=c(13),m=c(9),d=c(20),b=c(82),h=c(84),x=c(42),u=c.n(x),p=c(1);var O=function(e){var s=e.launch,c=s.flight_number,t=s.mission_name,a=(s.launch_year,s.launch_date_local),n=s.launch_success;return Object(p.jsx)("div",{className:"card card-body mb-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-9",children:[Object(p.jsxs)("h4",{children:["Mission:"," ",Object(p.jsx)("span",{className:n?"text-success":"text-danger",children:t})]}),Object(p.jsxs)("p",{children:["Date: ",Object(p.jsx)(u.a,{format:"YYYY-MM-DD HH:mm",children:a})]})]}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(j.b,{to:"/launch/".concat(c),className:"btn btn-secondary",children:"Launch Details"})})]})})};var N,y=function(){return Object(p.jsxs)("div",{className:"my-3",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"px-3 mx-2 bg-success"})," = Success"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"px-3 mx-2 bg-danger"})," = Fail"]})]})},_=Object(b.a)(N||(N=Object(d.a)(["\n  query LauncheQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_year\n      launch_date_local\n      launch_success\n    }\n  }\n"])));var g,k=function(){var e=Object(h.a)(_),s=e.loading,c=e.error,t=e.data;return s?Object(p.jsx)("h4",{children:"Loading..."}):(c&&console.log(c),Object(p.jsxs)("div",{className:"container root",children:[Object(p.jsx)("h2",{className:"display-4 my-3 lauches-title",children:"Launches"}),Object(p.jsx)(y,{}),Object(p.jsx)("div",{children:t.launches.map((function(e){return Object(p.jsx)(O,{launch:e},e.flight_number)}))})]}))},v=Object(b.a)(g||(g=Object(d.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"])));var f=function(e){var s=e.match.params.flight_number;s=parseInt(s);var c=Object(h.a)(v,{variables:{flight_number:s}}),t=c.loading,a=c.error,n=c.data;if(t)return Object(p.jsx)("h4",{children:"Loading..."});a&&console.log(a),console.log(n);var r=n.launch,l=r.mission_name,i=r.launch_year,o=(r.launch_date_local,r.launch_success),m=r.rocket,d=m.rocket_id,b=m.rocket_name,x=m.rocket_type;return m.description,Object(p.jsxs)("div",{className:"container root",children:[Object(p.jsx)("h3",{className:"my-3 text-uppercase mission-name",children:l}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"Launch details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Flight number: ",s]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Launch year: ",i]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Launch successful:"," ",Object(p.jsx)("span",{className:o?"text-success":"text-danger",children:o?"Yes":"No"})]})]}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"Rocket details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",d]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Rocket name: ",b]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Rocket type: ",x]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(j.b,{to:"/launches",className:"btn btn-secondary",children:"Back"})]})};var w,L=function(e){var s=e.rocket,c=s.rocket_id,t=s.rocket_name,a=(s.rocket_type,s.active),n=s.cost_per_launch;return Object(p.jsx)("div",{className:"card card-body mb-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-9",children:[Object(p.jsxs)("h4",{children:[Object(p.jsx)("span",{className:"text-secondary",children:"Rocket: "}),Object(p.jsx)("span",{children:t})]}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Active: "}),Object(p.jsx)("span",{className:a?"text-success":"text-danger",children:a?"Yes":"No"})]}),Object(p.jsxs)("h4",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Cost per launch: "}),"$",n]})]}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(j.b,{to:"/rocket/".concat(c),className:"btn",children:"Rocket Details"})})]})})},R=Object(b.a)(w||(w=Object(d.a)(["\n  query RocketQuery {\n    rockets {\n      id\n      rocket_id\n      rocket_name\n      rocket_type\n      description\n      cost_per_launch\n      active\n      success_rate_pct\n    }\n  }\n"])));var D,I=function(){var e=Object(h.a)(R),s=e.loading,c=e.error,t=e.data;return s?Object(p.jsx)("h4",{children:"Loading..."}):(c&&console.log(c),Object(p.jsxs)("div",{className:"container root",children:[Object(p.jsx)("h2",{className:"display-4 my-3 lauches-title",children:"Rockets"}),Object(p.jsx)("div",{children:t.rockets.map((function(e){return Object(p.jsx)(L,{rocket:e},e.id)}))})]}))},Y=c(25),F=Object(b.a)(D||(D=Object(d.a)(["\n  query RocketQuery($rocket_id: String!) {\n    rocket(rocket_id: $rocket_id) {\n      id\n      rocket_id\n      rocket_name\n      rocket_type\n      description\n      height {\n        meters\n        feet\n      }\n      diameter {\n        meters\n        feet\n      }\n      mass {\n        kg\n        lb\n      }\n      first_stage {\n        engines\n        fuel_amount_tons\n        burn_time_sec\n        reusable\n      }\n      second_stage {\n        engines\n        fuel_amount_tons\n        burn_time_sec\n        thrust {\n          kN\n          lbf\n        }\n      }\n      engines {\n        number\n        type\n        version\n        propellant_1\n        propellant_2\n      }\n      landing_legs {\n        number\n        material\n      }\n    }\n  }\n"])));var q=function(e){var s=e.match.params.rocket_id,c=Object(h.a)(F,{variables:{rocket_id:s}}),t=c.loading,a=c.error,n=c.data;if(t)return Object(p.jsx)("h4",{children:"Loading..."});a&&console.log(a);var r=n.rocket,l=r.rocket_name,i=(r.rocket_type,r.description),o=r.height,m=r.diameter,d=r.mass,b=r.first_stage,x=r.second_stage,u=r.engines,O=r.landing_legs;return Object(p.jsxs)("div",{className:"container root",children:[Object(p.jsxs)(Y.a,{controls:!1,indicators:!0,children:[Object(p.jsx)(Y.a.Item,{interval:1e7,children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("h3",{className:"my-3 text-uppercase rocket-name",children:l}),Object(p.jsx)("p",{className:"my-4 description-rocket",children:i}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"Rocket Details"}),Object(p.jsxs)("ul",{className:"list px-0",children:[Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Height"}),o.meters,"m",Object(p.jsxs)("span",{className:"text-muted",children:[" / ",o.feet,"ft"]})]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Diameter"}),m.meters,"m",Object(p.jsxs)("span",{className:"text-muted",children:[" / ",m.feet,"ft"]})]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Mass"}),d.kg," kg",Object(p.jsxs)("span",{className:"text-muted",children:["/ ",d.lb,"lb"]})]})]})]})})}),Object(p.jsxs)(Y.a.Item,{interval:1e7,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"my-3 text-uppercase rocket-name",children:l}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"First stage"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("ul",{className:"list px-0",children:[Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Engines"})," ",b.engines]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Fuel amount"})," ",b.fuel_amount_tons," tons"]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Burn time"})," ",b.burn_time_sec," sec"]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Reusable"})," ",Object(p.jsx)("span",{className:b.reusable?"text-success":"text-danger",children:b.reusable?"Yes":"No"})]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Landing legs"})," ",O.number]}),O.material?Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Landing legs material"})," ",Object(p.jsx)("span",{className:"text-capitalize",children:O.material})]}):null]})})})]}),Object(p.jsxs)(Y.a.Item,{interval:1e7,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"my-3 text-uppercase rocket-name",children:l}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"Engine Details"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("ul",{className:"list px-0",children:[Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Number og engines"})," ",u.number]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 text-capitalize row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Type"})," ",u.type]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Version"})," ",u.version]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 text-capitalize row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"First tank for propellant"})," ",u.propellant_1]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Secons tank for propellant"})," ",u.propellant_2]})]})})})]}),Object(p.jsxs)(Y.a.Item,{interval:1e7,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"my-3 text-uppercase rocket-name",children:l}),Object(p.jsx)("h2",{className:"my-4 text-uppercase",children:"Second stage"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("ul",{className:"list px-0",children:[Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Number of engines"})," ",x.engines]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Fuel amount"}),x.fuel_amount_tons," tons"]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Burn time"}),x.burn_time_sec," sec"]}),Object(p.jsxs)("li",{className:"border-bottom my-2 py-3 row",children:[Object(p.jsx)("span",{className:"text-uppercase col-6 mr-auto",children:"Thrust"}),x.thrust.kN,"kN"," ",Object(p.jsxs)("span",{className:"text-muted",children:["/ ",x.thrust.lbf,"lbf"]})]})]})})})]})]}),Object(p.jsx)(j.b,{to:"/rockets",className:"btn btn-secondary my-3",children:"Back"})]})};c.p;var B=function(){return Object(p.jsx)("div",{className:"main-page",children:Object(p.jsxs)("div",{className:"main-links row",children:[Object(p.jsx)("h1",{className:"col-md-6 text-center my-auto",children:Object(p.jsx)(j.b,{to:"rockets",className:"text-link",children:"Rockets"})}),Object(p.jsx)("h1",{className:"col-md-6 text-center my-auto",children:Object(p.jsx)(j.b,{to:"/launches",className:"text-link ",children:"Launches"})})]})})},M=c.p+"static/media/logo_black.4ef35d1d.png",S=new l.a({uri:"http://localhost:5000/graphql",cache:new i.a});var $=function(){return Object(p.jsx)(o.a,{client:S,children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)(j.b,{to:"/",className:" a-logo text-center",children:Object(p.jsx)("img",{src:M,alt:"spasex",className:"logo"})}),Object(p.jsx)(m.a,{exact:!0,path:"/",component:B}),Object(p.jsx)(m.a,{exact:!0,path:"/launches",component:k}),Object(p.jsx)(m.a,{exact:!0,path:"/launch/:flight_number",component:f}),Object(p.jsx)(m.a,{exact:!0,path:"/rockets",component:I}),Object(p.jsx)(m.a,{exact:!0,path:"/rocket/:rocket_id",component:q})]})})};c(65);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b166d49a.chunk.js.map
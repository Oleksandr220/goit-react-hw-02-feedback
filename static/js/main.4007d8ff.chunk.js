(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},,function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(3),i=c.n(s),o=(c(13),c(4)),r=c(5),l=c(6),d=c(8),b=c(7),u=(c(14),c(15),c(0)),j=function(t){var e=t.good,c=t.neutral,a=t.bad,n=t.total,s=t.feedbackPercentage;return Object(u.jsxs)("div",{className:"statistics__list",children:[Object(u.jsxs)("p",{className:"statistics__list-item",children:["Good : ",e]}),Object(u.jsxs)("p",{className:"statistics__list-item",children:["Neutral : ",c]}),Object(u.jsxs)("p",{className:"statistics__list-item",children:["Bad : ",a]}),Object(u.jsxs)("p",{className:"statistics__list-item",children:["Total : ",n]}),Object(u.jsxs)("p",{className:"statistics__list-item",children:["Positive feedback : ",s]})]})},h=(c(17),function(t){var e=t.title,c=t.children;return Object(u.jsx)("section",{className:"section",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"section__title",children:e}),c]})})});h.defaultProps={title:" "};var f=h,k=(c(18),function(t){var e=t.options,c=t.changeFeedback;return Object(u.jsx)("div",{className:"button__container",children:e.map((function(t){return Object(u.jsx)("button",{className:"feedback__button",onClick:function(){return c(t)},children:t},t.toString())}))})}),O=(c(19),function(t){Object(d.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(r.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.changeFeedback=function(e){Object.keys(t.state).forEach((function(c){c!==e.toLowerCase()||t.setState((function(t){return Object(o.a)({},c,t[c]+1)}))}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countFeedbackPercentage=function(){return Math.ceil(100*t.state.good/t.countTotalFeedback())},t.options=["Good","Neutral","Bad"],t}return Object(l.a)(c,[{key:"render",value:function(){var t=this.state,e=t.good,c=t.neutral,a=t.bad;return Object(u.jsxs)("div",{className:"feedback__container",children:[Object(u.jsx)("h1",{className:"feedback__title",children:"Feedbacks"}),Object(u.jsx)(f,{title:"Please leave feedback",children:Object(u.jsx)(k,{options:this.options,changeFeedback:this.changeFeedback})}),Object(u.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()>0?Object(u.jsx)(j,{good:e,neutral:c,bad:a,total:this.countTotalFeedback(),feedbackPercentage:this.countFeedbackPercentage()}):Object(u.jsx)("p",{children:"No feedback given"})})]})}}]),c}(a.Component));i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4007d8ff.chunk.js.map
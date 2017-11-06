!function(t){function i(s){if(e[s])return e[s].exports;
	var n=e[s]={exports:{},
	id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,i),
	n.loaded=!0,n.exports
}
	var e={};
	return i.m=t,i.c=e,i.p="",
	i(0)}([function(t,i)
		{
			"use strict";
			gapi.analytics.ready(function(){
			gapi.analytics.createComponent("ActiveUsersNF",{
			initialize:function(){
			this.ActiveUsersNF=0,gapi.analytics.auth.once("signOut",
			this.handleSignOut_.bind(this)
			)},
			execute:function(){
			this.polling_&&this.stop(),
			this.render_(),
			gapi.analytics.auth.isAuthorized()
			?this.pollActiveUsersNF_():
			gapi.analytics.auth.once("signIn",this.pollActiveUsersNF_.bind(this)
			)},
			stop:function(){
			clearTimeout(this.timeout_),
			this.polling_=!1,this.emit("stop",
			{ActiveUsersNF:this.ActiveUsersNF}
			)},
			render_:function(){var t=this.get();
			this.container="string"==typeof t.container?
			document.getElementById(t.container):t.container,
			this.container.innerHTML=t.template||this.template,
			this.container.querySelector("b").innerHTML=this.ActiveUsersNF
		},
			pollActiveUsersNF_:function(){var t=this.get(),
			i=1e3*(t.pollingInterval||5);
			if(isNaN(i)||5e3>i)throw new Error("Frequency must be 5 seconds or more.");
			this.polling_=!0,
			gapi.client.analytics.data.realtime.get
			({
			ids:t.ids,
			metrics:'rt:ActiveUsers',
      		'filters':'ga:pagePath==/test/not_found'
			// ids:t.ids,
			// 	metrics:"rt:pageviews",
			// 	 dimensions: 'rt:pagePath',
			//      'max-results': 10,

				}).then(function(t){
			var e=t.result,s=e.totalsForAllResults?+e.rows[0][0]:0,n=this.ActiveUsersNF;
			this.emit("success",{
				ActiveUsersNF:this.ActiveUsersNF
			}),
			s!=n&&(this.ActiveUsersNF=s,this.onChange_(s-n)),
			1==this.polling_&&(this.timeout_=setTimeout(this.pollActiveUsersNF_.bind(this),
			i))}
			.bind(this))},onChange_:function(t){
			var i=this.container.querySelector("b");
			i&&(i.innerHTML=this.ActiveUsersNF),this.emit("change",
			{ActiveUsersNF:this.ActiveUsersNF,delta:t}),
			t>0?this.emit("increase",{ActiveUsersNF:this.ActiveUsersNF,delta:t}):
			this.emit("decrease",{ActiveUsersNF:this.ActiveUsersNF,delta:t})},
			handleSignOut_:function(){this.stop(),
			gapi.analytics.auth.once("signIn",this.handleSignIn_.bind(this))},
			handleSignIn_:function(){this.pollActiveUsersNF_(),
			gapi.analytics.auth.once("signOut",this.handleSignOut_.bind(this))},
	template:'<div class="ActiveUsers" style="height: 100%; width: 81%; border-radius: 4px; margin-left: 1%;"><center><b class="ActiveUsers-value";"></b>Page not Found</center></div>'})})}]);

//# sourceMappingURL=active-users.js.map
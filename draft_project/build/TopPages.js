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
			gapi.analytics.createComponent("TopPages",{
			initialize:function(){
			this.TopPages=0,gapi.analytics.auth.once("signOut",
			this.handleSignOut_.bind(this))
		},
			execute:function(){
			this.polling_&&this.stop(),
			this.render_(),
			gapi.analytics.auth.isAuthorized()
			?this.pollTopPages_():
			gapi.analytics.auth.once("signIn",this.pollTopPages_.bind(this))
		},
			stop:function(){
			clearTimeout(this.timeout_),
			this.polling_=!1,this.emit("stop",
			{TopPages:this.TopPages})
		},
			render_:function(){
			var t=this.get();
			this.container="string"==typeof t.container?
			document.getElementById(t.container):t.container,
			this.container.innerHTML=t.template||this.template,
			this.container.querySelector("p").innerHTML=this.TopPages
		},
			pollTopPages_:function(){
				var t=this.get();
				var self = this;
				i=1e3*(t.pollingInterval||3);
				if (isNaN(i) || i < 5000) {
			        throw new Error('Frequency must be 5 seconds or more.');
			     }

			     this.polling_ = true;
			     
 				(function refetchData() {
				    setTimeout(function(){
				    	gapi.client.analytics.data.realtime.get
						({
						ids:t.ids,
							metrics:"rt:activeUsers",
							'dimensions':'rt:pagePath',
						     'max-results': 21,
						     'sort':'-rt:activeUsers'
							}).then(function(t){
						 		 var html = "";
								html +="<table>";
								html +="<tr>";
										html +="<th align='left'>" + 'Page Path' + "</th>";
										html +="<th align='center'>" + 'Active Users' + "</th>";
									html +="</tr>";
								for(var i = 0;i < t.result.rows.length;i++){
									html +="<tr>";
										html += "<td>" + i +". "+ t.result.rows[i][0] + "</td>";
										html += "<td align='center'>" + t.result.rows[i][1] + "</td>";
									html +="</tr>";
								}
								html +="</table>";

						var e=t.result,s=html,n=self.TopPages;
						self.emit("success",{
							TopPages:self.TopPages
						}),
						s!=n&&(self.TopPages=s,self.onChange_(s-n)),
						1==self.polling_&&(self.timeout_=setTimeout(self.pollTopPages_.bind(self),
						i))
						}
						.bind(self));
				    },i);

				})();
		},
		onChange_:function(t){
			var i=this.container.querySelector("p");
			i&&(i.innerHTML=this.TopPages),this.emit("change",
			{TopPages:this.TopPages,delta:t}),
			t>0?this.emit("increase",{TopPages:this.TopPages,delta:t}):
			this.emit("decrease",{TopPages:this.TopPages,delta:t})
		},
			handleSignOut_:function(){this.stop(),
			gapi.analytics.auth.once("signIn",this.handleSignIn_.bind(this))},
			handleSignIn_:function(){this.pollTopPages_(),
			gapi.analytics.auth.once("signOut",this.handleSignOut_.bind(this))},
	template:'<div class="TopPages" style="width: 100%;margin-top: -10px;"><p></p></div>'
	})
	})
	}]);

//# sourceMappingURL=active-users.js.map
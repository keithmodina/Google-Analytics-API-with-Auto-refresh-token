gapi.analytics.ready(function() {

  gapi.analytics.auth.authorize({
  	serverAuth: {
        "access_token": GA.access_token
  	}
  });

 var ActiveUsersNF = new gapi.analytics.ext.ActiveUsersNF({
    container: 'active-users-containerNF',
    pollingInterval: 30
  });

  ActiveUsersNF.once('success', function() {
    var element = this.container.firstChild;
    var timeout;

    this.on('change', function(data) {
    var element = this.container.firstChild;
    var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);

    clearTimeout(timeout);
      timeout = setTimeout(function() {
      element.className =
      element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });

   var ActiveUsersPsst = new gapi.analytics.ext.ActiveUsersPsst({
    container: 'active-users-psst',
    pollingInterval: 30
  });

  ActiveUsersPsst.once('success', function() {
    var element = this.container.firstChild;
    var timeout;

    this.on('change', function(data) {
    var element = this.container.firstChild;
    var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);

    clearTimeout(timeout);
      timeout = setTimeout(function() {
      element.className =
      element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });


  var activeUsers = new gapi.analytics.ext.ActiveUsers({
    container: 'active-users-container',
    pollingInterval: 30
  });

  activeUsers.once('success', function() { 
    var element = this.container.firstChild;
    var timeout;
    this.on('change', function(data) {
      var element = this.container.firstChild;
      var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        element.className =
            element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 1000);
    });
  });

  var TopPages = new gapi.analytics.ext.TopPages({
    container: 'TopPages',
    pollingInterval: 10
  });

  var viewSelector = new gapi.analytics.ext.ViewSelector2({
  	  ids:'ga:xxxxxxx', //replace with your id
      container: 'view-selector-container',
  })
  viewSelector.execute();

    viewSelector.on('viewChange', function(data) {
    var title = document.getElementById('view-name');
    title.innerHTML = data.property.name + ' (' + data.view.name + ')';

    activeUsers.set(data).execute();
    ActiveUsersNF.set(data).execute();
    TopPages.set(data).execute();

  });

    var dataChartRev = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: 'xxxxxxx', //replace with your id
      
      metrics:'ga:sessions',
      dimensions: 'ga:country',
      'start-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'country',
      type: 'TABLE',
      options: {
      width: '100%',
      height: '100%'
      }
    }

  });
   dataChartRev.set({query: {ids: 'ga:xxxxxxx'}}).execute();

  var dataChartRev2 = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: 'xxxxxxx', //replace with your id
      
      metrics:'ga:sessions',
      dimensions: 'ga:city',
      'start-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'city',
      type: 'TABLE',
      options: {
      width: '100%',
      height: '100%'
      }
    }

  });
   dataChartRev2.set({query: {ids: 'ga:xxxxxxx'}}).execute();

   var dataChartRevGeo = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: 'xxxxxxx', //replace with your id
      
      metrics:'ga:sessions',
      dimensions: 'ga:country',
      'start-date': 'yesterday',
      'max-results': 10,
      sort: '-ga:sessions'
    },
    chart: {
      container: 'geo',
      type: 'GEO',
      options: {
      width: '100%',
      height: '150'
      }
    }

  });
   dataChartRevGeo.set({query: {ids: 'ga:xxxxxxx'}}).execute();

    var dataChartBrowser = new gapi.analytics.googleCharts.DataChart({
    query: {
      ids: 'xxxxxxx', //replace with your id
      
      'dimensions':'ga:browser',
      'start-date':'yesterday',
      'metrics':'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 10
    },
    chart: { 
      container: 'browser',
      type: 'TABLE',
      options: {
      width: '100%',
      height: '100%',
      }
    }

  });
   dataChartBrowser.set({query: {ids: 'ga:xxxxxxx'}}).execute();

   var dataChartDevice = new gapi.analytics.googleCharts.DataChart({
    query: {
      'dimensions': 'ga:deviceCategory',
      'start-date':'yesterday',
      'metrics': 'ga:sessions',
      'sort': '-ga:sessions',
      'max-results': 5,
    },
    chart: {
      container: 'device',
      type: 'PIE',
      options: {
      width: '100%',
      height:'100%',
      chartSize: 100,
      pieHole: 3/9,
      backgroundColor: '#f2f2f2',
      pieSliceText: 'percentage',
      colors: ['#108EE8','#F3C92E','#00AD39','#660000','#994d00'],
      'legend':'bottom',
      fontSize: 7,
      pieStartAngle: 100,
      'is3D':true,
      }
    }
  });
   dataChartDevice.set({query: {ids: 'ga:xxxxxxx'}}).execute();

});
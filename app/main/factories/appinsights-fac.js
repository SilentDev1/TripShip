'use strict';
angular.module('main')
    .factory('logger', function(Config){
        var snippet = {   
            config: {   
                instrumentationKey: Config.ENV.AppInsightsKey   
            }   
        };   
        //lets use appinsights for our custom logging, it can also to telemetry like tracking clicks, etc. 
        // sdk docs here https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md
        var init = new Microsoft.ApplicationInsights.Initialization(snippet);   
        return init.loadAppInsights();
    });



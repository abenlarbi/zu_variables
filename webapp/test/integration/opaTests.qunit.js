sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mnvariables/test/integration/FirstJourney',
		'mnvariables/test/integration/pages/VariablesList',
		'mnvariables/test/integration/pages/VariablesObjectPage'
    ],
    function(JourneyRunner, opaJourney, VariablesList, VariablesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mnvariables') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVariablesList: VariablesList,
					onTheVariablesObjectPage: VariablesObjectPage
                }
            },
            opaJourney.run
        );
    }
);
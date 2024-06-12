sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        openSpreadsheetUploadDialog: async function (event) {
            this.editFlow.getView().setBusyIndicatorDelay(0);
            this.editFlow.getView().setBusy(true);
            this.spreadsheetUpload = await this.editFlow.getView()
              .getController()
              .getAppComponent()
              .createComponent({
                usage: "spreadsheetImporter",
                async: true,
                componentData: {
                  context: this,
                  createActiveEntity : true
                },
              });
            this.spreadsheetUpload.openSpreadsheetUploadDialog();
            this.editFlow.getView().setBusy(false);
          }
    };
});

class Script {
  process_incoming_request({ request }) {
    var webhookPayload = request.content;
    var webhookType = String(Object.keys(webhookPayload)[0]);
    var alertColor = "warning";

    if( webhookType == "alert" )
    {
      var webhookAlert = JSON.parse(webhookPayload.alert);
      if(webhookAlert.long_description.indexOf('Alert') !== -1 && webhookAlert.long_description.indexOf('opened') !== -1 ) { alertColor = "danger";}
      // else if ( webhookAlert.severity == "warning"){ alertColor = "warning";}
      else{ alertColor = "good"; webhookAlert.severity = "normal";}
      return {
        content:{
          attachments: [{
            title: webhookAlert.message,
            pretext: webhookAlert.short_description,
            title_link: webhookAlert.alert_url,
            text: webhookAlert.long_description,
            color: alertColor,
            fields: [
              {
                title: "Status",
                value: webhookAlert.severity
              }
            ]
          }]
         }
      };
    }
    else if( webhookType == "deployment")
    {
      var webhookDeployment = JSON.parse(webhookPayload.deployment);
      alertColor = "good";
      return {
        content:{
          attachments: [{
            title: 'Deployment of ' + webhookDeployment.application_name,
            title_link: webhookDeployment.deployment_url,
            color: alertColor,
            fields: [
              {
                title: "Revision",
                value: webhookDeployment.revision
              },
              {
                title: "Deployer",
                value: webhookDeployment.deployed_by
              }
            ]
          }]
         }
      };
    }
    return {
       error: {
         success: false,
         message: 'Error'
       }
    };
}
}

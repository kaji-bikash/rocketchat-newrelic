## Overview
We started using :rocket: as an internal communication tool @[cloudfactory](https://github.com/cloudfactory) and immediately felt the lack of integrations, we as DevOps, loved a lot. rocketchat_newrelic_incoming.js is a script that will parse webhook notifications coming to Rocket.Chat from NewRelic. Please be mindful that NewRelic is deprecating current and introducing new alert system but we needed this anyway. NewRelic sends in alerts about policy voilations that you have defined thresholds for and deployments to your application via tools like Capistrano.

## Installation

### Rocket.Chat

1. Login as admin user and go to:<br>
_Administration => Integrations => New Integration => Incoming WebHook_

2.  Set "Enabled" and "Script Enabled" to "True"

3.  Set all channel, icons, etc. as you need/preference !!

4.  Paste contents of [rocketchat_newrelic_incoming.js](https://github.com/kajisaap/rocketchat-newrelic/blob/master/rocketchat_newrelic_incoming.js) into the _Script_ field.

5.  Copy WebHook URL as soon as you saved the integration and proceed to the configuration of webhook integration in NewRelic.

### NewRelic

1. Login as admin user and go to:<br>
_Acccount Settings => Alert Notifications => Webhook_

2. Paste in webhook URL copied from RocketChat installation setup and be sure to check on "Receive mobile application and plugin alerts"

Alerting APIs are evolving in NewRelic:<br>
[NewRelic WebHook Docs](https://docs.newrelic.com/docs/alerts/new-relic-alerts/getting-started/alerting-new-relic#notifications)

### Things in Action
**Policy violation trigger: DevOps sighs then do what's needed hence resolved notification**
<img src=https://raw.githubusercontent.com/kajisaap/rocketchat-newrelic/master/screenshots/alert_triggered_resolved.png>

**Deployment notification**
<img src=https://raw.githubusercontent.com/kajisaap/rocketchat-newrelic/master/screenshots/deployment.png>

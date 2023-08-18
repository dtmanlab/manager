import controller from './gateways.controller';
import template from './gateways.html';

export default {
  bindings: {
    pciFeatureRedirect: '<',
    publicGateways: '<',
    gateways: '<',
    projectId: '<',
    trackPublicGateways: '<',
    goToPublicGateway: '<',
    guideUrl: '<',
    goToDeleteGateway: '<',
    goToEditGateway: '<',
    goToPrivateNetwork: '<',
    goToAddPublicGateway: '<',
    guideTrackingSectionTags: '<',
    trackClick: '<',
    regionsLink: '<',
  },
  controller,
  template,
};

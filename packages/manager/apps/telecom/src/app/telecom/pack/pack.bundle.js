import './index';
import './internet-access/index';
import './internet-access/internet-access.component';
import './internet-access/internet-access.routing';
import './internet-access/packs/index';
import './internet-access/packs/packs.component';
import './internet-access/packs/packs.controller';
import './internet-access/packs/packs.routing';
import './migration/building-details/telecom-pack-migration-building-details.controller';
import './migration/confirm/telecom-pack-migration-confirm.controller';
import './migration/migration/telecom-pack-migration-migration.controller';
import './migration/offers/telecom-pack-migration-offers.controller';
import './migration/service-delete/telecom-pack-migration-service-delete.controller';
import './migration/shipping/telecom-pack-migration-shipping.controller';
import './migration/telecom-pack-migration.controller';
import './migration/telecom-pack-migration';
import './move/pack-move.controller';
import './move';
import './pack.constant';
import './pack.controller';
import './pack.routing';
import './pack.templates';
import './resiliation/pack-resiliation.controller';
import './resiliation/pack-resiliation';
import './slots/domain/activation/pack-domain-activation.controller';
import './slots/domain/activation/pack-domain-activation';
import './slots/domain/pack-domain.controller';
import './slots/emailPro/add/pack-emailPro-add.controller';
import './slots/emailPro/add/pack-emailPro-add';
import './slots/emailPro/detail/pack-emailPro-detail.controller';
import './slots/emailPro/detail/pack-emailPro-detail';
import './slots/emailPro/pack-emailPro.controller';
import './slots/emailPro/pack.emailPro.constant';
import './slots/exchangeAccount/pack-exchangeAccount.controller';
import './slots/exchangeIndividual/add/pack-exchangeIndividual-add.controller';
import './slots/exchangeIndividual/add/pack-exchangeIndividual-add';
import './slots/exchangeIndividual/pack-exchangeIndividual.controller';
import './slots/exchangeLite/pack-exchangeLite.controller';
import './slots/hostedEmail/add/pack-hostedEmail-add.controller';
import './slots/hostedEmail/add/pack-hostedEmail-add';
import './slots/hostedEmail/pack-hostedEmail.controller';
import './slots/hubic/activation/pack-hubic-activation.controller';
import './slots/hubic/activation/pack-hubic-activation';
import './slots/hubic/pack-hubic.controller';
import './slots/informations/pack-informations.controller';
import './slots/promotionCode/pack-promotionCode.controller';
import './slots/task/pack-task.controller';
import './slots/voipBillingAccount/pack-voipBillingAccount.controller';
import './slots/voipEcoFax/activation/pack-voipEcoFax-activation.controller';
import './slots/voipEcoFax/activation/pack-voipEcoFax-activation';
import './slots/voipEcoFax/pack-voipEcoFax.controller';
import './slots/voipLine/activation/pack-voipLine-activation.controller';
import './slots/voipLine/activation/pack-voipLine-activation.module';
import './slots/voipLine/pack-voipLine.controller';
import './slots/xdslAccess/pack-xdslAccess.controller';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.component';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.constant';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.controller';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.module';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.routing';
import './xdsl/access/comfortExchange/pack-xdsl-access-comfort-exchange.service';
import './xdsl/access/deconsolidation/contract/pack-xdsl-access-deconsolidation-contract.controller';
import './xdsl/access/deconsolidation/pack-xdsl-access-deconsolidation.controller';
import './xdsl/access/deconsolidation/pack-xdsl-access-deconsolidation';
import './xdsl/access/diagnostic/details/pack-xdl-access-diagnostic-details.controller';
import './xdsl/access/diagnostic/details/pack-xdl-access-diagnostic-details';
import './xdsl/access/diagnostic/pack-xdsl-access-diagnostic.controller';
import './xdsl/access/diagnostic/pack-xdsl-access-diagnostic';
import './xdsl/access/ip/order/pack-xdsl-access-ip-order.controller';
import './xdsl/access/ip/pack-xdsl-access-ip.controller';
import './xdsl/access/ip/pack-xdsl-access-ip';
import './xdsl/access/ipv6/pack-xdsl-access-ipv6.controller';
import './xdsl/access/linediagnostic/pack-xdsl-access-linediagnostic.controller';
import './xdsl/access/linediagnostic/pack-xdsl-access-linediagnostic';
import './xdsl/access/notifications/pack-xdsl-access-notifications.controller';
import './xdsl/access/notifications/pack-xdsl-access-notifications';
import './xdsl/access/pack-xdsl-access.constants';
import './xdsl/access/pack-xdsl-access.controller';
import './xdsl/access/portReset/pack-xdsl-access-port-reset.controller';
import './xdsl/access/profil/pack-xdsl-access-profil.controller';
import './xdsl/access/rateLimit/xdsl-access-lns-ratelimit.controller';
import './xdsl/access/statistics/pack-xdsl-statistics.constant';
import './xdsl/access/statistics/pack-xdsl-statistics.controller';
import './xdsl/missingRio/pack-xdsl-missing-rio.controller';
import './xdsl/missingRio/pack-xdsl-missing-rio';
import './xdsl/modem/bridgeMode/pack-xdsl-modem-bridgeMode.controller';
import './xdsl/modem/connectedDevices/pack-xdsl-modem-connectedDevices.controller';
import './xdsl/modem/dmz/pack-xdsl-modem-dmz.controller';
import './xdsl/modem/dmz/pack-xdsl-modem-dmz';
import './xdsl/modem/firewall/pack-xdsl-modem-firewall.controller';
import './xdsl/modem/firmware/pack-xdsl-modem-firmware.controller';
import './xdsl/modem/managedByOvh/pack-xdsl-modem-managedByOvh.controller';
import './xdsl/modem/mtu/pack-xdsl-modem-mtu.controller';
import './xdsl/modem/pack-xdsl-modem.constant';
import './xdsl/modem/pack-xdsl-modem.controller';
import './xdsl/modem/reboot/pack-xdsl-modem-reboot.controller';
import './xdsl/modem/reset/pack-xdsl-modem-reset.controller';
import './xdsl/modem/router/dhcp/bdhcp/pack-xdsl-modem-dhcp-bdhcp.controller';
import './xdsl/modem/router/dhcp/bdhcp/pack-xdsl-modem-dhcp-bdhcp.factory';
import './xdsl/modem/router/dhcp/pack-xdsl-modem-dhcp-modal.component';
import './xdsl/modem/router/dhcp/pack-xdsl-modem-dhcp.controller';
import './xdsl/modem/router/dhcp/pack-xdsl-modem-dhcp.factory';
import './xdsl/modem/router/lan/pack-xdsl-modem-lan.controller';
import './xdsl/modem/router/lan/pack-xdsl-modem-lan.factory';
import './xdsl/modem/router/pack-xdsl-modem-router.controller';
import './xdsl/modem/router/ports/pack-xdsl-modem-port.factory';
import './xdsl/modem/router/ports/pack-xdsl-modem-ports.controller';
import './xdsl/modem/service/modal/pack-xdsl-modem-service-modal.controller';
import './xdsl/modem/service/pack-xdsl-modem-service.controller';
import './xdsl/modem/templates/config/modal/pack-xdsl-modem-template-config-modal.controller';
import './xdsl/modem/templates/config/pack-xdsl-modem-templates-config.controller';
import './xdsl/modem/templates/config/pack-xdsl-modem-templates-config';
import './xdsl/modem/templates/pack-xdsl-modem-template.constant';
import './xdsl/modem/templates/pack-xdsl-modem-templates.component';
import './xdsl/modem/templates/pack-xdsl-modem-templates.controller';
import './xdsl/modem/wifi/config/pack-xdsl-modem-wifi-config.controller';
import './xdsl/modem/wifi/config/pack-xdsl-modem-wifi-config';
import './xdsl/modem/wifi/pack-xdsl-modem-wifi.controller';
import './xdsl/orderFollowUp/pack-xdsl-orderFollowUp.controller';
import './xdsl/orderFollowUp/pack-xdsl-orderFollowUp';
import './xdsl/pack-xdsl.constant';
import './xdsl/pack-xdsl.controller';
import './xdsl/resiliation/pack-xdsl-resiliation.controller';
import './xdsl/resiliation/pack-xdsl-resiliation';
import './xdsl/tasks/pack-xdsl-tasks.controller';
import './xdsl/tasks/packs-xdsl-tasks';
import './xdsl/xdsl-task-poller.service';

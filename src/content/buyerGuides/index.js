import { diagnosticHref } from '../positioning.js';
import { branchInventory } from './branchInventory.js';
import { carrierDelivery } from './carrierDelivery.js';
import { distributorPricing } from './distributorPricing.js';
import { documentPilot } from './documentPilot.js';
import { erpDecision } from './erpDecision.js';
import { freightAudit } from './freightAudit.js';
import { industrialAfterSales } from './industrialAfterSales.js';
import { industrialConfigurator } from './industrialConfigurator.js';
import { limitedErpOrders } from './limitedErpOrders.js';
import { maintenanceRequestTriage } from './maintenanceRequestTriage.js';
import { makeToOrder } from './makeToOrder.js';
import { marketplacePartialReturns } from './marketplacePartialReturns.js';
import { offlineWorkOrders } from './offlineWorkOrders.js';
import { partnerReconciliation } from './partnerReconciliation.js';
import { pdfPurchaseOrders } from './pdfPurchaseOrders.js';
import { photoReturnTriage } from './photoReturnTriage.js';
import { productionReporting } from './productionReporting.js';
import { projectExpenseTriage } from './projectExpenseTriage.js';
import { projectLaborCosts } from './projectLaborCosts.js';
import { renewalBilling } from './renewalBilling.js';
import { purchaseApproval } from './purchaseApproval.js';
import { resourceScheduling } from './resourceScheduling.js';
import { storeCashClosing } from './storeCashClosing.js';
import { supplierOnboarding } from './supplierOnboarding.js';
import { supplierBidComparison } from './supplierBidComparison.js';
import { supplierDocumentReview } from './supplierDocumentReview.js';
import { warrantyClaims } from './warrantyClaims.js';
import { warehouseShortPick } from './warehouseShortPick.js';
import { workOrderEvidence } from './workOrderEvidence.js';
import { whatsappCrmErp } from './whatsappCrmErp.js';
import { buyerGuideTracks } from './plan.js';

const topics = new Map(buyerGuideTracks.flatMap(({ topics, ...track }) =>
  topics.map(([slug, title]) => [slug, { ...track, title }])
));

// Register complete articles only. The plan itself never creates a public route.
export const buyerGuides = [
  erpDecision,
  whatsappCrmErp,
  documentPilot,
  purchaseApproval,
  industrialAfterSales,
  offlineWorkOrders,
  distributorPricing,
  makeToOrder,
  industrialConfigurator,
  partnerReconciliation,
  resourceScheduling,
  warrantyClaims,
  branchInventory,
  carrierDelivery,
  marketplacePartialReturns,
  storeCashClosing,
  warehouseShortPick,
  limitedErpOrders,
  productionReporting,
  projectLaborCosts,
  renewalBilling,
  pdfPurchaseOrders,
  freightAudit,
  workOrderEvidence,
  supplierOnboarding,
  photoReturnTriage,
  projectExpenseTriage,
  maintenanceRequestTriage,
  supplierBidComparison,
  supplierDocumentReview,
].map((article) => {
  const { title, category, service, label, interest } = topics.get(article.slug);
  return {
    ...article,
    title,
    category,
    featured: false,
    primaryGuide: { href: service, label },
    cta: {
      ...article.cta,
      href: diagnosticHref(interest, `artigo-${article.slug}`),
    },
  };
});

import { diagnosticHref } from '../positioning.js';
import { agentOperationalPermissions } from './agentOperationalPermissions.js';
import { aiBaselineMeasurement } from './aiBaselineMeasurement.js';
import { aiConsultingDelivery } from './aiConsultingDelivery.js';
import { aiVendorDependency } from './aiVendorDependency.js';
import { branchInventory } from './branchInventory.js';
import { carrierDelivery } from './carrierDelivery.js';
import { departmentPilotSelection } from './departmentPilotSelection.js';
import { distributorPricing } from './distributorPricing.js';
import { documentPilot } from './documentPilot.js';
import { erpDecision } from './erpDecision.js';
import { erpReadOnlyAgent } from './erpReadOnlyAgent.js';
import { workOrderPreparationAgent } from './workOrderPreparationAgent.js';
import { orderExceptionAgent } from './orderExceptionAgent.js';
import { catalogEquivalentSearchAgent } from './catalogEquivalentSearchAgent.js';
import { qualityIncidentReportAgent } from './qualityIncidentReportAgent.js';
import { crmMeetingRecordAgent } from './crmMeetingRecordAgent.js';
import { renewalDossierAgent } from './renewalDossierAgent.js';
import { supplierSlaExceptionAgent } from './supplierSlaExceptionAgent.js';
import { parallelSoftwareMigration } from './parallelSoftwareMigration.js';
import { freightAudit } from './freightAudit.js';
import { industrialAfterSales } from './industrialAfterSales.js';
import { industrialConfigurator } from './industrialConfigurator.js';
import { internalProceduresAgent } from './internalProceduresAgent.js';
import { purchasingAnalystAgent } from './purchasingAnalystAgent.js';
import { inferenceCostDiagnostic } from './inferenceCostDiagnostic.js';
import { knowledgeBaseAssessment } from './knowledgeBaseAssessment.js';
import { limitedErpOrders } from './limitedErpOrders.js';
import { maintenanceRequestTriage } from './maintenanceRequestTriage.js';
import { makeToOrder } from './makeToOrder.js';
import { marketplacePartialReturns } from './marketplacePartialReturns.js';
import { multiBranchAiDiagnostic } from './multiBranchAiDiagnostic.js';
import { offlineWorkOrders } from './offlineWorkOrders.js';
import { partnerReconciliation } from './partnerReconciliation.js';
import { pdfPurchaseOrders } from './pdfPurchaseOrders.js';
import { photoReturnTriage } from './photoReturnTriage.js';
import { productionReporting } from './productionReporting.js';
import { productionAiReview } from './productionAiReview.js';
import { projectExpenseTriage } from './projectExpenseTriage.js';
import { projectLaborCosts } from './projectLaborCosts.js';
import { renewalBilling } from './renewalBilling.js';
import { purchaseApproval } from './purchaseApproval.js';
import { resourceScheduling } from './resourceScheduling.js';
import { sensitiveDataPilot } from './sensitiveDataPilot.js';
import { storeCashClosing } from './storeCashClosing.js';
import { supplierOnboarding } from './supplierOnboarding.js';
import { supplierBidComparison } from './supplierBidComparison.js';
import { supplierDocumentReview } from './supplierDocumentReview.js';
import { warrantyClaims } from './warrantyClaims.js';
import { warehouseShortPick } from './warehouseShortPick.js';
import { workOrderEvidence } from './workOrderEvidence.js';
import { whatsappCrmErp } from './whatsappCrmErp.js';
import { whatsappAfterHoursSupport } from './whatsappAfterHoursSupport.js';
import { whatsappB2BLeadQualification } from './whatsappB2BLeadQualification.js';
import { whatsappCatalogFreshness } from './whatsappCatalogFreshness.js';
import { whatsappDistributorQuotes } from './whatsappDistributorQuotes.js';
import { whatsappFieldVisitScheduling } from './whatsappFieldVisitScheduling.js';
import { whatsappOrderSupport } from './whatsappOrderSupport.js';
import { whatsappRegionalSupport } from './whatsappRegionalSupport.js';
import { whatsappSupportMigration } from './whatsappSupportMigration.js';
import { whatsappWarrantyIntake } from './whatsappWarrantyIntake.js';
import { whatsappUrgentRouting } from './whatsappUrgentRouting.js';
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
  multiBranchAiDiagnostic,
  aiConsultingDelivery,
  knowledgeBaseAssessment,
  aiVendorDependency,
  inferenceCostDiagnostic,
  sensitiveDataPilot,
  departmentPilotSelection,
  aiBaselineMeasurement,
  productionAiReview,
  agentOperationalPermissions,
  whatsappDistributorQuotes,
  whatsappOrderSupport,
  whatsappFieldVisitScheduling,
  whatsappRegionalSupport,
  whatsappAfterHoursSupport,
  whatsappCatalogFreshness,
  whatsappB2BLeadQualification,
  whatsappWarrantyIntake,
  whatsappUrgentRouting,
  whatsappSupportMigration,
  internalProceduresAgent,
  purchasingAnalystAgent,
  erpReadOnlyAgent,
  workOrderPreparationAgent,
  orderExceptionAgent,
  catalogEquivalentSearchAgent,
  qualityIncidentReportAgent,
  crmMeetingRecordAgent,
  renewalDossierAgent,
  supplierSlaExceptionAgent,
  parallelSoftwareMigration,
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

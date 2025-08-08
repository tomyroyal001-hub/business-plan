// Environment variable for API base URL
declare global {
  interface ImportMetaEnv {
    VITE_API_BASE_URL?: string;
  }
}

// Page import functions with constant keys and default placeholders

export interface PageImportData {
  [key: string]: string;
}

// API configuration
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Generic API call function
const fetchPageData = async (endpoint: string): Promise<PageImportData> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization header if needed
        // 'Authorization': `Bearer ${token}`
      },
    });
    
    if (!response.ok) {
      console.warn(`API call failed for ${endpoint}: ${response.status}`);
      return {};
    }
    
    const data = await response.json();
    return data || {};
  } catch (error) {
    console.warn(`API call error for ${endpoint}:`, error);
    return {};
  }
};

// Dynamic card data interfaces
export interface StatsCard {
  label: string;
  value: string;
  icon?: string;
  color?: string;
}

export interface MarketSegment {
  name: string;
  value: string;
  percentage: string;
  color: string;
}

export interface Stakeholder {
  id: number;
  name: string;
  role: string;
  stake: string;
  experience: string;
  email: string;
  linkedin: string;
}

export interface ProductFeature {
  name: string;
  description: string;
  percentage: string;
  color: string;
  icon: string;
}

export interface MarketingChannel {
  name: string;
  percentage: string;
  color: string;
  icon: string;
}

export interface FinancialMetric {
  label: string;
  value: string;
  description: string;
  percentage?: string;
  color: string;
}

export interface FundingAllocation {
  category: string;
  amount: string;
  percentage: string;
  color: string;
  icon: string;
}

// Page 1: Cover Page
export const importCoverPageData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/cover-page');
  const mergedData = { ...apiData, ...data };
  
  return {
    companyName: mergedData.companyName || '',
    subtitle: mergedData.subtitle || '',
    year: mergedData.year || '',
    preparedBy: mergedData.preparedBy || '',
    // Dynamic stats cards
    statsCards: mergedData.statsCards ? JSON.parse(mergedData.statsCards) : [] as StatsCard[]
  };
};

// Page 2: Table of Contents
export const importTableOfContentsData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/table-of-contents');
  const mergedData = { ...apiData, ...data };
  
  return {
    showPageNumbers: mergedData.showPageNumbers === 'false' ? false : true,
    includeSubsections: mergedData.includeSubsections === 'true' ? true : false
  };
};

// Page 3: Company Description
export const importCompanyDescriptionData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/company-description');
  const mergedData = { ...apiData, ...data };
  
  return {
    legalStructure: mergedData.legalStructure || '',
    companyHistory: mergedData.companyHistory || '',
    industry: mergedData.industry || '',
    visionStatement: mergedData.visionStatement || '',
    uniqueValueProposition: mergedData.uniqueValueProposition || '',
    // Dynamic stats cards
    statsCards: mergedData.statsCards ? JSON.parse(mergedData.statsCards) : [] as StatsCard[]
  };
};

// Page 4: Market Analysis
export const importMarketAnalysisData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/market-analysis');
  const mergedData = { ...apiData, ...data };
  
  return {
    industryAnalysis: mergedData.industryAnalysis || '',
    targetMarket: mergedData.targetMarket || '',
    marketSize: mergedData.marketSize || '',
    competitorAnalysis: mergedData.competitorAnalysis || '',
    competitiveAdvantage: mergedData.competitiveAdvantage || '',
    // Dynamic market data
    totalMarket: mergedData.totalMarket || '',
    marketGrowth: mergedData.marketGrowth || '',
    marketSegments: mergedData.marketSegments ? JSON.parse(mergedData.marketSegments) : [] as MarketSegment[]
  };
};

// Page 5: Organization and Management
export const importOrganizationManagementData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/organization-management');
  const mergedData = { ...apiData, ...data };
  
  return {
    stakeholderInfo: mergedData.stakeholderInfo || '',
    leadershipTeam: mergedData.leadershipTeam || '',
    organizationalStructure: mergedData.organizationalStructure || '',
    advisoryBoard: mergedData.advisoryBoard || '',
    keyPersonnel: mergedData.keyPersonnel || '',
    // Dynamic stakeholder data
    stakeholders: mergedData.stakeholders ? JSON.parse(mergedData.stakeholders) : [] as Stakeholder[]
  };
};

// Page 6: Service or Product Line
export const importProductServiceData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/product-service');
  const mergedData = { ...apiData, ...data };
  
  return {
    productDescription: mergedData.productDescription || '',
    benefitsToCustomers: mergedData.benefitsToCustomers || '',
    developmentStage: mergedData.developmentStage || '',
    intellectualProperty: mergedData.intellectualProperty || '',
    futureProducts: mergedData.futureProducts || '',
    // Dynamic product features
    productFeatures: mergedData.productFeatures ? JSON.parse(mergedData.productFeatures) : [] as ProductFeature[]
  };
};

// Page 7: Marketing & Sales Strategy
export const importMarketingSalesData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/marketing-sales');
  const mergedData = { ...apiData, ...data };
  
  return {
    marketingStrategy: mergedData.marketingStrategy || '',
    salesStrategy: mergedData.salesStrategy || '',
    pricingStrategy: mergedData.pricingStrategy || '',
    distributionChannels: mergedData.distributionChannels || '',
    promotionStrategy: mergedData.promotionStrategy || '',
    // Dynamic marketing channels
    marketingChannels: mergedData.marketingChannels ? JSON.parse(mergedData.marketingChannels) : [] as MarketingChannel[]
  };
};

// Page 8: Financial Projections
export const importFinancialProjectionsData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/financial-projections');
  const mergedData = { ...apiData, ...data };
  
  return {
    startupCosts: mergedData.startupCosts || '',
    salesForecast: mergedData.salesForecast || '',
    expenseProjections: mergedData.expenseProjections || '',
    breakEvenAnalysis: mergedData.breakEvenAnalysis || '',
    fundingNeeds: mergedData.fundingNeeds || '',
    // Dynamic financial metrics
    financialMetrics: mergedData.financialMetrics ? JSON.parse(mergedData.financialMetrics) : [] as FinancialMetric[],
    projectedRevenue: mergedData.projectedRevenue || '',
    revenueTimeline: mergedData.revenueTimeline || ''
  };
};

// Page 9: Funding Request
export const importFundingRequestData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/funding-request');
  const mergedData = { ...apiData, ...data };
  
  return {
    currentFundingNeeds: mergedData.currentFundingNeeds || '',
    futureFundingNeeds: mergedData.futureFundingNeeds || '',
    useOfFunds: mergedData.useOfFunds || '',
    strategicFinancialSituation: mergedData.strategicFinancialSituation || '',
    exitStrategy: mergedData.exitStrategy || '',
    // Dynamic funding allocation
    fundingAllocation: mergedData.fundingAllocation ? JSON.parse(mergedData.fundingAllocation) : [] as FundingAllocation[]
  };
};

// Page 10: Appendix
export const importAppendixData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/appendix');
  const mergedData = { ...apiData, ...data };
  
  return {
    resumes: mergedData.resumes || '',
    permits: mergedData.permits || '',
    legalDocuments: mergedData.legalDocuments || '',
    marketResearch: mergedData.marketResearch || '',
    additionalInfo: mergedData.additionalInfo || ''
  };
};

// Page 11: Government Policy
export const importGovernmentPolicyData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/government-policy');
  const mergedData = { ...apiData, ...data };
  
  return {
    industryRegulations: mergedData.industryRegulations || '',
    complianceRequirements: mergedData.complianceRequirements || '',
    licensingRequirements: mergedData.licensingRequirements || '',
    policyChanges: mergedData.policyChanges || '',
    taxIncentives: mergedData.taxIncentives || ''
  };
};

// Page 12: NGO Landscape
export const importNGOLandscapeData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/ngo-landscape');
  const mergedData = { ...apiData, ...data };
  
  return {
    relevantNGOs: mergedData.relevantNGOs || '',
    potentialPartnerships: mergedData.potentialPartnerships || '',
    resourcesOffered: mergedData.resourcesOffered || '',
    contactInformation: mergedData.contactInformation || '',
    successStories: mergedData.successStories || ''
  };
};

// Page 13: Grants & Funding
export const importGrantsData = async (data?: PageImportData) => {
  // Fetch data from API
  const apiData = await fetchPageData('/grants');
  const mergedData = { ...apiData, ...data };
  
  return {
    governmentGrants: mergedData.governmentGrants || '',
    ngoGrants: mergedData.ngoGrants || '',
    eligibilityCriteria: mergedData.eligibilityCriteria || '',
    applicationProcess: mergedData.applicationProcess || '',
    applicationDeadlines: mergedData.applicationDeadlines || '',
    grantAcquisitionStrategy: mergedData.grantAcquisitionStrategy || '',
    // Dynamic funding stats
    fundingStats: mergedData.fundingStats ? JSON.parse(mergedData.fundingStats) : [] as StatsCard[]
  };
};

// Master function to import data for all pages
export const importAllPagesData = async (jsonData: any = {}) => {
  return {
    coverPage: await importCoverPageData(jsonData.coverPage),
    tableOfContents: await importTableOfContentsData(jsonData.tableOfContents),
    companyDescription: await importCompanyDescriptionData(jsonData.companyDescription),
    marketAnalysis: await importMarketAnalysisData(jsonData.marketAnalysis),
    organizationManagement: await importOrganizationManagementData(jsonData.organizationManagement),
    productService: await importProductServiceData(jsonData.productService),
    marketingSales: await importMarketingSalesData(jsonData.marketingSales),
    financialProjections: await importFinancialProjectionsData(jsonData.financialProjections),
    fundingRequest: await importFundingRequestData(jsonData.fundingRequest),
    appendix: await importAppendixData(jsonData.appendix),
    governmentPolicy: await importGovernmentPolicyData(jsonData.governmentPolicy),
    ngoLandscape: await importNGOLandscapeData(jsonData.ngoLandscape),
    grants: await importGrantsData(jsonData.grants)
  };
};

// Function to get constant keys for each page (useful for documentation/validation)
export const getPageKeys = () => {
  return {
    coverPage: ['companyName', 'subtitle', 'year', 'preparedBy', 'statsCards'],
    tableOfContents: ['showPageNumbers', 'includeSubsections'],
    companyDescription: ['legalStructure', 'companyHistory', 'industry', 'visionStatement', 'uniqueValueProposition', 'statsCards'],
    marketAnalysis: ['industryAnalysis', 'targetMarket', 'marketSize', 'competitorAnalysis', 'competitiveAdvantage', 'totalMarket', 'marketGrowth', 'marketSegments'],
    organizationManagement: ['stakeholderInfo', 'leadershipTeam', 'organizationalStructure', 'advisoryBoard', 'keyPersonnel', 'stakeholders'],
    productService: ['productDescription', 'benefitsToCustomers', 'developmentStage', 'intellectualProperty', 'futureProducts', 'productFeatures'],
    marketingSales: ['marketingStrategy', 'salesStrategy', 'pricingStrategy', 'distributionChannels', 'promotionStrategy', 'marketingChannels'],
    financialProjections: ['startupCosts', 'salesForecast', 'expenseProjections', 'breakEvenAnalysis', 'fundingNeeds', 'financialMetrics', 'projectedRevenue', 'revenueTimeline'],
    fundingRequest: ['currentFundingNeeds', 'futureFundingNeeds', 'useOfFunds', 'strategicFinancialSituation', 'exitStrategy', 'fundingAllocation'],
    appendix: ['resumes', 'permits', 'legalDocuments', 'marketResearch', 'additionalInfo'],
    governmentPolicy: ['industryRegulations', 'complianceRequirements', 'licensingRequirements', 'policyChanges', 'taxIncentives'],
    ngoLandscape: ['relevantNGOs', 'potentialPartnerships', 'resourcesOffered', 'contactInformation', 'successStories'],
    grants: ['governmentGrants', 'ngoGrants', 'eligibilityCriteria', 'applicationProcess', 'applicationDeadlines', 'grantAcquisitionStrategy', 'fundingStats']
  };
};
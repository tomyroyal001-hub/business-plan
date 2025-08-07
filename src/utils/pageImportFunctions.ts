// Page import functions with constant keys and default placeholders

export interface PageImportData {
  [key: string]: string;
}

// Page 1: Cover Page
export const importCoverPageData = (data: PageImportData) => {
  return {
    companyName: data.companyName || 'TechVenture Solutions',
    subtitle: data.subtitle || 'Comprehensive Business Plan',
    year: data.year || new Date().getFullYear().toString(),
    preparedBy: data.preparedBy || 'John Smith, CEO'
  };
};

// Page 2: Table of Contents
export const importTableOfContentsData = (data: PageImportData) => {
  return {
    showPageNumbers: data.showPageNumbers === 'false' ? false : true,
    includeSubsections: data.includeSubsections === 'true' ? true : false
  };
};

// Page 3: Company Description
export const importCompanyDescriptionData = (data: PageImportData) => {
  return {
    legalStructure: data.legalStructure || 'TechVenture Solutions is incorporated as a Private Limited Company (LLC) in Delaware. This structure provides liability protection for shareholders while offering operational flexibility and tax advantages. The LLC structure is ideal for our technology-focused business model as it allows for multiple investor rounds and employee stock option programs while maintaining simplified reporting requirements.',
    companyHistory: data.companyHistory || 'Founded in January 2023 by John Smith and Sarah Johnson, TechVenture Solutions emerged from a shared vision to revolutionize small business automation. Starting in a garage with $50,000 in personal savings, we achieved our first major milestone by securing 100 beta customers within 6 months. In December 2023, we completed our seed funding round of $500,000 and expanded our team to 8 employees.',
    industry: data.industry || 'We operate in the Business Process Automation (BPA) industry, specifically targeting small to medium enterprises (SMEs). The global BPA market is valued at $9.8 billion and growing at 12.2% annually. Our focus on AI-powered workflow automation positions us at the intersection of artificial intelligence and business efficiency, addressing the critical need for SMEs to compete with larger enterprises through technology.',
    visionStatement: data.visionStatement || 'To become the leading provider of AI-powered business automation solutions for SMEs worldwide, enabling every small business to operate with enterprise-level efficiency. We envision a future where technology barriers are eliminated, allowing entrepreneurs to focus on innovation and growth rather than repetitive tasks.',
    uniqueValueProposition: data.uniqueValueProposition || 'Unlike complex enterprise solutions, our platform offers plug-and-play automation that can be implemented in under 24 hours without technical expertise. Our AI learns from each business\'s unique processes, providing personalized automation recommendations. With 99.9% uptime, 24/7 support, and pricing 60% below competitors, we make enterprise-grade automation accessible to businesses of all sizes.'
  };
};

// Page 4: Market Analysis
export const importMarketAnalysisData = (data: PageImportData) => {
  return {
    industryAnalysis: data.industryAnalysis || 'The Business Process Automation industry is experiencing unprecedented growth, driven by digital transformation initiatives and labor cost optimization. Key trends include AI integration (growing 45% annually), cloud-based solutions adoption (78% of new implementations), and SME market expansion (fastest growing segment at 15% CAGR). Regulatory support through digital transformation incentives and data privacy compliance requirements are creating additional demand.',
    targetMarket: data.targetMarket || 'Our primary target market consists of SMEs with 10-200 employees in service industries (consulting, marketing, legal, healthcare administration). These businesses typically have annual revenues of $1M-$50M, are technology-adopters but lack dedicated IT staff, and struggle with manual processes that limit scalability. Geographically, we focus on North American English-speaking markets initially, with 85% of target businesses located in urban/suburban areas.',
    marketSize: data.marketSize || 'Total Addressable Market (TAM): $9.8B globally for BPA solutions. Serviceable Addressable Market (SAM): $2.1B for SME-focused automation in North America. Serviceable Obtainable Market (SOM): $42M representing 2% market penetration within 5 years. The SME automation segment is projected to grow at 15% CAGR, reaching $3.2B by 2028.',
    competitorAnalysis: data.competitorAnalysis || 'Primary competitors include Zapier (market leader, 35% share, complex setup), Microsoft Power Automate (20% share, enterprise-focused), and IFTTT (15% share, consumer-oriented). Key gaps we exploit: simplified onboarding (competitors require 2-4 weeks setup vs. our 24 hours), SME-specific pricing (competitors charge $500+/month vs. our $99/month), and personalized AI recommendations (unique to our platform).',
    competitiveAdvantage: data.competitiveAdvantage || 'Our sustainable advantages include: (1) Proprietary AI engine with 18 months of SME workflow data, (2) Patent-pending "Business DNA" technology for automatic process discovery, (3) Exclusive partnerships with 12 major SME software providers, (4) 95% customer retention rate creating network effects, (5) $2M invested in SME-specific UI/UX research. High switching costs and continuous learning algorithms create strong moats.'
  };
};

// Page 5: Organization and Management
export const importOrganizationManagementData = (data: PageImportData) => {
  return {
    stakeholderInfo: data.stakeholderInfo || 'John Smith (CEO, 45% equity): Former Microsoft PM with 12 years experience, MBA from Wharton. LinkedIn: /in/johnsmith-tech. Email: john@techventure.com. Sarah Johnson (CTO, 35% equity): Ex-Google engineer, 10 years in AI/ML, MS Computer Science Stanford. LinkedIn: /in/sarahjohnson-ai. Email: sarah@techventure.com. Seed Investors (20% equity): TechStart Ventures and Angel Group led by former Salesforce executives.',
    leadershipTeam: data.leadershipTeam || 'John Smith brings product management expertise from scaling Microsoft Teams from 0 to 100M users. Sarah Johnson architected machine learning systems at Google serving 1B+ users daily. Together, they have 22 years of combined experience in enterprise software, having generated over $500M in revenue for previous employers. Both have successfully launched products that achieved product-market fit within 18 months.',
    organizationalStructure: data.organizationalStructure || 'Flat organizational structure with CEO and CTO as co-founders reporting to Board of Directors. Three departments: Engineering (4 people) led by CTO, Product & Marketing (2 people) led by CEO, and Operations (2 people) reporting to CEO. Advisory Board provides strategic guidance. All employees have equity participation and quarterly performance reviews.',
    advisoryBoard: data.advisoryBoard || 'Dr. Michael Chen: Former VP of AI at Salesforce, 20 years enterprise software experience, advisor to 8 successful startups. Lisa Rodriguez: Ex-McKinsey partner specializing in SME digital transformation, author of "Small Business, Big Technology". David Park: Serial entrepreneur with 3 exits totaling $200M, expert in B2B SaaS scaling and go-to-market strategies.',
    keyPersonnel: data.keyPersonnel || 'Alex Thompson (Lead Engineer): 8 years at Amazon, expert in distributed systems and AI infrastructure. Maria Garcia (Head of Customer Success): Former Zendesk manager, reduced churn by 40% in previous role. Tom Wilson (Sales Director): 6 years B2B SaaS sales experience, consistently exceeded quotas by 150%+. All key personnel have stock options and 2+ year retention agreements.'
  };
};

// Page 6: Service or Product Line
export const importProductServiceData = (data: PageImportData) => {
  return {
    productDescription: data.productDescription || 'AutoFlow Pro is a cloud-based AI automation platform designed specifically for SMEs. Core features include: (1) Visual workflow builder with 200+ pre-built templates, (2) AI-powered process discovery that automatically identifies automation opportunities, (3) Native integrations with 150+ business applications, (4) Real-time analytics dashboard, (5) Mobile app for workflow monitoring. The platform eliminates manual data entry, automates customer communications, and streamlines operations without requiring technical expertise.',
    benefitsToCustomers: data.benefitsToCustomers || 'Customers experience immediate benefits: 75% reduction in manual data entry, 60% faster customer response times, 40% decrease in operational costs, and 90% improvement in process accuracy. Our AI identifies $50,000+ in annual savings opportunities for typical customers. The platform scales with business growth, reduces employee burnout from repetitive tasks, and provides 24/7 automated operations. ROI is typically achieved within 3 months.',
    developmentStage: data.developmentStage || 'Currently in Production Phase with 150+ active customers. Core platform is feature-complete with 99.9% uptime. Active development includes: Advanced AI recommendations (Q2 2024), Mobile workflow creation (Q3 2024), and Enterprise security features (Q4 2024). We maintain 2-week release cycles with continuous customer feedback integration. Beta testing program includes 25 customers providing early access to new features.',
    intellectualProperty: data.intellectualProperty || 'Patent pending for "Business DNA" technology (Application #US2023/789456) - our proprietary method for automatic business process discovery. Trademark registered for "AutoFlow Pro" and company logo. Copyrighted training materials and customer onboarding methodology. Trade secrets include our AI training dataset of 50,000+ SME workflows and proprietary algorithm for workflow optimization scoring.',
    futureProducts: data.futureProducts || 'Product roadmap includes: (1) AutoFlow Analytics - predictive business intelligence module (Q3 2024), (2) AutoFlow Mobile - native iOS/Android apps (Q4 2024), (3) AutoFlow Enterprise - advanced security and compliance features (Q1 2025), (4) AutoFlow Marketplace - third-party automation templates (Q2 2025). International expansion planned for UK and Canada markets by Q4 2024.'
  };
};

// Page 7: Marketing & Sales Strategy
export const importMarketingSalesData = (data: PageImportData) => {
  return {
    marketingStrategy: data.marketingStrategy || 'Multi-channel approach targeting SME decision-makers through content marketing (SEO-optimized blog, whitepapers, case studies), social media (LinkedIn, Twitter), paid advertising (Google Ads, LinkedIn Ads), and strategic partnerships. Positioning as "Enterprise automation made simple for small business." Monthly marketing budget of $25,000 with 40% digital ads, 30% content creation, 20% events, 10% partnerships. Target: 500 qualified leads monthly.',
    salesStrategy: data.salesStrategy || 'Inside sales model with 3-person sales team. Process: Lead qualification → Product demo → 14-day free trial → Closing call → Onboarding. Average sales cycle: 21 days. Target: $2M ARR by end of 2024. Commission structure: 8% of first-year revenue plus 3% renewals. CRM: Salesforce with automated lead scoring. Monthly targets: 50 demos, 25 trials, 15 closed deals per salesperson.',
    pricingStrategy: data.pricingStrategy || 'Value-based SaaS pricing: Starter ($99/month, 5 workflows), Professional ($299/month, 25 workflows), Enterprise ($599/month, unlimited). 60% below competitor pricing while delivering superior ROI. Annual plans offer 20% discount. Free 14-day trial with no credit card required. Custom enterprise pricing for 200+ employee companies. Price increases planned at 15% annually based on added value.',
    distributionChannels: data.distributionChannels || 'Primary: Direct online sales through company website (70% of sales). Secondary: Partner channel through business consultants and software integrators (25% of sales). Emerging: Marketplace listings on Salesforce AppExchange and Microsoft AppSource (5% of sales). All channels supported by dedicated customer success team and comprehensive online documentation.',
    promotionStrategy: data.promotionStrategy || 'Launch campaigns: "Automate in 24 Hours" challenge, referral program offering 3 months free, case study video series featuring customer success stories. Trade shows: 6 SME-focused conferences annually. PR strategy includes thought leadership articles in SME publications. Customer retention: quarterly business reviews, exclusive user community, and loyalty rewards program for multi-year contracts.'
  };
};

// Page 8: Financial Projections
export const importFinancialProjectionsData = (data: PageImportData) => {
  return {
    startupCosts: data.startupCosts || 'Total startup costs: $750,000. Breakdown: Technology infrastructure $200,000 (AWS, development tools, security), Personnel $300,000 (6 months runway for 8 employees), Marketing $150,000 (launch campaigns, website, branding), Legal & Compliance $50,000 (incorporation, patents, contracts), Office & Equipment $30,000 (co-working space, laptops), Working Capital $20,000 (insurance, utilities, miscellaneous).',
    salesForecast: data.salesForecast || 'Year 1: $500,000 (150 customers), Year 2: $1,800,000 (450 customers), Year 3: $4,200,000 (900 customers), Year 4: $7,500,000 (1,500 customers), Year 5: $12,000,000 (2,200 customers). Growth assumptions: 25% monthly growth in Year 1, 15% in Year 2, 10% thereafter. Average customer value: $3,600 annually. Churn rate: 5% monthly decreasing to 3% by Year 3.',
    expenseProjections: data.expenseProjections || 'Year 1 expenses: $800,000 (Personnel 60%, Marketing 25%, Technology 10%, Operations 5%). Year 2: $1,400,000. Year 3: $2,800,000. Fixed costs: Personnel, office rent ($5,000/month). Variable costs: AWS hosting (3% of revenue), payment processing (2.9% of revenue), customer acquisition ($150 per customer). Annual expense growth rate: 75% Year 2, 50% Year 3, 35% thereafter.',
    breakEvenAnalysis: data.breakEvenAnalysis || 'Break-even point: Month 18 with 200 customers and $720,000 annual revenue. Monthly break-even: $60,000 revenue covering $60,000 expenses. Unit economics: Customer Acquisition Cost $150, Customer Lifetime Value $10,800 (LTV:CAC ratio 72:1). Sensitivity analysis: Break-even moves to Month 15 with 10% cost reduction or Month 21 with 10% revenue reduction.',
    fundingNeeds: data.fundingNeeds || 'Series A funding requirement: $2,000,000 over 18 months. Use of funds: Product development 40% ($800,000), Sales & Marketing 35% ($700,000), Personnel expansion 20% ($400,000), Working capital 5% ($100,000). Funding timeline: $1,200,000 immediate, $800,000 at Month 12. Alternative scenario: $1,500,000 extends runway to profitability with slower growth.'
  };
};

// Page 9: Funding Request
export const importFundingRequestData = (data: PageImportData) => {
  return {
    currentFundingNeeds: data.currentFundingNeeds || 'Immediate funding requirement: $2,000,000 Series A by Q2 2024. Current runway extends to Month 8 with existing $200,000 cash. Critical timing: Must secure funding by March 2024 to maintain growth trajectory and avoid layoffs. Funding enables scaling from 150 to 1,000 customers by end of 2024. Without funding, growth stalls and we risk losing market position to well-funded competitors.',
    futureFundingNeeds: data.futureFundingNeeds || 'Series B: $8,000,000 in Q4 2025 for international expansion and enterprise features. Series C: $20,000,000 in Q2 2027 for market consolidation and acquisitions. Total funding path: $30,000,000 over 4 years. Future rounds will fund geographic expansion (Europe, Asia), vertical-specific solutions (healthcare, legal), and potential acquisitions of complementary technologies.',
    useOfFunds: data.useOfFunds || 'Series A allocation: Product Development 40% ($800,000) - AI enhancement, mobile apps, enterprise features. Sales & Marketing 35% ($700,000) - team expansion from 3 to 8 sales reps, marketing automation, trade shows. Personnel 20% ($400,000) - hire 6 engineers, 2 customer success managers. Operations 5% ($100,000) - legal, compliance, infrastructure scaling.',
    strategicFinancialSituation: data.strategicFinancialSituation || 'Current metrics: $42,000 MRR growing 25% monthly, $504,000 ARR, 95% gross margins, $150 CAC, $10,800 LTV, 5% monthly churn. Cash position: $200,000 remaining from seed round. Revenue model: 85% subscription, 15% professional services. Key metrics trending positively: NPS score 72, product-market fit achieved with 150+ customers, 40% of growth from referrals.',
    exitStrategy: data.exitStrategy || 'Primary exit: Strategic acquisition by enterprise software company (Salesforce, Microsoft, ServiceNow) in 5-7 years at 8-12x revenue multiple. Target valuation: $200-400M based on comparable exits (Zapier $5B, UiPath $35B). Secondary option: IPO if we achieve $100M+ ARR by 2028. Management buyout possible if founders want to maintain control. Expected investor returns: 15-25x for Series A investors.'
  };
};

// Page 10: Appendix
export const importAppendixData = (data: PageImportData) => {
  return {
    resumes: data.resumes || 'Detailed resumes available for: John Smith (CEO) - 12 years Microsoft product management, MBA Wharton, launched 3 products with $100M+ revenue. Sarah Johnson (CTO) - 10 years Google AI/ML engineering, MS Stanford, 15 patents in machine learning. Alex Thompson (Lead Engineer) - 8 years Amazon distributed systems, BS MIT. Complete resumes with references available upon request.',
    permits: data.permits || 'Business License: Delaware LLC #5432109 (renewed annually). Software License: Delaware Software Development License #SD-2023-445. Data Processing: GDPR compliance certification, SOC 2 Type II in progress. Export Control: EAR99 classification for international sales. All permits current with automatic renewal notifications set up.',
    legalDocuments: data.legalDocuments || 'Certificate of Incorporation (Delaware, Jan 2023), Operating Agreement with equity allocations, Employee Stock Option Plan (10% pool), Customer Terms of Service, Privacy Policy (GDPR compliant), Patent Application #US2023/789456, Trademark Registration #6789012, Standard Customer Agreement template, Vendor/Contractor agreements.',
    marketResearch: data.marketResearch || 'Primary research: Survey of 500 SMEs (March 2023) showing 78% struggle with manual processes, 65% willing to pay $200+/month for automation. Focus groups with 25 target customers validated product-market fit. Third-party reports: Gartner "Magic Quadrant for RPA" 2023, McKinsey "Future of Work in SMEs" study, Forrester "Business Process Automation Market Forecast 2024-2028".',
    additionalInfo: data.additionalInfo || 'Product demo videos and screenshots, Technical architecture documentation, Customer case studies with ROI calculations, Letters of intent from 3 enterprise prospects, Partnership agreements with TechStart Ventures and SME Business Consultants, Press coverage in TechCrunch and Business Insider, Customer testimonials and NPS survey results (72 score).'
  };
};

// Page 11: Government Policy
export const importGovernmentPolicyData = (data: PageImportData) => {
  return {
    industryRegulations: data.industryRegulations || 'Primary regulations: FTC Act (fair business practices), CCPA/GDPR (data privacy), SOX compliance for enterprise customers, Export Administration Regulations for international sales. Regulatory bodies: FTC, SEC (for future public offerings), state commerce departments. Recent changes: EU AI Act (2024) requires transparency in AI decision-making, impacting our automation recommendations feature.',
    complianceRequirements: data.complianceRequirements || 'Data Protection: GDPR Article 25 (privacy by design), CCPA consumer rights compliance, SOC 2 Type II certification (in progress). Quality Standards: ISO 27001 for information security (planned 2024), NIST Cybersecurity Framework implementation. Industry Standards: OAuth 2.0 for integrations, REST API security best practices, 99.9% uptime SLA compliance.',
    licensingRequirements: data.licensingRequirements || 'Business Operations: Delaware business license (renewed annually), Software development license, Professional liability insurance ($2M coverage). Technology: No specific software licensing required, but maintain compliance with open-source licenses (MIT, Apache 2.0). International: Export control classification (EAR99) for global sales, potential EU representative required for GDPR.',
    policyChanges: data.policyChanges || 'Beneficial changes: CHIPS Act provides R&D tax credits for AI development, Small Business Innovation Research (SBIR) grants now include automation technologies. Challenges: Proposed AI regulation bills may require algorithm auditing, increasing compliance costs by estimated $50,000 annually. State privacy laws expanding beyond California may require additional compliance measures.',
    taxIncentives: data.taxIncentives || 'Current benefits: R&D Tax Credit (25% of qualified expenses, ~$75,000 annually), Delaware startup tax exemption (first $20M revenue), QSBS eligibility for founders (potential $10M tax-free gain). Available programs: SBIR Phase I grants ($275,000), Delaware Innovation Fund matching grants, Export-Import Bank financing for international expansion.'
  };
};

// Page 12: NGO Landscape
export const importNGOLandscapeData = (data: PageImportData) => {
  return {
    relevantNGOs: data.relevantNGOs || 'SCORE (Small Business Mentorship): 10,000+ volunteer mentors, focuses on SME growth and technology adoption. Small Business Administration (SBA): Federal agency supporting 30M+ small businesses with loans and resources. TechSoup: Technology donations and discounts for nonprofits, 1M+ organizations served. National Small Business Association (NSBA): 65,000 members, advocacy for SME-friendly policies.',
    potentialPartnerships: data.potentialPartnerships || 'SCORE Partnership: Provide automation training to their 10,000 mentors, reach 300,000+ small businesses annually. SBA Collaboration: Become preferred technology vendor for SBA resource partners, access to government contracting opportunities. TechSoup Integration: Offer discounted automation services to nonprofits, expand market reach to 1M+ organizations. NSBA Membership: Thought leadership opportunities, policy advocacy alignment.',
    resourcesOffered: data.resourcesOffered || 'SCORE: Free mentorship, business plan review, marketing guidance, access to 300+ workshops annually. SBA: Loan guarantees up to $5M, government contracting opportunities, export assistance programs. TechSoup: Technology grants, nonprofit market insights, cause marketing opportunities. NSBA: Policy advocacy, networking events, small business research and data.',
    contactInformation: data.contactInformation || 'SCORE: partnerships@score.org, (800) 634-0245, www.score.org, Contact: Maria Rodriguez, Partnership Director. SBA: techpartnerships@sba.gov, (202) 205-6665, www.sba.gov, Contact: James Wilson, Technology Partnerships. TechSoup: partnerships@techsoup.org, (415) 633-9300, www.techsoup.org, Contact: Lisa Chen, Business Development.',
    successStories: data.successStories || 'Case Study 1: Zapier-SCORE partnership trained 50,000+ small businesses on automation, resulting in 15% customer acquisition increase. Case Study 2: Salesforce-SBA collaboration provided CRM solutions to 100,000+ small businesses, generating $500M in additional revenue. Case Study 3: Microsoft-TechSoup partnership donated $2B in software, reaching 1M+ nonprofits globally, enhancing brand reputation significantly.'
  };
};

// Page 13: Grants & Funding
export const importGrantsData = (data: PageImportData) => {
  return {
    governmentGrants: data.governmentGrants || 'SBIR Phase I: $275,000 for R&D (AI automation research). SBIR Phase II: $1.75M for commercialization. NSF Small Business Innovation Research: $500,000 for technology development. Delaware Innovation Fund: $250,000 matching grant for startups. Export-Import Bank: $1M credit facility for international expansion. NIST Manufacturing Extension Partnership: $100,000 for process improvement.',
    ngoGrants: data.ngoGrants || 'Kauffman Foundation: $150,000 for entrepreneurship programs. Grameen America: $50,000 microgrants for underserved entrepreneurs. Accion Opportunity Fund: $100,000 small business loans at 6% interest. TechSoup: $25,000 in donated software and services. Local Community Foundation: $75,000 for job creation in underserved areas.',
    eligibilityCriteria: data.eligibilityCriteria || 'SBIR: <500 employees, 51%+ US-owned, for-profit, principal research in US. Delaware Innovation Fund: Delaware-based, <$5M annual revenue, technology focus. Export-Import Bank: US exporter, creditworthy, foreign sales potential. Kauffman Foundation: Early-stage, scalable business model, job creation potential. Most grants require: Business plan, financial statements, tax returns, references.',
    applicationProcess: data.applicationProcess || 'SBIR: Online application via grants.gov, technical proposal (15 pages), commercialization plan, budget justification, 6-month review process. Delaware Innovation Fund: Letter of intent, full application, pitch presentation, due diligence, 3-month process. Foundation grants: Concept paper, full proposal, site visit, board review, 4-6 month timeline.',
    applicationDeadlines: data.applicationDeadlines || 'SBIR Phase I: March 15, July 15, November 15 (quarterly). Delaware Innovation Fund: Rolling applications, reviewed monthly. NSF: February 1, June 1, October 1 (tri-annual). Kauffman Foundation: January 31, May 31, September 30. Export-Import Bank: Rolling applications, 60-day review. TechSoup: Applications accepted year-round.',
    grantAcquisitionStrategy: data.grantAcquisitionStrategy || 'Priority 1: SBIR Phase I ($275,000) - highest probability, aligns with R&D needs. Priority 2: Delaware Innovation Fund ($250,000) - local advantage, matching funds available. Priority 3: Foundation grants ($150,000 total) - diversification strategy. Resource allocation: 40% time on SBIR, 30% state/local grants, 30% foundation grants. Success metrics: 2 grants secured by Q4 2024, $500,000 total funding.'
  };
};

// Master function to import data for all pages
export const importAllPagesData = (jsonData: any) => {
  return {
    coverPage: importCoverPageData(jsonData.coverPage || {}),
    tableOfContents: importTableOfContentsData(jsonData.tableOfContents || {}),
    companyDescription: importCompanyDescriptionData(jsonData.companyDescription || {}),
    marketAnalysis: importMarketAnalysisData(jsonData.marketAnalysis || {}),
    organizationManagement: importOrganizationManagementData(jsonData.organizationManagement || {}),
    productService: importProductServiceData(jsonData.productService || {}),
    marketingSales: importMarketingSalesData(jsonData.marketingSales || {}),
    financialProjections: importFinancialProjectionsData(jsonData.financialProjections || {}),
    fundingRequest: importFundingRequestData(jsonData.fundingRequest || {}),
    appendix: importAppendixData(jsonData.appendix || {}),
    governmentPolicy: importGovernmentPolicyData(jsonData.governmentPolicy || {}),
    ngoLandscape: importNGOLandscapeData(jsonData.ngoLandscape || {}),
    grants: importGrantsData(jsonData.grants || {})
  };
};

// Function to get constant keys for each page (useful for documentation/validation)
export const getPageKeys = () => {
  return {
    coverPage: ['companyName', 'subtitle', 'year', 'preparedBy'],
    tableOfContents: ['showPageNumbers', 'includeSubsections'],
    companyDescription: ['legalStructure', 'companyHistory', 'industry', 'visionStatement', 'uniqueValueProposition'],
    marketAnalysis: ['industryAnalysis', 'targetMarket', 'marketSize', 'competitorAnalysis', 'competitiveAdvantage'],
    organizationManagement: ['stakeholderInfo', 'leadershipTeam', 'organizationalStructure', 'advisoryBoard', 'keyPersonnel'],
    productService: ['productDescription', 'benefitsToCustomers', 'developmentStage', 'intellectualProperty', 'futureProducts'],
    marketingSales: ['marketingStrategy', 'salesStrategy', 'pricingStrategy', 'distributionChannels', 'promotionStrategy'],
    financialProjections: ['startupCosts', 'salesForecast', 'expenseProjections', 'breakEvenAnalysis', 'fundingNeeds'],
    fundingRequest: ['currentFundingNeeds', 'futureFundingNeeds', 'useOfFunds', 'strategicFinancialSituation', 'exitStrategy'],
    appendix: ['resumes', 'permits', 'legalDocuments', 'marketResearch', 'additionalInfo'],
    governmentPolicy: ['industryRegulations', 'complianceRequirements', 'licensingRequirements', 'policyChanges', 'taxIncentives'],
    ngoLandscape: ['relevantNGOs', 'potentialPartnerships', 'resourcesOffered', 'contactInformation', 'successStories'],
    grants: ['governmentGrants', 'ngoGrants', 'eligibilityCriteria', 'applicationProcess', 'applicationDeadlines', 'grantAcquisitionStrategy']
  };
};
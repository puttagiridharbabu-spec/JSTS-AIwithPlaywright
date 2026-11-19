# VWO.com Test Plan

## 1. Document Basis

- **Source:** Product Requirements Document (PRD) VWO.com.pdf
- **PRD date shown:** January 7, 2026
- **Related guidance:** `00_chapter_Prompt_Eng/03_Anti_Hallucinations.md`
- **Product:** VWO (Visual Website Optimizer)

This plan is limited to capabilities and criteria stated in the PRD. It does not infer UI details, role permissions, integration protocols, statistical thresholds, or unlisted behavior. Items that need a product decision are identified in **Open Clarifications**.

## 2. Objectives

Verify the PRD-defined capabilities for experimentation, behavioral insights, personalization, workflow management, integrations, security, performance, scalability, privacy, and reliability. Also verify the two documented user flows: setting up an A/B test and analyzing behavioral data.

## 3. Scope

### In Scope

- A/B, split URL, and multivariate experiments; multiple variations; visual and code editors.
- Audience targeting, custom goals and metrics, SmartStats Bayesian analysis, experiment previews, cross-device/cross-browser QA, scheduling, reporting, and progress monitoring.
- Heatmaps (click, scroll, focus), session recordings, on-page surveys and feedback, and funnel analytics.
- Personalization by geography, behavior, and demographics, with real-time tailored content.
- Optimization planning, collaboration, and Kanban-style experiment backlogs.
- Integration capabilities named by the PRD, including Google Analytics, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, CDPs, analytics systems, and tracking/reporting tools.
- Two-factor authentication (2FA), role-based access control, activity logs, editing-workflow response time, high-visitor-volume scalability, stated data privacy compliance, and the enterprise uptime SLA.
- PRD KPIs as outcome measures, once targets and measurement definitions are supplied.

### Not Defined as Acceptance Scope

The PRD lists an AI-driven suggestion engine, native mobile SDK enhancements, and predictive analytics/ROI forecasting as future enhancements. They are not treated as current acceptance requirements by this plan.

## 4. Test Approach

- **Functional:** Exercise each named capability and confirm the behavior described in the PRD.
- **Workflow:** Follow the A/B test setup and behavioral-data analysis sequences in PRD section 5.
- **Integration:** Verify the named connectors and analytics integrations when the supported connection setup and expected data behavior are documented.
- **Security and privacy:** Verify the stated controls and obtain product/security confirmation of the applicable role rules and regulatory requirements before judging compliance.
- **Performance:** Measure editing workflows against the PRD's two-second response requirement.
- **Scalability and reliability:** Validate against agreed load and availability measurement definitions; the PRD does not provide all required test parameters.
- **Cross-browser/device:** Verify experiment previews and QA across the supported browser/device matrix, which must be supplied.

No automation language, framework, API, library, dependency coordinate, or version is prescribed here; the PRD does not specify an implementation stack. Any later automation should follow the anti-hallucination guidance and be grounded in the project's actual dependency versions and APIs.

## 5. Test Cases

“Expected result” states only a PRD-backed outcome. When the PRD gives no detailed oracle, the case is blocked from a definitive pass/fail until the clarification is answered.

| ID | Priority | Test | Steps | Expected result / oracle |
|---|---|---|---|---|
| TC-EXP-01 | Must | Experiment types and variations | Configure and execute an A/B test, a split URL test, and a multivariate test; include multiple variations in an experiment. | The named experiment types can be run and experiments can contain multiple variations (FR1). Detailed limits and validation rules require clarification. |
| TC-EXP-02 | Must | Experiment setup workflow | Define a hypothesis and target metrics; select audience parameters; configure variations in the visual editor and code editor; launch and monitor the test. | The documented setup steps can be completed, the test launches, and progress can be monitored. |
| TC-EXP-03 | Must | Preview, schedule, and QA | Preview an experiment version, use scheduling, and perform cross-device and cross-browser QA. | Version previews, scheduling, and cross-device/cross-browser QA are available as stated. Supported devices, browsers, and scheduling rules require clarification. |
| TC-STAT-01 | Must | SmartStats and reporting | Review results for a completed experiment in SmartStats and inspect the generated report. | Results use the Bayesian SmartStats engine and a report is generated. Statistical acceptance thresholds and the definition of “actionable” require an approved oracle. |
| TC-BI-01 | Must | Heatmaps | Generate heatmaps for click, scroll, and focus interactions on a key page. | Heatmaps for the three stated interaction types can be generated to visualize user actions. Capture rules and expected sample data require clarification. |
| TC-BI-02 | Must | Recordings, surveys, and funnels | Record sessions, configure an on-page survey/feedback, create funnel analytics, and inspect funnel drop-off information. | Session recordings, on-page surveys/feedback, and funnels are available; funnels support identifying drop-off points. Detailed output and configuration rules require clarification. |
| TC-BI-03 | Must | Correlate behavioral insights | Access the Insights dashboard; generate behavioral data; correlate insights with test outcomes; prioritize an optimization idea. | The documented analysis workflow can be performed. Correlation calculations and prioritization rules require clarification. |
| TC-PER-01 | High | Personalization segments and delivery | Configure segments by geography, behavior, and demographics; deliver customized content to a target segment. | The stated segment dimensions are supported and tailored content is delivered in real time. Segment rules, delivery latency threshold, and content-selection oracle require clarification. |
| TC-WF-01 | Medium | Planning and collaboration workflow | Add optimization initiatives to the central planning interface; use collaboration tools and a Kanban-style experiment backlog with a distributed team. | Central planning, collaboration, and Kanban-style backlog capabilities are available. Task states, collaboration actions, and access rules require clarification. |
| TC-INT-01 | High | Named integration connectors | Verify connection and data synchronization for each configured, supported connector named in PRD section 4.5: Shopify, Salesforce, Segment, Snowflake, WordPress, and Drupal. Also include Google Analytics and Mixpanel from section 4.1. | Supported configured integrations connect and provide the PRD-stated integration/data workflow. Per-connector behavior, direction, fields, and success oracle must be documented before execution. |
| TC-INT-02 | High | Integration ecosystem categories | Verify configured CDP, analytics, tracking, and reporting integrations used for unified data workflows. | Integrations in the supported configured set enable the documented unified data workflow. The exact connector inventory and expected data mapping require clarification. |
| TC-SEC-01 | Must | Two-factor authentication | Exercise the implemented 2FA flow using approved test accounts. | Two-factor authentication is available. Enrollment, recovery, and enforcement rules require clarification. |
| TC-SEC-02 | Must | Role-based access and activity logs | Exercise access using accounts assigned the roles and permissions defined by the product; inspect activity logs for the tested activities. | Access is role-based and activity logs are available. The role/permission matrix and required log events/fields must be supplied before expected access decisions can be asserted. |
| TC-NFR-01 | Must | Editing-workflow response time | Measure response time for each in-scope editing workflow in the agreed test environment. | The system responds within 2 seconds for editing workflows. The measured actions, timing boundaries, percentile, and environment must be agreed. |
| TC-NFR-02 | High | High-volume scalability | Run the agreed high-visitor-volume workload while monitoring the agreed performance indicators. | The system supports the agreed high visitor volume without performance loss. The PRD does not define volume, duration, or “performance loss”; these are required before pass/fail. |
| TC-NFR-03 | Must | Data privacy compliance | Assess the implemented data handling and controls against the applicable GDPR, CCPA, and regional data policies for the agreed test scenarios. | Compliance is demonstrated against the approved regulatory/control checklist. The PRD does not specify data flows, controls, regions, or verification evidence; obtain the checklist before execution. |
| TC-NFR-04 | Must | Enterprise availability | Measure service availability using the agreed monitoring source and SLA measurement window. | Availability meets the 99.9% uptime SLA for enterprise customers. The measurement window, exclusions, and calculation rules require clarification. |

## 6. User-Flow Coverage

### Set Up an A/B Test (PRD 5.1)

Covered by TC-EXP-02, TC-EXP-03, and TC-STAT-01:

1. Define hypothesis and target metrics.
2. Select audience segment parameters.
3. Configure variations using the visual or code editor.
4. Launch the test and monitor progress.
5. Review SmartStats results and conclude a winner.

The PRD does not define the winner-selection rule; do not assert a specific statistical threshold until one is approved.

### Analyze Behavioral Data (PRD 5.2)

Covered by TC-BI-01, TC-BI-02, and TC-BI-03:

1. Access the VWO Insights dashboard.
2. Generate heatmaps, record sessions, and set funnels.
3. Correlate behavioral insights with test outcomes.
4. Prioritize optimization ideas.

## 7. Requirements Traceability

| PRD requirement | Coverage |
|---|---|
| FR1: A/B, split, and multivariate testing | TC-EXP-01 |
| FR2: SmartStats Bayesian analysis | TC-STAT-01 |
| FR3: Visual and code editor | TC-EXP-02 |
| FR4: Heatmaps and session recordings | TC-BI-01, TC-BI-02 |
| FR5: Behavioral audience targeting | TC-EXP-02, TC-PER-01 |
| FR6: Real-time reporting and dashboards | TC-STAT-01, TC-BI-03 |
| FR7: Personalization engine | TC-PER-01 |
| FR8: Integration connectors | TC-INT-01, TC-INT-02 |
| FR9: Collaboration and workflow management | TC-WF-01 |
| NFR: 2FA, role-based access, activity logs | TC-SEC-01, TC-SEC-02 |
| NFR: Editing response within 2 seconds | TC-NFR-01 |
| NFR: High visitor volumes without performance loss | TC-NFR-02 |
| NFR: GDPR, CCPA, and regional data policies | TC-NFR-03 |
| NFR: 99.9% enterprise uptime SLA | TC-NFR-04 |

## 8. Success Metrics

The PRD names these KPIs but gives no target values, baselines, or measurement windows. Track them as product outcome metrics only after those definitions are supplied; they are not pass/fail criteria in this plan as written.

- Conversion rate across prioritized pages.
- Experiments launched per quarter.
- Engineering time for experimentation.
- Engagement rate of personalized campaigns.
- Customer satisfaction/NPS for platform usability.

## 9. Open Clarifications

Resolve these before execution where they affect a definitive result:

- Test environment, supported browser/device matrix, accounts, and test data.
- Experiment variation limits, custom goal/metric rules, schedule behavior, and winner-selection/statistical acceptance criteria.
- Definitions for “statistically validated,” “actionable,” and “real time.”
- Supported connector inventory, setup/authentication, data direction/mapping, and expected results for each integration.
- 2FA enrollment/recovery/enforcement rules; role and permission matrix; activity-log events and required fields.
- Editing actions and timing method for the 2-second requirement.
- High-volume target, workload profile, duration, and performance indicators for scalability.
- Applicable privacy requirements, data flows, regions, controls, and evidence for GDPR, CCPA, and regional policies.
- Uptime measurement window, source, exclusions, and calculation for the 99.9% SLA.
- KPI targets, baselines, and measurement periods.

Until clarified, cases depending on these details should be reported as **Blocked / Oracle Needed**, not failed or passed based on an invented rule.
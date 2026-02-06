# Allama Product Brief for Marketing & Website Development

A comprehensive reference document for creating the Allama product page on digitranslab.com and all marketing materials.

---

## Executive Summary

**Allama** is an open-source, AI-native security automation platform (SOAR) built for modern Security Operations Centres. It enables security teams to automate threat detection, investigation, and response using visual workflows and autonomous AI agents.

**One-liner**: "Open-source AI security automation that turns 15-minute investigations into 30-second workflows."

**Tagline options**:
- "Security Automation, Democratised"
- "AI-Powered Security Operations for Everyone"
- "From Alert Fatigue to Automated Response"

---

## Product Identity

### What Allama Is
- Open-source security orchestration, automation, and response (SOAR) platform
- AI-native automation with LLM integration (not bolted-on AI)
- Visual workflow builder for security playbooks
- Self-hosted solution with full data sovereignty
- Built on enterprise-grade infrastructure (Temporal, FastAPI, PostgreSQL)

### What Allama Is NOT
- Not a SIEM (but integrates with all major SIEMs)
- Not an EDR (but orchestrates EDR responses)
- Not a ticketing system (but has built-in case management)
- Not a replacement for analysts (augments and accelerates them)

---

## Core Value Propositions

### 1. Eliminate Alert Fatigue
- SOC teams process 10,000+ alerts daily with <5 analysts
- 80% of alerts are false positives requiring manual triage
- Allama automates triage, reducing 15-minute investigations to 30 seconds
- Analysts focus on real threats, not repetitive tasks

### 2. AI-Native Automation
- Native LLM integration (OpenAI, Anthropic, Azure, Google, Ollama)
- Autonomous AI agents that investigate alerts independently
- Natural language to security query generation
- Automated incident report writing
- Context-aware decision making

### 3. Open Source Transparency
- 100% open source under AGPL-3.0
- Inspect every line of code protecting your infrastructure
- No vendor lock-in — workflows export to portable YAML
- Community-driven development with rapid iteration
- Self-hosted = your data stays on your infrastructure

### 4. Enterprise-Grade, Startup-Friendly
- Free for unlimited users and workflows
- Same capabilities as $100K+ enterprise SOAR platforms
- Deploy in 5 minutes with Docker Compose
- Scale to production with Kubernetes or AWS ECS

---

## Feature Deep Dive

### Visual Workflow Builder
**What it does**: Drag-and-drop interface for building security automation playbooks without code.

**Key capabilities**:
- Canvas-based workflow design
- Real-time validation and error checking
- YAML export for version control
- Conditional logic (if/then/else)
- Loops and parallel execution
- Child workflow composition
- Scatter-gather patterns for batch processing

**Marketing angle**: "Build sophisticated security playbooks in minutes, not months."

---

### AI Agents & LLM Integration
**What it does**: Deploy autonomous AI agents that can investigate alerts, make decisions, and execute response actions.

**Supported providers**:
| Provider | Models | Use Case |
|----------|--------|----------|
| OpenAI | GPT-4o, GPT-4, GPT-3.5 | Best quality, general purpose |
| Anthropic | Claude 3.5 Sonnet, Claude 3 Opus | Long context, nuanced analysis |
| Azure OpenAI | GPT-4, GPT-3.5 | Enterprise compliance |
| Google | Gemini Pro, Gemini Ultra | Multimodal analysis |
| Ollama | Llama 3, Mistral, etc. | Self-hosted, air-gapped |

**AI capabilities**:
- Alert summarisation (500-line JSON → 10-line summary)
- Threat hunting query generation (natural language → SPL/KQL)
- Incident report writing (case data → executive report)
- Autonomous investigation (multi-step tool execution)
- Severity classification with confidence scoring

**Marketing angle**: "AI that thinks like a senior analyst, works like a tireless intern."

---

### 80+ Pre-Built Integrations
**What it does**: Connect to your existing security stack with ready-to-use integrations.

**Integration categories**:

| Category | Tools |
|----------|-------|
| **SIEM** | Splunk, Elastic Security, Datadog, Wazuh |
| **EDR** | CrowdStrike, SentinelOne |
| **Identity** | Okta, Microsoft Entra ID, Google Workspace, LDAP |
| **Ticketing** | Jira, Zendesk, PagerDuty, Rootly |
| **Communication** | Slack, Microsoft Teams, Email (SMTP) |
| **Threat Intel** | VirusTotal, URLScan, IPInfo, CrowdSec, ThreatStream |
| **Cloud** | AWS (boto3), Google Cloud, Azure |
| **Vulnerability** | HackerOne |
| **Phishing** | GoPhish |
| **Database** | PostgreSQL, MongoDB |

**Custom integrations**:
- YAML action templates (no code required)
- Python UDFs for complex logic
- OpenAPI spec converter (auto-generate from API docs)
- OAuth 2.0 support (authorization code + client credentials)
- Git sync for version-controlled integrations

**Marketing angle**: "Connect everything. Automate anything."

---

### Case Management
**What it does**: Track security incidents from detection to resolution with built-in case management.

**Key features**:
- Custom fields and schemas per workspace
- Task assignment and tracking
- File attachments and evidence collection
- Audit trail and timeline
- Tag-based organisation
- Direct integration with workflows (auto-create cases)
- Comments and collaboration

**Marketing angle**: "From alert to resolution, all in one place."

---

### Core Actions (Building Blocks)
**What it does**: Powerful primitives for building any automation workflow.

**Action types**:

| Action | Description |
|--------|-------------|
| `core.http_request` | Call any REST API with full control |
| `core.http_poll` | Poll APIs until conditions are met |
| `core.http_paginate` | Handle paginated API responses |
| `core.grpc_request` | Call gRPC services |
| `core.script.run_python` | Execute Python in secure sandbox |
| `core.transform.reshape` | Manipulate and transform data |
| `core.transform.filter` | Filter lists with Python lambdas |
| `core.transform.deduplicate` | Remove duplicates from data |
| `core.transform.scatter` | Split lists for parallel processing |
| `core.transform.gather` | Merge scattered results |
| `core.workflow.execute` | Call child workflows |
| `core.cases.create` | Create cases programmatically |
| `core.table.lookup` | Query lookup tables |
| `core.send_email_smtp` | Send email notifications |
| `core.sql.execute_query` | Run SQL queries |

**Marketing angle**: "From simple API calls to complex data pipelines — one platform."

---

### Control Flow & Logic
**What it does**: Build sophisticated automation logic without code.

**Capabilities**:
- **If-conditions**: Run actions conditionally based on expressions
- **Loops**: Iterate over lists with `for var.item in collection`
- **Join strategies**: Wait for all/any upstream actions
- **Wait until**: Pause until a specific time ("tomorrow 2pm")
- **Retry until**: Retry actions until conditions are met
- **Require**: Assert conditions before proceeding

**Expression contexts**:
| Context | Usage | Example |
|---------|-------|---------|
| `ACTIONS` | Reference previous action outputs | `${{ ACTIONS.get_user.result.email }}` |
| `TRIGGER` | Access webhook/trigger data | `${{ TRIGGER.alert.severity }}` |
| `SECRETS` | Retrieve stored credentials | `${{ SECRETS.virustotal.API_KEY }}` |
| `FN` | Call inline functions | `${{ FN.uppercase(TRIGGER.name) }}` |

**Marketing angle**: "Enterprise logic, no-code simplicity."

---

### Secrets Management
**What it does**: Securely store and use credentials in workflows.

**Features**:
- Encrypted at rest in database
- Workspace-scoped access control
- Multi-tenant support (different credentials per environment)
- OAuth token management with auto-refresh
- mTLS and CA certificate support
- Automatic injection into integrations

**Marketing angle**: "Your secrets, secured. Your data, sovereign."

---

### Workflow Triggers
**What it does**: Start workflows from multiple sources.

**Trigger types**:
- **Webhooks**: Receive events from any system
- **Schedules**: Run on cron-like intervals
- **Manual**: Execute via UI with custom payloads
- **Child workflows**: Called from parent workflows

**Webhook features**:
- API key authentication
- IP allowlist restrictions
- Vendor-specific verification (Okta, Slack)
- Multiple content types (JSON, NDJSON, form-encoded)

**Marketing angle**: "Trigger from anywhere. Respond instantly."

---

### Lookup Tables
**What it does**: Store and query reference data within workflows.

**Use cases**:
- IP reputation lists
- User risk scores
- Asset inventories
- Threat intelligence feeds
- Configuration data

**Operations**:
- Insert, update, delete rows
- Lookup single or multiple records
- Use in workflow conditions

**Marketing angle**: "Your data, your context, your decisions."

---

### Expression Functions (100+)
**What it does**: Transform and manipulate data inline without code.

**Function categories**:
- **String**: `uppercase`, `lowercase`, `split`, `join`, `regex_extract`, `url_encode`
- **DateTime**: `now`, `to_datetime`, `format_datetime`, `hours_between`, `is_working_hours`
- **List**: `length`, `flatten`, `unique`, `contains`, `filter`
- **Object**: `lookup`, `merge`, `to_keys`, `to_values`
- **Math**: `add`, `sub`, `mul`, `div`, `mod`, `sum`
- **Logic**: `and`, `or`, `not`, `is_null`, `is_empty`
- **Encoding**: `to_base64`, `from_base64`, `serialize_json`, `deserialize_json`
- **Network**: `check_ip_version`, `ipv4_is_public`, `ipv4_in_subnet`
- **Security**: `extract_cves`, `extract_asns`, `extract_urls`, `extract_emails`
- **Formatting**: `tabulate`, `to_markdown_table`, `prettify_json`

**Marketing angle**: "100+ functions. Zero code required."

---

## Deployment Options

### Docker Compose (Development/Small Teams)
- Single command deployment
- Ideal for evaluation and small teams
- Includes all services (API, worker, database, Temporal)
- 5-minute setup

### AWS ECS Fargate (Production)
- Terraform-based deployment
- Auto-scaling and high availability
- Application Load Balancer
- RDS PostgreSQL
- Production-ready security

### Kubernetes (Coming Soon)
- Helm charts for K8s deployment
- Horizontal pod autoscaling
- Multi-region support

### Air-Gapped Deployments
- Full offline operation
- Self-hosted LLMs via Ollama
- No external dependencies

---

## Authentication & Security

### Authentication Methods
| Method | Use Case |
|--------|----------|
| Basic (email/password) | Development, small teams |
| Google OAuth | Google Workspace organisations |
| SAML SSO | Enterprise (Okta, Entra ID, Keycloak, Authentik) |

### Security Features
- Role-based access control (RBAC)
- Workspace isolation
- Domain allowlists
- Encrypted secrets at rest
- Audit logging
- Session management

---

## Competitive Positioning

### vs. Splunk SOAR
| Aspect | Allama | Splunk SOAR |
|--------|--------|-------------|
| Price | Free | $50-100K+/year |
| AI Integration | Native | Limited |
| Source Code | Open | Closed |
| Deployment | 5 minutes | Weeks |
| Lock-in | None | High |

### vs. Palo Alto XSOAR
| Aspect | Allama | XSOAR |
|--------|--------|-------|
| Price | Free | $75K+/year |
| AI Integration | Native | Limited (requires XSIAM) |
| Integrations | 80+ | 700+ |
| Learning Curve | Low | High |
| Lock-in | None | High |

### vs. Tines/Torq
| Aspect | Allama | Tines/Torq |
|--------|--------|------------|
| Price | Free | $30K+/year |
| Open Source | Yes | No |
| Self-Hosted | Yes | Limited |
| AI Agents | Yes | Limited |

**Positioning statement**: "Enterprise SOAR capabilities at open-source pricing, with AI that actually works."

---

## Use Cases & Workflows

### 1. Automated Phishing Triage
**Problem**: Manual phishing analysis takes 15-30 minutes per email.
**Solution**: Automated workflow that extracts indicators, checks threat intel, classifies severity, and creates cases.
**Result**: 97% reduction in triage time (15 min → 30 sec).

### 2. Alert Enrichment & Correlation
**Problem**: Raw alerts lack context for decision-making.
**Solution**: Automatically enrich alerts with user info, asset data, threat intel, and historical context.
**Result**: Analysts see complete picture immediately.

### 3. Automated Incident Response
**Problem**: Response actions are slow and inconsistent.
**Solution**: Playbooks that automatically isolate hosts, reset credentials, block indicators, and notify stakeholders.
**Result**: Consistent, rapid response every time.

### 4. Threat Hunting Automation
**Problem**: Writing hunt queries is time-consuming and error-prone.
**Solution**: AI generates Splunk/Elastic queries from natural language descriptions.
**Result**: Faster hypothesis testing, more hunts completed.

### 5. Compliance Reporting
**Problem**: Incident reports take hours to write.
**Solution**: AI generates draft reports from case data and workflow history.
**Result**: 1-2 hours saved per incident.

### 6. Multi-Tenant MSSP Operations
**Problem**: MSSPs need to manage multiple customer environments.
**Solution**: Workspace isolation with environment-specific credentials.
**Result**: Single platform for all customers.

---

## Target Personas

### Primary: SOC Analyst / Security Engineer
**Pain points**:
- Drowning in alerts
- Repetitive manual tasks
- Expensive tools out of reach
- Slow vendor response to feature requests

**Value proposition**: "Automate the boring stuff. Focus on real threats."

### Secondary: Security Manager / CISO
**Pain points**:
- Team burnout and turnover
- Budget constraints
- Compliance requirements
- Vendor lock-in concerns

**Value proposition**: "Enterprise security automation without enterprise pricing."

### Tertiary: MSSP / MDR Provider
**Pain points**:
- Multi-tenant complexity
- Scaling analyst capacity
- Differentiation from competitors

**Value proposition**: "Scale your SOC without scaling your headcount."

---

## Proof Points & Metrics

### Performance Claims
- 97% reduction in phishing triage time
- 5-minute deployment (Docker Compose)
- 80+ pre-built integrations
- 100+ inline functions
- Unlimited workflows and users (free tier)

### Technical Specifications
- Built on Temporal (enterprise workflow orchestration)
- FastAPI backend (high performance)
- Next.js frontend (modern, responsive)
- PostgreSQL database (reliable, scalable)
- WebAssembly sandbox for Python scripts (secure)

---

## Call-to-Action Options

### Primary CTAs
- "Get Started Free" → GitHub / Docker quickstart
- "Try Demo" → Live demo environment
- "Book a Demo" → Sales call for enterprise

### Secondary CTAs
- "Star on GitHub" → Community growth
- "Join Discord" → Community engagement
- "Read Docs" → Self-service learning

---

## Brand Voice Guidelines

### Tone
- **Confident but not arrogant**: We know our product is good, but we're honest about trade-offs
- **Technical but accessible**: Speak to practitioners, not executives
- **Helpful, not salesy**: Focus on solving problems, not pushing features
- **Community-first**: Celebrate users and contributors

### Language
- Use British English for all documentation
- Avoid buzzwords: "synergy", "leverage", "best-in-class"
- Be specific: "80+ integrations" not "many integrations"
- Show, don't tell: Include code examples and screenshots

### Messaging Hierarchy
1. **Open source** — Transparency and trust
2. **AI-native** — Modern, intelligent automation
3. **Self-hosted** — Data sovereignty and control
4. **Free** — Accessible to all team sizes

---

## Technical Architecture (For Technical Marketing)

```
┌─────────────────────────────────────────────────────────────┐
│                        Allama Platform                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Next.js   │  │   FastAPI   │  │   Temporal Worker   │  │
│  │  Frontend   │  │   Backend   │  │  (Workflow Engine)  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ PostgreSQL  │  │   Redis     │  │   Temporal Server   │  │
│  │  Database   │  │   Cache     │  │   (Orchestration)   │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐│
│  │              Integration Layer (80+ Tools)              ││
│  │  SIEM │ EDR │ Identity │ Ticketing │ Threat Intel │ AI  ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

## Resources & Links

### Documentation
- Main docs: https://docs.allama.com
- API reference: https://docs.allama.com/api-reference
- Quickstart: https://docs.allama.com/quickstart/tutorial

### Community
- GitHub: https://github.com/digitranslab/allama
- Discord: https://discord.gg/2mK6h9rp
- Twitter: @digitranslab

---

*Document Version: 1.0*
*Last Updated: February 2026*
*For internal use in marketing and website development*

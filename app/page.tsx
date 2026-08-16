"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  siDocker,
  siGit,
  siGithub,
  siGithubactions,
  siGnubash,
  siHelm,
  siJenkins,
  siKubernetes,
  siLinux,
  siPython,
  siTerraform,
  siTrivy,
} from "simple-icons";
import {
  Activity,
  Bug,
  FileSearch,
  Globe2,
  GlobeLock,
  KeyRound,
  LockKeyhole,
  Mail,
  Network,
  ScanSearch,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Split,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const resumeUrl = ""; // Replace with the final public PDF URL when supplied.
const githubUrl = "https://github.com/Waliur003";
const linkedinUrl = "https://www.linkedin.com/in/waliur-r-sun-22762a31a/";
const email = "waliurrahmansun003@gmail.com";
const emailjsServiceId = "service_60s2npm";
const emailjsTemplateId = "template_2wzonp4";
const emailjsPublicKey = "i6n0W2kSTtMddDia-";

const awsSkillIcons: Record<string, string> = {
  AWS: "/aws-icons/aws.svg",
  EC2: "/aws-icons/ec2.svg",
  S3: "/aws-icons/s3.svg",
  IAM: "/aws-icons/iam.svg",
  VPC: "/aws-icons/vpc.svg",
  Lambda: "/aws-icons/lambda.svg",
  RDS: "/aws-icons/rds.svg",
  DynamoDB: "/aws-icons/dynamodb.svg",
  CloudFront: "/aws-icons/cloudfront.svg",
  EKS: "/aws-icons/eks.svg",
  ECS: "/aws-icons/ecs.svg",
  CloudWatch: "/aws-icons/cloudwatch.svg",
  KMS: "/aws-icons/kms.svg",
  WAF: "/aws-icons/waf.svg",
  GuardDuty: "/aws-icons/guardduty.svg",
  "Security Hub": "/aws-icons/security-hub.svg",
  CloudTrail: "/aws-icons/cloudtrail.svg",
  "Amazon Bedrock": "/aws-icons/bedrock.svg",
  "Bedrock Guardrails": "/aws-icons/bedrock.svg",
  Transcribe: "/aws-icons/transcribe.svg",
  Rekognition: "/aws-icons/rekognition.svg",
};

const brandedSkillIcons = {
  Terraform: siTerraform,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Helm: siHelm,
  Linux: siLinux,
  Git: siGit,
  GitHub: siGithub,
  "GitHub Actions": siGithubactions,
  Jenkins: siJenkins,
  Trivy: siTrivy,
  Python: siPython,
  Bash: siGnubash,
};

const brandedSkillColors: Record<string, string> = {
  GitHub: "#f3f6fa",
  Bash: "#dbe7ef",
  Linux: "#FCC624",
};

const conceptSkillIcons: Record<string, LucideIcon> = {
  Networking: Network,
  DNS: Globe2,
  "Load balancing": Network,
  "CI/CD": Workflow,
  "IaC scanning": FileSearch,
  "Least Privilege": KeyRound,
  "Zero Trust": ShieldCheck,
  Segmentation: Network,
  Encryption: LockKeyhole,
  "Incident response": Siren,
  "AI workload security": ShieldCheck,
  "Prompt defense concepts": ShieldAlert,
  "HTTP/HTTPS": GlobeLock,
  "Cloud logging": ScrollText,
  "Security monitoring": ScanSearch,
  "Vulnerability scanning": Bug,
  Observability: Activity,
  "Fault isolation": Split,
};

type Project = {
  title: string;
  category: string;
  tags: string[];
  eyebrow: string;
  summary: string;
  problem: string;
  architecture: string;
  tech: string[];
  security: string[];
  reliability: string[];
  observability: string[];
  decisions: string[];
  lessons: string[];
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Automated EBS Snapshot DR Vault",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Disaster recovery",
    summary: "Automated multi-region EBS volume backups and lifecycle management for disaster recovery resilience. Achieved 99.9% backup execution reliability while reducing manual storage maintenance by 80%. Engineered the workflow with Python AWS Lambda, EventBridge schedules, least-privilege IAM roles, and SNS alerts.",
    problem: "Manual snapshotting leaves critical block storage vulnerable to unrecoverable data loss, inconsistent backup states, and uncoordinated disaster recovery during regional outages.",
    architecture: "Event-driven disaster recovery engine executing automated EBS snapshot lifecycle policies through AWS Lambda, verifying retention limits, managing lifecycle expirations, and dispatching operational status reports.",
    tech: ["AWS Lambda", "Amazon EBS", "Amazon EventBridge", "Amazon SNS", "AWS IAM", "Python"],
    decisions: [
      "Chose Amazon EventBridge cron triggers over dedicated compute daemons to eliminate idle infrastructure costs.",
      "Implemented tag-based snapshot discovery to dynamically filter and target production volumes without hardcoded IDs.",
      "Enforced automated retention cleanup routines within Lambda to prevent compounding EBS snapshot storage fees.",
    ],
    security: [
      "Least-privilege IAM execution roles restricted to ec2:CreateSnapshot, ec2:DeleteSnapshot, and ec2:DescribeVolumes.",
      "Enforced AWS KMS customer-managed key encryption for all snapshot data at rest.",
      "Enabled AWS CloudTrail event tracking to maintain audit trails for snapshot modifications.",
    ],
    reliability: [
      "Automated retry handling with exponential backoff on throttled EC2 API calls.",
      "Tag-based volume verification ensures failed snapshot cycles trigger recovery workflows instead of silent aborts.",
    ],
    observability: [
      "Amazon SNS email notifications broadcast execution summaries, success logs, and failure details.",
      "CloudWatch log streams and metric filters track snapshot creation duration and execution states.",
    ],
    lessons: [
      "Snapshot deletion routines require explicit validation to avoid deleting snapshots actively tied to AMIs.",
      "Bulk snapshot operations require batching to avoid AWS API request-rate limits.",
    ],
    github: "https://github.com/Waliur003/automated-ebs_snapshot-dr-vault",
    featured: true,
  },
  {
    title: "Secure Global Static Website",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Global edge delivery",
    summary: "Architected a globally distributed secure static website with edge protection and custom SSL/TLS. Reduced global load latency by 60% while blocking 100% of common OWASP Top 10 threats. Codified the platform in Terraform using S3, CloudFront, WAF rate limiting, Route 53, and ACM certificates.",
    problem: "Hosting static assets directly from public cloud storage exposes origin buckets to malicious scanning, data tampering, and high latency for geographically distributed users.",
    architecture: "Globally distributed, edge-protected static website platform using Amazon S3 as a private origin, fronted by Amazon CloudFront edge caching, secured with AWS WAF, and codified in Terraform.",
    tech: ["Amazon S3", "Amazon CloudFront", "AWS WAF", "Amazon Route 53", "AWS ACM", "Terraform"],
    decisions: [
      "Restricted direct S3 bucket access by enforcing modern CloudFront Origin Access Control (OAC).",
      "Codified DNS mapping, TLS certificates, CDN distributions, and security rules in modular Terraform configurations.",
      "Terminated custom-domain HTTPS certificates at the edge through AWS Certificate Manager.",
    ],
    security: [
      "Attached AWS WAF Web ACL rules to CloudFront to block common web exploits and rate-limit aggressive clients.",
      "Restricted s3:GetObject access to the designated CloudFront distribution principal.",
      "Enforced HTTPS redirects and modern TLS encryption in transit.",
    ],
    reliability: [
      "Multi-edge Point of Presence caching minimizes load and request volume on the origin bucket.",
      "Amazon S3 provides highly durable storage for website assets.",
    ],
    observability: [
      "CloudFront access logging captures edge locations, HTTP status codes, and cache behavior.",
      "AWS WAF sampled-request dashboards expose blocked traffic signatures and rate-limit triggers.",
    ],
    lessons: [
      "Migrating from Origin Access Identity to Origin Access Control requires precise bucket policies to avoid 403 errors.",
      "Cache invalidations must be sequenced in deployment pipelines to prevent stale assets.",
    ],
    github: "https://github.com/Waliur003/secure-global-static-website",
  },
  {
    title: "Serverless Security Gate",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Cloud security",
    summary: "Engineered a zero-trust serverless API backend with strict identity verification and rate limiting. Processed 1,000+ requests per second at sub-100ms latency while blocking 100% of unauthorized requests. Integrated API Gateway, custom Lambda authorizers, least-privilege IAM policies, and DynamoDB session tracking.",
    problem: "Microservice APIs without centralized authorization are exposed to unauthorized request floods, credential stuffing, and ungoverned endpoint abuse.",
    architecture: "Zero-trust serverless ingestion gateway using Amazon API Gateway with custom AWS Lambda authorizers, DynamoDB state lookup, and strict IAM boundary policies.",
    tech: ["Amazon API Gateway", "AWS Lambda", "Amazon DynamoDB", "AWS IAM", "Python"],
    decisions: [
      "Chose custom Lambda authorizers to implement purpose-built token validation logic.",
      "Used DynamoDB low-latency reads for rapid authorization-token verification.",
      "Configured API Gateway usage plans and API keys to enforce client-level rate limits and quotas.",
    ],
    security: [
      "Scoped the Lambda authorizer role to read-only access on the token registry table.",
      "Sanitized incoming headers and query parameters before forwarding requests.",
      "Enforced strict CORS configuration and TLS encryption on public endpoints.",
    ],
    reliability: [
      "A serverless scaling model absorbs request bursts without provisioned application nodes.",
      "DynamoDB On-Demand capacity supports unpredictable access patterns without fixed provisioning.",
    ],
    observability: [
      "API Gateway execution logs are routed to CloudWatch for end-to-end request tracing.",
      "CloudWatch alarms monitor 4xx errors, 5xx errors, and authorizer latency.",
    ],
    lessons: [
      "Authorizer cache lifetimes must balance performance with rapid revocation of compromised tokens.",
      "Minimal dependencies help keep authorizer cold-start latency from degrading API response time.",
    ],
    github: "https://github.com/Waliur003/serverless-security-gate",
  },
  {
    title: "Intelligent Media Analyzer",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Event-driven vision",
    summary: "Automated real-time computer-vision analysis and object classification for incoming media. Reduced manual moderation effort by 95% while processing uploads in under two seconds. Built the event-driven pipeline with S3 triggers, Lambda, Amazon Rekognition, DynamoDB metadata storage, and SNS notifications.",
    problem: "Manual content moderation, image tagging, and unsafe-material filtering for large volumes of uploaded media is slow, expensive, and difficult to scale.",
    architecture: "Event-driven computer-vision pipeline processing S3 media uploads through Lambda, analyzing visual assets with Amazon Rekognition, and storing metadata in DynamoDB with SNS alerting.",
    tech: ["Amazon S3", "AWS Lambda", "Amazon Rekognition", "Amazon DynamoDB", "Amazon SNS", "Python"],
    decisions: [
      "Decoupled file ingestion from computer-vision execution with asynchronous S3 object-created events.",
      "Used managed Rekognition APIs to avoid operating self-hosted computer-vision models.",
      "Stored detection labels and confidence scores in schema-flexible DynamoDB items.",
    ],
    security: [
      "Blocked public access to input buckets and enabled default server-side encryption.",
      "Limited Lambda permissions to the required Rekognition and DynamoDB actions.",
      "Restricted SNS publishing to the analyzer function.",
    ],
    reliability: [
      "Asynchronous processing prevents upload volume from blocking client response paths.",
      "A dead-letter queue isolates corrupt, unreadable, or unsupported images.",
    ],
    observability: [
      "CloudWatch logs track processing duration, API errors, and memory consumption.",
      "SNS alerts report moderation labels that exceed configured confidence thresholds.",
    ],
    lessons: [
      "Separate output buckets or strict prefix filters prevent recursive S3 event triggers.",
      "Large images may require resizing before analysis to remain within service payload limits.",
    ],
    github: "https://github.com/Waliur003/intelligent-media-analyzer",
  },
  {
    title: "Silent Scalper Data Pipeline",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Data engineering",
    summary: "Deployed a resilient real-time web-scraping and data-ingestion engine with automated failure handling. Maintained 99.5% pipeline uptime with zero data loss during high-volume traffic spikes. Implemented the serverless workflow with Python Lambda workers, S3 storage, DynamoDB indexing, and automated SNS error alerts.",
    problem: "Web-data extraction and market analytics pipelines can fail silently, hit upstream rate limits, and lose unbuffered data when source layouts change.",
    architecture: "Resilient serverless ingestion engine running scheduled Lambda scrapers, writing raw feeds to Amazon S3, recording structured records in DynamoDB, and reporting exceptions through SNS.",
    tech: ["AWS Lambda", "Amazon S3", "Amazon DynamoDB", "Amazon SNS", "Amazon EventBridge", "Python"],
    decisions: [
      "Separated raw semi-structured storage in S3 from query-oriented records in DynamoDB.",
      "Used EventBridge schedules for automated periodic ingestion.",
      "Separated network-timeout handling from data-transformation logic.",
    ],
    security: [
      "Scoped the execution role to specific S3 prefixes and DynamoDB table resources.",
      "Encrypted collected data at rest with AWS KMS.",
      "Kept runtime configuration separate from the collection and transformation logic.",
    ],
    reliability: [
      "Used exponential-backoff retries for intermittent upstream downtime.",
      "Composite DynamoDB keys prevent duplicate records during overlapping executions.",
    ],
    observability: [
      "CloudWatch dashboards visualize ingestion volume, duration, and error rate.",
      "SNS alerts report consecutive parse failures immediately.",
    ],
    lessons: [
      "Upstream layout changes require resilient parsing fallbacks rather than a single brittle selector path.",
      "Lambda workloads need explicit socket timeouts for all external HTTP calls.",
    ],
    github: "https://github.com/Waliur003/silent-scalper-data-pipeline",
  },
  {
    title: "Multi-Tier AI Web Application",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "AI cloud",
    summary: "Built a secure multi-tier web application integrated with generative-AI models. Enforced 100% network isolation for database workloads while sustaining sub-second AI response times. Deployed Flask on private VPC EC2 instances connected to RDS MySQL and Amazon Bedrock through scoped IAM access.",
    problem: "A web application needs an AI capability without exposing its database or model access path to the public internet.",
    architecture: "Production-inspired multi-tier architecture with a public Flask web tier on EC2, a private RDS data tier reachable through internal VPC routing, and Bedrock invoked through scoped IAM roles instead of static credentials.",
    tech: ["AWS EC2", "Flask", "Amazon RDS", "VPC", "Amazon Bedrock", "IAM"],
    decisions: [
      "Separated web, application, and data concerns into distinct subnets so blast radius follows network boundaries.",
      "Chose managed RDS over self-hosted PostgreSQL to shift patching and backups to the platform.",
      "Used an IAM instance role for Bedrock so credentials remain short-lived and rotate automatically.",
    ],
    security: [
      "Placed the database in private subnets and allowed access only from the application security group.",
      "Limited IAM permissions to the specific Bedrock model actions required.",
      "Enabled database encryption at rest and TLS in transit for application traffic.",
    ],
    reliability: [
      "Used application health checks and managed RDS backups.",
      "Handled model invocation failures and timeouts gracefully in the application layer.",
    ],
    observability: [
      "CloudWatch logs and metrics cover the application tier and database performance.",
      "Alarms report application error rate and instance health.",
    ],
    lessons: [
      "Private connectivity is primarily a routing and security-group problem, not an application problem.",
      "Model latency requires explicit timeout and retry handling at the request boundary.",
    ],
    github: "https://github.com/Waliur003/customer-inquiry-manager-ai-pipeline",
    featured: true,
  },
  {
    title: "DevSecOps Ingress Pipeline",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "CI/CD",
    summary: "Established an automated CI/CD pipeline with embedded container security scanning and infrastructure automation. Increased deployment velocity by 70% while preventing 100% of critical container vulnerabilities from reaching production. Orchestrated Jenkins, Trivy scans, Docker builds, Amazon ECR, and Terraform deployments.",
    problem: "Traditional release pipelines can deploy container images containing unpatched vulnerabilities, configuration drift, and unverified infrastructure code.",
    architecture: "Automated DevSecOps pipeline orchestrating Jenkins CI, Docker builds, Trivy vulnerability scanning, artifact management in Amazon ECR, and infrastructure automation with Terraform.",
    tech: ["Jenkins", "Docker", "Trivy", "Amazon ECR", "Terraform", "AWS IAM"],
    decisions: [
      "Implemented vulnerability thresholds that fail builds containing High or Critical findings.",
      "Enforced immutable image tags in ECR to prevent overwriting and runtime drift.",
      "Codified pipeline infrastructure and server configuration with version-controlled Terraform.",
    ],
    security: [
      "Made Trivy scanning a required quality gate before registry push.",
      "Used IAM instance profiles on build workers instead of static AWS access keys.",
      "Configured private ECR repositories with encryption and image scanning.",
    ],
    reliability: [
      "Immutable image digests support fast rollback to a prior stable release.",
      "Automated workspace cleanup prevents build-node disk exhaustion.",
    ],
    observability: [
      "Stage-level logs cover build, scan, push, and deployment steps.",
      "ECR findings and build-status metrics expose security and delivery failures.",
    ],
    lessons: [
      "Docker daemon access in CI environments requires careful non-root isolation.",
      "Layer caching can reduce pipeline time without removing vulnerability-scanning coverage.",
    ],
    github: "https://github.com/Waliur003/devsecops-ingress-pipeline",
  },
  {
    title: "Kubernetes Fortress",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Cloud security",
    summary: "Architected a hardened zero-trust container environment on Amazon EKS. Eliminated 100% of static AWS credentials in workloads and prevented public-internet ingress to worker nodes. Codified EKS with Terraform, private subnets, NAT egress, and IAM Roles for Service Accounts through OIDC federation.",
    problem: "Standard Kubernetes clusters can expose worker nodes to public discovery and rely on insecure, long-lived AWS credentials inside pod workloads.",
    architecture: "Hardened EKS architecture with workers isolated in private subnets, outbound traffic through NAT Gateways, and short-lived IAM Roles for Service Accounts through OIDC federation.",
    tech: ["Amazon EKS", "Terraform", "AWS IAM", "Amazon ECR", "Kubernetes", "Docker"],
    decisions: [
      "Placed worker node groups in private subnets across multiple Availability Zones.",
      "Configured an OIDC identity provider so pods can assume short-lived IAM roles.",
      "Codified VPC networking, IAM trust policies, and the EKS control plane in modular Terraform.",
    ],
    security: [
      "Removed static cloud credentials from containers by using IAM Roles for Service Accounts.",
      "Protected worker nodes from direct public ingress and restricted traffic to cluster security groups.",
      "Separated workloads with dedicated Kubernetes namespaces.",
    ],
    reliability: [
      "Distributed worker nodes across multiple Availability Zones for high availability.",
      "Used stable foreground-process patterns to prevent short-lived containers from entering restart loops.",
    ],
    observability: [
      "Enabled EKS control-plane audit and API server logs in CloudWatch.",
      "Tracked pod lifecycle, status, and restart telemetry with Kubernetes tooling.",
    ],
    lessons: [
      "Stale routes to deleted NAT Gateways can create routing blackholes and silent node-join timeouts.",
      "Minimal containers require an active foreground process to maintain a stable running state.",
    ],
    github: "https://github.com/Waliur003/eks-kubernetes-fortress-identity-federation",
    featured: true,
  },
  {
    title: "AI Meeting Analyst Pipeline",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "Serverless",
    summary: "Built an asynchronous audio-transcription and AI-summarization pipeline for meeting recordings. Converted one-hour audio files into structured executive summaries in under three minutes with 98% reliability. Decoupled processing with S3 events, SQS buffering, Lambda, Transcribe, Bedrock, DynamoDB, and SNS.",
    problem: "Synchronous processing of long meeting recordings causes request timeouts, memory exhaustion, and dropped background jobs.",
    architecture: "Asynchronous audio transcription and generative-AI summarization pipeline buffering uploads through S3 and SQS, transcribing with Amazon Transcribe, generating action items with Bedrock, and indexing results in DynamoDB.",
    tech: ["Amazon S3", "Amazon SQS", "AWS Lambda", "Amazon Transcribe", "Amazon Bedrock", "Amazon DynamoDB", "Amazon SNS"],
    decisions: [
      "Decoupled file ingestion from AI inference with SQS to protect Lambda from concurrency exhaustion.",
      "Used managed Amazon Transcribe to offload hardware-intensive speech processing.",
      "Persisted action items, transcripts, and summaries in DynamoDB.",
    ],
    security: [
      "Limited Lambda roles to designated Transcribe APIs and Bedrock model IDs.",
      "Used KMS encryption for S3 audio objects and DynamoDB records.",
      "Used time-limited pre-signed S3 URLs for uploads without public bucket permissions.",
    ],
    reliability: [
      "An SQS dead-letter queue isolates failed audio payloads for controlled reprocessing.",
      "State-driven job polling lets long audio files complete outside synchronous request limits.",
    ],
    observability: [
      "CloudWatch custom metrics track transcription duration, Lambda memory use, and model-token consumption.",
      "SNS notifications report successful generation of meeting summaries.",
    ],
    lessons: [
      "Long-running transcription jobs require status polling instead of blocking HTTP waits.",
      "Long transcripts require token budgeting and chunking before AI summarization.",
    ],
    github: "https://github.com/Waliur003/serverless-ai-meeting-analyst-pipeline",
  },
  {
    title: "Conversion King AI Web Application",
    category: "Cloud Engineering",
    tags: ["Cloud Engineering"],
    eyebrow: "High availability",
    summary: "Deployed a scalable fault-tolerant three-tier web application with automated load distribution, caching, and monitoring. Sustained 99.99% uptime during traffic bursts while reducing database-read latency by 75%. Orchestrated multi-AZ EC2, ALB, Auto Scaling, ElastiCache Redis, RDS MySQL, CloudWatch alarms, and SNS alerts.",
    problem: "Web applications face single points of failure, unmanaged process termination, and database bottlenecks during sudden traffic bursts.",
    architecture: "Highly available three-tier architecture using private multi-AZ EC2 instances in an Auto Scaling Group behind an Application Load Balancer, backed by ElastiCache Redis, RDS MySQL, and Amazon Bedrock.",
    tech: ["Amazon EC2", "AWS ALB", "Amazon RDS", "Amazon ElastiCache", "Amazon Bedrock", "Amazon CloudWatch", "Amazon SNS", "AWS VPC", "Terraform"],
    decisions: [
      "Placed EC2 workers in private subnets across two Availability Zones with ingress restricted to the ALB.",
      "Ran Flask through Gunicorn managed by systemd for process recovery.",
      "Used ElastiCache Redis for frequent queries to reduce RDS load.",
    ],
    security: [
      "Chained least-privilege security groups across the load-balancer, application, cache, and database tiers.",
      "Kept compute nodes private and used a NAT Gateway only for required outbound access.",
      "Used IAM instance profiles for temporary, scoped Bedrock permissions.",
    ],
    reliability: [
      "ALB target health checks reroute traffic away from unhealthy nodes.",
      "Auto Scaling replaces failed instances and maintains capacity across Availability Zones.",
    ],
    observability: [
      "CloudWatch alarms monitor target response time, HTTP 5xx counts, and EC2 CPU utilization.",
      "SNS notifications report Auto Scaling launch and termination events.",
    ],
    lessons: [
      "Target-group timeouts are often caused by security-group rule mismatches rather than application bugs.",
      "Cloud-init user data runs only at first launch, so persistent systemd services are needed for lifecycle management.",
    ],
    github: "https://github.com/Waliur003/aws-multi-az-alb-ec2-conversion-king",
    featured: true,
  },
  {
    title: "Secure File Vault",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Zero trust data",
    summary: "Enforced zero-trust protection for sensitive cloud files and prevented unauthorized data exfiltration. Achieved 100% KMS encryption at rest and zero unauthorized access attempts. Architected the vault with private S3 storage, customer-managed KMS keys, least-privilege IAM, VPC endpoints, CloudTrail auditing, and Terraform.",
    problem: "Storing sensitive enterprise files in public cloud storage without verifiable zero-trust boundaries risks data leakage, permission sprawl, and unauthorized data exfiltration.",
    architecture: "Zero-trust storage architecture using private Amazon S3 buckets encrypted with customer-managed KMS keys, restricted through least-privilege IAM and VPC endpoint routing, and audited through CloudTrail data events.",
    tech: ["Amazon S3", "AWS KMS", "AWS IAM", "Terraform", "Amazon Cognito", "AWS CloudTrail", "Amazon CloudWatch"],
    decisions: [
      "Selected customer-managed KMS keys for granular rotation, administration, and audit separation.",
      "Used conditional S3 bucket policies to require encrypted transport for every request.",
      "Enabled S3 Object Lock in Governance Mode for write-once-read-many compliance controls.",
    ],
    security: [
      "Blocked public access at both account and bucket levels.",
      "Restricted KMS key use to designated execution roles and scoped IAM permissions to required actions.",
      "Eliminated long-lived static credentials from application access paths.",
    ],
    reliability: [
      "Cross-Region Replication maintains a recoverable secondary copy.",
      "S3 Versioning protects against accidental overwrites and deletions.",
    ],
    observability: [
      "CloudTrail data events record object-level reads, writes, and deletions.",
      "CloudWatch alarms report anomalous spikes in AccessDenied events.",
    ],
    lessons: [
      "KMS policies must delegate administration explicitly to prevent administrative lockout.",
      "Strict bucket conditions require carefully scoped exceptions for trusted AWS service principals.",
    ],
    github: "https://github.com/Waliur003/cloud-aegis-file-vault",
    featured: true,
  },
  {
    title: "Cloud Security Scout",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Compliance automation",
    summary: "Automated real-time cloud compliance auditing and misconfiguration detection. Reduced compliance checks to under 30 seconds while flagging 100% of open security-group violations. Built the serverless scanner with Python Lambda, Boto3, EventBridge triggers, DynamoDB state tracking, SNS notifications, and Terraform.",
    problem: "Dynamic AWS environments drift from approved baselines, leaving exposed security groups, public storage, and unencrypted resources undetected.",
    architecture: "Event-driven compliance engine where EventBridge schedules and state changes invoke Python Lambda scanners, DynamoDB records compliance history, and SNS distributes findings.",
    tech: ["AWS Lambda", "Python", "Boto3", "Amazon EventBridge", "Amazon DynamoDB", "Amazon SNS", "AWS Secrets Manager", "Terraform"],
    decisions: [
      "Used Lambda instead of persistent audit servers to eliminate idle compute cost.",
      "Stored historical compliance state in DynamoDB for fast change comparison.",
      "Decoupled scanning from multi-channel alert delivery through SNS.",
    ],
    security: [
      "Bound scanners to read-only SecurityAudit permissions.",
      "Encrypted DynamoDB records with a customer-managed KMS key.",
      "Stored alerting webhooks in AWS Secrets Manager.",
    ],
    reliability: [
      "An SQS dead-letter queue captures failed scans for reprocessing.",
      "Boto3 pagination, exponential backoff, and retries handle large accounts and API throttling.",
    ],
    observability: [
      "CloudWatch Logs capture scanned-resource counts and detailed execution traces.",
      "Metric filters track compliance drift and failed scanner invocations.",
    ],
    lessons: [
      "Large account sweeps require pagination and rate-aware API calls.",
      "Event-driven drift detection is faster and more cost-effective than continuous polling.",
    ],
    github: "https://github.com/Waliur003/cloud-security-scout-compliance",
  },
  {
    title: "Container Security Falcon",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Container security",
    summary: "Hardened containerized microservices and reduced container-breakout risk. Eliminated root-privilege execution and maintained zero public ingress exposure for backend tasks. Engineered multi-stage non-root Docker images, automated ECR vulnerability scanning, private ECS Fargate networking, runtime logging, and Terraform deployment.",
    problem: "Containers running as root or built from unvetted images expose cloud workloads to remote code execution and container breakout attacks.",
    architecture: "Hardened container workflow using multi-stage non-root Docker builds, ECR scanning on push, and private ECS Fargate tasks behind isolated load-balancer boundaries.",
    tech: ["Docker", "Amazon ECR", "AWS ECS Fargate", "Amazon VPC", "AWS ALB", "Amazon CloudWatch", "Terraform"],
    decisions: [
      "Chose Fargate to remove host operating-system and kernel maintenance.",
      "Used minimal base images to reduce the runtime attack surface.",
      "Adopted multi-stage builds so compilers and debugging tools never enter production images.",
    ],
    security: [
      "Ran containers under a non-root UID with read-only root filesystems.",
      "Enabled ECR scanning on push for critical and high vulnerabilities.",
      "Placed tasks in private subnets with no public IP assignment.",
    ],
    reliability: [
      "ECS Service Auto Scaling adjusts task counts from CPU and memory demand.",
      "Deployment circuit breakers automatically roll back unhealthy releases.",
    ],
    observability: [
      "Container Insights tracks task-level CPU, memory, and network utilization.",
      "The awslogs driver streams application output into CloudWatch Logs.",
    ],
    lessons: [
      "Read-only filesystems require explicit ephemeral mounts for writable runtime paths.",
      "Vulnerability gates must separate operating-system findings from language dependencies for efficient triage.",
    ],
    github: "https://github.com/Waliur003/container-security-falcon-orchestration",
  },
  {
    title: "Hardened DevSecOps Pipeline",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Shift-left security",
    summary: "Implemented shift-left security governance across the delivery lifecycle. Blocked 100% of critical CVEs and Infrastructure as Code misconfigurations before production deployment. Integrated Checkov, tfsec, Trivy, secret detection, policy gates, Docker, and Terraform directly into an automated Jenkins CI/CD pipeline.",
    problem: "Releasing application and infrastructure code without automated security checks allows critical vulnerabilities, exposed secrets, and unsafe cloud configurations to reach production.",
    architecture: "Automated Jenkins security pipeline combining IaC static analysis, container scanning, secret detection, custom policy checks, and build-breaker gates before provisioning.",
    tech: ["Jenkins", "Terraform", "Checkov", "tfsec", "Trivy", "Snyk", "Docker", "GitGuardian", "HashiCorp Vault"],
    decisions: [
      "Embedded security gates before merge and deployment instead of relying on post-release review.",
      "Defined custom OPA and Checkov policies for organization-specific guardrails.",
      "Standardized findings as SARIF and JUnit reports for developer dashboards.",
    ],
    security: [
      "Set a zero critical/high vulnerability threshold for production images.",
      "Used TruffleHog and GitGuardian to block committed secrets.",
      "Ran Jenkins with least-privilege IAM roles instead of static keys.",
    ],
    reliability: [
      "Cached vulnerability databases and dependencies to reduce pipeline overhead.",
      "Parallel security stages preserve delivery throughput without bypassing gates.",
    ],
    observability: [
      "Jenkins metrics track security-gate pass and failure trends.",
      "SNS notifications alert teams immediately when a security check fails.",
    ],
    lessons: [
      "Strict gates require a documented, time-bound exception path for emergency remediation.",
      "IaC scanners need environment-aware tuning to separate accepted patterns from real risk.",
    ],
    github: "https://github.com/Waliur003/hardened-devsecops-iac-pipeline",
  },
  {
    title: "Zero-Trust EKS Fortress",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Kubernetes security",
    summary: "Enforced zero-trust Kubernetes networking and workload identity. Isolated 100% of cross-namespace pod traffic and eliminated static long-lived AWS credentials. Deployed Amazon EKS with Calico default-deny policies, OPA Gatekeeper admission controls, RBAC, KMS encryption, pod security, and IRSA through OIDC federation.",
    problem: "Flat Kubernetes networks and static cloud credentials allow attackers to move laterally after compromising a single workload.",
    architecture: "Private Amazon EKS platform using Calico for micro-segmentation, OPA Gatekeeper for policy enforcement, and IRSA for temporary workload identity.",
    tech: ["Amazon EKS", "Terraform", "Helm", "Calico CNI", "OPA Gatekeeper", "AWS IAM", "AWS KMS", "Prometheus", "Grafana"],
    decisions: [
      "Combined Calico with the AWS VPC CNI for fine-grained L3 and L4 controls.",
      "Used OPA Gatekeeper for declarative, auditable admission constraints.",
      "Adopted IRSA through OIDC to remove embedded AWS access keys.",
    ],
    security: [
      "Applied default-deny network policies across namespaces.",
      "Blocked privileged and root containers while requiring read-only root filesystems.",
      "Scoped IRSA trust to exact service-account and namespace identities.",
    ],
    reliability: [
      "Managed node groups span multiple Availability Zones with automated replacement.",
      "Horizontal Pod Autoscaling and Cluster Autoscaler respond to workload demand.",
    ],
    observability: [
      "EKS control-plane audit and authentication logs stream to CloudWatch.",
      "Prometheus and Grafana track network-policy drops and admission denials.",
    ],
    lessons: [
      "Default-deny policies must permit cluster DNS before workload rollout.",
      "IRSA trust conditions require exact service-account namespace and name matching.",
    ],
    github: "https://github.com/Waliur003/eks-zerotrust-runtime-fortress",
    featured: true,
  },
  {
    title: "Automated Incident Response",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Active defense",
    summary: "Accelerated cloud threat containment and automated security-event remediation. Reduced mean time to respond from two hours to under 15 seconds. Orchestrated GuardDuty and Security Hub findings through EventBridge and Step Functions to quarantine EC2 workloads, preserve forensic snapshots, update WAF blocklists, and notify responders.",
    problem: "Manual triage and containment of compromised instances or malicious traffic gives attackers time to move laterally and steal data.",
    architecture: "Event-driven containment pipeline where GuardDuty and Security Hub findings enter EventBridge and Step Functions, triggering modular Lambda remediation actions and WAF updates.",
    tech: ["AWS GuardDuty", "AWS Security Hub", "Amazon EventBridge", "AWS Step Functions", "AWS Lambda", "AWS WAF", "Amazon SNS", "Terraform"],
    decisions: [
      "Used Step Functions for visual orchestration, execution history, and durable state.",
      "Separated quarantine, forensic capture, blocking, and notification into modular actions.",
      "Added human approval through SNS before destructive termination actions.",
    ],
    security: [
      "Swaps compromised instances into quarantine security groups.",
      "Creates forensic EBS snapshots before network isolation.",
      "Updates WAF rate-limit and IP-blocking controls for active sources.",
    ],
    reliability: [
      "Native Step Functions retries and exponential backoff handle transient API failures.",
      "Asynchronous execution completes containment without blocking the detection path.",
    ],
    observability: [
      "Step Functions records every remediation state transition.",
      "Security Hub aggregates finding status and mitigation outcomes.",
    ],
    lessons: [
      "Isolation must cover every network interface attached to an instance.",
      "Dynamic WAF blocks need automatic expiration to stay within rule-capacity limits.",
    ],
    github: "https://github.com/Waliur003/automated-incident-response-active-defense",
    featured: true,
  },
  {
    title: "Cloud Identity Fortress",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Identity governance",
    summary: "Hardened multi-account cloud identity governance and administrative access. Eliminated 100% of permanent administrator credentials while preventing unauthorized privilege escalation. Architected AWS Organizations, IAM Identity Center, MFA monitoring, SCP guardrails, automated access reviews, and Lambda-driven just-in-time privilege elevation.",
    problem: "Decentralized identity administration across AWS accounts creates static-key sprawl, accumulated privilege, and weak central governance.",
    architecture: "Multi-account governance framework using AWS Organizations, centralized IAM Identity Center access, Service Control Policies, and automated just-in-time elevation workflows.",
    tech: ["AWS Organizations", "AWS IAM Identity Center", "AWS CloudTrail", "AWS Lambda", "Amazon DynamoDB", "Amazon SNS", "Terraform"],
    decisions: [
      "Centralized workforce access through IAM Identity Center instead of local IAM users.",
      "Applied organization-level SCP guardrails that member-account administrators cannot bypass.",
      "Built time-bound access elevation with Lambda and DynamoDB expiration records.",
    ],
    security: [
      "SCPs restrict regions, protect audit logs, and block root API activity.",
      "MFA is required for federated permission sets.",
      "Short-lived STS sessions replace long-lived administrator keys.",
    ],
    reliability: [
      "Organizational units separate core, security, and workload accounts.",
      "Terraform manages permission sets and account assignments reproducibly.",
    ],
    observability: [
      "Organization CloudTrail centralizes authentication and administrative events.",
      "CloudWatch metric filters alert on sensitive IAM changes and unauthorized elevation.",
    ],
    lessons: [
      "SCPs define boundaries but do not grant IAM permissions.",
      "JIT access requires reliable session revocation after the elevation window expires.",
    ],
    github: "https://github.com/Waliur003/cloud-identity-fortress",
  },
  {
    title: "Cloud Threat Hunter & SIEM Platform",
    category: "Cloud Security",
    tags: ["Cloud Security"],
    eyebrow: "Threat detection",
    summary: "Centralized cloud security telemetry and real-time threat detection. Reduced alert latency to under 60 seconds while making 100% of ingested CloudTrail and VPC Flow Logs queryable. Built an encrypted S3 security data lake with Glue schemas, Athena hunting queries, EventBridge detection rules, SNS alerts, and Terraform.",
    problem: "Security logs scattered across cloud services prevent rapid correlation and delay detection of unauthorized API activity and network reconnaissance.",
    architecture: "Serverless security data lake ingesting CloudTrail and VPC Flow Logs into encrypted S3, cataloging data with Glue, querying through Athena, and alerting in real time through EventBridge and SNS.",
    tech: ["Amazon S3", "AWS KMS", "AWS CloudTrail", "AWS VPC Flow Logs", "AWS Glue", "Amazon Athena", "Amazon EventBridge", "Amazon SNS", "Terraform"],
    decisions: [
      "Selected Athena serverless SQL to avoid idle search-cluster cost.",
      "Separated real-time EventBridge alerts from batch Athena threat hunting.",
      "Applied customer-managed KMS encryption to logs and query outputs.",
    ],
    security: [
      "Hardened the data lake with SSE-KMS, public-access blocks, and restrictive write policies.",
      "Detection rules identify AccessDenied and UnauthorizedOperation events in under 60 seconds.",
      "Restricted SNS publishing to the EventBridge service principal.",
    ],
    reliability: [
      "Multi-region CloudTrail ingestion and Glue schemas normalize security data.",
      "Modular Terraform produces repeatable environments across deployment stages.",
    ],
    observability: [
      "Athena queries hunt unauthorized reconnaissance, root logins, and rejected VPC traffic.",
      "EventBridge metrics and SNS JSON alerts provide immediate operational visibility.",
    ],
    lessons: [
      "EventBridge AWS service events require authentic CloudTrail activity for reliable testing.",
      "SNS topic policies must explicitly allow EventBridge to prevent silent notification loss.",
    ],
    github: "https://github.com/Waliur003/cloud-siem-threat-hunter",
    featured: true,
  },
];

const skillGroups = [
  { title: "Cloud", accent: "orange", items: ["AWS", "EC2", "S3", "IAM", "VPC", "Lambda", "RDS", "DynamoDB", "CloudFront", "EKS", "ECS", "CloudWatch", "KMS", "WAF"] },
  { title: "Infrastructure & Cloud Native", accent: "cyan", items: ["Terraform", "Docker", "Kubernetes", "Helm", "Linux", "Networking", "DNS", "Load balancing"] },
  { title: "DevOps / DevSecOps", accent: "blue", items: ["Git", "GitHub", "GitHub Actions", "Jenkins", "CI/CD", "Trivy", "IaC scanning", "Python", "Bash"] },
  { title: "Cloud Security", accent: "orange", items: ["Least Privilege", "Zero Trust", "Segmentation", "Encryption", "GuardDuty", "Security Hub", "CloudTrail", "Incident response"] },
  { title: "AI Cloud", accent: "violet", items: ["Amazon Bedrock", "Bedrock Guardrails", "Transcribe", "Rekognition", "AI workload security", "Prompt defense concepts"] },
  { title: "Systems & Troubleshooting", accent: "cyan", items: ["HTTP/HTTPS", "Cloud logging", "Security monitoring", "Vulnerability scanning", "Observability", "Fault isolation"] },
];

const certifications = [
  ["AWS Certified Solutions Architect – Associate", "Amazon Web Services", "Certified", "orange", "https://i.postimg.cc/CLTLFHHq/image-(5).png", "https://postimg.cc/mhjGj9nL"],
  ["AWS Certified Cloud Practitioner", "Amazon Web Services", "Credential", "orange", "https://i.postimg.cc/8PHfF0Cb/image.png", "https://postimg.cc/hfXt6MTJ"],
  ["HashiCorp Certified: Terraform Associate", "HashiCorp", "Credential", "violet", "https://i.postimg.cc/cJ8Jc9dY/blob.png", "https://postimg.cc/sBsyjJQD"],
  ["Certificate of Cloud Security Knowledge (CCSK) v5", "Cloud Security Alliance", "Credential", "blue", "https://i.postimg.cc/YCv2pnGZ/image-(1).png", "https://postimg.cc/gxPbsKKH"],
  ["CompTIA Security+", "CompTIA", "Credential", "red", "https://i.postimg.cc/L6Z02j4r/blob-(1).png", "https://postimg.cc/RN4TT6HR"],
  ["Certified in Cybersecurity (CC)", "ISC2", "Credential", "cyan", "https://i.postimg.cc/XvhQRJS0/image-(2).png", "https://postimg.cc/TyVVmT3k"],
  ["Google Cybersecurity Certificate", "Google", "Credential", "cyan", "https://i.postimg.cc/MTVbgmms/image-(3).png", "https://postimg.cc/DJfXXsDs"],
  ["Google IT Support Specialization", "Google", "Credential", "blue", "https://i.postimg.cc/zvdLQy6V/GCC-badge-IT-Support-1000x1000.png", "https://postimg.cc/wRmTyj6p"],
  ["Google Project Management", "Google", "Credential", "violet", "https://i.postimg.cc/5tMtn5j1/image-(4).png", "https://postimg.cc/XrQ3vCwD"],
  ["PCEP – Entry-Level Python Programmer", "Python Institute", "Credential", "blue", "https://i.postimg.cc/jdwdT37K/bronze-1-small.png", "https://postimg.cc/bsPjHTgF"],
  ["Practitioner Level Threat Intelligence Analyst", "arcX", "Credential", "orange", "https://i.postimg.cc/HWfjrCHj/medium.png", "https://postimg.cc/PNQd79Ck"],
];

const roadmap = [
  ["01", "Secure LLM Gateway", "Bedrock, Guardrails, API Gateway, IAM, and WAF"],
  ["02", "RAG Security Defender", "Secure retrieval, ingestion, access, and prompt-injection defenses"],
  ["03", "AI Supply Chain Scanner", "Dependencies, containers, IaC, SBOMs, and model deployment artifacts"],
  ["04", "Intelligent AI Threat Detection", "Signals for suspicious model invocation and cloud activity"],
  ["05", "Automated AI Red-Teaming", "Continuous testing for jailbreaks, leakage, and unsafe behavior"],
  ["06", "Zero-Trust AI Agent Platform", "EKS identity, RBAC, policies, runtime security, and restricted tools"],
];

function Logo() {
  return <a className="logo" href="#home" aria-label="Waliur R Sun — home"><span>W</span></a>;
}

function GithubIcon() {
  return <img className="github-icon" src="/github.svg" alt="" aria-hidden="true" />;
}

function LinkedinIcon() {
  return <img className="linkedin-icon" src="/linkedin.svg" alt="" aria-hidden="true" />;
}

function SkillIcon({ name }: { name: string }) {
  const awsIcon = awsSkillIcons[name];
  if (awsIcon) return <img className="skill-icon aws-skill-icon" src={awsIcon} alt="" aria-hidden="true" />;

  const brandIcon = brandedSkillIcons[name as keyof typeof brandedSkillIcons];
  if (brandIcon) {
    const color = brandedSkillColors[name] || `#${brandIcon.hex}`;
    return (
      <svg className="skill-icon brand-skill-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ color }}>
        <path fill="currentColor" d={brandIcon.path} />
      </svg>
    );
  }

  const ConceptIcon = conceptSkillIcons[name];
  return ConceptIcon ? <ConceptIcon className="skill-icon concept-skill-icon" aria-hidden="true" strokeWidth={1.9} /> : null;
}

function ResumeLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "nav-resume" : "button button-secondary"}
      href={resumeUrl || "#resume"}
      aria-label={resumeUrl ? "Download resume" : "Resume will be available soon"}
      onClick={(event) => {
        if (!resumeUrl) {
          event.preventDefault();
          document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      Download Resume
    </a>
  );
}

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="kicker"><i />{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  const detailSections = [
    {
      title: "Engineering decisions",
      items: project.decisions,
    },
    {
      title: "Security",
      items: project.security,
    },
    {
      title: "Reliability",
      items: project.reliability,
    },
    {
      title: "Observability",
      items: project.observability,
    },
    {
      title: "Challenges & lessons learned",
      items: project.lessons,
    },
  ];

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project details">×</button>
        <div className="modal-topline">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h2 id="project-modal-title">{project.title}</h2>

        <section className="modal-section">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </section>

        <section className="modal-section">
          <h3>Architecture</h3>
          <p>{project.architecture}</p>
        </section>

        {detailSections.map((section) => (
          <section className="modal-section" key={section.title}>
            <h3>{section.title}</h3>
            <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        ))}

        <section className="modal-section modal-stack">
          <h3>Technology stack</h3>
          <div className="modal-tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section className="modal-section modal-source">
          <h3>Source code</h3>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /> Open GitHub repository ↗</a>
          ) : (
            <p>Repository publication pending.</p>
          )}
        </section>
      </article>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const filters = ["All", "Cloud Engineering", "Cloud Security"];
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter)), [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const sender = String(data.get("email") || "").trim();
    const name = String(data.get("name") || "").trim();
    const subject = String(data.get("subject") || "Portfolio message").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !sender || !subject || !message || !/^\S+@\S+\.\S+$/.test(sender)) {
      setFormStatus("Please complete all required fields with a valid email address.");
      return;
    }

    setIsSending(true);
    setFormStatus("Sending your message securely…");

    try {
      await emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form, { publicKey: emailjsPublicKey });
      form.reset();
      setFormStatus("Message sent successfully. I’ll get back to you soon.");
    } catch {
      setFormStatus("The message could not be sent. Please try again or use the email link.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <Logo />
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Home", "About", "Skills", "Projects", "Certifications", "Experience", "Education", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
          <ResumeLink compact />
        </nav>
      </header>

      <div id="content">
        <section className="hero frame" id="home">
          <div className="hero-copy reveal visible">
            <span className="availability"><i /> OPEN TO CLOUD & SECURITY OPPORTUNITIES</span>
            <p className="hero-name">WALIUR R SUN</p>
            <h1>Building secure,<br />scalable cloud<br /><em>infrastructure.</em></h1>
            <p className="hero-role">Computer Science Student <span>/</span> Cloud Engineering & Cloud Security</p>
            <p className="hero-intro">I design, automate, secure, monitor, and troubleshoot modern cloud infrastructure—with growing focus on the security of AI workloads.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects</a>
              <ResumeLink />
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
            <div className="hero-socials">
              <div className="hero-social-buttons">
                <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /><b>GitHub</b></a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /><b>LinkedIn</b></a>
              </div>
              <span>Based in New York</span>
            </div>
          </div>
        </section>

        <section className="story section frame" id="about">
          <div className="story-number">02</div>
          <div className="story-copy reveal">
            <span className="kicker"><i />ABOUT</span>
            <h2>Engineering curiosity,<br /><em>secured by design.</em></h2>
          </div>
          <div className="story-body reveal">
            <h3 className="about-me-title">About Me</h3>
            <p className="large-copy">My name is <strong>Waliur R Sun</strong>, and I’m a <strong>Computer Science student at The City College of New York (CCNY)</strong> focused on building my career in <strong>Cloud Engineering and Cloud Security</strong>.</p>
            <p>My interest is less about simply writing applications and more about understanding the infrastructure behind them — <strong>how systems are designed, deployed, automated, scaled, monitored, secured, and recovered when something goes wrong</strong>.</p>
            <p>I’ve built hands-on projects across <strong>AWS, Terraform, Linux, Docker, Kubernetes, Amazon EKS, serverless architectures, CI/CD, DevSecOps, IAM, networking, monitoring, and security automation</strong>. Through these projects, I’ve worked with architectures involving load balancing, private networking, Infrastructure as Code, event-driven systems, container orchestration, least-privilege access, zero-trust concepts, vulnerability scanning, automated incident response, and observability.</p>
            <p>I’m also <strong>AWS Certified Solutions Architect – Associate</strong>, and I continue strengthening my Infrastructure as Code skills with Terraform. Rather than collecting technologies for the sake of having a long skills list, I focus on understanding <strong>why an architecture is designed a certain way, what can fail, how to troubleshoot it, and how to secure it from the beginning</strong>.</p>
            <p>As I deepen my cloud engineering and security foundation, I’m also exploring the emerging intersection of <strong>AI and Cloud Security</strong> — particularly how AI workloads, LLM applications, cloud identities, data pipelines, and AI infrastructure can be securely deployed and operated.</p>
            <div className="about-direction">
              <span>Long-term direction</span>
              <strong>Cloud Engineering <i>→</i> Cloud Security Engineering <i>→</i> AI Cloud Security Engineering</strong>
            </div>
            <p>I enjoy continuously building, experimenting, troubleshooting, and turning cloud concepts into working infrastructure.</p>
            <div className="principles">
              <div>
                <span>01</span>
                <div><b>Automate Repeatably</b><p>Build reproducible infrastructure through Terraform, CI/CD, and automation.</p></div>
              </div>
              <div>
                <span>02</span>
                <div><b>Secure by Design</b><p>Apply least privilege, defense in depth, isolation, encryption, and security controls from the beginning.</p></div>
              </div>
              <div>
                <span>03</span>
                <div><b>Observe Everything</b><p>Use logging, monitoring, metrics, alerting, and troubleshooting to understand how systems behave.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-inner">
            <SectionHeading kicker="SELECTED WORK / 03" title="Architecture with evidence." text="Cloud engineering and security projects built to explore real-world patterns, failure boundaries, and defensible design decisions." />
            <div className="project-filters reveal" role="group" aria-label="Filter projects">
              {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
            </div>
            <div className="project-grid">
              {visibleProjects.length === 0 && (
                <div className="project-empty">Cloud Security projects will be added separately.</div>
              )}
              {visibleProjects.map((project, index) => (
                <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.title}>
                  <div className="project-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="project-category">{project.category}</span></div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <div className="tech-list">{project.tech.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-actions">
                    <button onClick={() => setSelectedProject(project)}>View details →</button>
                    <a href={project.github || githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}><GithubIcon /> GitHub ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section frame" id="skills">
          <SectionHeading kicker="TECHNICAL SYSTEM / 04" title="Built across the cloud stack." text="Tools are grouped by the problems they help solve—not by arbitrary proficiency percentages." />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className={`skill-card reveal accent-${group.accent}`} key={group.title}>
                <div className="skill-card-head"><span>◫</span><h3>{group.title}</h3></div>
                <div className="skill-badges">{group.items.map((item) => <span key={item}><SkillIcon name={item} />{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="frontier section" id="frontier">
          <div className="section-inner frontier-layout">
            <div className="frontier-copy reveal">
              <span className="roadmap-label">UPCOMING / LEARNING ROADMAP</span>
              <span className="kicker"><i />AI CLOUD SECURITY / 05</span>
              <h2>AI Cloud Security—<br /><em>the next frontier.</em></h2>
              <p>I’m expanding from traditional cloud security toward protecting AI workloads: their identity, data paths, model access, dependencies, runtime behavior, and tool permissions.</p>
              <div className="frontier-signal"><span>LEARNING VECTOR</span><i /><b>Cloud Security</b><i /><b>AI Systems</b></div>
            </div>
            <div className="roadmap-list">
              {roadmap.map(([number, title, detail]) => (
                <article className="roadmap-item reveal" key={title}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><b>UPCOMING</b></article>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications section frame" id="certifications">
          <SectionHeading kicker="VERIFIED LEARNING / 06" title="Credentials that reinforce the path." text="Cloud, infrastructure, cybersecurity, and operations credentials represented by their corresponding badge artwork." />
          <div className="cert-grid">
            {certifications.map(([name, issuer, status, color, badge, badgePage]) => (
              <article className={`cert-card reveal cert-${color}`} key={name}>
                <a className="cert-mark" href={badgePage} target="_blank" rel="noreferrer" aria-label={`View ${name} badge image`}>
                  <img src={badge} alt={`${name} badge`} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                </a>
                <div><span>{issuer}</span><h3>{name}</h3><p><i />{status}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-inner split-section">
            <SectionHeading kicker="EXPERIENCE / 07" title="Responsibility beyond the terminal." />
            <div className="timeline">
              <article className="timeline-item reveal"><div className="timeline-date">FEB 2025 — PRESENT</div><div><span>Public Partnerships | PPL</span><h3>Home Health Aide</h3><p>Provide dependable, personalized support with careful attention to individual needs, clear communication, and professional responsibility.</p></div></article>
              <article className="timeline-item reveal"><div className="timeline-date">MAY 2023 — FEB 2025</div><div><span>Marks Home Care Agency · Jamaica, NY</span><h3>Home Health Aide</h3><p>Supported elderly individuals with daily care through consistent communication, patience, dependability, and respect.</p></div></article>
            </div>
          </div>
        </section>

        <section className="education section frame" id="education">
          <span className="education-index">08</span>
          <div className="education-main reveal"><span className="kicker"><i />EDUCATION</span><h2>The City College<br />of New York <em>(CCNY)</em></h2><p>Computer Science</p></div>
          <div className="learning-path reveal">
            <span>FOUNDATION</span>
            {['Computer Science', 'Cloud Engineering', 'Infrastructure as Code', 'Kubernetes', 'DevSecOps', 'Cloud Security', 'AI Cloud Security'].map((item, index) => <div key={item}><i>{String(index + 1).padStart(2, '0')}</i><b>{item}</b></div>)}
          </div>
        </section>

        <section className="github-section section" id="github">
          <div className="section-inner github-card reveal">
            <div><span className="kicker"><i />ENGINEERING IN PUBLIC / 09</span><h2>Follow the work,<br /><em>not a stats widget.</em></h2><p>Repositories, architecture experiments, implementation notes, and the continued evolution of my cloud engineering and security practice.</p><a className="button button-primary" href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> View GitHub profile ↗</a></div>
            <div className="github-terminal" aria-label="GitHub profile preview"><div><i /><i /><i /><span><GithubIcon />github.com/Waliur003</span></div><pre><code><b>$</b> focus --current<br /><span>aws · terraform · kubernetes</span><br /><span>devsecops · cloud-security</span><br /><br /><b>$</b> principle --show<br /><span>build → secure → observe → improve</span><br /><br /><b>$</b> status<br /><em>learning in public_</em></code></pre></div>
          </div>
        </section>

        <section className="resume-note frame" id="resume" aria-label="Resume availability">
          <span>RESUME CONFIGURATION</span><p>The final resume PDF has not been supplied yet. The download action is ready to connect when it becomes available.</p>
        </section>

        <section className="contact section frame" id="contact">
          <div className="contact-copy reveal">
            <span className="kicker"><i />CONTACT / 10</span>
            <h2>Let’s build secure<br />cloud infrastructure.</h2>
            <p>Interested in cloud engineering, cloud support, DevOps, infrastructure, platform, or cloud security opportunities.</p>
            <div className="contact-links">
              <a className="contact-button" href={`mailto:${email}`} aria-label="Email Waliur R Sun">
                <span className="contact-button-icon"><Mail aria-hidden="true" strokeWidth={1.8} /></span>
              </a>
              <a className="contact-button" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Open Waliur R Sun on GitHub">
                <span className="contact-button-icon"><GithubIcon /></span>
              </a>
              <a className="contact-button" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Open Waliur R Sun on LinkedIn">
                <span className="contact-button-icon"><LinkedinIcon /></span>
              </a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitContact} noValidate>
            <div className="form-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
            <label>Subject<input name="subject" required placeholder="Opportunity or project" /></label>
            <label>Message<textarea name="message" required rows={6} placeholder="Tell me what you’re building…" /></label>
            <button className="button button-primary" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send message"}</button>
            <p className="form-status" aria-live="polite">{formStatus}</p>
          </form>
        </section>
      </div>

      <footer>
        <div className="footer-inner"><Logo /><p>WALIUR R SUN · CLOUD ENGINEERING & CLOUD SECURITY</p><a href="#home">BACK TO TOP ↑</a></div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}

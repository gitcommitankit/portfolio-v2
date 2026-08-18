import FourInARowImage from '@/public/images/four-in-a-row.webp';
import BlueDartAlertsImage from '@/public/images/bluedart-alerts.webp';
import AgentraxImage from '@/public/images/agentrax.webp';
import { MajorProject } from '@/types/major-project';

export const majorProjects: MajorProject[] = [
  {
    title: 'Agentrax',
    tagLine: 'Cloud-Native Kubernetes Operator for AI & LLM Agents',
    description:
      'A Kubernetes operator for AI agent workloads featuring multi-tenant quota enforcement, Prometheus-driven canary rollouts with auto-rollback, metrics-based autoscaling, and an embedded MCP service discovery registry.',
    image: AgentraxImage,
    techStack: [
      'Admission Webhooks',
      'Canary Rollouts',
      'CI/CD',
      'controller-runtime',
      'Docker',
      'Gateway API',
      'Go',
      'Helm',
      'Kubernetes (CRDs)',
      'Model Context Protocol (MCP)',
      'Prometheus',
    ],
    githubLink: 'https://github.com/gitcommitankit/agentrax',
    deployedLink: 'https://github.com/gitcommitankit/agentrax',
  },
  {
    title: 'Four in a Row',
    tagLine: 'Real-time Multiplayer',
    description:
      'A real-time multiplayer 4-in-a-Row game where players are matched 1v1, with an automatic competitive bot fallback if no opponent joins. Supports live gameplay, player reconnection, match forfeits, and a global leaderboard.',
    image: FourInARowImage,
    techStack: [
      'CI/CD',
      'Docker',
      'Go',
      'Kafka',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'WebSockets',
    ],
    githubLink: 'https://github.com/gitcommitankit/four-in-a-row/',
    deployedLink: 'https://ankit-four-in-a-row.vercel.app',
  },
  {
    title: 'Blue Dart Alerts',
    tagLine: 'Automated Delivery Alerts on Discord',
    description:
      'An automated shipment-tracking service that monitors delivery status updates and notifies users in real time via a Discord bot, ensuring timely alerts whenever tracking events change.',
    image: BlueDartAlertsImage,
    techStack: [
      'Cheerio',
      'Cron Jobs',
      'Discord Bot API',
      'MongoDB',
      'Next.js',
      'Node.js',
      'TypeScript',
    ],
    githubLink: 'https://github.com/gitcommitankit/bluedart-alerts/',
    deployedLink: 'https://ankit-bluedart-alerts.vercel.app',
  },
];

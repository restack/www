
import React from 'react';
import { KubernetesIcon, SpeedIcon, UsersIcon, ShieldIcon, GitOpsIcon, CostIcon } from './Icons';

const features = [
  {
    icon: <KubernetesIcon className="h-8 w-8 text-green-400" />,
    title: 'GPU Kubernetes that doesn’t fall apart',
    description: 'DGX / H100 nodes, SR-IOV, Multus, Cilium, RDMA networking, NUMA & PCIe topology sanity. Your jobs see the right GPUs with the right bandwidth.',
  },
  {
    icon: <SpeedIcon className="h-8 w-8 text-green-400" />,
    title: 'High-throughput training & tuning',
    description: 'NCCL, InfiniBand fabrics, multi-node FSDP / ZeRO strategies, data prefetch from NFS / S3 / cache SSD. No more “it runs on one node but dies on eight.”',
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-green-400" />,
    title: 'Self-serve dev environments for researchers',
    description: 'Per-user GPU dev containers with isolated keys, storage mounts, secrets, and cleanup policy. Stop doing “can I borrow that node?” on Slack.',
  },
  {
    icon: <ShieldIcon className="h-8 w-8 text-green-400" />,
    title: 'Secure hybrid network',
    description: 'On-prem ↔ cloud (AWS/GCP) over IPSec/BGP or Transit Gateway, private service exposure via Cloudflare Tunnel, Gateway API, Zero Trust access.',
  },
  {
    icon: <GitOpsIcon className="h-8 w-8 text-green-400" />,
    title: 'GitOps & lifecycle',
    description: 'ArgoCD app-of-apps, Helmfile bootstrap vs platform layering, secrets via Infisical / Vault, documented handover.',
  },
  {
    icon: <CostIcon className="h-8 w-8 text-green-400" />,
    title: 'Cost sanity',
    description: 'Local NVMe cache instead of constant object-store pulls, burst to cloud only when on-prem GPUs are full, and predictable spend you can tell your CFO.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Critical problems I solve</h2>
          <p className="mt-4 text-lg text-gray-400">
            You’re moving fast, hiring researchers, burning GPU budget — but infra is lagging. I come in, design it right, make it stable, and leave you with playbooks your team can own.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex transform flex-col rounded-xl border border-gray-800 bg-gray-950/50 p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-green-500/50">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

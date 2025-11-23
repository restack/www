
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
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Critical problems I solve</h2>
          <p className="mt-4 text-lg text-slate-400">
            You’re moving fast, hiring researchers, burning GPU budget — but infra is lagging. I come in, design it right, make it stable, and leave you with playbooks your team can own.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-lg bg-white/5 p-3 text-emerald-400 ring-1 ring-white/10 group-hover:text-emerald-300 group-hover:ring-emerald-500/50 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white font-display mb-3">{feature.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React, { forwardRef } from 'react';
import { CheckIcon } from './Icons';

const capabilities = {
  infra: {
    title: 'Infra / Platform',
    items: [
      'Kubernetes (bare metal / hybrid cloud)',
      'Cilium Gateway API, Multus, SR-IOV CNI',
      'Infiniband / RDMA / NVLink-aware placement',
      'GPU node isolation for each team / project',
      'ArgoCD, Helmfile, GitOps bootstrap → platform layers',
      'Secrets: Vault / Infisical / sealed secrets',
    ],
  },
  workloads: {
    title: 'Model & Data Workloads',
    items: [
      'LLM fine-tuning (LoRA / FSDP / ZeRO)',
      'Distributed training with NCCL across multi-node DGX',
      'On-prem video / multimodal datasets (10TB+ per node warm cache)',
      'Low-latency inference serving for internal products',
      'Observability for GPU usage / temperature / perf',
    ],
  },
  networking: {
    title: 'Networking & Security',
    items: [
      'Multi-NIC topologies (10G Ethernet + 200G/400G IB)',
      'BGP / IPSec / Transit Gateway / Cloudflare Tunnel',
      'Private internal dashboards behind Zero Trust',
      'Per-tenant network isolation for research teams',
    ],
  },
  handoff: {
    title: 'Handoff & Reliability',
    items: [
      'Runbooks / on-call playbooks for infra teams',
      'Capacity / scaling plan you can present to leadership',
      'Knowledge transfer so you don’t stay dependent on me',
    ],
  },
};

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="capabilities" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.values(capabilities).map((category) => (
            <div key={category.title} className="group rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
              <h3 className="text-xl font-semibold text-emerald-400 font-display mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
                {category.title}
                <span className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent"></span>
              </h3>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start group/item">
                    <div className="mt-1.5 mr-3 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 transition-all group-hover/item:bg-emerald-400 group-hover/item:ring-emerald-400/30"></div>
                    </div>
                    <span className="text-slate-300 group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;

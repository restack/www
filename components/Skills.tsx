
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
    <section ref={ref} id="capabilities" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Capabilities</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {Object.values(capabilities).map((category) => (
            <div key={category.title} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-xl font-semibold text-green-400">{category.title}</h3>
              <ul className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{item}</span>
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

// Type definitions for the application

// K8s resource types
export interface KubernetesResource {
  name: string;
  namespace: string;
  creationTimestamp: string;
  labels?: Record<string, string>;
}

export interface Pod extends KubernetesResource {
  status: 'Running' | 'Pending' | 'Failed' | 'Succeeded' | 'Unknown';
  restarts: number;
  node?: string;
  ip?: string;
}

export interface Deployment extends KubernetesResource {
  replicas: {
    desired: number;
    current: number;
    ready: number;
    available: number;
  };
  strategy: 'RollingUpdate' | 'Recreate';
}

export interface Service extends KubernetesResource {
  type: 'ClusterIP' | 'NodePort' | 'LoadBalancer' | 'ExternalName';
  clusterIP?: string;
  externalIP?: string;
  ports: Array<{
    name?: string;
    port: number;
    targetPort: number;
    nodePort?: number;
  }>;
}

// Application state types
export interface ResourceMetrics {
  cpu: {
    usage: number;
    limit: number;
    percentage: number;
  };
  memory: {
    usage: number;
    limit: number;
    percentage: number;
  };
  network: {
    rx: number;
    tx: number;
    total: number;
  };
}

export interface DeploymentStep {
  name: string;
  status: 'pending' | 'in-progress' | 'complete' | 'failed';
  timestamp: string;
  details?: string;
}

export interface DeploymentHistory {
  id: string;
  version: string;
  timestamp: string;
  status: 'success' | 'failed';
  duration: string;
  commit?: {
    hash: string;
    message: string;
    author: string;
  };
}

// UI component props types
export interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error' | 'info';
  text: string;
}
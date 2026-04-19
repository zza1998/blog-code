export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    id: 'physx-intro',
    title: 'Getting Started with NVIDIA PhysX',
    excerpt: 'An introduction to the powerful NVIDIA PhysX physics engine, its architecture, and how it revolutionizes real-time simulations.',
    content: `
      <p>NVIDIA PhysX is a scalable multi-platform physics solution supporting a wide range of devices, from smartphones to high-end multicore CPUs and GPUs.</p>
      <h2>What is PhysX?</h2>
      <p>PhysX is a real-time physics engine that was originally developed by Ageia and later acquired by NVIDIA. It provides advanced physics simulation capabilities, including rigid body dynamics, fluid simulation, and cloth simulation.</p>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Scalability:</strong> Runs efficiently on both CPUs and GPUs.</li>
        <li><strong>Versatility:</strong> Supports a wide variety of simulation types.</li>
        <li><strong>Integration:</strong> Deeply integrated into popular engines like Unreal Engine and Unity.</li>
      </ul>
      <p>In this series, we will dive deep into how to integrate and optimize PhysX in your own projects.</p>
    `,
    date: '2026-04-19',
    readTime: '6 min read',
    category: 'Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'physx-rigid-bodies',
    title: 'Mastering Rigid Body Dynamics',
    excerpt: 'Deep dive into the core of PhysX: Actors, Shapes, and Material properties for realistic rigid body simulations.',
    content: `
      <p>Rigid body dynamics are the foundation of most physics simulations. In PhysX, this involves managing actors and their interactions.</p>
      <h2>Actors and Shapes</h2>
      <p>In PhysX, every physical object is an <em>Actor</em>. These actors can be static (non-moving) or dynamic (affected by forces).</p>
      <p>Shapes define the geometry used for collision detection. Common primitives include Boxes, Spheres, and Capsules.</p>
      <h2>Materials</h2>
      <p>Physical materials determine how objects bounce (restitution) and slide (friction) against each other. Proper material tuning is key to a "natural" feeling simulation.</p>
    `,
    date: '2026-04-15',
    readTime: '8 min read',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'physx-advanced-sim',
    title: 'Advanced Simulations: Cloth and Fluids',
    excerpt: 'Exploring the more complex features of PhysX, including high-fidelity cloth and position-based fluid simulations.',
    content: `
      <p>Beyond simple collisions, PhysX offers sophisticated tools for simulating soft bodies and fluids.</p>
      <h2>Cloth Simulation</h2>
      <p>PhysX provides a highly optimized cloth solver that can handle realistic character clothing and environmental fabric effects with minimal performance overhead.</p>
      <h2>Position-Based Dynamics (PBD)</h2>
      <p>Many of the advanced simulations in PhysX use PBD, a method that is both stable and fast, making it ideal for real-time applications like games.</p>
      <p>Understanding these constraints allows developers to create stunningly realistic environments.</p>
    `,
    date: '2026-04-10',
    readTime: '10 min read',
    category: 'Advanced',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

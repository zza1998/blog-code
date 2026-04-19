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

// Simple frontmatter parser to avoid node.js polyfills
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) return { data: {}, content: fileContent };
  
  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};
  
  yamlBlock.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      data[key.trim()] = valueParts.join(':').trim();
    }
  });
  
  return { data, content };
}

// Use Vite's glob import to find all markdown files in the posts directory
const modules = import.meta.glob('/src/content/posts/*.md', { eager: true, query: '?raw' });

export const POSTS: Post[] = Object.entries(modules).map(([path, rawContent]) => {
  const fileName = path.split('/').pop()?.replace('.md', '') || '';
  const { data, content } = parseFrontmatter(rawContent as string);
  
  return {
    id: fileName,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content: content.trim(),
    date: data.date || '',
    readTime: data.readTime || '',
    category: data.category || 'General',
    image: data.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string; // Content is now optional to support metadata-only loading
  date: string;
  readTime: string;
  category: string;
  image: string;
}

// Optimized Unsplash image URL generator
const optimizeImage = (url: string, width = 800) => {
  if (url.includes('images.unsplash.com')) {
    // Force WebP format, high quality (80), and specific width
    return `${url.split('?')[0]}?auto=format,compress&q=80&w=${width}&fm=webp`;
  }
  return url;
};

function parseFrontmatter(fileContent: string) {
  const str = String(fileContent);
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = frontmatterRegex.exec(str);
  
  if (!match) return { data: {}, content: str };
  
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

// 1. Get metadata for all posts (used in lists)
const rawModules = import.meta.glob('/src/content/posts/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default'
});

export const POSTS: Post[] = Object.entries(rawModules).map(([path, rawContent]) => {
  const fileName = path.split('/').pop()?.replace('.md', '') || '';
  const { data } = parseFrontmatter(rawContent as string);
  
  return {
    id: fileName,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    date: data.date || '',
    readTime: data.readTime || '',
    category: data.category || 'General',
    // Optimize list images to 1000px width
    image: optimizeImage(data.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', 1000)
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// 2. Function to load full content for a single post (used in BlogPost page)
export const getPostContent = async (id: string): Promise<string> => {
  const modules = import.meta.glob('/src/content/posts/*.md', { query: '?raw', import: 'default' });
  const path = `/src/content/posts/${id}.md`;
  
  if (modules[path]) {
    const rawContent = await modules[path]() as string;
    const { content } = parseFrontmatter(rawContent);
    return content;
  }
  return '';
};

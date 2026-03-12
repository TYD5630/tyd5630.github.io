import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'My Blog',
    description: '技术分享与生活记录',
    site: context.site,
    items: posts
      .filter(post => !post.data.draft)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
      })),
    customData: `<language>zh-CN</language>`,
  });
}

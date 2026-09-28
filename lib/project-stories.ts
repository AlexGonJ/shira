export interface ProjectStory {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  // Paste a YouTube watch, share, Shorts or embed URL to enable the player.
  youtubeUrl?: string;
  videoSlot?: boolean;
}

export const projectStories: ProjectStory[] = [
  {
    id: 'project-film', title: 'Lawn care, from our point of view', category: 'Watch our team at work',
    image: 'https://i.ytimg.com/vi/V307i5x-Rto/hqdefault.jpg', alt: 'Preview of Shira’s lawn care video',
    videoSlot: true, youtubeUrl: 'https://www.youtube.com/watch?v=V307i5x-Rto',
  },
  {
    id: 'outdoor-living', title: 'More room for outdoor living', category: 'Carpentry',
    image: '/landscapes/carpentry.webp', alt: 'Outdoor deck and carpentry details',
  },
  {
    id: 'garden-care', title: 'A day on the lawn', category: 'Behind the scenes',
    image: 'https://i.ytimg.com/vi/YnhX7XXW4P4/hqdefault.jpg', alt: 'Preview of Shira’s mowing vlog',
    youtubeUrl: 'https://www.youtube.com/watch?v=YnhX7XXW4P4',
  },
];

export function youtubeId(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    const host = url.hostname.toLowerCase();
    let id: string | null = null;
    if (host === 'youtu.be') id = url.pathname.split('/')[1];
    else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host)) {
      const parts = url.pathname.split('/');
      id = ['embed', 'shorts', 'live'].includes(parts[1]) ? parts[2] : url.pathname === '/watch' ? url.searchParams.get('v') : null;
    }
    return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
  } catch { return null; }
}

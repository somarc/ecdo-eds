/**
 * video-hero — full-bleed looping background video with overlay copy.
 * Authoring: row 1 = link to .mp4; row 2 = headline / body / CTAs.
 */
export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length < 2) {
    // eslint-disable-next-line no-console
    console.warn('[video-hero] requires 2 rows: [video link] + [overlay content]');
    return;
  }

  const videoLink = rows[0].querySelector('a');
  const videoSrc = videoLink ? videoLink.href : null;
  const content = rows[1].querySelector('div') || rows[1];

  block.textContent = '';

  if (videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-hidden', 'true');
    // Prompt A still — LCP-friendly first paint before the loop starts
    video.poster = '/media/hero-na-topo-web-prompt-a.jpg';
    video.addEventListener('error', () => {
      block.classList.add('video-failed');
      video.remove();
    });
    block.append(video);
  }

  const overlay = document.createElement('div');
  overlay.className = 'video-hero-content';
  overlay.append(content.cloneNode(true));
  block.append(overlay);
}

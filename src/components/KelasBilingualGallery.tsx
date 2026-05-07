import { useEffect } from 'react';

export default function VideoGallery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-4xl font-bold text-[#0b1f3a]">
        Kelas Bilingual
      </h2>

      <div className="w-32 h-1 bg-green-600 mt-2 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* VIDEO 1 */}
  <div>
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7635273638106942727"
      data-video-id="7635273638106942727"
      style={{ maxWidth: '320px', minWidth: '100px' }}
    >
      <section></section>
    </blockquote>
  </div>

  {/* VIDEO 2 */}
  <div>
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7598097358802406677"
      data-video-id="7598097358802406677"
      style={{ maxWidth: '320px', minWidth: '100px' }}
    >
      <section></section>
    </blockquote>
  </div>

 {/* VIDEO 3 */}
<div>
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7380324644848471301"
    data-video-id="7380324644848471301"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 4 */}
<div>
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7382931444441730310"
    data-video-id="7382931444441730310"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 5 */}
<div>
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7512424872664894776"
    data-video-id="7512424872664894776"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 6 */}
<div >
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7465628933426285830"
    data-video-id="7465628933426285830"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 7 */}
<div  >
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7452229532481801477"
    data-video-id="7452229532481801477"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 8 */}
<div>
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7451589468760411397"
    data-video-id="7451589468760411397"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

{/* VIDEO 9 */}
<div  >
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@smp.hasjim.asjari/video/7566244216238574869"
    data-video-id="7566244216238574869"
    style={{ maxWidth: '320px', minWidth: '100px' }}
  >
    <section></section>
  </blockquote>
</div>

      </div>
    </section>
  );
}
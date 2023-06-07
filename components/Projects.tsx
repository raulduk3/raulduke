import { useState, useEffect } from 'react';
import { Link } from '../styles/index'

export default function Projects() {
  const [links, setLinks] = useState([
      { name: 'Captivating Video Editing Secrets: Unsupervised Deep Learning and PySceneDetect Analysis of Creative Strategies', url: 'https://digital.kenyon.edu/dh_iphs_ss/22/'},
      { name: 'Sentiment Analysis of Rotten Tomato Reviews', url: 'https://github.com/morty-c137-prime/sa-rotten-tamatoes' },
      { name: 'film-project-template', url: 'https://github.com/morty-c137-prime/film-project-template' },
      { name: 'chat-app', url: 'https://github.com/raulduk3/chat-app' },
      { name: 'raulduke.com', url: 'https://github.com/morty-c137-prime/raulduke' },
      { name: 'Gund Gallery Immersive Experience', url: 'https://github.com/srabieh/GundGalleryGroup5' }
      

  ]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div style={{
        textAlign: 'left',
        fontSize: '0.83cem',
        maxWidth: '90vw'
      }}>
        {links.map((link, index) => (
          <h4
            key={link.name}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.3s',
              transitionDelay: `${index * 0.1}s`,
              fontWeight: 100,
              wordWrap: 'break-word',
              textAlignLast: 'center'
            }}
          >
            <Link href={link.url}>{link.name}</Link>
          </h4>
        ))}
      </div>
    </div>
  );
};

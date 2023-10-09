import NextHead from 'next/head';
import { useEffect, useState } from 'react';

const titles = {
  index: [
    'thisispalash [dot] com',
    '@isthispalash / @thisispalash',
  ],
  kdio: [
    'khaaliDimaag [dot] io',
  ],
  b3: [
    'Bedside Blackboard',
    'be Cubed',
  ],
}

const metas = {
  index: {

  },
  kdio: {
    
  },
  b3: {

  },
}

export default function Head({ ...props }) {

  const { page } = props;
  const [title, setTitle] = useState('');

  
  useEffect(() => {
    let _i = Math.floor(Math.random() * 7);
    switch(page) {
      case 'b3': setTitle(titles.b3[_i % titles.b3.length]); break;
      case 'kdio': setTitle(titles.kdio[_i % titles.kdio.length]); break;
      case 'index': setTitle(titles.index[_i % titles.index.length]); break;
      default: setTitle(title ?? titles.index[_i % titles.index.length]);
    }
  }, [])

  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' href='/images/balli-no-bg.png' />

      {/* fonts */}
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' />
    </NextHead>
  );
}

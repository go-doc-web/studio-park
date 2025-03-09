import { ComponentSectionsHero } from '@/generated/graphql';
import React, { FC } from 'react';
import Image from 'next/image';

import styles from './Hero.module.scss';

interface HeroProps {
  data: Partial<ComponentSectionsHero>;
}

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const Hero: FC<HeroProps> = ({ data }) => {
  const imageUrl = data?.media?.url;
  return (
    <>
      <h2 className={styles.title}>{data?.title || 'Hero title'}</h2>
      <p>{data?.description || 'Hero description'}</p>
      <div>
        {imageUrl && (
          <Image
            alt={data?.media?.alternativeText || 'Image'}
            src={`${baseUrl}${imageUrl}`}
            width={150}
            height={150}
            placeholder="empty" // "empty" | "blur" | "data:image/..."
            priority={true} // {false} | {true}
          />
        )}
      </div>
    </>
  );
};

export default Hero;

//TODO Сделать компонент Heading

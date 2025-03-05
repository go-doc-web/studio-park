import { FC } from 'react';
import { Sections } from '../sections';
import { ContentPageSectionsDynamicZone } from '@/generated/graphql';

type SektionKey = 'ComponentSectionsHero';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionMap: Record<SektionKey, FC<any> | null> = {
  ComponentSectionsHero: Sections.Hero,
};

const PageBuilder: FC<{ sections?: ContentPageSectionsDynamicZone[] }> = ({
  sections = [],
}) => {
  return (
    <main>
      {sections?.filter(Boolean).map((section) => {
        if (!section?.__typename) return null;
        if (!(section?.__typename in sectionMap)) return null;
        if (!('id' in section)) return null;
        const SectionComponent = sectionMap[section?.__typename as SektionKey];

        if (!SectionComponent) {
          console.warn(`⚠️ Неизвестная секция: ${section.__typename}`);
          return (
            <div
              key={section.id}
              style={{ border: '1px solid red', padding: '10px' }}
            >
              <p>❌ Неизвестный компонент: {section.__typename}</p>
            </div>
          );
        }

        return <SectionComponent key={section.id} data={section} />;
      })}
    </main>
  );
};

export default PageBuilder;

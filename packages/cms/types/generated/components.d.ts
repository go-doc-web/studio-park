import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    isImagesRigth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    media: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextOnly extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_onlies';
  info: {
    displayName: 'Text only';
  };
  attributes: {
    OnlyText: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.hero': SectionsHero;
      'sections.text-only': SectionsTextOnly;
    }
  }
}

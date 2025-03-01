import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: ['@graphql-tools/webpack-loader'],
    });
    return config;
  },
};

export default nextConfig;

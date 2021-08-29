const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Auto Settings',
  tagline: 'Game Options and Input Binding for Unreal Engine',
  url: 'https://acren.github.io',
  baseUrl: '/AutoSettingsDocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Acren', // Usually your GitHub org/user name.
  projectName: 'AutoSettingsDocs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'Auto Settings',
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://www.unrealengine.com/marketplace/en-US/profile/Sam+Bonifacio',
          label: 'Marketplace',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Sam Bonifacio`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

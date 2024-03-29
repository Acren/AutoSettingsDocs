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
      links:[
        {
          items: [
            {
              label: 'Marketplace',
              href: 'https://www.unrealengine.com/marketplace/en-US/profile/Sam+Bonifacio'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/itsAcren'
            },
          ],
        },
      ],
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
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/Setup/installation',
            from: ['/installation'],
          },
          {
            to: '/Setup/umg-widgets',
            from: ['/umg-wdigets'],
          },
          {
            to: '/Setup/settings',
            from: ['/settings'],
          },
          {
            to: '/Setup/input-binding',
            from: ['/input-binding'],
          },
          {
            to: '/Setup/styling',
            from: ['/styling'],
          },
          {
            to: '/Info/config-files',
            from: ['/confilg-files'],
          },
          {
            to: '/Info/example-project',
            from: ['/example-project'],
          },
          {
            to: '/Info/versions',
            from: ['/versions'],
          },
          {
            to: '/Help/faq',
            from: ['/faq'],
          },
          {
            to: '/Help/troubleshooting',
            from: ['/troubleshooting'],
          },
          {
            to: '/Help/support',
            from: ['/support'],
          },
        ],
      },
    ],
  ],
};

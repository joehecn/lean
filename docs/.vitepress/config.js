
const pkg = require('../../package.json')

module.exports = {
  base: '/lean/',
  lang: 'zh-CN',
  title: '学习笔记 v3',
  description: '系统第三版记录',
  themeConfig: {
    repo: pkg.repository,
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    lastUpdated: '最后修改时间',
    nav: [
      { text: '指引', link: '/guide/' }
    ],
    sidebar: {
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: 'chirpstack',
              link: '/guide/chirpstack'
            }
          ]
        }
      ]
    }
  }
}
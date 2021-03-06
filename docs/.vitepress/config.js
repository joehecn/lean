
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
      { text: '指引', link: '/guide/' },
      { text: '流程', link: '/flow/' }
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
            },
            {
              text: 'influxDB2',
              link: '/guide/influxdb2'
            },
            {
              text: '电梯方案',
              link: '/guide/lift'
            }
          ]
        },
        {
          text: '流程',
          children: [
            {
              text: '单点登录',
              link: '/flow/'
            }
          ]
        }
      ]
    }
  }
}
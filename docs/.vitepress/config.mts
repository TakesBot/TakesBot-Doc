import { defineConfig } from 'vitepress'
const base = "/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,  
  title: "塔可Bot",
  description: "A Rhythm-Games QQ Bot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '功能介绍', link: '/features' },
          { text: '绑定帮助', link: '/bindhelp' }
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2025 <a href="https://nekotc.cn/">Tome Chen</a>',
      message: '<a href="https://beian.miit.gov.cn/">陇ICP备2024006604号-1</a>',
    }
  }
})

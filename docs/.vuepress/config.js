module.exports = {
    title: 'Myblog',
    description: '我的个人博客',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        // 日期格式
        dateFormat: 'YYYY-MM-DD',
       nav: [     // 导航条相关配置
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/classification/'},
        { text: 'Tags',link: '/tag/' },
          ],
      
        footer: {
            // 联系 左边
            contact: [
                {
                  type: 'github',
                  link: 'https://github.com/wybfp',
                },
                {
                  type: 'mail',
                  link: '/',
                },
                {
                  type: 'web',
                  link: '/',
                },
                {
                  type: 'youtube',
                  link: '/'
                }
            ],
            // 版权 右边
            copyright: [
              {
                text: 'Privacy Policy',
                link: 'https://policies.google.com/privacy?hl=en-US',
              },
              {
                text: 'MIT Licensed | Copyright © 2021-present Vue.js',
              },
            ],
          },
          
    },
    plugins:[
        [
            '@vuepress/blog',
            {
            // 目录分类
              directories: [
                {
                  // Unique ID of current classification
                  id: 'home',
                  // Target directory
                  dirname: '_posts',
                  // Path of the `entry page` (or `list page`)
                  path: '/',
                  title:"home",

                },
                {
                  // Unique ID of current classification
                  id: 'classification',
                  // Target directory
                  dirname: '_classification',
                  // Path of the `entry page` (or `list page`)
                  path: '/classification/',
                  title:"分类",

                //   分页
                  pagination: {
                    lengthPerPage: 2,
                  },
                },
              ],

            // tag分类
              frontmatters: [
                {
                  // Unique ID of current classification
                  id: 'tag',
                  // Decide that the frontmatter keys will be grouped under this classification
                  keys: ['tag'],
                  // Path of the `entry page` (or `list page`)
                  path: '/tag/',
              
                },
              ],
              
            //   全局分页
              globalPagination:[
                {
                    prevText:'上一页', // Text for previous links.
                    nextText:'下一页', // Text for next links.
                    lengthPerPage:'2', // Maximum number of posts per page.
                    layout:'Pagination', // Layout for pagination page
                  }
              ]
            },
          ],
    ]
  }
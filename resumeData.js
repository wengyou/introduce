global.resumeData = {
    // 网页tilte
    name: '翁迪-13637937511-前端-22届',
    // 头部信息
    headerData: {
        name: '翁迪',
        englishName: '',
        job: 'Web前端工程师',
        jobNote: '/实习',
        school: [
            '女 | 21',
            '本科 | 2022届 | 重庆邮电大学',
            // '重庆邮电大学 '
        ],
        // home: 'https://zhaopengcheng.varbee.com',
        email: '1985873635@qq.com',
        // github: 'https://github.com/Squares4',
        phone: '13637937511'
    },
    // 左栏文章信息
    sectionDataLeft: [{
            title: '实践经验',
            items: [{
                    name: '极客工作室·前端组',
                    time: '2019.01至今',
                    tag: '老师团队',
                    content: []
                },
                {
                    name: '勤奋峰科技·前端组',
                    time: '2019.06至今',
                    tag: '创业团队',
                    content: [
                        `<strong>团队介绍</strong>
                            涵盖前端、后台、移动、设计等部门。团队拥有校招导师、经管实验室系统等多个产品，先后参加比赛并获得了多个国家级奖项。其中，校招导师产品运营的工作号超过<em>15k</em>的用户，日平均浏览量达<em>1k</em>；实验室系统和仿真系统在整个经管学院中使用。`,
                        `<strong>WEB前端组</strong>
                            负责团队项目的开发、维护，参与团队建设、日常技术分享以及培养新的团队成员，期间积累了各类项目开发经验和<em>团队合作经验</em> 。`
                    ]
                }
            ]
        },
        {
            title: '专业能力',
            items: [{
                content: [
                    `<i></i><b>前端基础：</b>掌握web开发基本技能，熟悉HTML, CSS, JavaScript，重视用户体验和代码可维护性。使用ES6语法编程，追求高质量代码。`,
                    `<i></i><b>前端框架：</b>熟练使用<em>React</em>开发项目，对React搭配<em>Redux</em>，<em>Saga</em>以及<em>Hooks</em>有较深的实践。</b>使用<em>Taro</em>进行小程序开发，对taro有较深的实践，熟悉小程序开发流程。`,
                    `<i></i><b>项目工程：</b>使用<em>webpack</em>实现项目工程化和脚手架构建，对<em>TypeScript</em>有一定的使用，对<em>性能优化</em>有一定的思考。`,
                    `<i></i><b>网络：</b>了解<em>Http</em>、<em>WebSocket</em>等协议，熟悉<em>Ajax</em>,<em>Fetch</em>,<em>axios</em>等数据交互方案，对网络安全有一定思考。`,
                    `<i></i>使用<em>Git</em>进行版本控制和代码托管、<em>Markdown</em>进行文档编写，了解项目常规开发流程。`,
                ]
            }]
        },
        {
            title: '自我评价',
            items: [{
                content: [
                    `<i></i>本人拥有对新技术的<em>好奇心</em>，关注业内前沿技术，有一定的创造精神和探索精神，能够<em>积极执行</em>工作，<em>有责任心</em>，具有良好的<em>沟通合作</em>能力以及<em>分析解决问题</em>能力。`
                ]
            }]
        }
    ],
    sectionDataRight: [{
        title: '项目经验',
        items: [{
            name: '经管实验室系统',
            time: '2019.11 ~ 2020.01',
            tag: 'H5｜Web后台',
            content: [
                `<strong>项目介绍</strong>
                        经管实验室系统集成了三端<em>登录</em>（老师端、学生端、管理端），主要有<em>文件上传</em>、<em>信息修改</em>、<em>资料搜索</em>等功能`,
                `<strong>技术栈</strong>React + Redux + Saga + Antd + Webpack`,
                `
                    <i></i>实现大文件分片上传，对异步任务进行<em>并发控制</em>；实现断点续传，文件秒传，采用<em>抽样hash</em>判断文件是否存在；
                    <br /><i></i>搜索功能模块化，实现不同分类的搜索，如软件搜索，资料搜索以及学生老师的信息搜索，实现<em>代码复用</em>；
                    <br /><i></i>封装多种登录验证方法，如实人信息验证，答题验证等,使用<em>JWT</em>作为登录认证方式；
                    <br /><i></i>对某些图片进行简单的性能优化，如<em>懒加载</em>，<em>预加载</em>。
                    `,
            ]
        }, {
            name: '筋斗云',
            time: '2020.07 ~ 2020.10',
            tag: '小程序｜管理端',
            content: [
                `<strong>项目介绍</strong>
                        集成筋斗云商城所有商户商品信息管理，订单管理以及信息推送。`,
                `<strong>技术栈</strong>
                        </b>Taro + Redux`,
                `
                    <i></i><em>封装虚拟列表，实现长列表仅渲染可见区域，从而达到极高的渲染性能。
                    <br /><i></i>监听滑动事件，对滑动事件进行节流操作,并<em>优化节流函数</em>，融合时间戳和定时器两种方式，提供处理原函数返回值的方法。
                    <br /><i></i>参考社区的<em>websocket方案</em>，使用Taro + WebSocket实现心跳检查和重连。
                    `,
            ]
        }],
    }, {
        title: '校园经历',
        items: [{
            content: [
                `<i></i><em>挑战杯</em>校赛三等奖。<br />
                <i></i>参与学校的<em>创新训练项目</em>“高校智慧社群下钥慧咨询服务共享平台”。<br />
                <i></i>获得<em>新生杯</em>辩论赛院三等奖，<em>薪火杯</em>辩论赛校二等奖<br />
                <i></i>参与创新创业项目<em>GYB培训</em>，获得优秀毕业证书。`
            ]
        }]
    }]
}
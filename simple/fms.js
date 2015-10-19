var fms = require('fms')
fms.run({
    view: {
        data: {
            DEV: true
        }
    }
})
// fms.ajax({
//     title: '测试 AJAX',
//     url: '/test/',
//     type: 'get',
//     res: {
//         ok: 'yes',
//         error: 'no'
//     }
// })



fms.view({
    title: '测试 View',
    url: '/test2/',
    type: 'get',
    template: 'view/test.php',
    data: {
        title: '测试'
    },
    res: {
        ok: {
            content: 'ok'
        },
        error: {
            content: 'error'
        }
    }
})

// var fms = require('fms')
            
// fms.run({
//     html: ['/html/'],
//     static: './',
//     view: {
//         server: 'http://127.0.0.1:1234/',
//         templateDir: '',
//         templatePluginDir: '',
//         request: function (req, data) {
            
//         }
//     }
// })

// fms.ajax({
//     title: 'AJAX测试',
//     type:'get',
//     url: '/demo/',
//     request: {"s":2},
//     res: {
//         ok: "成功",
//         error: "失败",
//         wait: '等待'
//     }
// })

// fms.docFile('./doc.html')


// fms.view({
//     title: 'View 测试',
//     url: '/view/',
//     data: {
//         a:1
//     },
//     res: {
//         ok: {
//             name: 'nimo'
//         },
//         error: {
//             name: 'judy'
//         }
//     }
// })

// // fms.post({
// //     url: '/haha/'
// // })

// // $.doc('# 数据交互文档')

// // $.doc(function(){/*
// // # 特殊说明

// // 所有JSON中以下划线为前缀均为注释，用于给说明对应属性。后端不需要将 `_` 前缀的属性返回
// // 例如文档中写：

// // ```
// // {
// //     "money": 13,
// //     "_money": "报名费用"
// // }
// // ```
// // 后端只需要输出 `{"money":13}`
// // */})

// // $.ajax('/ajax/').done({
// //     status: "success",
// //     msg: "成功加入会员"
// // })

// // $.ajax('/news/', {
// //     title: '新闻列表',
// //     type: 'get'
// // }).done({
// //     title: "Web 开发数据模拟环境，提供 AJAX 模拟与后端 MVC 中 View 层渲染模拟解决方案。",
// //     content: "<p>参照 jQuery 设计 API，使用 JavaScript 编写AJAX模拟数据。使用 Smarty 编写后端模板引擎，提高前后端开发效率</p>"
// // })
// // $.ajax('/news/', {
// //     type: 'post'
// // }).done({
// //     status: "success",
// //     msg: "成功添加文章"
// // })

// // $.ajax('/function/').done(function (req, res) {
// //     res.json(req.query)
// // })

// // $.page({
// //     title: '首页',
// //     url: '/index/',
// //     template: '/view/index.html',
// //     data: {
// //         view: [
// //            'a',
// //            'b',
// //            'c'
// //         ]
// //     }
// // })



// // // 根据 提交参数中的  _ 属性输出各种返回值
// // $.ajax('/res/', {
// //     res: {
// //         'wait': {
// //             msg: 'wait...'
// //         },
// //         'finsh': {
// //             msg: 'finish...'
// //         }
// //     }
// // }),
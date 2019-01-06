// component/navigation/navigation.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        info: [
            [
                {
                    "img": "/images/shuxue1.png",
                    "name": "数学"
                },
                {
                    "img": "/images/English.png",
                    "name": "英语"
                },
                {
                    "img": "/images/law.png",
                    "name": "法律"
                }
            ],
            [
                {
                    "img": "/images/wuli1.png",
                    "name": "物理"
                },
                {
                    "img": "/images/huaxue1.png",
                    "name": "化学"
                },
                {
                    "img": "/images/qita1.png",
                    "name": "其他"
                }
            ]
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onJumpTap: function (e) {
            var name = e.currentTarget.dataset.name;
            console.log(name);
          wx.navigateTo({//跳转
            url: '../video/video'
          })
        }
    }
})

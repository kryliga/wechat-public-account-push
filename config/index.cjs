/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx637364610dc2757c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6b9bf16b5b65c1812874b816dd39d2d1',

  PROVINCE: '安徽',
  CITY: '桐城',

  USERS: [
    {
      // 想要发送的人的名字
      name: '汪师傅',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ox5UI6Mkso2GcFGTqZEq_GtBHmlQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Va7t2wMAMBhSYoMqj4BkxgzRy9p4r3-PbUHnSDI_ehE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小汪同学', year: '1998', date: '12-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '汪师傅', year: '1999', date: '02-06',
        },
        {
          type: '节日', name: '遇见', year: '2018', date: '09-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 成为朋友的日子
        { keyword: 'love_day', date: '2019-06-06' },
        // 距离上次见面
        { keyword: 'marry_day', date: '2022-06-05' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


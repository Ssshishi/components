import Mock from 'mockjs'

export default Mock.mock('/search', 'post', {
  success: true,
  message: "@cparagraph",
  'list|1-5': [{
    'sid|+1': 1,
    'userId|5': ''
  }]
})

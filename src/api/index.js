import requests from './request'
//获取秀场详情
export const getShowDetail = (photoId,showId) => {
    return requests({
        params: {
            photoId,
            showId
        },
        url:'/show/getShowDetail',
        method: 'GET'
    })
}
//获取首页秀场列表
export const getShowList = (data) => {
    return requests({
        data,
        url:'/show/getShowList',
        method: 'POST'
    })
}
//注册
export const register = (data) => {
    return requests({
        data,
        url:'/user/register',
        method: 'POST'
    })
}
//登录
export const login = (username,password) => {
    return requests({
        params: {
            username,
            password
        },
        url: 'user/login',
        method: 'GET'
    })
}
//修改密码
export const changePassword = (data) => {
    return requests({
        data,
        url:'/user/changePassword',
        method:'POST'
    })
}
//获取浏览记录
export const getBrowsingRecord = (data) => {
    return requests({
        data,
        url: '/record/getBrowsingRecord',
        method: 'POST'
    })
}
//展示个人信息
export const showUserDetail = () => {
    return requests({
        url:'/user/showUserDetail',
        method:'GET'
    })
}
//更新用户信息
export const updateUserDetail = (nickName) => {
    return requests({
        params:{
            nickName
        },
        url: '/user/updateUserDetail',
        method: 'POST'
    })
}
//分页展示文件夹及其图片
export const showFolderByPage = (data) => {
    return requests({
        data,
        url: '/folder/showFolderByPage',
        method: 'POST'
    })
}
//添加文件夹
export const addFolder = (data) => {
    return requests({
        data,
        url: '/folder/addFolder',
        method: 'POST'
    })
}
//删除文件夹
export const deleteFolder = (pathId) => {
    return requests({
        url: '/folder/deleteFolder/'+pathId,
        method: 'GET'
    })
}
//根据图片名字搜索
export const queryShowList = (data) => {
    return requests({
        data,
        url: '/photoShow/queryShowList',
        method: 'POST'
    })
}
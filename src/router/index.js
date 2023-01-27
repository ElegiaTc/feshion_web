import VueRouter from "vue-router"
import Login from '../pages/login'
import Search from '../pages/search'
import ShowTime from '../pages/showTime'
import Home from '../pages/home'
import AILab from '../pages/AILab'
import Favority from '../pages/favority'
import Message from '../pages/message'
import History from '../pages/history'
import User from '../pages/user'
import Browse from '../pages/browse'
import Download from '../pages/download'
import BaseMessage from '../pages/BaseMessage'
import ModifyPassword from '../pages/ModifyPassword'
import Model from '../pages/model'
import Clothe from '../pages/clothe'
import Makeup from '../pages/makeup'
import Hair from '../pages/hair'
import Posture from '../pages/posture'
import Show from '../pages/show'

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    } else {
        originPush.call(this,location,()=>{},()=>{})
    }
}

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/search/:searchKeyWord',
            name: 'mySearch',
            component: Search
        },
        {
            path: '/showtime',
            name: 'showTime',
            component: ShowTime
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/ailab',
            component: AILab,
        },
        {
            path: '/model',
            component: Model,
            meta: {
                keepAlive:true
            }
        },
        {
            path: '/clothe',
            component: Clothe
        },
        {
            path: '/makeup',
            component: Makeup
        },
        {
            path: '/hair',
            component: Hair
        },
        {
            path: '/posture',
            component: Posture
        },
        {
            path: '/show',
            name: 'show',
            component: Show
        },
        {
            path: '/favority',
            component: Favority
        },
        {
            path: '/message',
            component: Message,
            redirect: '/message/history',
            children: [
                {
                    path: 'history',
                    component: History,
                    redirect: '/message/history/browse',
                    children: [
                        {
                            path: 'browse',
                            component: Browse
                        },
                        {
                            path: 'download',
                            component: Download
                        }
                    ]
                },
                {
                    path: 'User',
                    component: User,
                    redirect: '/message/user/baseMessage',
                    children: [
                        {
                            path: 'baseMessage',
                            component: BaseMessage
                        },
                        {
                            path: 'modifyPassword',
                            component: ModifyPassword
                        }
                    ]
                }
            ]
        }
    ]
})
export default function ({ req, redirect }) {
    // Check if req object is defined
    if (!req) {
        // Handle the case when req is undefined
        /*  console.error('req is undefined'); */
        return;
    }

    // 获取终端设备信息
    const userAgent = req.headers['user-agent'];

    // 判断终端设备类型
    if (userAgent.includes('Mobile')) {
        // 如果是移动设备，跳转到移动设备路由
        console.log(userAgent)
        return redirect('/mobile');
    } else {
        // 如果是桌面设备，跳转到桌面设备路由
        console.log(userAgent)
        return redirect('/desktop/frontpage');
    }
}

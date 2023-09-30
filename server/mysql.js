const express = require('express');
const mysql = require('mysql');

const app = express();

// 创建数据库连接
const connection = mysql.createConnection({
    host: '192.168.11.3',
    user: 'test_a1',
    password: 'DaFN5WK7ATCbLe4N',
    database: 'test_a1'
});

// 连接到数据库
connection.connect((err) => {
    if (err) {
        console.error('数据库连接失败: ' + err.stack);
        return;
    }
    console.log('数据库连接成功，连接ID: ' + connection.threadId);
});


/* 获取页数和每页数据 */
// 创建API路由
app.get('/api/data', (req, res) => {
    const page = parseInt(req.query.page) || 1; // 获取页面参数，默认为第一页
    const limit = 5; // 每页显示的行数

    // 查询数据行数
    const countQuery = 'SELECT COUNT(*) AS total FROM users';
    connection.query(countQuery, (err, results, fields) => {
        if (err) {
            console.error('查询数据行数失败: ' + err.stack);
            return res.status(500).json({ error: '查询数据行数失败' });
        }
        const rowCount = results[0].total;

        // 计算总页数
        const totalPages = Math.ceil(rowCount / limit);

        // 计算分页偏移量
        const offset = (page - 1) * limit;

        // 查询分页数据
        const dataQuery = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
        connection.query(dataQuery, (err, results, fields) => {
            if (err) {
                console.error('查询分页数据失败: ' + err.stack);
                return res.status(500).json({ error: '查询分页数据失败' });
            }
            res.json({ page, totalPages, data: results });
        });
    });
});





// 启动服务器
app.listen(6444, () => {
    console.log('服务器已启动，监听端口 6444');
});
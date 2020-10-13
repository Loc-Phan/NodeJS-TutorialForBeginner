var users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31,avatar:"images/users/1.jpg"}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20,avatar:"images/users/2.jpg"},
	{id: 3, name: "phan_canh_loc", email: "pcloc101099@gmail.com", age: 21,avatar:"images/users/3.jpg"}
];

module.exports = {
    index:  function(req, res) {
        res.render('users/index',{
            users: users
        });
    },
    search: function(req, res) {
        var name_search = req.query.name // lấy giá trị của key name trong query parameters gửi lên
        var age_search = req.query.age // lấy giá trị của key age trong query parameters gửi lên
        var result = users.filter( (user) => {
            // tìm kiếm chuỗi name_search trong user name. 
            // Lưu ý: Chuyển tên về cùng in thường hoặc cùng in hoa để không phân biệt hoa, thường khi tìm kiếm
            return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
        })
    
        res.render('users/index', {
            users: result // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
        });
    },
    get_create: function(req, res) {
        res.render('users/create');
    },
    post_create: function(req, res) {
        req.body.id = users.length+1;
        users.push(req.body);
        res.redirect('/users')
    },
    show: function(req, res) {
        var user = users.find( (user) => {
            return user.id == parseInt(req.params.id);
        });
        res.render('users/show', {
            user: user
        })
    }
};
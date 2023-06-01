class NewsController {
    // [GET] /new
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/chi-tiet-sp
    show_sp(req, res) {
        res.send('Detail News');
    }

    // [GET] /news/chi-tiet-user
    show_user(req, res) {
        res.send('Detail Users');
    }
}

module.exports = new NewsController();

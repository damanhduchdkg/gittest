class SiteController {
    // [GET] /new
    index(req, res) {
        console.log(req.body);
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

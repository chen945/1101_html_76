function change(index) {
    const p = document.querySelector(".show-classdemo");
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="./index.html" width="100%" height="100%" />`;
            break;
        case 2:
            p.innerHTML = `<iframe src="./demo/w01/" width="100%" height="100%" />`;
            break;

        case 3:
            p.innerHTML = `<iframe src="./demo/w02/card_76.html" width="100%" height="100%" />`;
            break;

        case 4:
            p.innerHTML = `<iframe src="./demo/w04/blog_76.html" width="100%" height="100%" />`;
            break;

        case 5:
            p.innerHTML = `<iframe src="./demo/w06/blog_76.html" width="100%" height="100%" />`;
            break;

        case 6:
            p.innerHTML = `<iframe src="./demo/w08/cards/loading_76.html" width="100%" height="100%" />`;
            break;

        case 7:
            p.innerHTML = `<iframe src="./demo/w09/resume_76.html" width="100%" height="100%" />`;
            break;
        case 8:
            p.innerHTML = `<iframe src="./demo/w12/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 9:
            p.innerHTML = `<iframe src="./demo/w13/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 10:
            p.innerHTML = `<iframe src="./demo/w14/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 11:
            p.innerHTML = `<iframe src="./demo/w15/portfolio/index.html" width="100%" height="100%" />`;
            break;
        case 12:
            p.innerHTML = `<iframe src="./demo/w16/portfolio/index.html" width="100%" height="100%" />`;
            break;
    }
}

function change(index) {
    const p = document.querySelector(".show-classdemo");
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="./demo/w01/" width="100%" height="100%" />`;
            break;

        case 2:
            p.innerHTML = `<iframe src="./demo/w02/card_76.html" width="100%" height="100%" />`;
            break;

        case 3:
            p.innerHTML = `<iframe src="./demo/w04/blog_76.html" width="100%" height="100%" />`;
            break;

        case 4:
            p.innerHTML = `<iframe src="./demo/w06/blog_76.html" width="100%" height="100%" />`;
            break;
    }
}

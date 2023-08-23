const handleLinkClick = (e: any) => {
    e.preventDefault();
    let element = e.target.getAttribute('href');
    let toSection = document.querySelector(element).offsetTop;

    window.scroll({
        top: toSection,
        behavior: "smooth",
    });
};

export default handleLinkClick;
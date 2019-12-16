export const toggleNavbar = () => {
  document.querySelector(".circle").classList.toggle("close");
  document.querySelector(".navbar2").classList.toggle("show");
  document.querySelector(".navbar1").classList.toggle("show");
};

export const navLinkHandler = (e, type, linkIndex) => {
  e.stopPropagation();

  const navItems = document.querySelectorAll(".nav-el");
  const removeActiveClassFromNavbar = () => {
    navItems.forEach(item => {
      if (item.classList.contains("nav-item")) {
        item.classList.remove("active");
      }
      if (item.classList.contains("nav-dropdown")) {
        item.classList.remove("active");
        item.children[1].childNodes.forEach(el => {
          el.classList.remove("active");
        });
      }
    });
  };

  // const collapseAllNavDropdown = () => {
  //   navItems.forEach(item => {
  //     if (item.classList.contains("nav-dropdown")) {
  //       item.classList.remove("expand");
  //       item.children[0].classList.remove("expand");
  //     }
  //   });
  // };

  for (let i = 0; i < navItems.length; i++) {
    if (type === "nav-item-dropdown") {
      if (i === Math.floor(linkIndex)) {
        removeActiveClassFromNavbar();
        const value =
          linkIndex.toString() === Math.floor(linkIndex)
            ? 0
            : linkIndex.toString().split(".")[1];
        navItems[i].classList.add("active");
        navItems[i].children[1].children[value].classList.add("active");
        // collapseAllNavDropdown();
        toggleNavbar();
      }
    } else if (type === "nav-dropdown") {
      if (i === linkIndex) {
        if (navItems[i].classList.contains("nav-dropdown")) {
          if (navItems[i].classList.contains("expand")) {
            navItems[i].classList.remove("expand");
            navItems[i].children[0].classList.remove("expand");
          } else {
            navItems[i].classList.add("expand");
            navItems[i].children[0].classList.add("expand");
          }
        }
      }
    } else {
      if (i === linkIndex) {
        if (navItems[i].classList.contains("nav-item")) {
          removeActiveClassFromNavbar();
          navItems[i].classList.add("active");
          // collapseAllNavDropdown();
          toggleNavbar();
        }
      }
    }
  }
};

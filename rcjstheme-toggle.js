[33mcommit 64114b9bdb2dfc7a75c09f84d196289026194126[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: sumitxsingh <sumitxsingh01@gmail.com>
Date:   Wed Nov 11 13:20:14 2026 +0530

    Add dark mode toggle and update UI colours

 public/assets/css/theme-rtl.css         | 148 [32m+++++++++++[m[31m-----------[m
 public/assets/css/theme-rtl.css.map     |   2 [32m+[m[31m-[m
 public/assets/css/theme-rtl.min.css     |   2 [32m+[m[31m-[m
 public/assets/css/theme-rtl.min.css.map |   2 [32m+[m[31m-[m
 public/assets/css/theme.css             | 148 [32m+++++++++++[m[31m-----------[m
 public/assets/css/theme.css.map         |   2 [32m+[m[31m-[m
 public/assets/css/theme.min.css         |   2 [32m+[m[31m-[m
 public/assets/css/theme.min.css.map     |   2 [32m+[m[31m-[m
 public/assets/css/user-rtl.css          |  24 [32m++++[m
 public/assets/css/user-rtl.css.map      |   2 [32m+[m[31m-[m
 public/assets/css/user-rtl.min.css      |   2 [32m+[m[31m-[m
 public/assets/css/user-rtl.min.css.map  |   2 [32m+[m[31m-[m
 public/assets/css/user.css              |  24 [32m++++[m
 public/assets/css/user.css.map          |   2 [32m+[m[31m-[m
 public/assets/css/user.min.css          |   2 [32m+[m[31m-[m
 public/assets/css/user.min.css.map      |   2 [32m+[m[31m-[m
 public/assets/js/theme.js               |  25 [32m++++[m
 public/assets/js/theme.js.map           |   2 [32m+[m[31m-[m
 public/assets/js/theme.min.js           |   2 [32m+[m[31m-[m
 public/assets/js/theme.min.js.map       |   2 [32m+[m[31m-[m
 public/{portfolio.html => blog.html}    | 213 [32m+++++++++++++++++++++[m[31m-----------[m
 public/gallery.html                     | 205 [31m------------------------------[m
 public/index.html                       |  11 [32m++[m
 src/js/theme-toggle.js                  |  23 [32m++++[m
 src/js/theme.js                         |   2 [32m+[m
 src/pages-html/about.html               |  11 [32m++[m
 src/pages-html/blog.html                |  11 [32m++[m
 src/pages-html/exhibitions.html         |  11 [32m++[m
 src/pages-html/gallery.html             |  12 [32m++[m
 src/pages-html/index.html               |  11 [32m++[m
 src/pages-html/portfolio.html           |  11 [32m++[m
 src/scss/_user-variables.scss           |   7 [32m+[m[31m-[m
 src/scss/user.scss                      |  12 [32m+[m[31m-[m
 33 files changed, 492 insertions(+), 447 deletions(-)

"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 1126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/SVGIcons/index.ts + 2 modules
var SVGIcons = __webpack_require__(8618);
;// CONCATENATED MODULE: ./components/Navbar/ShoppingCartIcon.tsx




const ShoppingCartIcon = ({ cartCount , name  })=>{
    const showCartCount = ()=>{
        if (!cartCount) {
            return `(0)`;
        }
        if (cartCount > 9) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "9",
                    /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                        children: "+"
                    })
                ]
            });
        }
        return `(${cartCount})`;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-934684e760d8ad77" + " " + "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SVGIcons/* Basket */.LX, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-934684e760d8ad77" + " " + "text",
                children: [
                    ` ${name} `,
                    showCartCount()
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "934684e760d8ad77",
                children: ".container.jsx-934684e760d8ad77{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.text.jsx-934684e760d8ad77{margin-left:.5rem}.text.jsx-934684e760d8ad77 span.jsx-934684e760d8ad77{font-size:smaller}"
            })
        ]
    });
};
/* harmony default export */ const Navbar_ShoppingCartIcon = (ShoppingCartIcon);

// EXTERNAL MODULE: ./store/Cart.tsx
var Cart = __webpack_require__(336);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx









const Navbar = ()=>{
    const { pathname  } = (0,router_.useRouter)();
    const { count: cartCount  } = (0,Cart/* useCart */.jD)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        size: "huge",
        borderless: true,
        pointing: true,
        as: "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                text: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Item, {
                            active: pathname === "/",
                            title: "Inicio | Todos los productos",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SVGIcons/* Arepa */.a4, {}),
                                "Are-Passion Store"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Menu, {
                        position: "right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cart",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                                active: pathname === "/cart",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar_ShoppingCartIcon, {
                                    cartCount: cartCount,
                                    name: "Canasta"
                                })
                            })
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6366515b476e04a8",
                children: ".ui.menu.huge{font-size:1.5rem;Background-color:gold}"
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer/Footer.tsx





const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Segment, {
        vertical: true,
        as: "footer",
        style: {
            padding: "4em 0em",
            marginTop: "3em",
            borderTop: "1px solid #f2f2f2"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
                text: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
                        stackable: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            content: "About us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                        children: "Learn more"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            content: "Services"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                        children: "Our arepas"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
                                    width: 7,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                                            as: "h4",
                                            children: "Made by"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "jsx-7ce76908004f3bc2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "httNaya070ps://github.com/",
                                                    className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                    children: "@Naya070 "
                                                }),
                                                "thanks to Platzi an its",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://platzi.com/",
                                                    className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                    children: " Next.JS course "
                                                }),
                                                "imparted by ",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://twitter.com/jonalvarezz",
                                                    className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                    children: "@jonalvarezz"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.List, {
                                            horizontal: true,
                                            style: {
                                                display: "flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                    icon: "linkedin",
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.linkedin.com/in/nayarith-jim%C3%A9nez/",
                                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                        children: "LinkedIn"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                    icon: "mail",
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                        children: "nayarith070@gmail.com"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.List.Item, {
                                                    icon: "github",
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "httNaya070ps://github.com/",
                                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                                        children: "GitHub"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-7ce76908004f3bc2" + " " + "colophon",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-7ce76908004f3bc2" + " " + "colophon-entry",
                                children: [
                                    "Icons made by",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.flaticon.com/authors/freepik",
                                        title: "Freepik",
                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                        children: "Freepik"
                                    }),
                                    " from ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.flaticon.com/",
                                        title: "Flaticon",
                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                        children: "www.flaticon.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "jsx-7ce76908004f3bc2" + " " + "colophon-entry",
                                children: [
                                    "Arepa images taken from",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://365sanguchez.com/arepa-origen-historia-curiosidades/#:~:text=La%20arepa%20es%20un%20s%C3%ADmbolo,remojar%20ni%20moler%20el%20ma%C3%ADz",
                                        title: "California Avocado",
                                        className: "jsx-7ce76908004f3bc2" + " " + "acnor link-color",
                                        children: "365sanguchez"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: "https://www.cocinayvino.com/en-la-cocina/especiales/arepas-venezolanas-famosas/",
                                        title: "Flaticon",
                                        className: "jsx-7ce76908004f3bc2" + " " + "link-color",
                                        children: "Cocina y Vino"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "7ce76908004f3bc2",
                children: ".colophon.jsx-7ce76908004f3bc2{text-align:center;margin-top:3.2rem;font-size:.8rem}.colophon-entry.jsx-7ce76908004f3bc2{color:grey;margin-bottom:0}.link-color.jsx-7ce76908004f3bc2{Color:purple}"
            })
        ]
    });
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx





const Layout = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
                as: "main",
                text: true,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
/* harmony default export */ const Layout_Layout = (Layout);


/***/ }),

/***/ 6067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Arepa_muerta_grande = ({ size ="34px" , ...otherProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "body_1",
        width: "124",
        height: "124",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            transform: "matrix(0.45925927 0 0 0.45925927 0 0)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M144 21C 144 20 142 18 141 17C 140 16 139 16 138 15C 137 14 135 13 132 13C 129 13 125.92389 13.38269 125 13C 123.69342 12.4588 122 12 121 12C 119 12 118.38269 12.07611 118 13C 117.4588 14.30655 116.51373 13.82376 116 16C 115.77026 16.97324 115.1756 17.0979 114 19C 113.47424 19.85065 112.70709 23.29291 112 24C 111.29291 24.70709 110 26 108 28C 107 29 106.14728 31.1731 105 32C 103.18604 33.30746 101.9021 34.82443 100 36C 97.44806 37.57718 95.30658 36.4588 94 37C 90.3045 38.53073 88 37 85 37C 82 37 81 37 79 37C 77 37 75 37 72 37C 70 37 66.94647 36.5405 65 37C 62.82373 37.51373 61.17627 38.48627 59 39C 57.05353 39.4595 54.8269 40.85272 54 42C 52.69257 43.814 51.0824 44.38687 50 47C 49.23462 48.84775 48.5412 49.69345 48 51C 46.85193 53.77164 48.45953 56.0535 48 58C 47.48627 60.17624 47 62 47 64C 47 66 47 68 47 69C 47 71 47.30743 73.186 46 75C 45.1731 76.14728 43 78 41 79C 39 80 37.18732 81.20682 35 83C 32.21167 85.28589 30.38617 86.297 28 89C 26.52014 90.67633 25.0824 92.38687 24 95C 23.61731 95.92389 24 99 24 100C 24 101 24 102 24 103C 24 104 24.4588 103.69345 25 105C 25.38269 105.92389 25.29291 107.29291 26 108C 26.70709 108.70709 27 109 27 110C 27 111 25.70709 112.29291 25 113C 22.87866 115.12134 24.51373 117.82373 24 120C 23.54047 121.94647 24 124 24 125C 24 125 24.48627 125.82373 25 128C 25.22974 128.97327 26.4588 130.69342 27 132C 27.38269 132.92389 27.70544 134.34619 30 136C 31.81396 137.30743 33.41888 139.41888 35 141C 36.58112 142.58112 38.18604 143.69257 40 145C 41.14728 145.8269 43 147 43 147C 44 147 44.08026 147.31073 47 148C 49.17627 148.51373 48.94342 150.1477 54 152C 56.96936 153.0877 59 154 60 154C 61 154 63 154 64 154C 66 154 68 154 70 154C 71 154 72 154 73 154C 74 154 75 154 76 154C 77 154 78 154 79 153C 81 151 81.61731 149.92389 82 149C 82.5412 147.69342 83.23462 146.84778 84 145C 84.5412 143.69342 86.4588 143.30658 87 142C 87.38269 141.07611 87 140 88 139C 89 138 88.69257 136.81396 90 135C 90.8269 133.85272 92.48627 133.17627 93 131C 93.22974 130.02673 94.07611 129.38269 95 129C 96.30658 128.4588 97 127 98 126C 100 124 101.513 122.40601 103 120C 104.66254 117.31 105 116 107 114C 109 112 110.41888 111.58115 112 110C 113.58112 108.41885 115 106 117 104C 118 103 120.18604 101.30746 122 100C 125.44183 97.51929 126.34619 95.29453 128 93C 129.30743 91.186 130 90 132 88C 133 87 134 85 135 84C 138 81 139.23462 78.84775 140 77C 141.0824 74.38687 144 73 146 71C 147 70 148.1731 68.14728 149 67C 150.30743 65.186 150 64 150 62C 150 60 150.84149 59.23044 151 57C 151.22418 53.84567 150 53 150 52C 150 50 150 49 150 48C 150 47 150 46 150 45C 150 43 150 41 150 41C 150 40 150 39 150 38C 150 36 149.5412 34.30655 149 33C 148.61731 32.07611 149 31 149 29C 149 28 149 27 149 27C 148 26 148 25 148 24C 148 23 148.70709 22.70709 148 22C 147.29291 21.29291 147.38269 20.92389 147 20C 146.4588 18.69345 146 18 145 17L145 17L144 17L144 16",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#56FF56",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(-0.1908089 0.98162717 -0.98162717 -0.1908089 269.61447 -74.25307)",
                        d: "M222 12C 222 11 220 9 219 8C 218 7 217 7 216 6C 215 5 213 4 210 4C 207 4 203.92389 4.38269 203 4C 201.69342 3.4588 200 3 199 3C 197 3 196.38269 3.07611 196 4C 195.4588 5.30655 194.51373 4.82376 194 7C 193.77026 7.97324 193.1756 8.0979 192 10C 191.47424 10.85065 190.70709 14.29291 190 15C 189.29291 15.70709 188 17 186 19C 185 20 184.14728 22.1731 183 23C 181.18604 24.30746 179.9021 25.82443 178 27C 175.44806 28.57718 173.30658 27.4588 172 28C 168.3045 29.53073 166 28 163 28C 160 28 159 28 157 28C 155 28 153 28 150 28C 148 28 144.94647 27.5405 143 28C 140.82373 28.51373 139.17627 29.48627 137 30C 135.05353 30.4595 132.8269 31.85272 132 33C 130.69257 34.814 129.0824 35.38687 128 38C 127.23462 39.84775 126.5412 40.69345 126 42C 124.85193 44.77164 126.45953 47.0535 126 49C 125.48627 51.17624 125 53 125 55C 125 57 125 59 125 60C 125 62 125.30743 64.186 124 66C 123.1731 67.14728 121 69 119 70C 117 71 115.18732 72.20682 113 74C 110.21167 76.28589 108.38617 77.297 106 80C 104.52014 81.67633 103.0824 83.38687 102 86C 101.61731 86.92389 102 90 102 91C 102 92 102 93 102 94C 102 95 102.4588 94.69345 103 96C 103.38269 96.92389 103.29291 98.29291 104 99C 104.70709 99.70709 105 100 105 101C 105 102 103.70709 103.29291 103 104C 100.87866 106.12134 102.51373 108.82373 102 111C 101.54047 112.94647 102 115 102 116C 102 116 102.48627 116.82373 103 119C 103.22974 119.97327 104.4588 121.69342 105 123C 105.38269 123.92389 105.70544 125.34619 108 127C 109.81396 128.30743 111.41888 130.41888 113 132C 114.58112 133.58112 116.18604 134.69257 118 136C 119.14728 136.8269 121 138 121 138C 122 138 122.08026 138.31073 125 139C 127.17627 139.51373 126.94342 141.1477 132 143C 134.96936 144.0877 137 145 138 145C 139 145 141 145 142 145C 144 145 146 145 148 145C 149 145 150 145 151 145C 152 145 153 145 154 145C 155 145 156 145 157 144C 159 142 159.61731 140.92389 160 140C 160.5412 138.69342 161.23462 137.84778 162 136C 162.5412 134.69342 164.4588 134.30658 165 133C 165.38269 132.07611 165 131 166 130C 167 129 166.69257 127.81396 168 126C 168.8269 124.85272 170.48627 124.17627 171 122C 171.22974 121.02673 172.07611 120.38269 173 120C 174.30658 119.4588 175 118 176 117C 178 115 179.513 113.40601 181 111C 182.66254 108.31 183 107 185 105C 187 103 188.41888 102.58115 190 101C 191.58112 99.41885 193 97 195 95C 196 94 198.18604 92.30746 200 91C 203.44183 88.51929 204.34619 86.29453 206 84C 207.30743 82.186 208 81 210 79C 211 78 212 76 213 75C 216 72 217.23462 69.84775 218 68C 219.0824 65.38687 222 64 224 62C 225 61 226.1731 59.14728 227 58C 228.30743 56.186 228 55 228 53C 228 51 228.84149 50.23044 229 48C 229.22418 44.84567 228 44 228 43C 228 41 228 40 228 39C 228 38 228 37 228 36C 228 34 228 32 228 32C 228 31 228 30 228 29C 228 27 227.5412 25.30655 227 24C 226.61731 23.07611 227 22 227 20C 227 19 227 18 227 18C 226 17 226 16 226 15C 226 14 226.70709 13.70709 226 13C 225.29291 12.29291 225.38269 11.92389 225 11C 224.4588 9.69345 224 9 223 8L223 8L222 8L222 7",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#56FF56",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M157 56L233 56L233 133L157 133L157 56z",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#FFD800",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.48480955 -0.8746198 0.8746198 0.48480955 -11.064186 130.21675)",
                        d: "M67 36L143 36L143 113L67 113z",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#FFAAFF",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M36 56L112 56L112 133L36 133z",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#FFD800",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.50000006 0.8660253 -0.8660253 0.50000006 144.15283 -102.6801)",
                        d: "M123 35L199 35L199 112L123 112z",
                        stroke: "#000000",
                        "stroke-width": "5",
                        fill: "#FFAAFF",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M134.5 262C 80.6326 262 37 214.33978 37 155.5C 37 96.66022 80.6326 49 134.5 49C 188.3674 49 232 96.66022 232 155.5C 232 214.33978 188.3674 262 134.5 262z",
                        stroke: "#000000",
                        "stroke-width": "10",
                        fill: "#B7B07C",
                        "fill-rule": "nonzero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(-1 8.742278E-08 -8.742278E-08 -1 265.262 347.86798)",
                        d: "M120 168C 120 169 120 170 122 174C 124 178 126.01291 179.83981 127 180C 130.12143 180.50655 133.22937 181.66801 137 180C 140.29733 178.54137 142.60645 176.4613 144 174C 146.03146 170.41208 145 169 145 168L145 168L145 167",
                        stroke: "#000000",
                        "stroke-width": "7",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M64 188L191 99",
                        stroke: "#7F3F00",
                        "stroke-width": "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M144 230L191 195",
                        stroke: "#7F3F00",
                        "stroke-width": "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M64 130L139 75",
                        stroke: "#7F3F00",
                        "stroke-width": "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M101 215L181 157",
                        stroke: "#7F3F00",
                        "stroke-width": "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.017452382 -0.9998477 0.9998477 0.017452382 -39.533936 213.76999)",
                        d: "M72.88183 146.41733L105.11817 107.58267",
                        stroke: "#000000",
                        "stroke-width": "10",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.99338955 -0.11479169 0.11479169 0.99338955 -13.882042 10.934578)",
                        d: "M71.88183 145.41733L104.11817 106.58267",
                        stroke: "#000000",
                        "stroke-width": "10",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.99338955 -0.11479169 0.11479169 0.99338955 -13.421738 20.928062)",
                        d: "M158.88184 146.41733L191.11816 107.58267",
                        stroke: "#000000",
                        "stroke-width": "10",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        transform: "matrix(0.017452382 -0.9998477 0.9998477 0.017452382 43.948013 302.72183)",
                        d: "M159.88184 148.41733L192.11816 109.58267",
                        stroke: "#000000",
                        "stroke-width": "10",
                        fill: "none"
                    })
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arepa_muerta_grande);


/***/ }),

/***/ 8618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a4": () => (/* reexport */ SVGIcons_Arepa),
  "LX": () => (/* reexport */ SVGIcons_Basket)
});

// UNUSED EXPORTS: Arepa_muerta_grande

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/SVGIcons/Arepa.tsx


const Arepa = ({ size ="54px" , ...otherProps })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        id: "body_1",
        width: size,
        height: size,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            transform: "matrix(0.20000002 0 0 0.20000002 0 0)",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M144 21C 144 20 142 18 141 17C 140 16 139 16 138 15C 137 14 135 13 132 13C 129 13 125.92389 13.38269 125 13C 123.69342 12.4588 122 12 121 12C 119 12 118.38269 12.07611 118 13C 117.4588 14.30655 116.51373 13.82376 116 16C 115.77026 16.97324 115.1756 17.0979 114 19C 113.47424 19.85065 112.70709 23.29291 112 24C 111.29291 24.70709 110 26 108 28C 107 29 106.14728 31.1731 105 32C 103.18604 33.30746 101.9021 34.82443 100 36C 97.44806 37.57718 95.30658 36.4588 94 37C 90.3045 38.53073 88 37 85 37C 82 37 81 37 79 37C 77 37 75 37 72 37C 70 37 66.94647 36.5405 65 37C 62.82373 37.51373 61.17627 38.48627 59 39C 57.05353 39.4595 54.8269 40.85272 54 42C 52.69257 43.814 51.0824 44.38687 50 47C 49.23462 48.84775 48.5412 49.69345 48 51C 46.85193 53.77164 48.45953 56.0535 48 58C 47.48627 60.17624 47 62 47 64C 47 66 47 68 47 69C 47 71 47.30743 73.186 46 75C 45.1731 76.14728 43 78 41 79C 39 80 37.18732 81.20682 35 83C 32.21167 85.28589 30.38617 86.297 28 89C 26.52014 90.67633 25.0824 92.38687 24 95C 23.61731 95.92389 24 99 24 100C 24 101 24 102 24 103C 24 104 24.4588 103.69345 25 105C 25.38269 105.92389 25.29291 107.29291 26 108C 26.70709 108.70709 27 109 27 110C 27 111 25.70709 112.29291 25 113C 22.87866 115.12134 24.51373 117.82373 24 120C 23.54047 121.94647 24 124 24 125C 24 125 24.48627 125.82373 25 128C 25.22974 128.97327 26.4588 130.69342 27 132C 27.38269 132.92389 27.70544 134.34619 30 136C 31.81396 137.30743 33.41888 139.41888 35 141C 36.58112 142.58112 38.18604 143.69257 40 145C 41.14728 145.8269 43 147 43 147C 44 147 44.08026 147.31073 47 148C 49.17627 148.51373 48.94342 150.1477 54 152C 56.96936 153.0877 59 154 60 154C 61 154 63 154 64 154C 66 154 68 154 70 154C 71 154 72 154 73 154C 74 154 75 154 76 154C 77 154 78 154 79 153C 81 151 81.61731 149.92389 82 149C 82.5412 147.69342 83.23462 146.84778 84 145C 84.5412 143.69342 86.4588 143.30658 87 142C 87.38269 141.07611 87 140 88 139C 89 138 88.69257 136.81396 90 135C 90.8269 133.85272 92.48627 133.17627 93 131C 93.22974 130.02673 94.07611 129.38269 95 129C 96.30658 128.4588 97 127 98 126C 100 124 101.513 122.40601 103 120C 104.66254 117.31 105 116 107 114C 109 112 110.41888 111.58115 112 110C 113.58112 108.41885 115 106 117 104C 118 103 120.18604 101.30746 122 100C 125.44183 97.51929 126.34619 95.29453 128 93C 129.30743 91.186 130 90 132 88C 133 87 134 85 135 84C 138 81 139.23462 78.84775 140 77C 141.0824 74.38687 144 73 146 71C 147 70 148.1731 68.14728 149 67C 150.30743 65.186 150 64 150 62C 150 60 150.84149 59.23044 151 57C 151.22418 53.84567 150 53 150 52C 150 50 150 49 150 48C 150 47 150 46 150 45C 150 43 150 41 150 41C 150 40 150 39 150 38C 150 36 149.5412 34.30655 149 33C 148.61731 32.07611 149 31 149 29C 149 28 149 27 149 27C 148 26 148 25 148 24C 148 23 148.70709 22.70709 148 22C 147.29291 21.29291 147.38269 20.92389 147 20C 146.4588 18.69345 146 18 145 17L145 17L144 17L144 16",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#56FF56",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        transform: "matrix(-0.1908089 0.98162717 -0.98162717 -0.1908089 269.61447 -74.25307)",
                        d: "M222 12C 222 11 220 9 219 8C 218 7 217 7 216 6C 215 5 213 4 210 4C 207 4 203.92389 4.38269 203 4C 201.69342 3.4588 200 3 199 3C 197 3 196.38269 3.07611 196 4C 195.4588 5.30655 194.51373 4.82376 194 7C 193.77026 7.97324 193.1756 8.0979 192 10C 191.47424 10.85065 190.70709 14.29291 190 15C 189.29291 15.70709 188 17 186 19C 185 20 184.14728 22.1731 183 23C 181.18604 24.30746 179.9021 25.82443 178 27C 175.44806 28.57718 173.30658 27.4588 172 28C 168.3045 29.53073 166 28 163 28C 160 28 159 28 157 28C 155 28 153 28 150 28C 148 28 144.94647 27.5405 143 28C 140.82373 28.51373 139.17627 29.48627 137 30C 135.05353 30.4595 132.8269 31.85272 132 33C 130.69257 34.814 129.0824 35.38687 128 38C 127.23462 39.84775 126.5412 40.69345 126 42C 124.85193 44.77164 126.45953 47.0535 126 49C 125.48627 51.17624 125 53 125 55C 125 57 125 59 125 60C 125 62 125.30743 64.186 124 66C 123.1731 67.14728 121 69 119 70C 117 71 115.18732 72.20682 113 74C 110.21167 76.28589 108.38617 77.297 106 80C 104.52014 81.67633 103.0824 83.38687 102 86C 101.61731 86.92389 102 90 102 91C 102 92 102 93 102 94C 102 95 102.4588 94.69345 103 96C 103.38269 96.92389 103.29291 98.29291 104 99C 104.70709 99.70709 105 100 105 101C 105 102 103.70709 103.29291 103 104C 100.87866 106.12134 102.51373 108.82373 102 111C 101.54047 112.94647 102 115 102 116C 102 116 102.48627 116.82373 103 119C 103.22974 119.97327 104.4588 121.69342 105 123C 105.38269 123.92389 105.70544 125.34619 108 127C 109.81396 128.30743 111.41888 130.41888 113 132C 114.58112 133.58112 116.18604 134.69257 118 136C 119.14728 136.8269 121 138 121 138C 122 138 122.08026 138.31073 125 139C 127.17627 139.51373 126.94342 141.1477 132 143C 134.96936 144.0877 137 145 138 145C 139 145 141 145 142 145C 144 145 146 145 148 145C 149 145 150 145 151 145C 152 145 153 145 154 145C 155 145 156 145 157 144C 159 142 159.61731 140.92389 160 140C 160.5412 138.69342 161.23462 137.84778 162 136C 162.5412 134.69342 164.4588 134.30658 165 133C 165.38269 132.07611 165 131 166 130C 167 129 166.69257 127.81396 168 126C 168.8269 124.85272 170.48627 124.17627 171 122C 171.22974 121.02673 172.07611 120.38269 173 120C 174.30658 119.4588 175 118 176 117C 178 115 179.513 113.40601 181 111C 182.66254 108.31 183 107 185 105C 187 103 188.41888 102.58115 190 101C 191.58112 99.41885 193 97 195 95C 196 94 198.18604 92.30746 200 91C 203.44183 88.51929 204.34619 86.29453 206 84C 207.30743 82.186 208 81 210 79C 211 78 212 76 213 75C 216 72 217.23462 69.84775 218 68C 219.0824 65.38687 222 64 224 62C 225 61 226.1731 59.14728 227 58C 228.30743 56.186 228 55 228 53C 228 51 228.84149 50.23044 229 48C 229.22418 44.84567 228 44 228 43C 228 41 228 40 228 39C 228 38 228 37 228 36C 228 34 228 32 228 32C 228 31 228 30 228 29C 228 27 227.5412 25.30655 227 24C 226.61731 23.07611 227 22 227 20C 227 19 227 18 227 18C 226 17 226 16 226 15C 226 14 226.70709 13.70709 226 13C 225.29291 12.29291 225.38269 11.92389 225 11C 224.4588 9.69345 224 9 223 8L223 8L222 8L222 7",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#56FF56",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M157 56L233 56L233 133L157 133L157 56z",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#FFD800",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        transform: "matrix(0.48480955 -0.8746198 0.8746198 0.48480955 -11.064186 130.21675)",
                        d: "M67 36L143 36L143 113L67 113z",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#FFAAFF",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M36 56L112 56L112 133L36 133z",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#FFD800",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        transform: "matrix(0.50000006 0.8660253 -0.8660253 0.50000006 144.15283 -102.6801)",
                        d: "M123 35L199 35L199 112L123 112z",
                        stroke: "#000000",
                        strokeWidth: "5",
                        fill: "#FFAAFF",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M134.5 262C 80.6326 262 37 214.33978 37 155.5C 37 96.66022 80.6326 49 134.5 49C 188.3674 49 232 96.66022 232 155.5C 232 214.33978 188.3674 262 134.5 262z",
                        stroke: "#000000",
                        strokeWidth: "10",
                        fill: "#FFD4AA",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M75 156.5C 75 155.67157 80.59644 155 87.5 155C 94.40356 155 100 155.67157 100 156.5C 100 157.32843 94.40356 158 87.5 158C 80.59644 158 75 157.32843 75 156.5",
                        stroke: "#FF7F00",
                        strokeWidth: "10",
                        fill: "#FF7F00",
                        fillRule: "nonzero",
                        fillOpacity: "0.64705884"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M163 155.5C 163 154.67157 168.59644 154 175.5 154C 182.40356 154 188 154.67157 188 155.5C 188 156.32843 182.40356 157 175.5 157C 168.59644 157 163 156.32843 163 155.5",
                        stroke: "#FF7F00",
                        strokeWidth: "10",
                        fill: "#FF7F00",
                        fillRule: "nonzero",
                        fillOpacity: "0.64705884"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M120 168C 120 169 120 170 122 174C 124 178 126.01291 179.83981 127 180C 130.12143 180.50655 133.22937 181.66801 137 180C 140.29733 178.54137 142.60645 176.4613 144 174C 146.03146 170.41208 145 169 145 168L145 168L145 167",
                        stroke: "#000000",
                        strokeWidth: "7",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M92 132.5C 92 118.969025 94.91015 108 98.5 108C 102.08985 108 105 118.969025 105 132.5C 105 146.03098 102.08985 157 98.5 157C 94.91015 157 92 146.03098 92 132.5",
                        stroke: "#000000",
                        strokeWidth: "1",
                        fill: "#000000",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M158 130.5C 158 116.969025 160.91016 106 164.5 106C 168.08984 106 171 116.969025 171 130.5C 171 144.03098 168.08984 155 164.5 155C 160.91016 155 158 144.03098 158 130.5",
                        stroke: "#000000",
                        strokeWidth: "1",
                        fill: "#000000",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M64 188L191 99",
                        stroke: "#7F3F00",
                        strokeWidth: "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M144 230L191 195",
                        stroke: "#7F3F00",
                        strokeWidth: "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M64 130L139 75",
                        stroke: "#7F3F00",
                        strokeWidth: "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M101 215L181 157",
                        stroke: "#7F3F00",
                        strokeWidth: "9",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M161 125C 161 120.029434 161.67157 116 162.5 116C 163.32843 116 164 120.029434 164 125C 164 129.97057 163.32843 134 162.5 134C 161.67157 134 161 129.97057 161 125",
                        stroke: "#FFFFFF",
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M164 147C 164 144.79086 164.67157 143 165.5 143C 166.32843 143 167 144.79086 167 147C 167 149.20914 166.32843 151 165.5 151C 164.67157 151 164 149.20914 164 147",
                        stroke: "#FFFFFF",
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M95 126C 95 121.029434 95.67157 117 96.5 117C 97.32843 117 98 121.029434 98 126C 98 130.97057 97.32843 135 96.5 135C 95.67157 135 95 130.97057 95 126",
                        stroke: "#FFFFFF",
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillRule: "nonzero"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M99 147C 99 144.79086 99.67157 143 100.5 143C 101.32843 143 102 144.79086 102 147C 102 149.20914 101.32843 151 100.5 151C 99.67157 151 99 149.20914 99 147",
                        stroke: "#FFFFFF",
                        strokeWidth: "1",
                        fill: "#FFFFFF",
                        fillRule: "nonzero"
                    })
                ]
            })
        })
    });
/* harmony default export */ const SVGIcons_Arepa = (Arepa);

;// CONCATENATED MODULE: ./components/SVGIcons/Basket.tsx


const Basket = ({ size ="34px"  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 512 512",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M490.1 292.03H21.9c-7.953 0-14.4-6.447-14.4-14.4v-34.391c0-7.953 6.447-14.4 14.4-14.4h468.2c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.952-6.447 14.4-14.4 14.4z",
                fill: "#FAD97E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M490.1 228.84h-38.076c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.953-6.447 14.4-14.4 14.4H490.1c7.953 0 14.4-6.447 14.4-14.4V243.24c0-7.953-6.447-14.4-14.4-14.4z",
                opacity: 0.1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M466.42 292.03H45.57l21.084 153.34c2.439 17.741 17.599 30.959 35.507 30.959h307.67c17.908 0 33.068-13.218 35.507-30.959l21.084-153.34z",
                fill: "#A16B4E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M45.576 292.03l3.561 25.899h375.65l-17.523 127.44c-2.439 17.741-17.599 30.959-35.507 30.959h38.076c17.908 0 33.068-13.218 35.507-30.959l17.523-127.44 3.561-25.899H45.574z",
                opacity: 0.1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M427.22 228.84h-47.241v-94.743c0-28.224-22.962-51.186-51.186-51.186h-145.59c-28.224 0-51.186 22.962-51.186 51.186v94.743H84.776v-94.743c0-54.272 44.154-98.427 98.427-98.427h145.59c54.273 0 98.427 44.154 98.427 98.427v94.743z",
                fill: "#A16B4E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.1,
                d: "M84.78 202.94H132.02V228.84199999999998H84.78z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                opacity: 0.1,
                d: "M379.98 202.94H427.22V228.84199999999998H379.98z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#FAD97E",
                d: "M193.91 35.672H318.09000000000003V82.912H193.91z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                opacity: 0.1,
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M152.94 438.94l6.718-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717-6.717-6.718 6.717-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.607 10.606l6.717 6.718-6.717 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 13.435 13.435-6.718 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 6.717 6.717c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197a7.5 7.5 0 000-10.606l-6.721-6.718zM426.23 363.1l6.718-6.718a7.5 7.5 0 00-.001-10.607 7.498 7.498 0 00-10.606 0l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.606 0 7.5 7.5 0 00-.001 10.607l6.718 6.718-6.718 6.718a7.5 7.5 0 00.001 10.607c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.304-2.197l6.717-6.717 6.717 6.717a7.476 7.476 0 005.304 2.197 7.474 7.474 0 005.303-2.197 7.5 7.5 0 00.001-10.607l-6.72-6.718z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "#F15B70",
                opacity: 0.3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                        cx: 193.02,
                        cy: 369.52,
                        rx: 26.96,
                        ry: 11.698
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                        cx: 318.98,
                        cy: 369.52,
                        rx: 26.96,
                        ry: 11.698
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M490.1 221.34h-55.378v-87.243c0-58.408-47.519-105.93-105.93-105.93h-145.59c-58.408 0-105.93 47.519-105.93 105.93v87.243H21.894c-12.076 0-21.9 9.824-21.9 21.9v34.391c0 12.076 9.824 21.9 21.9 21.9h17.137l14.35 104.36a7.5 7.5 0 1014.859-2.044l-14.07-102.32h346.6c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H21.9a6.907 6.907 0 01-6.9-6.9v-34.391c0-3.805 3.096-6.9 6.9-6.9h62.868l.01.001.01-.001h47.221l.01.001.01-.001h247.94l.01.001.01-.001h47.221l.01.001.01-.001h62.867c3.805 0 6.9 3.095 6.9 6.9v34.391c0 3.805-3.096 6.9-6.9 6.9h-56.094c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h23.817l-19.913 144.82c-1.92 13.956-13.99 24.48-28.077 24.48H102.16c-14.087 0-26.157-10.524-28.077-24.481l-1.696-12.333a7.5 7.5 0 10-14.859 2.044l1.696 12.332c2.935 21.343 21.394 37.438 42.937 37.438h307.67c21.543 0 40.002-16.095 42.936-37.438l20.193-146.86h17.137c12.076 0 21.9-9.824 21.9-21.9v-34.391c0-12.073-9.824-21.899-21.9-21.899zM296.76 43.17h13.835v32.241H296.76V43.17zm-33.255 0h18.255v32.241h-18.255V43.17zm-33.255 0h18.255v32.241H230.25V43.17zm-28.835 0h13.835v32.241h-13.835V43.17zm171.07 178.17h-232.96v-48.044c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.044h-32.24v-87.243c0-50.137 40.79-90.927 90.927-90.927h3.205v32.241h-3.205c-32.36 0-58.686 26.327-58.686 58.686V143c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-8.903c0-24.088 19.598-43.686 43.686-43.686h145.59c24.089 0 43.687 19.598 43.687 43.686v87.243h-.002zm47.241 0h-32.24v-87.243c0-32.359-26.326-58.686-58.687-58.686h-3.205v-32.24h3.205c50.137 0 90.927 40.79 90.927 90.927v87.242zm-93.24 122.15v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-125.96 0v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455a7.5 7.5 0 0015 0zm55.482 15.528a29.528 29.528 0 0022.26-10.137 7.499 7.499 0 00-.727-10.582 7.5 7.5 0 00-10.582.726c-2.765 3.173-6.757 4.993-10.951 4.993s-8.186-1.82-10.951-4.993a7.5 7.5 0 00-10.582-.726 7.5 7.5 0 00-.727 10.582 29.524 29.524 0 0022.26 10.137z"
            })
        ]
    });
/* harmony default export */ const SVGIcons_Basket = (Basket);

// EXTERNAL MODULE: ./components/SVGIcons/Arepa_muerta_grande.tsx
var Arepa_muerta_grande = __webpack_require__(6067);
;// CONCATENATED MODULE: ./components/SVGIcons/index.ts





/***/ })

};
;
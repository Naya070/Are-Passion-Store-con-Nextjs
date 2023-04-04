"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Hey there you curious :)
 *
 * By default, NextJS APIs are same-site origin only.
 * But since *I needed the main project*
 * to have public API access, I had to configure CORS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */ const CORS_OPTIONS = {
    methods: [
        "GET",
        "OPTIONS"
    ]
};
function promisifyMiddleware(middleware) {
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}
// Initialize the cors middleware
const cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cors);


/***/ }),

/***/ 9081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ db)
});

;// CONCATENATED MODULE: ./database/data.ts
const data = {
    "2zd33b8c": {
        name: "Reina Pepiada",
        id: "2zd33b8c",
        sku: "NUR72KCM",
        price: 1.15,
        image: "/images/reina_pepiada.jpg",
        attributes: {
            description: "This is the best known arepa of all, it was conceived by the mother of the famous \xc1lvarez Brothers in 1955, in honor of the Venezuelan Miss World Susana Duijm. Originally, chicken salad was combined with avocado slices and petit pois inside the arepa; Nowadays, a previous mixture of shredded chicken with mayonnaise and avocado is usually made.",
            ingredients: "Shredded beef or shredded chicken, mashed avocado, mayonnaise or Greek yogurt. In addition, avocado slices are added.",
            taste: "Amazing, the soft but delicious flavor of the chicken salad together with the velvety flavor of the avocado will make you feel like you are walking on clouds."
        }
    },
    "6trfgkkj": {
        name: "Pel\xfaa",
        id: "6trfgkkj",
        sku: "AX4M8SJV",
        price: 1.21,
        image: "/images/pelua.png",
        attributes: {
            description: "Shredded meat has always been quite popular in areperas and its combination with yellow cheese is one of the most requested. It bears that name because of the strands of meat and cheese that seem to add hair to the arepa.",
            ingredients: "Shredded beef and grated white or yellow cheese",
            taste: "Magnificent, when eating this arepa you feel like you are eating a little bit of heaven."
        }
    },
    "7bcr49em": {
        name: "Domin\xf3",
        id: "7bcr49em",
        sku: "HYA78F6J",
        price: 1.25,
        image: "/images/domino.jpg",
        attributes: {
            description: "This combination of beans with hard white cheese is also common in empanadas and one of the oldest inside an arepa. The cheese is usually quite salty and the beans little salty or sweet, to achieve a delicious contrast.",
            ingredients: "Black beans and grated white cheese",
            taste: "Illuminating, the combination of sweet beans and salty cheese will make you reflect on the black and white of life, making you appreciate every moment. Eating this arepa is quite an epiphany."
        }
    },
    "098323ks": {
        name: "Rompe Colch\xf3n",
        id: "098323ks",
        sku: "BXD100BLK",
        price: 1.51,
        image: "/images/rompe_colchon.jpg",
        attributes: {
            description: "Some shellfish supposedly have aphrodisiac properties. That is why various mixtures of seafood bear this name, usually in vinaigrette or oil, to fill the toast: pepitonas, shrimp, squid, chipi-chipi, octopus, guacuco, etc.",
            ingredients: "pepitonas, shrimp, squid, chipi-chipi, octopus and guacuco",
            taste: "Extraordinary, after eating one of these aphrodisiac arepas you will only want one thing... Another rompe colch\xf3n!! It is so exquisite and beachy that you will always want one more."
        }
    },
    b8uthe2y: {
        name: "Rumbera",
        id: "b8uthe2y",
        sku: "RMRCZN7E",
        price: 1.39,
        image: "/images/rumbera.jpg",
        attributes: {
            description: "Pieces of delicious baked ham with grated yellow cheese. It takes its name from the Caracas tradition of seeking asylum in an arepera, late in the morning, after a good party.",
            ingredients: "Baked ham and grated yellow cheese",
            taste: "Gorgeous, If you like pork, this is your arepa. the ham along with the yellow cheese are a strong combination of flavors that the arepa dough will perfectly balance, it is a delicious experience that everyone can try."
        }
    },
    ewxsd6xb: {
        name: "Pabell\xf3n",
        id: "ewxsd6xb",
        sku: "N55229ZA",
        price: 1.34,
        image: "/images/pabellon.jpg",
        attributes: {
            description: "The typical Venezuelan dish is taken to the arepa with plantain, beans, shredded meat and grated hard white cheese. This dish carries the essence of the Venezuelan and is a challenge that conquers foreign palates.",
            ingredients: "Black beans, shredded meat, fried plantain slices and grated white cheese",
            taste: 'Emotional, this arepa is an explosion of several different flavors that combine and complement each other to perfection, it will make you say: "I am desert, jungle, snow and volcano" while you feel the emotion of each Venezuelan immigrant upon reaching their homeland.'
        }
    },
    fpr72m9k: {
        name: "Perico",
        id: "fpr72m9k",
        sku: "B4HZ42TM",
        price: 1.27,
        image: "/images/perico.jpg",
        attributes: {
            description: "This preparation of scrambled eggs with tomato, sweet pepper and chopped onion, with a little salt, is typical in Venezuelan breakfasts and can be found as a filling in any arepera.",
            ingredients: "Scrambled eggs, sweet peppers, cilantro, tomato and onion.",
            taste: "Energizing, the simple preparation of the perico does not mean that this is an inferior arepa, this arepa is simple but powerful and absolutely delicious, its ingredients are very nutritious, if you eat it for breakfast you will have a guaranteed productive day."
        }
    },
    t9dv25gs: {
        name: "Gringa",
        id: "t9dv25gs",
        sku: "ZY3T9XXC",
        price: 1.18,
        image: "/images/gringa.jpg",
        attributes: {
            description: "It is a Venezuelan adaptation of the American hamburger: instead of having a wheat bun with a sesame seed topping, an open arepa contains all the ingredients of the classic hamburger.",
            ingredients: "Meat, cheese, egg, onion, lettuce, fried potatoes and sauces",
            taste: "Exquisite, If you don't want to struggle too much thinking about what flavor your arepa will have and you prefer to play it safe or you are simply a hambueguesas lover, try this arepa. This is a way to give a different touch to the classic hamburger."
        }
    },
    t345w48y: {
        name: "Tumbarrancho",
        id: "t345w48y",
        sku: "MW79ZZ6Y",
        price: 1.25,
        image: "/images/tumbarrancho.png",
        attributes: {
            description: "This arepa of Zulian origin takes the prize for the most intricate preparation on the list. First, the roasted arepa is opened and a slice of mortadella is placed on it. Then it is closed, passed through flour and egg, and fried in oil. Finally, the breaded arepa is filled with cheese, chopped cabbage, tomato, ketchup and mayonnaise.",
            ingredients: "Mortadella, cheese, cabbage, tomato, ketchup, mayonnaise",
            taste: "Splendid, a crunchy arepa on the outside and soft on the inside that will make you wish you had tried it before."
        }
    }
};
/* harmony default export */ const database_data = (data);

;// CONCATENATED MODULE: ./database/db.ts
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)

class Database {
    constructor(){}
    async getAll() {
        const asArray = Object.values(database_data);
        await randomDelay();
        return asArray;
    }
    async getById(id) {
        if (!Object.prototype.hasOwnProperty.call(database_data, id)) {
            return null;
        }
        const entry = database_data[id];
        await randomDelay();
        return entry;
    }
}
// Let's also add a delay to make it a bit closer to reality
const randomDelay = ()=>new Promise((resolve)=>{
        const max = 350;
        const min = 100;
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delay);
    });
/* harmony default export */ const db = (Database);


/***/ })

};
;
// const extendTheme = require('./extendTheme')
// const plugin = require("tailwindcss/plugin");
const theme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');






const deepMap = (val, fn) => {
  const it = (val) => {
    if (Array.isArray(val)) return val.map(it);

    if (typeof val === "object") {
      const res = {};
      for (const key of Object.keys(val)) {
        res[key] = it(val[key]);
      }
      return res;
    }

    return fn(val);
  };

  return it(val);
};

const pxify = (val) => {
  if (typeof val === "string")
    val = val.replace(/((\d*\.)?\d+)rem\b/g, (match, num) => `${16 * +num}px`);

  return val;
};

const emify = (val) => {
  if (typeof val === "string")
    val = val.replace(/((\d*\.)?\d+)rem\b/g, (match, num) => `${num}em`);

  return val;
};

const suffixKeys = (obj, suffix) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k + suffix, v])
  );
};

const pxifyDefaults = (theme, keys) => {
  const res = {};
  for (const key of keys) res[key] = deepMap(theme[key], pxify);
  return res;
};

const extendTheme = {
   extend: {
      colors: {
        // "brandblue": "#082c5c",
        "brandblue": "#0f3557",
        "lightBlue": "#f2f5f8",

      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "7/8": "87.5%",
        "8/9": "88.8888889%",
        "9/10": "90%",
        "10/11": "90.9090909%",
        "11/12": "91.6666667%",
        "12/13": "92.3076923%",
        "13/14": "92.8571429%",
        "14/15": "93.3333333%",
        "15/16": "93.75%",
        "16/17": "94.1176471%",
        "17/18": "94.4444444%",
        "18/19": "94.7368421%",
        "19/20": "95%",
        '150': '75rem',
        '140': '70rem',
        '130': '65rem',
        '120': '60rem',
        '110': '55rem',
        '100': '50rem',
        '99': '45rem',
        '98': '40rem',
        '97': '35rem',
        '975': '32.5rem',
        '977': '30rem',
        '9775': '27.5rem',
        '9777': '25rem',
            '97777': '24rem',
        '70': '35rem',

      },
            height: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "7/8": "87.5%",
        "8/9": "88.8888889%",
        "9/10": "90%",
        "10/11": "90.9090909%",
        "11/12": "91.6666667%",
        "12/13": "92.3076923%",
        "13/14": "92.8571429%",
        "14/15": "93.3333333%",
        "15/16": "93.75%",
        "16/17": "94.1176471%",
        "17/18": "94.4444444%",
        "18/19": "94.7368421%",
        "19/20": "95%",
        '150': '75rem',
        '140': '70rem',
        '130': '65rem',
        '120': '60rem',
        '110': '55rem',
        '100': '50rem',
        '99': '45rem',
        '98': '40rem',
        '97': '35rem',
        '975': '32.5rem',
        '977': '30rem',
        '9775': '27.5rem',
              '9777': '25rem',
        // '9777': `${16 * 25}px`,
            '97777': '24rem',
        '70': '35rem',

      },
            
              
      maxWidth: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        '150': '75rem',
        '140': '70rem',
        '130': '65rem',
        '120': '60rem',  
        '110': '55rem',
        '100': '50rem',
        '99': '45rem',
                '985': '42.5rem',
        '98': '40rem',
        '97': '35rem',
        '975': '32.5rem',
        '977': '30rem',
        '9775': '27.5rem',
        '9777': '25rem',
        '40': '20rem',
        '70': '35rem',
      },
            minWidth: {
        "1/7": "14.2857143%",
        "2/7": "28%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        '150': '75rem',
        '140': '70rem',
        '130': '65rem',
        '120': '60rem',  
        '110': '55rem',
        '100': '50rem',
        '99': '45rem',
                '985': '42.5rem',
        '98': '40rem',
        '97': '35rem',
        '975': '32.5rem',
        '977': '30rem',
        '9775': '27.5rem',
        '9777': '25rem',
        '40': '20rem',
        '70': '35rem',
      },
      margin: {
        '22': '6rem',
        '90': '22.5rem',
        '100': '25rem',
        '120': '30rem',
        '130': '32.5rem',
        '140': '35rem',
        '150': '37.5rem',
        '160': '40rem',
        '170': '42.5rem',
        '180': '45rem',
        '190': '47.5rem',
        '200': '50rem',
        '210': '52.5rem',
        '220': '55rem',
        '230': '57.5rem',
        '240': '60rem',
         '245': '62.5rem',
        '250': '65rem',
           '255': '67.5rem',
        '260': '70rem',
        '265': '72.5rem',
        '270': '75rem',
        '275': '77.5rem',
        '280': '80rem',
        '285': '82.5rem',
        '290': '85rem',
        '300': '90rem',
        '310': '95rem',
        '320': '100rem',
        '330': '105rem',
        '340': '110rem',
        '350': '120rem',
        '360': '130rem',
        '370': '140rem',
        '380': '150rem',
        '390': '160rem',
        '400': '170rem',
        '410': '180rem',
        '420': '190rem',
        '430': '200rem',
        '440': '210rem',
        '450': '220rem',
   
      },
      padding: {
        '26': '5.5rem',
      },
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        //  'opensansregular': ['Open Sans Regular', 'sans-serif'],
        'playfair':['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': '.70rem',
        'ms': '.8rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '2.5xl': '1.65rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4.25xl': '2.45rem',
        '4.5xl': '2.65rem',
        '4.75xl': '2.85rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'mediumplus': 530,
               'mediumbold': 500,

        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    },
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],


  theme: {

    ...pxifyDefaults(theme, [
      "borderRadius",
      "lineHeight",
      "maxWidth",
    ]),

    spacing: {
      ...deepMap(theme.spacing, pxify),
      ...deepMap(suffixKeys(theme.spacing, "-r"), emify),
    },
    fontSize: {
      ...deepMap(theme.fontSize, pxify),
      ...deepMap(suffixKeys(theme.fontSize, "-r"), emify),
    },

    keyframes: {
      coverLayer: {
        "0%": {
          opacity: "0.5",
          transform: "translateY(20%) scale(0.6)",
        },
        "50%": {
          opacity: "0.8",
          transform: "translateY(30%) scale(0.8)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(-90%) scale(1)",
        },
      },
      layerOpacity: {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      moveLayer: {
        from: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(25px)",
        },
      }


    },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      expand: "expand 1.5s ease-out",
      // move: "move 2s ease-out",
      coverLayer: "coverLayer 2s ease-out",
      layerOpacity: "layerOpacity 2s ease-out",
      moveLayer1: "moveLayer 2s  linear 0.5s 1 normal forwards",
      moveLayer2: "moveLayer 1s  linear 0.5s 1 normal forwards",
    },



    screens: {

      'sm': '410px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1850px',
      // => @media (min-width: 1905px) { ... }

      '4xl': '2300px',
      // => @media (min-width: 2545px) { ... }
    },
    


    extend: {
      colors: {
        ...deepMap(extendTheme.extend.colors,pxify)
      },
      width: {
        ...deepMap(extendTheme.extend.width,pxify)
      },
      height: {
        ...deepMap(extendTheme.extend.height, pxify)
      },
      
      maxWidth: {
        ...deepMap(extendTheme.extend.maxWidth, pxify)
      },
      minWidth: {
        ...deepMap(extendTheme.extend.minWidth, pxify)
      },
      margin: {
        ...deepMap(extendTheme.extend.margin, pxify)
      },
      padding: {
        ...deepMap(extendTheme.extend.padding, pxify)
      },
      fontFamily: {
        ...deepMap(extendTheme.extend.fontFamily, pxify)
      },
      fontSize: {
        ...deepMap(extendTheme.extend.fontSize, pxify)
      },
      fontWeight: {
        ...deepMap(extendTheme.extend.fontWeight, pxify)
      },
    },
    // fontFamily: {
    //         'custom': ['playfair-display', 'sans-serif'],
    //     },
    plugins: [],
  },
};